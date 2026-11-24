/**
 * companyData.js
 * 
 * LUNA DIGITALS – COMPLETE OFFICIAL COMPANY KNOWLEDGE BASE
 * 
 * Designed for Gemini AI customer assistant integration,
 * providing accurate, structured, and verified information about
 * Luna Digitals' services, portfolio, technologies, pricing, and projects.
 */

// =====================================================
// 1. COMPANY NAME & OVERVIEW
// =====================================================
export const COMPANY_NAME = "Luna Digitals";

export const COMPANY_INFO = {
  name: "Luna Digitals",
  legalName: "Luna Digitals",
  tagline: "Turning Ideas into Digital Reality.",
  secondaryTagline: "Building Digital Experiences. Empowering Businesses.",
  industry: "Digital Solutions, Web Development & Technology Agency",
  foundedLocation: "Coimbatore, Tamil Nadu, India",
  headquarters: "Coimbatore, Tamil Nadu, India",
  businessType: "Digital Agency & Technology Solutions Provider",
  officialWebsite: "https://luna-digital-abb2c.web.app/",
  officialLinktree: "https://linktr.ee/LunaDigitals",
  primaryEmail: "luna.digital004@gmail.com",
  summary: `Luna Digitals is a digital solutions and technology agency focused on helping businesses establish and grow their digital presence. We build modern websites, web applications, e-commerce platforms, AI-powered solutions, automation systems, and customized digital products. Our objective is to transform business ideas into professional digital experiences for startups, entrepreneurs, small businesses, and established organizations.`,
  mission: `To provide affordable, creative, and reliable digital solutions that empower businesses to innovate and scale.`,
  vision: `To become a trusted, accessible digital technology partner for businesses worldwide by delivering modern, reliable, and user-centric software solutions.`,
  brandValues: [
    "Innovation",
    "Quality & Reliability",
    "Affordability & Transparent Pricing",
    "Creative Problem Solving",
    "Customer Satisfaction"
  ],
  targetAudience: [
    "Startups & Early-Stage Founders",
    "Small & Medium Business Owners",
    "Retailers, Showrooms & E-commerce Sellers",
    "Schools, Academies & Tuition Centers",
    "Healthcare Clinics, Pharmacies & Hospitals",
    "Real Estate, Builders & Interior Designers",
    "Agricultural & Agri-Tech Enterprises"
  ]
};

// =====================================================
// 2. OFFICIAL CONTACT INFORMATION
// =====================================================
export const CONTACT_INFO = {
  businessEmail: "luna.digital004@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  officialWebsite: "https://luna-digital-abb2c.web.app/",
  linktree: "https://linktr.ee/LunaDigitals",
  workingHours: "Monday to Saturday, 9:00 AM - 7:00 PM (IST)",
  responseTime: "Within a few business hours for general inquiries and project scopes."
};

// =====================================================
// 3. OFFICIAL SOCIAL MEDIA CHANNELS (VERIFIED)
// =====================================================
export const SOCIAL_LINKS = [
  {
    platform: "Linktree",
    accountName: "LunaDigitals",
    url: "https://linktr.ee/LunaDigitals",
    verificationStatus: "Verified Official Portfolio Hub",
    description: "Central repository containing all live portfolio demos, categories, and contact links."
  },
  {
    platform: "Instagram",
    accountName: "@luna_digitals.co",
    url: "https://instagram.com/luna_digitals.co",
    verificationStatus: "Verified Official Business Account",
    description: "Official Instagram profile showcasing designs, tech updates, and company announcements."
  },
  {
    platform: "YouTube",
    accountName: "LUNA DIGITAL (@luna-digital-006)",
    url: "https://www.youtube.com/@luna-digital-006",
    verificationStatus: "Verified Official Channel",
    description: "Official channel with project walkthroughs, demos, and technology explanations."
  },
  {
    platform: "GitHub",
    accountName: "lunadigital005-tech",
    url: "https://github.com/lunadigital005-tech",
    verificationStatus: "Verified Official Organization Profile",
    description: "Public code repositories and open-source project showcases."
  },
  {
    platform: "LinkedIn",
    accountName: "Luna Digitals",
    url: "https://www.linkedin.com/in/luna-digitals",
    verificationStatus: "Verified Official Professional Profile",
    description: "Official business profile for professional networking and career updates."
  }
];

