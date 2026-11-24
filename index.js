import "dotenv/config";
import express from "express";
import { Bot, GrammyError, HttpError } from "grammy";
import { GoogleGenAI } from "@google/genai";
import {
  COMPANY_KNOWLEDGE,
  COMPANY_NAME,
  AI_INSTRUCTIONS,
  COMPANY_INFO,
  PORTFOLIO_PROJECTS,
  PRICING
} from "./companyData.js";
import {
  matchInstantResponse,
  getRecommendedProjectsText
} from "./knowledgeEngine.js";

// =====================================================
// 1. ENVIRONMENT VALIDATION
// =====================================================
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ? process.env.TELEGRAM_BOT_TOKEN.trim() : "";
const GEMINI_KEY = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
const PORT = process.env.PORT || 3000;

if (!BOT_TOKEN || BOT_TOKEN === "your_telegram_bot_token_here") {
  console.error("❌ ERROR: TELEGRAM_BOT_TOKEN is missing or not configured in .env file.");
  process.exit(1);
}

if (!GEMINI_KEY || GEMINI_KEY === "your_gemini_api_key_here") {
  console.error("❌ ERROR: GEMINI_API_KEY is missing or not configured in .env file.");
  process.exit(1);
}

console.log(`[INIT] Loaded BOT_TOKEN (${BOT_TOKEN.length} chars)`);
console.log(`[INIT] Loaded GEMINI_API_KEY (${GEMINI_KEY.length} chars, starts with ${GEMINI_KEY.slice(0, 5)}...)`);

// =====================================================
// 2. LIGHTWEIGHT EXPRESS HTTP SERVER (RENDER REQUIREMENT)
// =====================================================
const app = express();
app.use(express.json());

// GET /health endpoint returning exact service status
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "online",
    service: "Luna Digitals Telegram Bot"
  });
});

// Root endpoint for simple ping/status checks
app.get("/", (req, res) => {
  res.status(200).json({
    message: `${COMPANY_NAME} Telegram Bot Service is running.`,
    uptime: Math.floor(process.uptime()),
    healthCheck: "/health"
  });
});

// Start Express HTTP server binding to process.env.PORT
const server = app.listen(PORT, () => {
  console.log(`🌐 Express HTTP server listening on port ${PORT}`);
  console.log(`🩺 Health check available at http://localhost:${PORT}/health`);
});

// =====================================================
// 3. TELEGRAM BOT & GEMINI SETUP
// =====================================================
const ai = new GoogleGenAI({ apiKey: GEMINI_KEY });
const bot = new Bot(BOT_TOKEN);

// Maximum characters per Telegram message
const TELEGRAM_MAX_MESSAGE_LENGTH = 4000;

// Maximum AI execution timeout in milliseconds (strict 12-second limit)
const AI_TIMEOUT_MS = 12000;

// Maximum sliding-window conversation turns retained per user
const MAX_HISTORY_TURNS = 6;

// In-memory conversation state: Map<userId, Array<{ role: 'user' | 'model', parts: [{ text: string }] }>>
const conversationSessions = new Map();

// In-flight user request tracker to prevent duplicate concurrent sends
const activeRequests = new Set();

// Comprehensive Gemini system prompt combining guidelines with structured facts
const SYSTEM_INSTRUCTION = `
${AI_INSTRUCTIONS}

==================================================
OFFICIAL LUNA DIGITALS GROUND TRUTH KNOWLEDGE BASE
==================================================
${COMPANY_KNOWLEDGE}
==================================================
`.trim();

// =====================================================
// 4. UTILITY FUNCTIONS
// =====================================================

/**
 * Executes an async promise with a strict timeout limit.
 * @template T
 * @param {Promise<T>} promise
 * @param {number} ms
 * @param {string} errorMsg
 * @returns {Promise<T>}
 */
function withTimeout(promise, ms, errorMsg = "Operation timed out") {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error(errorMsg)), ms)
    )
  ]);
}

/**
 * Splits and sends long messages safely to stay within Telegram's 4096 character limit.
 * @param {import("grammy").Context} ctx
 * @param {string} text
 */
