/**
 * knowledgeEngine.js
 * 
 * High-Performance Instant Knowledge Retrieval & Recommendation Engine
 * for Luna Digitals Telegram Assistant.
 * 
 * Provides instant responses (< 5ms) for company FAQs, services, pricing,
 * contact details, and intelligent project recommendations without needing
 * to invoke external LLM APIs for deterministic factual queries.
 */

import {
  COMPANY_NAME,
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SERVICES,
  PORTFOLIO_PROJECTS,
  PRICING,
  TEAM,
  FAQ
} from "./companyData.js";

/**
 * Normalizes input text for resilient fuzzy intent matching.
 * @param {string} text
 * @returns {string}
 */
function normalize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Checks whether text matches any of the provided regex patterns or keyword sets.
 * @param {string} normText
 * @param {Array<RegExp|string[]>} matchers
 * @returns {boolean}
 */
function matchesIntent(normText, matchers) {
  for (const matcher of matchers) {
    if (matcher instanceof RegExp) {
      if (matcher.test(normText)) return true;
    } else if (Array.isArray(matcher)) {
      // All keywords in the array must be present in the text
      const allFound = matcher.every((kw) => normText.includes(kw));
      if (allFound) return true;
    }
  }
  return false;
}

/**
 * Formats a project for clean Telegram Markdown display.
 * @param {object} p
 * @returns {string}
 */
function formatProject(p) {
  return `• *${p.name}* (${p.subcategory || p.category})\n  ${p.liveUrl}`;
}

/**
 * Returns project recommendations filtered by category or cross-category highlights.
 * @param {string} categoryKey
 * @returns {string}
 */
export function getRecommendedProjectsText(categoryKey = "all") {
  const normCat = categoryKey.toLowerCase();

  // If specific category requested
  if (normCat !== "all") {
    const matched = PORTFOLIO_PROJECTS.filter((p) => {
      const c = (p.category + " " + p.subcategory + " " + p.name + " " + p.description).toLowerCase();
      return c.includes(normCat);
    });

    if (matched.length > 0) {
      const list = matched.map((p, idx) => `${idx + 1}. *${p.name}* – ${p.subcategory || p.category}\n${p.liveUrl}`).join("\n\n");
      return `Here are our live showcases in this category:\n\n${list}\n\nExplore all our projects on Linktree:\n${COMPANY_INFO.officialLinktree}`;
    }
  }

  // Multi-category curated highlights
  const topCategories = ["PROP-TECH", "NURSERY", "E-COMMERCE", "FURNITURE", "EDU-TECH", "HEALTH-TECH", "FIN-TECH"];
  const highlights = [];
  for (const cat of topCategories) {
    const found = PORTFOLIO_PROJECTS.find((p) => p.category === cat);
    if (found) highlights.push(found);
  }

  const list = highlights
    .slice(0, 6)
    .map((p, idx) => `${idx + 1}. *${p.name}* – ${p.subcategory || p.category}\n${p.liveUrl}`)
    .join("\n\n");

  return `Absolutely! Here are some of our sample projects:\n\n${list}\n\n🔗 *Explore more projects on our Linktree:*\n${COMPANY_INFO.officialLinktree}\n\nWhat type of website or application are you looking for?`;
}

/**
 * Evaluates user input against structured company data and returns an immediate response
 * if an intent is recognized, or null if the query requires generative AI reasoning.
 * 
 * @param {string} userText
 * @returns {string | null}
 */