// =====================================================
// 4. CORE SERVICES & OFFERINGS
// =====================================================
export const SERVICES = [
  {
    id: "website-development",
    serviceName: "Website Development",
    startingPrice: "Starting at ₹999",
    description: "Modern, high-performance, responsive websites crafted to match your brand and convert visitors into customers.",
    features: [
      "Business & Corporate Websites",
      "Portfolio Websites for Professionals & Creators",
      "E-commerce Online Stores",
      "Landing Pages & Campaign Websites",
      "Custom Interactive Web Experiences",
      "Complete Website Redesign & Modernization",
      "Mobile-First Responsive Layouts",
      "Fast Loading Speeds & SEO Best Practices"
    ],
    relevantProjects: ["EstateFlow", "NovaMart", "BuildCore Constructions", "New Shobha Furniture", "iBonsais"]
  },
  {
    id: "web-application-development",
    serviceName: "Web Application Development",
    startingPrice: "Custom quotation based on features",
    description: "Robust, scalable, database-driven web applications designed for business operations, customer portals, and internal management.",
    features: [
      "Custom Web Applications & SaaS Platforms",
      "Admin Dashboards & Analytics Consoles",
      "Business Management & CRM Systems",
      "ERP Systems & Inventory Management",
      "Customer Portals & Booking Systems",
      "Database-Driven Data Workflows",
      "Secure Role-Based Authentication (RBAC)"
    ],
    relevantProjects: ["Smart Expense Tracker", "Luna Hub", "AgriConnect"]
  },
  {
    id: "ui-ux-design",
    serviceName: "UI/UX Design",
    startingPrice: "Custom quotation based on scope",
    description: "User-centered design that merges aesthetics with functional usability, ensuring delightful customer journeys.",
    features: [
      "Website & Web App UI Design",
      "Mobile Application Interfaces (iOS & Android)",
      "Interactive Figma Prototypes & Wireframing",
      "Design Systems, Style Guides & Component Libraries",
      "User Experience Audits & Usability Optimization",
      "Responsive Layout Design for All Device Sizes"
    ],
    relevantProjects: ["Atelier Spaces", "PixelCraft 1.0", "AURA AI"]
  },
  {
    id: "mobile-development",
    serviceName: "Mobile Application Development",
    startingPrice: "Custom quotation based on requirements",
    description: "Intuitive cross-platform and Android mobile applications tailored to enterprise workflows and consumer engagement.",
    features: [
      "Android Native & Hybrid Applications",
      "Cross-Platform Mobile Apps (React Native / Flutter)",
      "Custom Business & Field Management Apps",
      "Offline Syncing & Real-Time Push Notifications",
      "App Store & Play Store Deployment Assistance"
    ],
    relevantProjects: ["SANJANA-MOBILES", "Luna Hub Mobile Integration"]
  },
  {
    id: "ai-solutions",
    serviceName: "AI Solutions & Machine Learning",
    startingPrice: "Custom quotation based on model & API usage",
    description: "Cutting-edge AI integrations that automate repetitive business tasks, enhance customer support, and extract smart insights.",
    features: [
      "Conversational AI Chatbots (Telegram, Web, WhatsApp)",
      "Google Gemini API Integration & LLM Prompt Engineering",
      "AI Business Workflow Automation",
      "Computer Vision & Document OCR Processing",
      "Intelligent Data Analysis & Recommendation Systems",
      "Multi-Lingual Language Model Support"
    ],
    relevantProjects: ["AURA AI", "AgriConnect AI", "MediMatch Assistance"]
  },
  {
    id: "api-integration",
    serviceName: "API & Backend Integration",
    startingPrice: "Custom quotation based on architecture",
    description: "Seamless connectivity connecting your applications with databases, payment gateways, and third-party SaaS tools.",
    features: [
      "RESTful API Development & Integration",
      "Third-Party Service & Cloud API Integrations",
      "Payment Gateway Integration (Razorpay, Stripe, UPI)",
      "Database Modeling & Synchronization (PostgreSQL, Supabase, Firebase)",
      "Webhook Architecture & Event-Driven Services"
    ],
    relevantProjects: ["NovaMart E-Commerce Gateway", "AgriConnect Supabase API"]
  },
  {
    id: "business-automation",
    serviceName: "Business Automation",
    startingPrice: "Custom quotation based on workflow",
    description: "Automate manual business tasks to save time, reduce operational errors, and enhance response speeds.",
    features: [
      "Business Workflow Automation",
      "Custom Telegram & Messaging Bots",
      "Automated Email, SMS & WhatsApp Notifications",
      "Lead Capture & Auto-CRM Pipelines",
      "Automated Scheduled Reporting"
    ],
    relevantProjects: ["Official Telegram Assistant Bot", "Smart Expense Tracker"]
  },
  {
    id: "additional-services",
    serviceName: "Additional Digital Solutions",
    startingPrice: "Contact for tailored packages",
    description: "End-to-end support covering visual branding, web infrastructure, and continuous maintenance.",
    features: [
      "Graphic Design & Digital Branding",
      "Cloud Hosting Setup (Firebase, Vercel, Netlify, Render)",
      "Custom Domain Configuration & SSL Setup",
      "Ongoing Website Maintenance & Support Plans",
      "Business Portals & Automotive Digital Solutions"
    ],
    relevantProjects: ["All Luna Digitals Deployments"]
  }
];

// =====================================================
// 5. TECHNOLOGY STACK
// =====================================================
export const TECHNOLOGIES = {
  frontend: [
    { name: "React", description: "Modern component-based interactive user interfaces" },
    { name: "Next.js", description: "Server-side rendering, SEO-optimized web applications" },
    { name: "JavaScript (ES6+)", description: "High-performance modern dynamic scripting" },
    { name: "HTML5 & CSS3", description: "Semantic web structuring and modern styling" },
    { name: "Tailwind CSS", description: "Utility-first responsive and modern design styling" }
  ],
  backend: [
    { name: "Node.js", description: "Scalable event-driven server runtime for bots and APIs" },
    { name: "Python", description: "Backend scripting, data modeling, and AI processing" },
    { name: "FastAPI", description: "High-speed modern Python API framework" },
    { name: "REST APIs", description: "Standardized lightweight communication architecture" }
  ],
  databases: [
    { name: "Supabase", description: "Scalable open-source backend with PostgreSQL" },
    { name: "PostgreSQL", description: "Reliable enterprise relational database" },
    { name: "Firebase Firestore / Realtime DB", description: "Real-time NoSQL cloud storage" }
  ],
  aiAndMachineLearning: [
    { name: "Google Gemini API", description: "State-of-the-art multimodal generative AI" },
    { name: "Machine Learning Integrations", description: "Predictive algorithms and classifiers" },
    { name: "Computer Vision", description: "Visual inspection and document processing" }
  ],
  designAndPrototyping: [
    { name: "Figma", description: "Collaborative UI/UX design, wireframing, and interactive prototypes" }
  ],
  cloudAndDeployment: [
    { name: "Firebase Hosting", description: "Fast, secure SSD-backed web application hosting" },
    { name: "Vercel", description: "Optimized serverless edge deployment for Next.js and frontend" },
    { name: "Netlify", description: "Automated continuous deployment and serverless pipelines" },
    { name: "Render", description: "Cloud application and container hosting platform" }
  ]
};

