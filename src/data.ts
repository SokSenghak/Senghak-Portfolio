import { Project, Experience, BlogPost, Testimonial, SkillGroup, Language } from "./types";
import profileImageUrl from "./assets/images/senghak_profile_1780845886933.png";

export const PROJECT_AVATAR_PATH = profileImageUrl;

export const PROJECT_DATA: Project[] = [
  {
    id: "ai-agent-platform",
    name: "AI Agent Platform",
    description: "Multimodal AI assistant system with real-time text, voice, and vision integration using Gemini and OpenAI.",
    longDescription: "An enterprise-grade platform designed to orchestrate autonomous AI agents. Features a user-friendly node-based workflow builder, real-time audio playback streaming, image comprehension, and database grounding. The system can connect directly to private databases and API nodes to automatically execute queries and schedule background workflows.",
    category: "AI",
    tags: ["React", "Express", "TypeScript", "@google/genai", "Vercel", "WebSockets"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
    features: [
      "Dynamic system instruction injection for customized agent personas.",
      "Real-time voice-to-voice communication support via low-latency WebSockets.",
      "Integrated vector database (Pinecone) for semantic private document search.",
      "Custom function calling structure allowing agents to run server-side commands."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "nft-marketplace",
    name: "NFT Marketplace",
    description: "Web3 platform for minting, listing, and trading digital assets with Solidity smart contracts.",
    longDescription: "A highly interactive, non-custodial Web3 application built for collectors and creators. It handles gas-optimized lazy minting, smart contract trading, multi-chain assets, and real-time transaction tracking over RPC nodes. It leverages decentralized storage to query metadata securely.",
    category: "Blockchain",
    tags: ["Next.js", "Solidity", "Ethers.js", "Tailwind CSS", "Hardhat", "IPFS"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    features: [
      "Fully compatible ERC-721 and ERC-1155 smart contracts audited for safety.",
      "Seamless integration with MetaMask, WalletConnect, and Coinbase Wallet.",
      "Lazy minting capability allowing creators to mint with zero upfront gas costs.",
      "A gorgeous search and filter interface with volume metrics and floor price trends."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "pos-management",
    name: "POS Management System",
    description: "Commercial multi-outlet point-of-sale platform featuring instant updates, invoice customizers, and reports.",
    longDescription: "A fully resilient inventory and sales cockpit developed for local retail networks in Phnom Penh. Incorporates multi-branch inventory tracking, thermal receiver printing integration, real-time low stock notifications, tax calculation, and clean visual business analytics dashboards.",
    category: "Full Stack",
    tags: ["Laravel", "Vue.js", "MySQL", "Docker", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
    features: [
      "Offline transactional resilience using indexedDB with automatic server sync.",
      "Fully dynamic printable invoice templater with custom logo and tax layouts.",
      "Granular user permissions (Admin, Store Manager, Cashier).",
      "Sales, cost of goods, and profit margins interactive report generation."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "hotel-booking",
    name: "Hotel Booking Platform",
    description: "High-traffic reservation system featuring multi-currency configurations and real-time room calendars.",
    longDescription: "A high-performance luxury hotel booking engine. Implements atomic reservation transactions to strictly avoid double-bookings, dynamic seasonal discount matrices, multi-lingual support, and instant interactive reservation calendars for staff.",
    category: "Web",
    tags: ["React.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    features: [
      "Atomic reservation guarantees with database level locks.",
      "Integrated global payments engine supporting standard cards and local KHQR codes.",
      "Comprehensive reservation tracking and digital receipts download.",
      "Interactive drag-and-drop admin dashboard for room allocation."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "lottery-result-app",
    name: "Lottery Result App",
    description: "Highly optimized real-time regional lottery tracking mobile application with instant push notifications.",
    longDescription: "A highly performant Android and iOS mobile app utilizing background workers to parse and serve immediate draw updates. Implements complex query caching to serve millions of requests without backend degradation.",
    category: "Mobile",
    tags: ["React Native", "Expo", "Express.js", "Redis", "Firebase Cloud Messaging"],
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800",
    features: [
      "Real-time notifications sent to over 100k active users under 2 seconds.",
      "Highly responsive offline mode with complete historic local database query.",
      "Minimalist, super fast loading pages optimized for 3G connection speeds.",
      "Fully localized keyboard navigation and localized Khmer language options."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  },
  {
    id: "ecommerce-platform",
    name: "E-Commerce Platform",
    description: "Full-scale virtual storefront with dynamic search filters, wishlists, and express payment checkout.",
    longDescription: "A highly polished marketplace layout engineered for lightning-fast loads. Features a robust client-side basket context, real-time product inventory reservation, tax automated calculation, and robust merchant CRM panels.",
    category: "Full Stack",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS", "GitHub Actions", "Vercel"],
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    features: [
      "Elastic Search integration for instant, fuzzy matches on large product pools.",
      "Stripe Elements styled checkout flows protecting customer payment transactions.",
      "Custom admin workspace for order tracking, shipping manifest and label generation.",
      "Stretching and scaling testing verified for up to 50,000 concurrent page loads."
    ],
    demoUrl: "#",
    githubUrl: "https://github.com"
  }
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "exp1",
    role: "Senior Full Stack Developer",
    company: "Apex Tech Innovations",
    period: "2023 - Present",
    location: "Phnom Penh, Cambodia",
    points: [
      "Architected and deployed scalable enterprise web applications using modern React, Node.js, and Laravel setups.",
      "Designed and implemented high-throughput RESTful and GraphQL APIs serving Web2 systems and decentralized nodes.",
      "Integrated multi-currency payment platforms, localized digital wallets, and secure KHQR transaction tracking.",
      "Spearheaded the integration of Gemini AI and custom large language model pipelines for automated client reporting and semantic document categorization.",
      "Managed elastic Cloud services and Docker setups, boosting compilation and release velocity by 40% via GitHub actions."
    ]
  },
  {
    id: "exp2",
    role: "Mobile App Developer",
    company: "SwiftSphere Digital Solutions",
    period: "2021 - Present",
    location: "Phnom Penh, Cambodia (Remote & Hybrid)",
    points: [
      "Built, optimized, and published major iOS and Android applications utilizing React Native and Expo.",
      "Configured robust platform push notifications using Firebase Cloud Messaging and local scheduled background notification engines.",
      "Integrated secure fingerprint/FaceID biomometric authentication and on-device offline database storage (WatermelonDB).",
      "Successfully reduced app startup latency by 25% and reduced binary bundle footprint using bundle splitting best practices.",
      "Authored custom native modules in Swift and Kotlin for advanced device sensors integration."
    ]
  }
];

export const SKILL_DATA: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Svelte", level: 75 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 98 },
      { name: "HTML5 / CSS3", level: 95 }
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Laravel (PHP)", level: 90 },
      { name: "Node.js (Express)", level: 92 },
      { name: "Supabase / Firebase", level: 90 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL / MongoDB", level: 90 }
    ]
  },
  {
    category: "Mobile & Blockchain",
    skills: [
      { name: "React Native (Expo)", level: 92 },
      { name: "Ionic / Capacitor", level: 78 },
      { name: "Solidity (Ethereum)", level: 85 },
      { name: "Ethers.js / Web3.js", level: 88 }
    ]
  },
  {
    category: "AI & DevOps",
    skills: [
      { name: "Gemini / OpenAI API", level: 92 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Docker Containerization", level: 85 },
      { name: "CI/CD & Cloud Servers", level: 82 }
    ]
  }
];

export const TESTIMONIAL_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Sophea Roth",
    position: "Chief Technology Officer",
    company: "CamCar Go Mobility",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    text: "Senghak is a phenomenal developer. He completely rewrote our API services layer and optimized the database query structure. Under his guidance, our server latency dropped from 400ms to under 80ms, allowing our ride-hailing app to double its daily active trip bookings without spinning up costly extra containers. Absolutely world-class!",
    rating: 5
  },
  {
    id: "t2",
    name: "Alex Sterling",
    position: "Founder & Creative Director",
    company: "Vesta Blockchain Labs",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
    text: "Working with Senghak to construct our custom NFT Marketplace was an absolute pleasure. He possesses a rare talent: the deep structural understanding of Solidity smart contracts coupled with the meticulous attention to detail required to build high-fidelity, polished, responsive React layouts inspired by Stripe and Linear. I cannot recommend him enough.",
    rating: 5
  },
  {
    id: "t3",
    name: "Malai Seng",
    position: "Operations Director",
    company: "Gold Heritage Resorts",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    text: "The web hotel booking engine Senghak deployed for our boutique resorts dramatically elevated our direct reservation bookings rate. The calendar UI is fluid, clear, perfectly suited for mobile clients, and is highly secure. Our direct booking metrics increased by 45% within three months of deployment.",
    rating: 5
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: "blog1",
    title: "React 19 & Next.js: Modern Best Practices",
    summary: "Dive deep into modern state strategies, compiler features, server components, and layout animations to maximize rendering speed under load.",
    content: "When working with React 19, the compiler handles deep dependency-memoization automatically. However, understanding component lifecycle and isolating heavily animated sub-drawers from high-frequency input hooks is still vital. In this post, we demonstrate how to combine motion layout transitions with standard key-value local states to create beautiful, buttery-smooth layouts without introducing high render bottlenecks.",
    category: "React Development",
    readTime: "5 min read",
    date: "May 22, 2026",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog2",
    title: "Framer Motion: Decoupling Micro-Animations for UI",
    summary: "Learn structural guidelines to build high-fidelity transitions, spring loops and grid animations while preserving accessibility.",
    content: "Adding micro-interactions can quickly bloat component structures if not organized neatly. By isolating custom hook transitions and taking advantage of layout IDs, you can construct gorgeous page animations inspired by Stripe and Vercel. We will inspect standard spring configurations (stiffness 300, damping 30) to create responsive, natural click and hover feedback.",
    category: "UI/UX Design",
    readTime: "4 min read",
    date: "Jun 02, 2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "blog3",
    title: "Web3 Smart Contracts security best practices",
    summary: "An in-depth code study on Solidity gas optimization, safe ERC-721 token mints, security audits, and non-custodial wallets bindings.",
    content: "Smart contract engineering demands absolute precision. A single state oversight can lead to user asset lockups or security issues. Here, we outline the strict practices we followed when launching the NFT Marketplace, focusing on reentrancy guards, packed contract state pack structures, and safe mint validations using OpenZeppelin standards.",
    category: "Web3 Technology",
    readTime: "7 min read",
    date: "Jun 05, 2026",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
  }
];

export const TRANSLATIONS: Record<Language, any> = {
  EN: {
    heroTitle: "Hello, I'm",
    heroSubtitle: "Senior Full-Stack & Mobile Developer",
    heroDesc: "Passionate Full-Stack Developer with experience in building scalable web applications, mobile applications, blockchain solutions, AI-powered systems, and cloud-based platforms. Specialized in React, React Native, Laravel, Node.js, Supabase, Web3, and AI integrations.",
    resumeBtn: "Download Resume",
    hireBtn: "Hire Me",
    projectsBtn: "View Projects",
    contactBtn: "Contact Me",
    aboutTitle: "About Me",
    yearsExp: "Years Experience",
    projComp: "Projects Completed",
    happyCli: "Happy Clients",
    techMast: "Tech Mastered",
    skillsTitle: "Core Competencies",
    skillsDesc: "Meticulous tech stack organized by specific operational domains and estimated mastery indices.",
    expTitle: "Work History",
    projectsTitle: "Innovative Creations",
    servicesTitle: "Professional Services",
    testimonialsTitle: "Trusted Reviews",
    achievementsTitle: "Key Milestones",
    blogTitle: "Knowledge Sharing",
    contactFormTitle: "Start a Collaboration",
    aiTwinDockTitle: "Senghak's AI Companion",
    aiTwinIntro: "Ask my automated Twin anything about my projects, skills, or booking calendar. It runs on Gemini!",
    placeholderName: "Your Full Name",
    placeholderEmail: "Your Email Address",
    placeholderPhone: "Your Phone Number (Optional)",
    placeholderSubject: "Subject",
    placeholderMessage: "Write your project brief here...",
    sendBtn: "Deploy Message",
    sendingBtn: "Encrypting & Sending...",
    successMsg: "Message transmitted successfully! Check out my AI Twin's auto-drafted reply:",
    mapsTitle: "Geographic Hub",
    locationDetail: "Phnom Penh, Cambodia",
    all: "All Projects"
  },
  KH: {
    heroTitle: "សួស្ដី​ ខ្ញុំបាទឈ្មោះ",
    heroSubtitle: "អ្នកអភិវឌ្ឍន៍កម្មវិធីកម្រិតជាន់ខ្ពស់ Full-Stack & Mobile",
    heroDesc: "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍កម្មវិធី Full-Stack ដែលមានបទពិសោធន៍ខ្ពស់ក្នុងការបង្កើតកម្មវិធីគេហទំព័រ កម្មវិធីទូរស័ព្ទ បច្ចេកវិទ្យា Blockchain ប្រព័ន្ធ AI និងប្រព័ន្ធ Cloud។ ជំនាញច្បាស់លាស់រួមមាន React, React Native, Laravel, Node.js, Supabase, Web3 និងការបញ្ចូល AI។",
    resumeBtn: "ទាញយកប្រវត្តិរូប (Resume)",
    hireBtn: "ទាក់ទងការងារ",
    projectsBtn: "មើលគម្រោងនានា",
    contactBtn: "ផ្ញើសារមកខ្ញុំ",
    aboutTitle: "អំពីខ្ញុំ",
    yearsExp: "ឆ្នាំនៃបទពិសោធន៍",
    projComp: "គម្រោងដែលបានបញ្ចប់",
    happyCli: "អតិថិជនសប្បាយចិត្ត",
    techMast: "បច្ចេកវិទ្យាស្ទាត់ជំនាញ",
    skillsTitle: "ជំនាញស្នូល",
    skillsDesc: "រៀបចំឡើងជាក្រុមតាមប្រភេទបច្ចេកវិទ្យានិងកម្រិតស្ទាត់ជំនាញច្បាស់លាស់។",
    expTitle: "ប្រវត្តិនៃការងារ",
    projectsTitle: "គម្រោងលេចធ្លោ",
    servicesTitle: "សេវាកម្មជំនាញ",
    testimonialsTitle: "មតិពីអតិថិជន",
    achievementsTitle: "សមិទ្ធផលសំខាន់ៗ",
    blogTitle: "អត្ថបទចំណេះដឹង",
    contactFormTitle: "ចាប់ផ្តើមកិច្ចសហការ",
    aiTwinDockTitle: "ភ្នាក់ងារ AI ជំនួយការរបស់ សេងហាក់",
    aiTwinIntro: "សួរមកកាន់ AI Twin របស់ខ្ញុំអំពីគម្រោងការណ៍ សមត្ថភាព ឬទាក់ទងនឹងការងារដោយប្រើប្រាស់ថាមពល AI Gemini!",
    placeholderName: "ឈ្មោះពេញរបស់អ្នក",
    placeholderEmail: "អាសយដ្ឋានអ៊ីមែល",
    placeholderPhone: "លេខទូរស័ព្ទ (មិនបង្ខំ)",
    placeholderSubject: "ប្រធានបទ",
    placeholderMessage: "សរសេរសេចក្តីសង្ខេបគម្រោងរបស់អ្នកនៅទីនេះ...",
    sendBtn: "ផ្ញើសារឥឡូវនេះ",
    sendingBtn: "កំពុងផ្ញើសារ...",
    successMsg: "ការផ្ញើសារបានជោគជ័យ! សូមអានការឆ្លើយតបស្វ័យប្រវត្តដែលបង្កើតដោយ AI Twin:",
    mapsTitle: "ទីតាំងការិយាល័យ",
    locationDetail: "ភ្នំពេញ, ព្រះរាជាណាចក្រកម្ពជា",
    all: "គម្រោងទាំងអស់"
  }
};
