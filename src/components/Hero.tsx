import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Facebook, Send, Mail, Download, ArrowRight, UserCheck, Sparkles, Terminal } from "lucide-react";
import { Language, Theme } from "../types";
import { TRANSLATIONS, PROJECT_AVATAR_PATH } from "../data";
import Lightfall from "./Lightfall";

const DARK_LIGHTFALL_COLORS = ['#3167e3', '#4f46e5', '#8b5cf6'];
const LIGHT_LIGHTFALL_COLORS = ['#93c5fd', '#c7d2fe', '#e8d5ff'];

interface HeroProps {
  lang: Language;
  theme: Theme;
}

export default function Hero({ lang, theme }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const t = TRANSLATIONS[lang];

  const roles = [
    "Senior Full-Stack Developer",
    "Mobile App Developer",
    "Web3 Developer",
    "AI Solutions Engineer"
  ];

  const rolesKh = [
    "អ្នកអភិវឌ្ឍន៍ Full-Stack ជាន់ខ្ពស់",
    "អ្នកបង្កើតកម្មវិធីទូរស័ព្ទដៃ",
    "អ្នកអភិវឌ្ឍន៍ Web3 & Smart Contacts",
    "វិស្វករដំណោះស្រាយបញ្ញាសិប្បនិម្មិត AI"
  ];

  const currentRoles = lang === "EN" ? roles : rolesKh;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % currentRoles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentRoles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      
      {/* Dynamic Glowing Lightfall Shader Background (React Bits) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Lightfall
          colors={theme === "dark" ? DARK_LIGHTFALL_COLORS : LIGHT_LIGHTFALL_COLORS}
          backgroundColor={theme === "dark" ? "#09090b" : "#f8fafc"}
          speed={0.65}
          streakCount={8}
          streakWidth={1.4}
          streakLength={1.1}
          glow={theme === "dark" ? 0.8 : 0.5}
          density={0.7}
          twinkle={0.7}
          zoom={2.0}
          backgroundGlow={0.4}
          opacity={theme === "dark" ? 0.5 : 0.4}
          mouseInteraction={true}
          mouseStrength={0.8}
          mouseRadius={0.6}
        />
        {/* Soft custom fade masks to blend seamlessly into next bento grid layout section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Elegant Tech Bullet Header */}
            <motion.div
              id="hero-tech-pill"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{lang === "EN" ? "Available for Projects" : "ត្រៀមខ្លួនសម្រាប់គម្រោងថ្មីៗ"} &bull; Phnom Penh</span>
            </motion.div>

            {/* Giant Title Typography */}
            <div className="space-y-2">
              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-sans font-medium text-slate-500 dark:text-slate-400 text-lg md:text-xl"
              >
                {t.heroTitle}
              </motion.h4>
              
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
              >
                Senghak <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-500 bg-clip-text text-transparent">Developer</span>
              </motion.h1>

              {/* Dynamic Rotating Sub-titles */}
              <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    id="hero-rotating-role"
                    key={roleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="font-display text-lg sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400"
                  >
                    {currentRoles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* General Bio Introduction */}
            <motion.p
              id="hero-intro-bio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-sans text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-350 max-w-2xl"
            >
              {t.heroDesc}
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3.5 w-full pt-2"
            >
              <a
                id="hero-hire-cta"
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-sans text-xs font-semibold text-white shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 active:translate-y-0 text-center transition-all cursor-pointer"
              >
                <UserCheck size={14} />
                {t.hireBtn}
              </a>
              <a
                id="hero-projects-cta"
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-900 font-sans text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                {t.projectsBtn}
                <ArrowRight size={14} />
              </a>
              <a
                id="hero-download-resume"
                href="#contact" // Points to contact or triggers custom download simulator
                onClick={(e) => {
                  e.preventDefault();
                  alert(lang === "EN" ? "Preparing Resume Download for Senghak (PDF Format). This will complete automatically." : "កំពុងរៀបចំទាញយកប្រវត្តិរូបសង្ខេបរបស់ សេងហាក់ (ជា PDF)។");
                }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 font-sans text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 active:scale-95 transition-all cursor-pointer"
              >
                <Download size={14} />
                {t.resumeBtn}
              </a>
            </motion.div>

            {/* Connect Social Handles */}
            <motion.div
              id="hero-social-handles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/60 w-full"
            >
              <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">{lang === "EN" ? "Connect on" : "ភ្ជាប់ទំនាក់ទំនង"}</span>
              <div className="flex gap-2">
                {[
                  { id: "github", icon: <Github size={15} />, href: "https://github.com", label: "GitHub" },
                  { id: "linkedin", icon: <Linkedin size={15} />, href: "https://linkedin.com", label: "LinkedIn" },
                  { id: "facebook", icon: <Facebook size={15} />, href: "https://facebook.com", label: "Facebook" },
                  { id: "telegram", icon: <Send size={15} />, href: "https://t.me", label: "Telegram" },
                  { id: "email", icon: <Mail size={15} />, href: "mailto:angkotai456@gmail.com", label: "Email" }
                ].map((social) => (
                  <motion.a
                    id={`hero-social-${social.id}`}
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 shadow-sm transition-all"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Column / High Fidelity Portrait Block */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Visual Glass Frame decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden p-3 bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 shadow-2xl"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-950/20 backdrop-blur-md relative border border-white/10">
                <img
                  id="hero-portrait-image"
                  src={PROJECT_AVATAR_PATH}
                  alt="Senghak Headshot"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* floating interactive card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-2 z-20 glass-panel p-4 rounded-xl shadow-lg border border-white/25 max-w-[210px]"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Terminal size={14} />
                </div>
                <div>
                  <h5 className="font-display text-[11px] font-bold text-slate-900 dark:text-white">Senghak.tsx</h5>
                  <p className="font-mono text-[9px] text-blue-600 dark:text-blue-400">mastery === "Senior"</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