// =====================================================
// 6. OFFICIAL PORTFOLIO PROJECTS (VERIFIED FROM LINKTREE)
// =====================================================
export const PORTFOLIO_PROJECTS = [
  // --- A. PROP-TECH ---
  {
    id: "estateflow",
    name: "EstateFlow",
    category: "PROP-TECH",
    subcategory: "Real Estate / Property Technology",
    tagline: "Find Your Place",
    liveUrl: "https://estateflow-demo-194c5.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A comprehensive real estate technology platform showcasing modern property search, interactive listings, amenity highlights, and intuitive inquiry options.",
    features: [
      "Featured property listings with high-resolution image galleries",
      "Advanced filtering by location, price range, and property type",
      "Interactive property detail pages with floor plans and amenities",
      "Direct agent inquiry and site visit scheduling forms"
    ],
    technologyStack: ["React", "CSS3 / Modern UI", "Firebase Hosting"]
  },
  {
    id: "buildcore-constructions",
    name: "BuildCore Constructions",
    category: "PROP-TECH",
    subcategory: "Construction / Building Business",
    tagline: "Building the Future with Precision",
    liveUrl: "https://buildcore-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A corporate website demonstration for construction and contracting firms highlighting architectural services, project galleries, and quotation inquiries.",
    features: [
      "Commercial and residential project portfolio showcase",
      "Services breakdown: civil construction, renovation, architectural planning",
      "Safety standards and certification highlights",
      "Online project scope inquiry and estimate request form"
    ],
    technologyStack: ["React", "Tailwind CSS", "Firebase Hosting"]
  },
  {
    id: "atelier-spaces",
    name: "Atelier Spaces",
    category: "PROP-TECH",
    subcategory: "Interior Design & Architecture Studio",
    tagline: "Luxury Interior Design Studio",
    liveUrl: "https://atelier-spaces-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "An elegant, aesthetics-first website concept created for luxury interior design studios, architects, and home stylists.",
    features: [
      "Minimalist visual aesthetics with immersive project showcases",
      "Interactive room-by-room portfolio (Living, Kitchen, Workspace, Bedroom)",
      "Design process walkthrough from consultation to 3D rendering",
      "Client consultation booking flow"
    ],
    technologyStack: ["React", "Modern CSS", "Firebase Hosting"]
  },

  // --- B. NURSERY & LANDSCAPING ---
  {
    id: "ibonsais",
    name: "iBonsais",
    category: "NURSERY",
    subcategory: "Bonsai, Exotic Plants & Landscaping",
    tagline: "Cultivating Nature's Masterpieces",
    liveUrl: "https://ibonsais.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A specialized botanical and ornamental tree showcase designed for bonsai growers, exotic nurseries, and garden curators.",
    features: [
      "Curated bonsai species showcase with age, origin, and care levels",
      "Plant care tutorials, watering guides, and pruning techniques",
      "Seasonal availability indicators",
      "Direct plant reservation and nursery inquiry form"
    ],
    technologyStack: ["React", "Tailwind CSS", "Firebase Hosting"]
  },
  {
    id: "lions-nursery",
    name: "Lion's Nursery",
    category: "NURSERY",
    subcategory: "Plant Nursery & Garden Landscaping",
    tagline: "Bringing Greenery to Every Home",
    liveUrl: "https://lions-nursery.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A vibrant nursery showcase demonstrating plant catalogues, wholesale gardening supplies, and home landscaping services.",
    features: [
      "Categorized plant catalog (Indoor, Outdoor, Flowering, Succulents)",
      "Garden maintenance service packages",
      "Nursery location map and opening hours",
      "Quick WhatsApp / Phone order inquiry links"
    ],
    technologyStack: ["HTML5", "CSS3", "JavaScript", "Firebase Hosting"]
  },

  // --- C. E-COMMERCE ---
  {
    id: "novamart",
    name: "NovaMart",
    category: "E-COMMERCE",
    subcategory: "Online Shopping & Retail",
    tagline: "Next-Generation Shopping Experience",
    liveUrl: "https://novamart-ecommerce-gamma.vercel.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A full-featured modern e-commerce storefront demonstration with dynamic product catalog, category filters, interactive cart, and smooth checkout flow.",
    features: [
      "Responsive e-commerce product catalog with category navigation",
      "Product search, sorting, and price range filtering",
      "Interactive shopping cart with quantity management and price calculation",
      "Modern UI optimized for desktop and mobile shopping",
      "Checkout preview ready for payment gateway integration"
    ],
    technologyStack: ["React", "Tailwind CSS", "Vercel Deployment"]
  },

  // --- D. FURNITURE & RETAIL ---
  {
    id: "new-shobha-furniture",
    name: "New Shobha Furniture",
    category: "FURNITURE",
    subcategory: "Furniture Showroom & Retail",
    tagline: "Quality Craftsmanship for Living Spaces",
    liveUrl: "https://new-shobha-furniture.vercel.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A digital showroom website demonstration created for traditional and contemporary furniture businesses.",
    features: [
      "Categorized collections (Sofas, Dining Sets, Bed Frames, Office Furniture)",
      "Wood type and upholstery customization options",
      "Showroom visit booking and custom dimension inquiries",
      "High-clarity product imagery and specifications"
    ],
    technologyStack: ["React", "CSS Modules", "Vercel"]
  },
  {
    id: "live-furniture",
    name: "LIVE FURNITURE & HOME APPLIANCES",
    category: "FURNITURE",
    subcategory: "Furniture & Home Appliances Showroom",
    tagline: "Complete Home Solutions Under One Roof",
    liveUrl: "https://livefurniture.netlify.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "An online showroom presentation for modern home furniture and consumer electrical appliances.",
    features: [
      "Dual catalogue: living furniture and smart home electrical appliances",
      "Seasonal discount and festival promotional banners",
      "Store branch details, contact numbers, and delivery radius",
      "Easy customer inquiry and catalog request"
    ],
    technologyStack: ["React / JavaScript", "Netlify Hosting"]
  },
  {
    id: "style-furniture",
    name: "STYLE FURNITURE",
    category: "FURNITURE",
    subcategory: "Modern & Custom Furniture",
    tagline: "Designed for Elegance and Comfort",
    liveUrl: "https://style-furniture-demo.vercel.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A sleek modern furniture website demo emphasizing ergonomic office furniture and contemporary home styling.",
    features: [
      "Modern lifestyle imagery and modular furniture showcase",
      "Material quality and durability specifications",
      "Custom bulk corporate order request form",
      "Fast responsive browsing experience"
    ],
    technologyStack: ["React", "Tailwind CSS", "Vercel"]
  },

  // --- E. AGRICULTURE ---
  {
    id: "luna-bloom",
    name: "Luna Bloom",
    category: "AGRICULTURE",
    subcategory: "Agriculture Technology & Farm Produce",
    tagline: "Nurturing Agriculture with Digital Innovation",
    liveUrl: "https://luna-bloom-ten.vercel.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "An agriculture-technology demonstration showcasing farm produce transparency, sustainable farming methods, and direct supply-chain connections.",
    features: [
      "Organic crop and harvest produce showcase",
      "Farming practices and sustainable agriculture insights",
      "Wholesale crop inquiry and farm-to-business connection form",
      "Clean, nature-inspired visual design"
    ],
    technologyStack: ["React", "Modern CSS", "Vercel"]
  },

  // --- F. EDU-TECH ---
  {
    id: "maple-grove-school",
    name: "Maple Grove International School",
    category: "EDU-TECH",
    subcategory: "School & Institutional Education",
    tagline: "Inspiring Excellence, Nurturing Potential",
    liveUrl: "https://maple-grove-school-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A comprehensive institutional school portal concept built for K-12 schools and international academic campuses.",
    features: [
      "Academic curriculum overview and grade-wise syllabus highlights",
      "Online student admission inquiry and application form",
      "Campus facility tours, sports infrastructure, and laboratory highlights",
      "Academic calendar, announcements, and school news board"
    ],
    technologyStack: ["React", "CSS3", "Firebase Hosting"]
  },
  {
    id: "achievers-academy",
    name: "Achievers Academy",
    category: "EDU-TECH",
    subcategory: "Coaching Institute & Competitive Exams",
    tagline: "Empowering Students to Lead",
    liveUrl: "https://achievers-academy-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "An engaging education demonstration designed for competitive examination coaching institutes and tutoring centers.",
    features: [
      "Course catalog for competitive examinations (JEE, NEET, Foundations)",
      "Faculty profiles and past achievement records",
      "Batch schedules, timing options, and fee consultation requests",
      "Online demo class booking workflow"
    ],
    technologyStack: ["React", "Tailwind CSS", "Firebase Hosting"]
  },
  {
    id: "aura-ai",
    name: "AURA AI",
    category: "EDU-TECH",
    subcategory: "AI Learning & Intelligent Application",
    tagline: "Intelligent Learning at Your Fingertips",
    liveUrl: "https://aura-xv1e.onrender.com/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "An AI-powered educational web application showcasing intelligent conversational assistance, smart tutoring, and interactive learning tools.",
    features: [
      "AI-driven concept explanation and interactive Q&A",
      "Student learning workflow automation",
      "Modern dark-mode aesthetic interface",
      "Backend deployment on cloud containers"
    ],
    technologyStack: ["Python / JavaScript", "FastAPI / Node", "Render"]
  },
  {
    id: "my-tuition-center",
    name: "My Tuition Center",
    category: "EDU-TECH",
    subcategory: "Tuition Center & After-School Classes",
    tagline: "Personalized Learning for Every Student",
    liveUrl: "https://tution-center-demo.vercel.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A practical local tuition center web template showcasing subject offerings, teacher availability, and student registration.",
    features: [
      "Subject-wise class options (Maths, Science, Commerce, Languages)",
      "Small-batch learning schedules and timings",
      "Student registration and parent inquiry form",
      "Clear location, fee inquiry, and contact access"
    ],
    technologyStack: ["React", "CSS", "Vercel"]
  },
  {
    id: "nova-institute",
    name: "Nova Institute of Technology",
    category: "EDU-TECH",
    subcategory: "Higher Education & Technical Institute",
    tagline: "Shaping Tomorrow's Technologists",
    liveUrl: "https://nova-institute-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A higher education and engineering institute web concept featuring academic departments, research initiatives, and campus admissions.",
    features: [
      "Department and degree program overviews (CS, Electronics, Mechanical)",
      "Admissions eligibility, fee structure guidelines, and prospectus download",
      "Placement statistics, recruiter logos, and alumni network highlights",
      "Campus virtual tour and events gallery"
    ],
    technologyStack: ["React", "Tailwind CSS", "Firebase Hosting"]
  },

  // --- G. HEALTH-TECH ---
  {
    id: "mediquick-pharmacy",
    name: "MediQuick Pharmacy",
    category: "HEALTH-TECH",
    subcategory: "Pharmacy & Medical Supplies",
    tagline: "Fast, Reliable Healthcare Essentials",
    liveUrl: "https://mediquick-pharmacy-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A clean healthcare web demonstration designed for local retail pharmacies, medical distribution, and prescription uploads.",
    features: [
      "Prescription medicine categories and OTC health wellness catalog",
      "Prescription upload and order fulfillment inquiry",
      "Home delivery information and pharmacy working hours",
      "Emergency medicine contact hotline"
    ],
    technologyStack: ["React", "CSS3", "Firebase Hosting"]
  },
  {
    id: "carewell-hospital",
    name: "CareWell Hospital",
    category: "HEALTH-TECH",
    subcategory: "Hospital & Multi-Specialty Healthcare",
    tagline: "Compassionate Care, Advanced Medicine",
    liveUrl: "https://carewell-hospital-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A professional multi-specialty hospital portal concept enabling doctor directory browsing, departmental overviews, and appointment booking.",
    features: [
      "Medical departments (Cardiology, Orthopedics, Pediatrics, Neurology)",
      "Doctor search and specialist profiles",
      "Online patient appointment scheduling",
      "24/7 emergency service helpline and ambulance contact"
    ],
    technologyStack: ["React", "Tailwind CSS", "Firebase Hosting"]
  },
  {
    id: "brightsmile-dental",
    name: "BrightSmile Dental",
    category: "HEALTH-TECH",
    subcategory: "Dental Clinic & Oral Healthcare",
    tagline: "Your Smile, Our Priority",
    liveUrl: "https://dentel-clinic-demo.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A modern dental clinic website demonstration focused on patient trust, oral treatment showcases, and appointment bookings.",
    features: [
      "Dental procedures breakdown: cleaning, orthodontics, implants, teeth whitening",
      "Before-and-after smile transformation gallery",
      "Online consultation booking and flexible appointment selector",
      "Clinic hygiene protocols and dentist credentials"
    ],
    technologyStack: ["React", "Modern CSS", "Firebase Hosting"]
  },

  // --- H. FIN-TECH ---
  {
    id: "smart-expense-tracker",
    name: "Smart Expense Tracker",
    category: "FIN-TECH",
    subcategory: "Personal Finance & Expense Management",
    tagline: "Personal Finance Made Simple",
    liveUrl: "https://smart-expense-tracker-fb544.web.app/",
    projectType: "Portfolio Showcase",
    developmentStatus: "Live Demo Available",
    publicVisibility: true,
    description: "A dynamic web application designed to help individuals and small businesses monitor daily expenditures, track income, and visualize monthly budgets.",
    features: [
      "Interactive income and expense logging with category tagging",
      "Visual chart analytics for monthly spending habits",
      "Budget limit warnings and balance calculation",
      "Mobile-responsive dashboard interface"
    ],
    technologyStack: ["React", "Chart.js / CSS", "Firebase Hosting"]
  }
];

