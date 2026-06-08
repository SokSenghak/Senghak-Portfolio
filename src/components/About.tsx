import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Code, Smartphone, Cpu, ShieldCheck, Database, Layout, Sparkles, Server } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";

interface AboutProps {
  lang: Language;
}

export default function About({ lang }: AboutProps) {
  const t = TRANSLATIONS[lang];

  // Simple, elegant counting simulation
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [tech, setTech] = useState(0);

  useEffect(() => {
    const duration = 1200; // ms
    const steps = 30;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setYears(Math.min(5, Math.ceil((5 / steps) * step)));
      setProjects(Math.min(100, Math.ceil((100 / steps) * step)));
      setClients(Math.min(50, Math.ceil((50 / steps) * step)));
      setTech(Math.min(20, Math.ceil((20 / steps) * step)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: years, label: t.yearsExp, suffix: "+", color: "text-blue-600 dark:text-blue-400" },
    { value: projects, label: t.projComp, suffix: "+", color: "text-indigo-600 dark:text-indigo-400" },
    { value: clients, label: t.happyCli, suffix: "+", color: "text-violet-600 dark:text-violet-400" },
    { value: tech, label: t.techMast, suffix: "+", color: "text-emerald-600 dark:text-emerald-400" }
  ];

  const pillars = [
    { icon: <Code size={20} />, label: lang === "EN" ? "Full-Stack Development" : "ការអភិវឌ្ឍន៍ Full-Stack", desc: "Crafting end-to-end architectures utilizing React, Node.js, and Laravel, optimized for peak concurrent capacity." },
    { icon: <Smartphone size={20} />, label: lang === "EN" ? "Mobile Development" : "ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ", desc: "Building native iOS and Android apps using React Native and Expo with seamless push notification layers." },
    { icon: <ShieldCheck size={20} />, label: lang === "EN" ? "Blockchain & Web3" : "បច្ចេកវិទ្យា Blockchain & Web3", desc: "Deploying secure Solidity smart contracts and linking interactive frontend interfaces using Ethers.js." },
    { icon: <Sparkles size={20} />, label: lang === "EN" ? "AI & Automation" : "ប្រព័ន្ធ AI & ស្វ័យប្រវត្តកម្ម", desc: "Integrating foundational Gemini & OpenAI model contexts with automated backend background pipelines." },
    { icon: <Cpu size={20} />, label: lang === "EN" ? "API Engineering" : "វិស្វកម្មប្រព័ន្ធ API", desc: "Publishing enterprise-ready, strictly validated RESTful and GraphQL systems with bulletproof typing." },
    { icon: <Server size={20} />, label: lang === "EN" ? "Cloud & DevOps" : "ប្រព័ន្ធ Cloud & DevOps", desc: "Deploying containerized Docker configurations and continuous integration workflows (GitHub Actions)." },
    { icon: <Database size={20} />, label: lang === "EN" ? "Database Architecture" : "ស្ថាបត្យកម្មទិន្នន័យ", desc: "Configuring high-fidelity relational indexing schemas on PostgreSQL, MySQL, and structured MongoDB cache boards." },
    { icon: <Layout size={20} />, label: lang === "EN" ? "UI/UX Implementation" : "ការរចនា UI/UX", desc: "Implementing absolute layout precision inspired by Stripe and Linear with beautiful fluid glassmorphism." }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            {lang === "EN" ? "WHO I AM" : "អំពីខ្លួនខ្ញុំ"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white"
          >
            {t.aboutTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Counter Stats Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              id={`about-stat-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 120 }}
              className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className={`font-display text-4xl sm:text-5xl font-extrabold ${stat.color} mb-1 flex items-center justify-center`}>
                <span>{stat.value}</span>
                <span className="text-2xl font-bold align-super ml-0.5">{stat.suffix}</span>
              </div>
              <p className="font-sans text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              id={`bento-pillar-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.06, type: "spring", stiffness: 100 }}
              className="group relative rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900/60 p-6 shadow-sm hover:border-blue-500/20 dark:hover:border-blue-500/10 hover:shadow-md transition-all"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {pillar.icon}
              </div>
              <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-2">{pillar.label}</h4>
              <p className="font-sans text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