async function sendSafeMessage(ctx, text) {
  if (!text || text.trim().length === 0) {
    await ctx.reply("I'm sorry, I could not generate a response. Please try asking again.");
    return;
  }

  if (text.length <= TELEGRAM_MAX_MESSAGE_LENGTH) {
    await ctx.reply(text);
    return;
  }

  const chunks = [];
  let currentChunk = "";
  const lines = text.split("\n");

  for (const line of lines) {
    if ((currentChunk + "\n" + line).length > TELEGRAM_MAX_MESSAGE_LENGTH) {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk.trim());
        currentChunk = "";
      }
      if (line.length > TELEGRAM_MAX_MESSAGE_LENGTH) {
        for (let i = 0; i < line.length; i += TELEGRAM_MAX_MESSAGE_LENGTH) {
          chunks.push(line.slice(i, i + TELEGRAM_MAX_MESSAGE_LENGTH));
        }
      } else {
        currentChunk = line;
      }
    } else {
      currentChunk = currentChunk ? `${currentChunk}\n${line}` : line;
    }
  }

  if (currentChunk.trim().length > 0) {
    chunks.push(currentChunk.trim());
  }

  for (const chunk of chunks) {
    await ctx.reply(chunk);
  }
}

/**
 * Generates a helpful fallback response when external generative AI is unavailable or rate-limited.
 * @param {string} userQuery
 * @returns {string}
 */
function getPredefinedFallbackResponse(userQuery) {
  return `Thanks for reaching out! While our AI assistant is experiencing high network traffic, I can help answer your question directly from our knowledge base:\n\n` +
    `• 🌐 *Website Development:* Packages start at *₹999* for foundational business websites.\n` +
    `• 🛍️ *Services:* Custom Web Apps, E-Commerce Stores, UI/UX Design (Figma), and AI Automation.\n` +
    `• 📂 *Portfolio:* Explore all our live website showcases here:\n  ${COMPANY_INFO.officialLinktree}\n` +
    `• 📧 *Contact Our Team:* [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)\n\n` +
    `What type of website or digital solution does your business need?`;
}

// =====================================================
// 5. LEAN GEMINI CALL WITH STRICT TIMEOUT
// =====================================================

/**
 * Calls verified Gemini model with a strict 12-second timeout and zero endless retries.
 * 
 * @param {string} userText
 * @param {Array<{ role: string, parts: Array<{ text: string }> }>} userHistory
 * @returns {Promise<string>}
 */
async function callGeminiLean(userText, userHistory = []) {
  const candidateModels = ["gemini-3.5-flash-lite", "gemini-3.8-flash"];

  const contents = [
    ...userHistory,
    { role: "user", parts: [{ text: userText }] }
  ];

  for (const model of candidateModels) {
    try {
      console.log(`[GEMINI] Calling model: ${model} with strict timeout (${AI_TIMEOUT_MS}ms)...`);

      const apiCall = ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.6,
        },
      });

      const response = await withTimeout(
        apiCall,
        AI_TIMEOUT_MS,
        `Gemini API timed out after ${AI_TIMEOUT_MS / 1000}s`
      );

      let replyText = "";
      if (typeof response?.text === "function") {
        replyText = response.text();
      } else if (typeof response?.text === "string") {
        replyText = response.text;
      } else if (response?.candidates?.[0]?.content?.parts?.[0]?.text) {
        replyText = response.candidates[0].content.parts[0].text;
      }

      if (replyText && replyText.trim().length > 0) {
        console.log(`[GEMINI] ✅ Success with model: ${model}`);
        return replyText.trim();
      }
    } catch (err) {
      const status = err.status || err.statusCode;
      console.warn(`[GEMINI WARNING] Model ${model} failed (status: ${status || "timeout"}): ${err.message?.slice(0, 100)}`);

      if (status === 429 || status === 404) {
        throw err;
      }
    }
  }

  throw new Error("Gemini models unavailable or timed out.");
}