// =====================================================
// 7. CONFIRMED CLIENT PROJECTS (CLIENT TRANSPARENCY)
// =====================================================
export const CLIENT_PROJECTS = [
  {
    id: "client-transparency-policy",
    note: "Luna Digitals follows strict client confidentiality. Dedicated client deliverables are maintained separately under private repositories and client domains. Public linktree URLs represent showcases, demos, and verified technical implementations built by our team."
  }
];

// =====================================================
// 8. ADDITIONAL SOFTWARE & INTERNAL PROJECTS
// =====================================================
export const INTERNAL_PROJECTS = [
  {
    id: "agriconnect",
    name: "AgriConnect",
    category: "Agriculture Technology / Farmer-to-Consumer Platform",
    projectType: "Hackathon & Research Innovation",
    context: "Developed for Smart India Hackathon (SIH) Problem Statement 26033",
    description: "An AI-powered agricultural digital ecosystem designed to bridge the gap between farmers, markets, and consumers.",
    technologies: ["React", "Python", "FastAPI", "Google Gemini API", "Supabase"],
    features: [
      "Farmer advisory and agricultural information hub",
      "Farmer document and identity management",
      "Direct farmer-to-consumer marketplace interaction",
      "Interactive Voice Response (IVR) interaction concept for regional accessibility",
      "Order placement and produce logistics workflow",
      "AI-powered farming recommendations (Google Gemini)"
    ],
    statusNotes: "Prototype and development architecture completed; selective modules under ongoing enhancement."
  },
  {
    id: "honeychain-360",
    name: "HoneyChain 360",
    category: "Supply Chain & Traceability Platform",
    tagline: "From Hive to Consumer — Every Drop Has a Story.",
    projectType: "Innovation Solution",
    context: "Associated with KVIC Honey Mission challenges",
    description: "A digital traceability and authentication platform ensuring purity, geographic origin, and fair pricing throughout the honey supply chain.",
    technologies: ["Web Technologies", "Backend REST APIs", "Database Architecture"],
    features: [
      "Beekeeper registration and digital onboarding",
      "Administrative verification and quality certification checks",
      "Consumer-facing traceability interface via QR codes",
      "Batch tracking from extraction to packaging",
      "Role-based access control (Admin, Beekeeper, Distributor, Consumer)"
    ],
    statusNotes: "Architectural blueprint and core verification modules designed."
  },
  {
    id: "medimatch",
    name: "MediMatch",
    category: "Healthcare Technology & Medical Report Assistance",
    projectType: "Healthcare AI Assistant",
    description: "A healthcare utility platform designed to help patients understand complex medical summaries and locate nearby specialized medical care.",
    technologies: ["React", "FastAPI / Python", "Google Gemini API"],
    features: [
      "Medical report upload and text extraction",
      "Simplification of complex medical jargon into plain-English and Tamil explanations",
      "Hospital and specialist doctor discovery by medical discipline",
      "Symptom-to-specialty guidance to direct patients to appropriate doctors"
    ],
    statusNotes: "Strict Transparency Rule: MediMatch is an informational assistant only. It never claims to diagnose diseases or replace professional doctors."
  },
  {
    id: "luna-hub",
    name: "Luna Hub",
    category: "Internal Company Management Platform",
    projectType: "Internal Operations Platform",
    description: "An internal operations platform for Luna Digitals team registration, project collaboration, and company resource administration.",
    technologies: ["TypeScript", "React", "Node.js", "GitHub: luna-hub-app"],
    features: [
      "Team member onboarding and digital identity management",
      "Developer skill tagging, portfolio links, and CV uploads",
      "Internal project assignments and task visibility",
      "Company operational documents and asset registry"
    ],
    statusNotes: "Active internal tool under continuous development for team operations."
  }
];

