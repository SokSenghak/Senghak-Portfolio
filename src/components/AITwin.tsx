import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Bot, User, ArrowUpRight } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AITwinProps {
  lang: Language;
}

export default function AITwin({ lang }: AITwinProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: lang === "EN" 
        ? "Hello! I am Senghak's AI Twin, activated using Gemini 3.5. Ask me anything about my full-stack expertise, mobile applications, Web3 contracts, or availability for contract work!"
        : "សួស្ដី! ខ្ញុំជា AI Twin របស់សេងហាក់។ អ្នកអាចសួរខ្ញុំអំពីជំនាញ Full-Stack, កម្មវិធីទូរស័ព្ទ, Web3, ឬការងារផ្សេងៗបាន!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[lang];

  const quickQuestions = lang === "EN" ? [
    "What is your tech stack?",
    "Tell me about your AI Platform project.",
    "Are you open to remote work?",
    "Do you have Web3 experience?"
  ] : [
    "តើអ្នកប្រើជំនាញអ្វីខ្លះ?",
    "ប្រាប់ខ្ញុំអំពីគម្រោង AI Platform",
    "តើអ្នកទទួលការងារពីចម្ងាយទេ?",
    "តើអ្នកចេះ Web3 ដែរឬទេ?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  // Handle local language change
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1) {
        return [
          {
            role: "assistant",
            content: lang === "EN" 
              ? "Hello! I am Senghak's AI Twin, activated using Gemini 3.5. Ask me anything about my full-stack expertise, mobile applications, Web3 contracts, or availability for contract work!"
              : "សួស្ដី! ខ្ញុំជា AI Twin របស់សេងហាក់។ អ្នកអាចសួរខ្ញុំអំពីជំនាញ Full-Stack, កម្មវិធីទូរស័ព្ទ, Web3, ឬការងារផ្សេងៗបាន!"
          }
        ];
      }
      return prev;
    });
  }, [lang]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = [...messages, userMsg];
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      if (!response.ok) {
        throw new Error("Failed to contact server");
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("AI Twin chat error:", error);
      setMessages(prev => [
        ...prev, 
        { 
          role: "assistant", 
          content: lang === "EN" 
            ? "I encountered a minor network glitch. Double check that the server is running or try again in a moment!" 
            : "ខ្ញុំមានបញ្ហាការតភ្ជាប់បណ្តាញបន្តិចបន្តួច។ សូមព្យាយាមម្តងទៀត!" 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        id="ai-twin-fab"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-sans text-white shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-4.5 w-4.5 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-bold text-white">1</span>
        </span>
        <Bot size={26} className="animate-pulse" />
      </motion.button>

      {/* Chat Dashboard Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-twin-panel"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            className="fixed bottom-24 right-4 z-50 flex h-[580px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 max-sm:right-4 max-sm:left-4 max-sm:w-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 text-white">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold tracking-wide flex items-center gap-1.5">
                    Senghak's AI Twin <Sparkles size={13} className="text-amber-400 animate-bounce" />
                  </h3>
                  <p className="font-sans text-[11px] text-indigo-200/80">Powered by Gemini 3.5 & Node.js</p>
                </div>
              </div>
              <button 
                id="close-ai-twin"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
              {messages.map((msg, idx) => (
                <motion.div
                  id={`chat-msg-${idx}`}
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400"}`}>
                    {msg.role === "user" ? <User size={13} /> : <Bot size={13} />}
                  </div>
                  <div className={`rounded-xl p-3 text-sm leading-relaxed shadow-sm ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"}`}>
                    <p className="whitespace-pre-wrap font-sans">{msg.content}</p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 max-w-[85%] mr-auto">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-indigo-600 animated-pulse">
                    <Bot size={13} />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-3.5 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" style={{ animationDelay: "0ms" }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" style={{ animationDelay: "150ms" }}></span>
                      <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Container */}
            <div className="p-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60 overflow-x-auto whitespace-nowrap flex gap-1.5 no-scrollbar scroll-smooth">
              {quickQuestions.map((q, idx) => (
                <button
                  id={`quick-ask-${idx}`}
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={isLoading}
                  className="rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-1 font-sans text-xs text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all cursor-pointer inline-flex items-center gap-1"
                >
                  {q} <ArrowUpRight size={10} />
                </button>
              ))}
            </div>

            {/* Input Form Footer */}
            <form
              id="ai-twin-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/60"
            >
              <input
                id="ai-twin-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === "EN" ? "Ask something..." : "សួរសំណួរ..."}
                disabled={isLoading}
                className="flex-1 rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-2 text-sm font-sans placeholder-slate-400 dark:placeholder-slate-500 focus:border-indigo-500 focus:outline-none dark:bg-slate-950 dark:text-white"
              />
              <button
                id="ai-twin-submit"
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 disabled:opacity-50 transition-opacity cursor-pointer"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