// =====================================================
// 6. TELEGRAM COMMANDS
// =====================================================

bot.command("start", async (ctx) => {
  const user = ctx.from;
  const username = user?.first_name || user?.username || "there";
  console.log(`[COMMAND] /start received from ${username} (ID: ${user?.id})`);

  if (user?.id) {
    conversationSessions.delete(user.id);
  }

  const welcomeMessage = `👋 Hey ${username}! Welcome to *${COMPANY_NAME}*.\n\n` +
    `I'm your official company representative here to help you with our services, website portfolio, AI solutions, and pricing.\n\n` +
    `💡 *Popular questions you can ask me:*\n` +
    `• "Can I see your sample projects?"\n` +
    `• "What services do you provide?"\n` +
    `• "How much does a website cost?"\n` +
    `• "Can you build an e-commerce website?"\n` +
    `• "Show me your furniture / nursery / healthcare projects."\n` +
    `• "How can I contact your team?"\n\n` +
    `What type of website or digital solution are you planning to build?`;

  try {
    await ctx.reply(welcomeMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error(`[ERROR] Failed to send /start response:`, error.message);
  }
});

bot.command("help", async (ctx) => {
  const user = ctx.from;
  console.log(`[COMMAND] /help received from ${user?.first_name || "User"} (ID: ${user?.id})`);

  const helpMessage = `ℹ️ *How to use the ${COMPANY_NAME} Assistant:*\n\n` +
    `You can ask me questions about any of our digital services in natural language.\n\n` +
    `📌 *Quick Topics:*\n` +
    `• *Websites:* Starter packages start at *₹999*\n` +
    `• *Portfolio:* Live showcases in Real Estate, E-Commerce, Furniture, Nursery, Healthcare, School, and Finance\n` +
    `• *Custom Development:* Web apps, admin consoles, and AI automation\n` +
    `• *Official Portfolio Hub:* ${COMPANY_INFO.officialLinktree}\n` +
    `• *Business Email:* [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)\n\n` +
    `Simply type your question in the chat and I'll answer immediately!`;

  try {
    await ctx.reply(helpMessage, { parse_mode: "Markdown" });
  } catch (error) {
    console.error(`[ERROR] Failed to send /help response:`, error.message);
  }
});

bot.command("clear", async (ctx) => {
  const user = ctx.from;
  if (user?.id) {
    conversationSessions.delete(user.id);
  }
  await ctx.reply("🧹 Your conversation history has been cleared. How can I help you today?");
});

// =====================================================
// 7. MAIN MESSAGE HANDLER (INSTANT + LEAN AI PIPELINE)
// =====================================================

bot.on("message:text", async (ctx) => {
  const user = ctx.from;
  const userId = user?.id || "unknown";
  const userName = user?.first_name || user?.username || "Unknown User";
  const userQuery = ctx.message.text ? ctx.message.text.trim() : "";

  if (!userQuery) return;

  // Prevent duplicate concurrent processing from the same user
  if (activeRequests.has(userId)) {
    console.log(`[DEDUP] Ignored duplicate in-flight message from ${userName} (${userId})`);
    return;
  }
  activeRequests.add(userId);

  const startTime = Date.now();
  console.log(`\n----------------------------------------`);
  console.log(`[INCOMING] From: ${userName} (ID: ${userId})`);
  console.log(`[QUERY]: "${userQuery}"`);

  if (!conversationSessions.has(userId)) {
    conversationSessions.set(userId, []);
  }
  const userHistory = conversationSessions.get(userId);

  try {
    // -------------------------------------------------------------
    // STAGE 1: INSTANT KNOWLEDGE RETRIEVAL LAYER (0ms - 5ms)
    // -------------------------------------------------------------
    const instantAnswer = matchInstantResponse(userQuery);

    if (instantAnswer) {
      const elapsed = Date.now() - startTime;
      console.log(`[INSTANT MATCH] Resolved in ${elapsed}ms without calling external API!`);

      await ctx.replyWithChatAction("typing");
      await sendSafeMessage(ctx, instantAnswer);

      userHistory.push({ role: "user", parts: [{ text: userQuery }] });
      userHistory.push({ role: "model", parts: [{ text: instantAnswer }] });
      if (userHistory.length > MAX_HISTORY_TURNS * 2) {
        userHistory.splice(0, userHistory.length - MAX_HISTORY_TURNS * 2);
      }

      console.log(`[REPLY DELIVERED] Elapsed: ${Date.now() - startTime}ms (Instant Response)`);
      console.log(`----------------------------------------\n`);
      return;
    }

    // -------------------------------------------------------------
    // STAGE 2: LEAN GENERATIVE AI (Strict Timeout & No Endless Loops)
    // -------------------------------------------------------------
    console.log(`[AI ROUTE] Query requires generative reasoning. Invoking Gemini...`);
    await ctx.replyWithChatAction("typing");

    let finalReply = "";

    try {
      finalReply = await callGeminiLean(userQuery, userHistory);
    } catch (aiErr) {
      console.warn(`[AI FALLBACK] Gemini call failed (${aiErr.message?.slice(0, 80)}). Generating structured local fallback...`);
      finalReply = getPredefinedFallbackResponse(userQuery);
    }

    await sendSafeMessage(ctx, finalReply);

    userHistory.push({ role: "user", parts: [{ text: userQuery }] });
    userHistory.push({ role: "model", parts: [{ text: finalReply }] });
    if (userHistory.length > MAX_HISTORY_TURNS * 2) {
      userHistory.splice(0, userHistory.length - MAX_HISTORY_TURNS * 2);
    }

    console.log(`[REPLY DELIVERED] Elapsed: ${Date.now() - startTime}ms (AI / Fallback Response)`);
    console.log(`----------------------------------------\n`);
  } catch (err) {
    console.error(`[CRITICAL HANDLER ERROR]`, err);
    try {
      await ctx.reply(getPredefinedFallbackResponse(userQuery));
    } catch (sendErr) {
      console.error("[ERROR] Could not send fallback message:", sendErr.message);
    }
  } finally {
    activeRequests.delete(userId);
  }
});

// =====================================================
// 8. GLOBAL GRAMMY ERROR HANDLER
// =====================================================

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`[GRAMMY GLOBAL ERROR] Error handling update ${ctx?.update?.update_id}:`);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("[GRAMMY ERROR]", e.description);
  } else if (e instanceof HttpError) {
    console.error("[HTTP ERROR] Could not contact Telegram:", e);
  } else {
    console.error("[UNKNOWN ERROR]:", e);
  }
});