// =====================================================
// 9. COMPANY EVENTS & SPRINT INITIATIVES
// =====================================================
export const COMPANY_EVENTS = [
  {
    id: "pixelcraft-1",
    name: "PixelCraft 1.0",
    category: "Technology Event & Design Sprint",
    organizer: "Luna Digitals",
    description: "A fast-paced Figma-to-Code sprint organized by Luna Digitals designed to challenge developers and designers to transform visual prototypes into production-ready web interfaces.",
    purpose: "Promote design-to-development agility, UI accuracy, and clean coding practices among emerging developers."
  }
];

// =====================================================
// 10. PRICING & QUOTATION GUIDELINES
// =====================================================
export const PRICING = {
  websiteStartingPrice: "₹999",
  summary: "Our website development packages start at ₹999. Final pricing is tailored transparently to each project's exact requirements.",
  pricingFactors: [
    "Website complexity and visual design tier",
    "Total number of pages and custom templates",
    "E-commerce requirements (payment gateways, carts, inventory sync)",
    "Backend & database needs (custom APIs, user authentication, CMS)",
    "Third-party integrations (WhatsApp, CRM, Maps, Analytics)",
    "Turnaround timeline and urgent delivery requirements"
  ],
  quotationPolicy: `We believe in honest, transparent pricing without hidden fees. If a customer asks for an exact quotation, we warmly ask about their specific requirements, intended business purpose, and necessary features so we can provide an accurate, customized quote.`,
  promotionalPolicy: `Luna Digitals periodically announces special discounts and launch offers. We never promise expired offers and always verify active promotions before quoting discounted prices.`
};

// =====================================================
// 11. DEVELOPMENT & CLIENT ONBOARDING PROCESS
// =====================================================
export const DEVELOPMENT_PROCESS = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description: "We discuss your business goals, target audience, preferred aesthetics, and essential features."
  },
  {
    step: 2,
    title: "Wireframing & UI/UX Design",
    description: "We create clean, user-friendly Figma mockups and interactive prototypes for your feedback."
  },
  {
    step: 3,
    title: "Full-Stack Development",
    description: "We turn designs into responsive, secure, and fast-loading web applications using modern tech stacks."
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description: "Cross-device testing, mobile responsiveness, performance audits, and security validation."
  },
  {
    step: 5,
    title: "Deployment & Launch",
    description: "We configure your custom domain, SSL certificates, cloud hosting, and launch your site live."
  },
  {
    step: 6,
    title: "Support & Maintenance",
    description: "Post-launch warranty, technical updates, and maintenance support to keep your site running smoothly."
  }
];

