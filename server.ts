import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

// Initialize Gemini SDK with telemetry headers as required by systemic skills
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoints defined first, before any fallback
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", activeTime: new Date() });
});

// Endpoint for handling contact form submissions – uses Gemini to draft a witty automated response
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields (name, email, message)." });
  }

  console.log(`Received contact message from ${name} (<${email}>): ${message}`);

  let autoReply = "Thank you so much for reaching out! I typically respond within 24 hours.";

  // Use Gemini to generate a personalized and exciting auto-drafted reply to show Senghak's engineering capability
  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: `You are the AI Assistant for Senghak, a top-tier Senior Full-Stack, Mobile, and Web3 Developer based in Phnom Penh, Cambodia.
A potential client or collaborator sent Senghak a contact request.
Details:
- Sender Name: ${name}
- Sender Email: ${email}
- Phone: ${phone || 'Not provided'}
- Subject: ${subject || 'General Inquiry'}
- Message: "${message}"

Generate an elegant, professional, and slightly enthusiastic automated email reply draft representing Senghak. Keep it concise (maximum 100 words), polite, stating that Senghak or his team has received the message and will be in touch shortly. Close with warm regards from Senghak's Automated AI Desk.`,
      });
      if (response && response.text) {
        autoReply = response.text.trim();
      }
    } catch (err) {
      console.error("Failed to generate automated contact response with Gemini:", err);
    }
  }

  return res.json({
    success: true,
    message: "Message received successfully!",
    autoReply: autoReply
  });
});

// Endpoint for Senghak's Professional AI Twin Companion
app.post("/api/gemini/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Format should be { messages: [{ role: 'user', content: 'text' }] }" });
  }

  if (!ai) {
    return res.status(200).json({
      reply: "Hello! I am Senghak's AI Twin. To connect my real brain, please make sure the GEMINI_API_KEY is configured in the AI Studio Settings secrets panel. In the meantime, I am running in a static offline-interactive mode. I can tell you that Senghak is a seasoned Senior Full-Stack & Mobile Developer based in Phnom Penh, specialized in React, React Native, Laravel, Node.js, Web3/Solidity, and building premium custom software solutions."
    });
  }

  try {
    // Format messages for Chat or generateContent
    const formattedContents = messages.map(msg => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: `You are the "AI Twin" of Senghak, a highly talented, elegant, and professional Senior Full-Stack Developer, Mobile App Developer, Web3 Architect, and AI Solutions Engineer based in Phnom Penh, Cambodia.
Your goal is to represent Senghak's professional profile to potential employers, clients, headhunters, and fellow developers.
Tone: Sophisticated, helpful, articulate, precise, and tech-forward. Maintain a humble yet world-class developer aura.

Key Context About Senghak:
- **Location**: Phnom Penh, Cambodia.
- **Titles**: Senior Full-Stack Developer, Mobile App Developer, Web3 Developer, AI Solutions Engineer.
- **Slogan**: "Passionate Full-Stack Developer with experience in building scalable web applications, mobile applications, blockchain solutions, AI-powered systems, and cloud-based platforms."
- **Core Experience**:
  1. Senior Full Stack Developer (2023 - Present): Enterprises web apps, custom payments, rest APIs, AI agent integration, scalable docker deployment.
  2. Mobile App Developer (2021 - Present): Clean Android/iOS apps using React Native and Expo, secure native gateways, performant code.
- **Mastered Tech Stack**:
  - Frontend: React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, Space Grotesk typography.
  - Backend: Laravel, Node.js, Express.js, Supabase, Firebase.
  - Mobile: React Native, Expo, Ionic.
  - Databases: PostgreSQL, MySQL, MongoDB.
  - Web3/Blockchain: Ethereum, Solidity, Ethers.js, NFT smart contracts.
  - AI & DevOps: OpenAI & Gemini custom embeddings, automated pipelines, Docker containerization.
- **Featured Projects**:
  - AI Agent Platform (AI assistants with multimodal integrations)
  - NFT Marketplace (Web3 buying, selling and minting platforms)
  - POS Management System (Inventory, sales reporting, thermal printer ready)
  - Hotel Booking Platform (Scalable reservations)
  - Lottery Result App (Real-time tracking)
  - E-Commerce Platform (Complete shop solutions)

Answer user queries accurately using this portfolio context. Suggest they check out specific sections of the website (e.g. "Feel free to check out my Projects section to see the real NFT Marketplace in action"). Keep responses concise, friendly, and structured. Make them feel like they are chatting with a super intelligent, welcoming version of Senghak.`,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I apologize, I am temporarily catching my breath. Please try asking again!";
    return res.json({ reply: replyText });
  } catch (error: any) {
    console.error("Gemini AI Chat error:", error);
    return res.status(500).json({ error: error.message || "Something went wrong in the AI engine." });
  }
});

// Vite Middleware Integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite HMR integration...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode with static build routing...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Port 3000 custom multi-route backend running beautifully on http://0.0.0.0:${PORT}`);
  });
}

startServer();