// =====================================================
// 9. START BOT & GRACEFUL SHUTDOWN HANDLING
// =====================================================

console.log("=========================================");
console.log(`🤖 Starting ${COMPANY_NAME} Telegram Bot...`);
console.log("=========================================");

// Start Telegram polling with conflict protection
bot.start({
  onStart: (botInfo) => {
    console.log(`✅ Telegram Bot successfully started! Running as @${botInfo.username}`);
    console.log("Listening for incoming messages and commands...");
  },
}).catch((err) => {
  // If another instance is running locally or elsewhere, prevent app crash
  if (err?.error_code === 409 || err?.message?.includes("409")) {
    console.warn("⚠️ [POLLING CONFLICT] Another instance of the bot is already polling Telegram.");
    console.warn("HTTP server remains healthy and active on port " + PORT);
  } else {
    console.error("❌ Telegram bot polling error:", err);
  }
});

// Graceful shutdown stopping both HTTP server and Telegram bot
const shutdown = (signal) => {
  console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
  try {
    bot.stop();
  } catch (err) {
    console.warn("Notice: Bot already stopped:", err.message);
  }

  server.close(() => {
    console.log("🌐 Express HTTP server closed.");
    process.exit(0);
  });

  // Force exit after 5 seconds if lingering sockets exist
  setTimeout(() => process.exit(0), 5000);
};

process.once("SIGINT", () => shutdown("SIGINT"));
process.once("SIGTERM", () => shutdown("SIGTERM"));