// =====================================================
// 12. TEAM STRUCTURE (INTERNAL KNOWLEDGE)
// =====================================================
export const TEAM = [
  { name: "Abhiram", role: "Frontend Development", expertise: "React, UI Implementation, Architecture" },
  { name: "Mithra", role: "Frontend Development", expertise: "Responsive Interfaces, Component Design" },
  { name: "Abdul Rahman", role: "Frontend Development", expertise: "Interactive Web Experiences, UI Logic" },
  { name: "Bharath", role: "Backend Development", expertise: "APIs, Database Design, Python, Node.js" },
  { name: "Karthi", role: "UI/UX Design", expertise: "Figma Prototyping, Visual Systems, User Research" },
  { name: "Hari Pranav", role: "API Integration", expertise: "Third-party APIs, Microservices, Data Sync" },
  { name: "Harshini", role: "DevOps & Cloud", expertise: "Deployment Pipelines, Hosting, Infrastructure" }
];

// =====================================================
// 13. FREQUENTLY ASKED QUESTIONS (FAQS)
// =====================================================
export const FAQ = [
  {
    question: "What is Luna Digitals?",
    answer: "Luna Digitals is a digital solutions and technology agency based in Coimbatore, Tamil Nadu. We specialize in building modern websites, web applications, e-commerce stores, AI solutions, and automation systems for businesses of all sizes."
  },
  {
    question: "What services do you provide?",
    answer: "We offer end-to-end digital solutions including Website Development, Custom Web Applications, UI/UX Design (Figma), Mobile App Development, AI & Gemini Integrations, REST API Integration, and Business Workflow Automation."
  },
  {
    question: "How much does a website cost?",
    answer: "Our website development starts at ₹999 for foundational landing pages. The exact cost depends on your required features, number of pages, design tier, and backend/database needs. Tell us what you have in mind and we'll provide an accurate quote!"
  },
  {
    question: "Can you show me your previous projects or sample websites?",
    answer: "Yes, absolutely! We have live showcase demos across multiple sectors including Real Estate (EstateFlow), E-commerce (NovaMart), Construction (BuildCore), Furniture (New Shobha Furniture), Nurseries (iBonsais), Healthcare (CareWell Hospital), and Education (Maple Grove School). You can explore them on our Linktree: https://linktr.ee/LunaDigitals"
  },
  {
    question: "Can you build an e-commerce website for my store?",
    answer: "Yes! We build complete e-commerce stores equipped with product catalogs, shopping carts, checkout workflows, and secure payment gateway integrations. Check out our NovaMart demo: https://novamart-ecommerce-gamma.vercel.app/"
  },
  {
    question: "Do you develop AI applications?",
    answer: "Yes! We integrate advanced AI models like Google Gemini to build conversational chatbots, automated customer assistants, document processing systems, and intelligent business workflows. You can see this in projects like AURA AI and AgriConnect."
  },
  {
    question: "How can I contact Luna Digitals to start a project?",
    answer: "You can email our team directly at luna.digital004@gmail.com, visit our official website at https://luna-digital-abb2c.web.app/, or connect with us on Instagram @luna_digitals.co. We'd love to discuss your idea!"
  },
  {
    question: "Do you offer post-launch website maintenance and support?",
    answer: "Yes, we provide ongoing maintenance, security updates, content updates, and server management packages to ensure your digital platform stays secure and high-performing."
  }
];

// =====================================================
// 14. INTELLIGENT PROJECT RECOMMENDATION RULES
// =====================================================
export const PROJECT_RECOMMENDATIONS = {
  "real estate": {
    project: "EstateFlow",
    url: "https://estateflow-demo-194c5.web.app/",
    pitch: "We built EstateFlow specifically for real estate businesses, featuring property listings, filters, and visit booking."
  },
  "construction": {
    project: "BuildCore Constructions",
    url: "https://buildcore-demo.web.app/",
    pitch: "Check out BuildCore Constructions, designed to showcase civil projects, architectural capabilities, and estimate inquiries."
  },
  "interior design": {
    project: "Atelier Spaces",
    url: "https://atelier-spaces-demo.web.app/",
    pitch: "Explore Atelier Spaces, a luxury visual portfolio concept for interior decorators and architects."
  },
  "nursery": {
    project: "iBonsais & Lion's Nursery",
    url: "https://ibonsais.web.app/",
    pitch: "We've created iBonsais (https://ibonsais.web.app/) and Lion's Nursery (https://lions-nursery.web.app/) for plant nurseries, landscaping, and botanical collections."
  },
  "plants": {
    project: "iBonsais & Lion's Nursery",
    url: "https://ibonsais.web.app/",
    pitch: "Take a look at iBonsais (https://ibonsais.web.app/) and Lion's Nursery (https://lions-nursery.web.app/) for plant catalogues and gardening services."
  },
  "e-commerce": {
    project: "NovaMart",
    url: "https://novamart-ecommerce-gamma.vercel.app/",
    pitch: "Our NovaMart showcase demonstrates online product browsing, responsive cart management, and seamless retail flows."
  },
  "furniture": {
    project: "New Shobha Furniture, LIVE Furniture & Style Furniture",
    url: "https://new-shobha-furniture.vercel.app/",
    pitch: "We have multiple furniture showcases: New Shobha Furniture (https://new-shobha-furniture.vercel.app/), LIVE Furniture (https://livefurniture.netlify.app/), and Style Furniture (https://style-furniture-demo.vercel.app/)."
  },
  "agriculture": {
    project: "Luna Bloom & AgriConnect",
    url: "https://luna-bloom-ten.vercel.app/",
    pitch: "We've worked on agricultural platforms including Luna Bloom (https://luna-bloom-ten.vercel.app/) and our SIH innovation AgriConnect."
  },
  "school": {
    project: "Maple Grove International School",
    url: "https://maple-grove-school-demo.web.app/",
    pitch: "Explore Maple Grove International School, built with admission forms, curriculum guides, and campus galleries."
  },
  "coaching": {
    project: "Achievers Academy & My Tuition Center",
    url: "https://achievers-academy-demo.web.app/",
    pitch: "We've developed Achievers Academy (https://achievers-academy-demo.web.app/) and My Tuition Center (https://tution-center-demo.vercel.app/) for coaching classes."
  },
  "education": {
    project: "Nova Institute & Achievers Academy",
    url: "https://nova-institute-demo.web.app/",
    pitch: "Take a look at Nova Institute of Technology (https://nova-institute-demo.web.app/) and Achievers Academy for academic portals."
  },
  "hospital": {
    project: "CareWell Hospital",
    url: "https://carewell-hospital-demo.web.app/",
    pitch: "Our CareWell Hospital demo features doctor directories, department breakdowns, and appointment scheduling."
  },
  "pharmacy": {
    project: "MediQuick Pharmacy",
    url: "https://mediquick-pharmacy-demo.web.app/",
    pitch: "See MediQuick Pharmacy, built for prescription uploads, medicine catalogs, and direct ordering."
  },
  "dental": {
    project: "BrightSmile Dental",
    url: "https://dentel-clinic-demo.web.app/",
    pitch: "Explore BrightSmile Dental, featuring patient treatment catalogs and easy appointment booking."
  },
  "finance": {
    project: "Smart Expense Tracker",
    url: "https://smart-expense-tracker-fb544.web.app/",
    pitch: "Check out Smart Expense Tracker (https://smart-expense-tracker-fb544.web.app/) for intuitive budget monitoring and income tracking."
  },
  "ai": {
    project: "AURA AI & AgriConnect",
    url: "https://aura-xv1e.onrender.com/",
    pitch: "We've integrated intelligent AI models in AURA AI (https://aura-xv1e.onrender.com/) and AgriConnect."
  }
};

