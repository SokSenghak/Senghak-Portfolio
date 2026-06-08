import React from "react";
import { motion } from "motion/react";
import { Award, Zap, HeartHandshake, Milestone, Cpu } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";

interface AchievementsProps {
  lang: Language;
}

export default function Achievements({ lang }: AchievementsProps) {
  const t = TRANSLATIONS[lang];

  const highlights = [
    { value: "100+", label: lang === "EN" ? "Projects Completed" : "គម្រោងដែលបានបញ្ចប់", desc: "Enterprise layers and mobile apps published worldwide.", icon: <Award className="text-blue-500" size={20} /> },
    { value: "50+", label: lang === "EN" ? "Happy Clients" : "អតិថិជនសប្បាយចិត្ត", desc: "Corporate nodes, founders, and local Cambodian brands.", icon: <HeartHandshake className="text-pink-500" size={20} /> },
    { value: "5+", label: lang === "EN" ? "Years Experience" : "ឆ្នាំនៃបទពិសោធន៍", desc: "Active development in modern agile squads.", icon: <Milestone className="text-indigo-500" size={20} /> },
    { value: "20+", label: lang === "EN" ? "Technologies Mastered" : "បច្ចេកវិទ្យាស្ទាត់ជំនាញ", desc: "Front-to-back structures and blockchain scripts.", icon: <Cpu className="text-amber-500" size={20} /> },
    { value: "99%", label: lang === "EN" ? "Client Satisfaction" : "ភាគរយអតិថិជនពេញចិត្ត", desc: "Superb ratings, on-time launches, clear reports.", icon: <Zap className="text-emerald-500" size={20} /> }
  ];

  const logos = [
    "React", "Laravel", "Node.js", "Supabase", "PostgreSQL", "MySQL", "Docker", "OpenAI", "Ethereum", "React Native"
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            {lang === "EN" ? "METRICS" : "សូចនាករសមិទ្ធផល"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white"
          >
            {t.achievementsTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Milestone Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {highlights.map((item, idx) => (
            <motion.div
              id={`achievement-metric-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.06, type: "spring", stiffness: 100 }}
              className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-3xl p-6 hover:translate-y-[-2px] transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-xs">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">{item.value}</h3>
                  <h4 className="font-sans text-xs font-extrabold text-slate-800 dark:text-slate-350 leading-tight mt-1">{item.label}</h4>
                </div>
              </div>
              <p className="font-sans text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed mt-4 border-t border-slate-200/40 dark:border-slate-800/40 pt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack scrolling/interactive section */}
        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-16 text-center max-w-5xl mx-auto space-y-8">
          <div className="space-y-1.5Packed">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Engineered with Industry Standards" : "បំពាក់ដោយបច្ចេកវិទ្យាកម្រិតស្ដង់ដារ"}</h4>
            <div className="h-0.5 w-6 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 pt-4">
            {logos.map((logo, idx) => (
              <motion.div
                id={`tech-logo-pill-${logo.toLowerCase().replace(/\s+/g, '-')}`}
                key={logo}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.05 }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.04, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl px-5 py-3 shadow-xs font-mono text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
