# Official Company Telegram Chatbot

A production-ready Telegram Chatbot built with Node.js ES Modules (`"type": "module"`), [grammY](https://grammy.dev/), Google Gen AI SDK (`@google/genai`), and `dotenv`.

The bot acts as a 24/7 official company customer assistant with strict guardrails: it answers inquiries using exclusively your company's knowledge base and politely deflects unrelated queries.

---

## 📁 Project Structure

```
├── .env.example       # Template for required environment variables
├── .env               # Your local credentials (keep confidential, ignored by git)
├── .gitignore         # Prevents committing node_modules and .env
├── companyData.js     # Structured knowledge base for your company facts
├── index.js           # Main bot logic, error handling, and Gemini integration
├── package.json       # Project dependencies and startup script
└── README.md          # Setup and configuration guide
```

---

## 🚀 Quick Setup Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Open the `.env` file in the project root and provide your actual API credentials:

```ini
# Get this from @BotFather on Telegram (https://t.me/BotFather)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here

# Get this from Google AI Studio (https://aistudio.google.com/)
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Customize Your Company Knowledge
Open `companyData.js` and edit the placeholders with your business information:
- **`COMPANY_NAME`**: Set your actual brand or company name.
- **`COMPANY_KNOWLEDGE`**: Fill in your company overview, services, pricing tiers, working hours, address, contact emails/phones, and FAQs.

### 4. Start the Bot
```bash
npm start
```
Or directly:
```bash
node index.js
```

---

## 🛡️ Guardrails & Behavior

- **Commands:**
  - `/start`: Welcomes the user and suggests example questions about your company.
  - `/help`: Explains how to interact with the assistant.
- **Strict Answering Boundary:**
  - Gemini `gemini-2.5-flash` is instructed to answer **only** company-related questions using `COMPANY_KNOWLEDGE`.
  - Any questions about math, coding, general trivia, weather, news, or unrelated topics are politely deflected with:
    > *"I am the official assistant for [Company Name]. I can only help with questions about our company, services, and support. How can I assist you with our services today?"*
  - Unknown company details trigger a prompt directing the user to your official support email/phone.
- **Production Resilience:**
  - `await ctx.replyWithChatAction("typing")` provides immediate feedback while waiting for the model.
  - Safe message splitting handles Telegram's 4096-character limit.
  - Global error trapping (`bot.catch(...)`) and `try/catch` per update prevent process crashes.
  - Terminal logs show incoming queries and delivery status.