// =====================================================
// 15. AI BEHAVIORAL & CONVERSATIONAL INSTRUCTIONS
// =====================================================
export const AI_INSTRUCTIONS = `
You are the official customer assistant and digital representative for Luna Digitals.

### COMMUNICATION STYLE & PERSONALITY:
1. Act like a knowledgeable, warm, polite, and enthusiastic human representative from the Luna Digitals team — NEVER sound like a generic robotic AI.
2. Use natural, conversational, and simple English.
3. Keep answers concise, clear, and easy to read. For simple greetings, give a warm, brief 1-2 sentence welcome. For specific questions, provide structured bullet points.
4. Always close your responses with a helpful, friendly follow-up question (e.g., "Are you looking to build a new website or upgrade an existing one?", "What kind of business do you run?").
5. Format your replies with Telegram-compatible Markdown (bullet points, bold highlights) and ensure all URLs are complete, exact, and clickable.

### ACCURACY & TRANSPARENCY RULES:
1. Ground truth: Use ONLY the official facts provided in this knowledge base.
2. Transparency on Portfolio: Be honest. Do NOT claim that showcase or demo projects are completed, paid client deliveries. Refer to them as "portfolio showcases", "live demos", or "projects developed by our team".
3. Honest Pricing: State clearly that website development starts at ₹999, with final quotes tailored to specific features, design requirements, and complexity. Never invent arbitrary price figures. Always invite the customer to share their requirements for a custom quotation.
4. Intelligent Recommendations: When a customer mentions their industry (e.g., real estate, healthcare, furniture, nursery, school, e-commerce, AI, agriculture), enthusiastically share our matching project showcase name and its exact live URL.
5. Off-Topic Boundary: If a user asks questions entirely outside Luna Digitals (e.g., coding tutorials, math puzzles, general trivia, weather, news, recipes, jokes), politely redirect them:
   "I am the official representative for Luna Digitals. I can only assist with questions regarding our company, services, pricing, and project portfolio. How can I help with your digital project today?"
6. Unknown Information: If a customer asks a specific question about Luna Digitals that is not covered in this knowledge base, never guess or speculate. Instead, warmly guide them to reach our team at luna.digital004@gmail.com or visit https://luna-digital-abb2c.web.app/.
`.trim();