export function matchInstantResponse(userText) {
  if (!userText || typeof userText !== "string") return null;
  const norm = normalize(userText);
  if (!norm) return null;

  // ---------------------------------------------------------
  // 1. GREETINGS & PLEASANTRIES (Instant response)
  // ---------------------------------------------------------
  if (/^(hi|hello|hey|heyy|good\s*(morning|afternoon|evening)|hola|namaste)\b/i.test(norm) && norm.split(" ").length <= 4) {
    return `Hey there! Welcome to *${COMPANY_NAME}* 👋\n\nWe build modern websites, web applications, e-commerce stores, and AI automation solutions for businesses.\n\nHow can I help you today? Are you looking to build a new website or upgrade an existing one?`;
  }

  if (/^(thanks|thank\s*you|thx|great\s*thanks|ok\s*thanks)\b/i.test(norm)) {
    return `You're very welcome! If you have any more questions about our services, pricing, or portfolio, feel free to ask anytime. We're here to help!`;
  }

  // ---------------------------------------------------------
  // 2. SAMPLE PROJECTS / PORTFOLIO / PREVIOUS WORK INQUIRIES
  // ---------------------------------------------------------
  const isGenericProjectQuery = matchesIntent(norm, [
    /sample\s*project/,
    /portfolio/,
    /previous\s*work/,
    /past\s*work/,
    /work\s*samples/,
    /previous\s*projects/,
    /client\s*work/,
    /sample\s*website/,
    /demo\s*website/,
    /showcases/,
    /show\s*me\s*(your\s*)?(work|projects|websites|demos|portfolio)/,
    /can\s*i\s*(see|get|view)\s*(your\s*)?(sample|portfolio|projects|work)/,
    /have\s*you\s*(built|made|developed|done)\s*(any\s*)?(websites|projects|apps)/,
    ["linktree", "projects"],
    ["explore", "projects"]
  ]);

  // Check for specific industry project categories first
  // E-commerce
  if (matchesIntent(norm, [/e\s*commerce/, /online\s*store/, /shopping\s*cart/, /shopping\s*website/, /retail\s*website/])) {
    const ecom = PORTFOLIO_PROJECTS.filter((p) => p.category === "E-COMMERCE");
    const ecomList = ecom.map((p) => `• *${p.name}*: ${p.liveUrl}`).join("\n");
    return `Yes! We specialize in custom e-commerce websites equipped with dynamic product catalogues, shopping carts, filters, and checkout flows.\n\n🛍️ *E-Commerce Showcase:*\n${ecomList}\n\nExplore our complete portfolio:\n${COMPANY_INFO.officialLinktree}\n\nWould you like a simple product showcase or a full online store with payment gateway integration?`;
  }

  // Furniture & Home Decor
  if (matchesIntent(norm, [/furniture/, /home\s*appliances/, /sofa/, /interior\s*showroom/, /decor/])) {
    const furn = PORTFOLIO_PROJECTS.filter((p) => p.category === "FURNITURE");
    const furnList = furn.map((p) => `• *${p.name}* (${p.subcategory}):\n  ${p.liveUrl}`).join("\n\n");
    return `We have built several digital showrooms specifically for furniture and home appliance businesses:\n\n🛋️ *Furniture Showcases:*\n${furnList}\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}\n\nAre you looking to build a digital showroom for your furniture business?`;
  }

  // Nursery, Plants & Landscaping
  if (matchesIntent(norm, [/nursery/, /plants?/, /bonsai/, /landscaping/, /garden/, /botanical/])) {
    const nursery = PORTFOLIO_PROJECTS.filter((p) => p.category === "NURSERY");
    const nurseryList = nursery.map((p) => `• *${p.name}* (${p.subcategory}):\n  ${p.liveUrl}`).join("\n\n");
    return `Yes! We have created dedicated web platforms for nurseries and landscaping businesses:\n\n🌿 *Nursery Showcases:*\n${nurseryList}\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}\n\nAre you planning to build an online plant catalogue or a website for your nursery?`;
  }

  // Real Estate & Construction
  if (matchesIntent(norm, [/real\s*estate/, /property/, /estateflow/, /construction/, /builder/, /civil\s*contractor/, /interior\s*design/])) {
    const prop = PORTFOLIO_PROJECTS.filter((p) => p.category === "PROP-TECH");
    const propList = prop.map((p) => `• *${p.name}* (${p.subcategory}):\n  ${p.liveUrl}`).join("\n\n");
    return `Here are our live showcases in Real Estate, Construction, and Interior Design:\n\n🏗️ *Prop-Tech Showcases:*\n${propList}\n\n🔗 *Explore all projects:* ${COMPANY_INFO.officialLinktree}\n\nWhat kind of real estate or construction portal are you looking to create?`;
  }

  // Healthcare, Hospitals & Dental
  if (matchesIntent(norm, [/health/, /hospital/, /clinic/, /pharmacy/, /dental/, /doctor/, /medical/])) {
    const health = PORTFOLIO_PROJECTS.filter((p) => p.category === "HEALTH-TECH");
    const healthList = health.map((p) => `• *${p.name}* (${p.subcategory}):\n  ${p.liveUrl}`).join("\n\n");
    return `We have developed several healthcare showcases designed for clinics, pharmacies, and hospitals:\n\n🏥 *Healthcare Showcases:*\n${healthList}\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}\n\nAre you looking to build a healthcare appointment portal or a clinic website?`;
  }

  // Education, Schools, Tuition & Academy
  if (matchesIntent(norm, [/school/, /college/, /tuition/, /academy/, /education/, /coaching/, /institute/])) {
    const edu = PORTFOLIO_PROJECTS.filter((p) => p.category === "EDU-TECH");
    const eduList = edu.map((p) => `• *${p.name}* (${p.subcategory}):\n  ${p.liveUrl}`).join("\n\n");
    return `Here are our educational web showcases for schools, coaching institutes, and tuition centers:\n\n🎓 *Edu-Tech Showcases:*\n${eduList}\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}\n\nWhat type of educational portal do you need?`;
  }

  // Agriculture
  if (matchesIntent(norm, [/agriculture/, /farming/, /farm/, /crop/, /agriconnect/, /luna\s*bloom/])) {
    return `We have created agricultural solutions including:\n\n🌱 *Luna Bloom (Farm Produce & Agri-Tech):*\nhttps://luna-bloom-ten.vercel.app/\n\n🌾 *AgriConnect:* Our SIH award-winning farmer-to-consumer digital ecosystem with Gemini AI integration.\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}\n\nAre you interested in an agricultural marketplace or farm produce showcase?`;
  }

  // Finance / Expense Tracker
  if (matchesIntent(norm, [/finance/, /expense/, /budget/, /fintech/])) {
    return `Check out our finance platform showcase:\n\n💳 *Smart Expense Tracker:*\nhttps://smart-expense-tracker-fb544.web.app/\n\nFeatures income/expense logging, category tagging, and visual spending charts.\n\n🔗 *Full Portfolio:* ${COMPANY_INFO.officialLinktree}`;
  }

  // Generic Sample Projects / Portfolio Request
  if (isGenericProjectQuery) {
    return getRecommendedProjectsText("all");
  }

  // ---------------------------------------------------------
  // 3. SERVICES INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [
    /what\s*services/,
    /what\s*do\s*you\s*(offer|provide|do)/,
    /tell\s*me\s*about\s*your\s*services/,
    /services\s*offered/,
    /types\s*of\s*websites/,
    /list\s*of\s*services/,
    /^services\b/,
    ["what", "services"]
  ])) {
    return `We offer complete digital solutions to help your business grow online:\n\n` +
      `1. 🌐 *Website Development* – Business websites, landing pages, and portfolios (*Starting at ₹999*).\n` +
      `2. 💻 *Web Application Development* – Admin dashboards, ERP systems, CRM, and customer portals.\n` +
      `3. 🛒 *E-Commerce Solutions* – Full online stores with product catalogs, carts, and payment gateways.\n` +
      `4. 🎨 *UI/UX Design* – Clean Figma prototypes, wireframes, and responsive user interfaces.\n` +
      `5. 📱 *Mobile App Development* – Android and cross-platform mobile business applications.\n` +
      `6. 🤖 *AI Solutions & Integrations* – Custom AI chatbots, Google Gemini API, and smart workflows.\n` +
      `7. ⚙️ *API & Backend Integration* – REST APIs, database design, and payment gateway connections.\n` +
      `8. 🚀 *Business Automation & Cloud* – Telegram bots, cloud hosting (Vercel, Firebase), and maintenance.\n\n` +
      `Are you looking to build a new website, an e-commerce store, or a custom web application?`;
  }

  // Specific service checks
  if (matchesIntent(norm, [/mobile\s*app/, /android\s*app/, /ios\s*app/, /cross\s*platform/])) {
    return `Yes! We develop mobile applications for Android and cross-platform environments. Whether you need a customer-facing app, an internal field management app, or an enterprise tool, we can build it.\n\n🔗 *Explore our projects:* ${COMPANY_INFO.officialLinktree}\n📧 *Contact:* [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)\n\nWhat kind of mobile application does your business need?`;
  }

  if (matchesIntent(norm, [/ai\s*application/, /ai\s*solution/, /develop\s*ai/, /artificial\s*intelligence/, /gemini\s*api/, /chatbot/])) {
    return `Yes, we actively develop AI-powered applications and business automations! 🤖\n\nOur AI capabilities include:\n• Conversational AI chatbots (Telegram, Web, WhatsApp)\n• Google Gemini API integration and LLM prompt engineering\n• Document OCR processing and smart data analytics\n• Interactive AI learning apps (like our showcase AURA AI: https://aura-xv1e.onrender.com/)\n\nAre you looking to add AI features to your existing platform or build a new AI tool?`;
  }

  // ---------------------------------------------------------
  // 4. PRICING & COST INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [
    /how\s*much/,
    /cost/,
    /pricing/,
    /price/,
    /starting\s*price/,
    /charges/,
    /rates/,
    /package/,
    /quotation/,
    /estimate/,
    /fees/
  ])) {
    return `Our website development packages start at just *₹999* for essential landing pages! 🚀\n\n` +
      `The final price depends transparently on your specific requirements:\n` +
      `• Total number of pages and design complexity\n` +
      `• E-commerce features (shopping cart, product filters, payment gateway)\n` +
      `• Backend and database needs (user logins, admin dashboard, custom APIs)\n` +
      `• Third-party integrations (WhatsApp chat, CRM, Maps, Analytics)\n\n` +
      `What kind of business do you have? If you share a few details about what you need, I can give you an accurate estimate!`;
  }

  // ---------------------------------------------------------
  // 5. CONTACT & TEAM INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [
    /how\s*can\s*i\s*contact/,
    /contact\s*(info|details|number|us)?/,
    /email\s*address/,
    /phone\s*number/,
    /reach\s*out/,
    /speak\s*with\s*(your\s*)?team/,
    /talk\s*to\s*(your\s*)?team/,
    /contact\s*luna\s*digitals/
  ])) {
    return `You can easily reach out to our team through any of our official channels:\n\n` +
      `📧 *Email:* [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)\n` +
      `📍 *Location:* Coimbatore, Tamil Nadu, India\n` +
      `🌐 *Official Website:* ${COMPANY_INFO.officialWebsite}\n` +
      `📸 *Instagram:* [@luna_digitals.co](https://instagram.com/luna_digitals.co)\n` +
      `🔗 *Linktree Portfolio:* ${COMPANY_INFO.officialLinktree}\n\n` +
      `Drop us an email or message on Instagram with your project requirements, and our team will get back to you promptly!`;
  }

  // Team
  if (matchesIntent(norm, [/who\s*is\s*on\s*your\s*team/, /tell\s*me\s*about\s*your\s*team/, /team\s*members/, /who\s*works\s*there/])) {
    return `Our dedicated engineering team includes:\n\n` +
      `• *Abhiram, Mithra, Abdul Rahman* – Frontend Development & UI Architecture\n` +
      `• *Bharath* – Backend Development, Python, Node.js & Databases\n` +
      `• *Karthi* – UI/UX Design & Figma Prototyping\n` +
      `• *Hari Pranav* – API Integrations & Microservices\n` +
      `• *Harshini* – DevOps & Cloud Infrastructure\n\n` +
      `You can reach our team directly at [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)!`;
  }

  // ---------------------------------------------------------
  // 6. LOCATION INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [/where\s*(are\s*you\s*)?located/, /where\s*is\s*luna/, /location/, /headquarters/, /address/, /which\s*city/])) {
    return `Luna Digitals is headquartered in *Coimbatore, Tamil Nadu, India* 📍\n\nWe provide digital solutions and collaborate with startups, businesses, and entrepreneurs remotely across India and internationally.\n\nWhere is your business located?`;
  }

  // ---------------------------------------------------------
  // 7. ABOUT COMPANY INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [
    /what\s*is\s*luna\s*digitals/,
    /tell\s*me\s*about\s*(your\s*)?company/,
    /about\s*luna/,
    /who\s*are\s*you/,
    /company\s*profile/
  ])) {
    return `*Luna Digitals* is a modern digital solutions and technology agency based in Coimbatore, Tamil Nadu, India 🚀\n\n` +
      `*Tagline:* "Turning Ideas into Digital Reality"\n\n` +
      `We specialize in:\n` +
      `• Custom Responsive Websites (Starting at ₹999)\n` +
      `• Web Applications & Admin Dashboards\n` +
      `• E-Commerce Online Stores\n` +
      `• UI/UX Design & Figma Prototypes\n` +
      `• AI Solutions & Google Gemini Integrations\n` +
      `• Workflow Automation & APIs\n\n` +
      `Our mission is to provide affordable, creative, and reliable digital technology to help businesses of all sizes grow.\n\n` +
      `🔗 *Official Website:* ${COMPANY_INFO.officialWebsite}\n` +
      `🔗 *Portfolio:* ${COMPANY_INFO.officialLinktree}\n\n` +
      `What kind of project can we help you with?`;
  }

  // ---------------------------------------------------------
  // 8. SOCIAL MEDIA & YOUTUBE
  // ---------------------------------------------------------
  if (matchesIntent(norm, [/youtube/, /video\s*demo/, /channel/])) {
    return `Yes! We have an official YouTube channel where we showcase project walkthroughs and digital solutions:\n\n` +
      `🎥 *YouTube Channel:* [LUNA DIGITAL (@luna-digital-006)](https://www.youtube.com/@luna-digital-006)\n\n` +
      `You can also find all our live website demos on our Linktree: ${COMPANY_INFO.officialLinktree}`;
  }

  if (matchesIntent(norm, [/instagram/, /insta/])) {
    return `Check out our official Instagram account for design inspirations, tech updates, and project highlights:\n\n📸 *Instagram:* [@luna_digitals.co](https://instagram.com/luna_digitals.co)`;
  }

  if (matchesIntent(norm, [/github/, /source\s*code/, /repo/])) {
    return `You can find our public organization profile on GitHub:\n\n💻 *GitHub:* [lunadigital005-tech](https://github.com/lunadigital005-tech)`;
  }

  // ---------------------------------------------------------
  // 9. CLIENT ASSISTANCE ("I need a website for my business. Can you help?")
  // ---------------------------------------------------------
  if (matchesIntent(norm, [
    /need\s*a\s*website/,
    /want\s*a\s*website/,
    /build\s*a\s*website/,
    /make\s*a\s*website/,
    /create\s*a\s*website/,
    /can\s*you\s*help/
  ])) {
    return `We'd love to help you build a website for your business! 🎉\n\n` +
      `Whether you need a clean 1-page landing page, a multi-page corporate site, a digital portfolio, or a full e-commerce store, we have packages starting from *₹999*.\n\n` +
      `To get started:\n` +
      `1. What industry or business do you have?\n` +
      `2. What key features do you need (e.g. contact form, gallery, online store, booking)?\n\n` +
      `You can reply right here or email our team directly at [luna.digital004@gmail.com](mailto:luna.digital004@gmail.com)!`;
  }

  // ---------------------------------------------------------
  // 10. TECHNOLOGIES INQUIRIES
  // ---------------------------------------------------------
  if (matchesIntent(norm, [/what\s*technolog/, /tech\s*stack/, /tools\s*do\s*you\s*use/, /frameworks/])) {
    return `Here is our core technology stack at Luna Digitals:\n\n` +
      `• *Frontend:* React, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n` +
      `• *Backend:* Python, FastAPI, Node.js, REST APIs\n` +
      `• *Databases:* Supabase, PostgreSQL, Firebase\n` +
      `• *AI & ML:* Google Gemini API, Computer Vision, Machine Learning\n` +
      `• *UI/UX Design:* Figma, Wireframes, Interactive Prototyping\n` +
      `• *Hosting & Cloud:* Vercel, Firebase Hosting, Netlify, Render\n\n` +
      `Is there a specific technology you'd like your project to use?`;
  }

  // Not matched by deterministic intent rules -> return null to let Gemini handle conversational nuances
  return null;
}