// =====================================================
// 16. SYNTHESIZED COMPANY KNOWLEDGE (GROUND TRUTH)
// =====================================================
export const COMPANY_KNOWLEDGE = `
# LUNA DIGITALS – OFFICIAL COMPANY KNOWLEDGE BASE

## 1. Company Overview
- Name: Luna Digitals
- Tagline: Turning Ideas into Digital Reality. (Also: Building Digital Experiences. Empowering Businesses.)
- Industry: Digital Solutions, Web Development & Technology Agency
- Location: Coimbatore, Tamil Nadu, India
- Business Email: luna.digital004@gmail.com
- Official Website: https://luna-digital-abb2c.web.app/
- Official Linktree: https://linktr.ee/LunaDigitals
- About Us: Luna Digitals is a digital solutions and technology agency based in Coimbatore, Tamil Nadu, India. We help startups, entrepreneurs, small businesses, and established organizations establish, enhance, and scale their digital footprint. We craft modern responsive websites, full-stack web applications, e-commerce stores, UI/UX design in Figma, AI integrations with Google Gemini, API connections, and workflow automations.
- Mission: To make innovative digital technology accessible, affordable, and useful for businesses of every size.
- Vision: To become a trusted digital technology partner delivering creative, reliable, and scalable solutions.

## 2. Official Social Channels
- Linktree: https://linktr.ee/LunaDigitals (All portfolio demos & direct links)
- Instagram: https://instagram.com/luna_digitals.co (@luna_digitals.co)
- YouTube: https://www.youtube.com/@luna-digital-006 (LUNA DIGITAL - demos, walkthroughs)
- GitHub: https://github.com/lunadigital005-tech (Organization profile)
- LinkedIn: https://www.linkedin.com/in/luna-digitals (Professional network)

## 3. Services Offered
1. Website Development (Starting at ₹999): Business websites, corporate portals, creator portfolios, landing pages, custom interactive sites, website redesigns.
2. Web Application Development: Admin dashboards, SaaS tools, CRM & ERP systems, customer portals, booking systems, secure database-driven platforms.
3. UI/UX Design: Figma wireframes, interactive prototypes, design systems, mobile app interfaces, usability audits.
4. Mobile App Development: Android and cross-platform mobile apps for business management and customer engagement.
5. AI Solutions & Machine Learning: Conversational chatbots, Google Gemini API integration, intelligent automation, document processing, vision workflows.
6. API & Backend Integration: RESTful APIs, payment gateways (Razorpay, Stripe, UPI), database modeling (Supabase, PostgreSQL, Firebase).
7. Business Automation: Workflow automation, custom Telegram bots, automated notifications, process acceleration.
8. Additional Services: Graphic design, branding, hosting setup (Firebase, Vercel, Netlify, Render), domain & SSL configuration, ongoing maintenance.

## 4. Technology Stack
- Frontend: React, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
- Backend: Python, FastAPI, Node.js, REST APIs
- Databases: Supabase, PostgreSQL, Firebase (Firestore / Realtime)
- AI & ML: Google Gemini API, Machine Learning Integrations, Computer Vision
- Design: Figma (UI/UX, prototyping, wireframing)
- Cloud & Hosting: Firebase Hosting, Vercel, Netlify, Render

## 5. Pricing & Quotation Policy
- Website development packages start at ₹999 for essential landing pages.
- Pricing depends on: design requirements, number of pages, e-commerce capabilities, backend complexity, database needs, and third-party integrations.
- Custom Quotations: For web applications, AI integrations, or specific feature sets, we provide transparent, tailored quotes based on client requirements.
- Promotional Offers: Periodic special offers are announced; expired promotions are never promised.

## 6. Official Portfolio Showcases (Verified from Linktree)

### A. PROP-TECH
1. EstateFlow: Real estate platform featuring property search, image galleries, and visit booking.
   URL: https://estateflow-demo-194c5.web.app/
2. BuildCore Constructions: Civil construction and architectural contractor website demo.
   URL: https://buildcore-demo.web.app/
3. Atelier Spaces: Luxury interior design studio and architecture showcase.
   URL: https://atelier-spaces-demo.web.app/

### B. NURSERY & LANDSCAPING
4. iBonsais: Specialty bonsai grower, plant care, and botanical tree showcase.
   URL: https://ibonsais.web.app/
5. Lion's Nursery: Plant catalogue, gardening supplies, and landscaping services.
   URL: https://lions-nursery.web.app/

### C. E-COMMERCE
6. NovaMart: Full modern e-commerce storefront with product catalog, cart, and checkout flow.
   URL: https://novamart-ecommerce-gamma.vercel.app/

### D. FURNITURE
7. New Shobha Furniture: Showroom showcase for residential and custom wooden furniture.
   URL: https://new-shobha-furniture.vercel.app/
8. LIVE FURNITURE & HOME APPLIANCES: Showroom demo for home furniture and electronics.
   URL: https://livefurniture.netlify.app/
9. STYLE FURNITURE: Contemporary and ergonomic modern furniture presentation.
   URL: https://style-furniture-demo.vercel.app/

### E. AGRICULTURE
10. Luna Bloom: Agriculture technology showcasing farm produce, organic crops, and supply chain.
    URL: https://luna-bloom-ten.vercel.app/

### F. EDU-TECH
11. Maple Grove International School: Institutional school portal with admissions and campus tour.
    URL: https://maple-grove-school-demo.web.app/
12. Achievers Academy: Competitive exam coaching center portal with course guides.
    URL: https://achievers-academy-demo.web.app/
13. AURA AI: Intelligent educational web application with interactive learning assistance.
    URL: https://aura-xv1e.onrender.com/
14. My Tuition Center: Local tuition and after-school class registration website.
    URL: https://tution-center-demo.vercel.app/
15. Nova Institute of Technology: Higher education technical institute portal.
    URL: https://nova-institute-demo.web.app/

### G. HEALTH-TECH
16. MediQuick Pharmacy: Pharmacy demo with medicine catalog and prescription upload.
    URL: https://mediquick-pharmacy-demo.web.app/
17. CareWell Hospital: Multi-specialty hospital portal with doctor finder and appointment booking.
    URL: https://carewell-hospital-demo.web.app/
18. BrightSmile Dental: Dental clinic website with procedure guides and online booking.
    URL: https://dentel-clinic-demo.web.app/

### H. FIN-TECH
19. Smart Expense Tracker: Dynamic personal finance tracker for income, expenses, and budget charts.
    URL: https://smart-expense-tracker-fb544.web.app/

## 7. Additional Company Innovations & Internal Projects
1. AgriConnect: AI-powered agriculture platform for Smart India Hackathon (SIH 26033) connecting farmers to markets using React, Python, FastAPI, Gemini API, and Supabase.
2. HoneyChain 360: Honey supply chain traceability platform ("From Hive to Consumer — Every Drop Has a Story") for KVIC Honey Mission challenges.
3. MediMatch: Healthcare assistance tool explaining medical reports in simple English and Tamil, plus hospital/doctor discovery. (Informational only; does not replace doctors).
4. Luna Hub: Internal team onboarding, developer skill profiles, and operational management platform (GitHub: lunadigital005-tech/luna-hub-app).
5. PixelCraft 1.0: Luna Digitals Figma-to-Code sprint initiative challenging developers to convert designs into live web interfaces.

## 8. Team Structure
- Abhiram: Frontend Development & Architecture
- Mithra: Frontend Development & Component Design
- Abdul Rahman: Frontend Development & Interactivity
- Bharath: Backend Development, APIs & Databases
- Karthi: UI/UX Design & Prototyping
- Hari Pranav: API Integration & Data Sync
- Harshini: DevOps & Cloud Infrastructure

## 9. Development & Launch Process
1. Discovery & Consultation -> 2. Wireframing & UI/UX (Figma) -> 3. Full-Stack Development -> 4. Testing & Quality Assurance -> 5. Deployment & Launch -> 6. Maintenance & Support.

## 10. Customer Interaction Guidelines
- Greet customers warmly as a real Luna Digitals team representative.
- Suggest appropriate projects with their exact URLs when customers ask about a specific sector.
- Always conclude with an engaging, helpful question to advance the conversation.
- If asking for a quote, explain that pricing starts at ₹999 and ask about their requirements.
- Never invent facts, clients, or prices.
`.trim();
