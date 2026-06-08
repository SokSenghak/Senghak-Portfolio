import React, { useState } from "react";
import { motion } from "motion/react";
import { Terminal, Lightbulb, CheckCircle2, Star } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS, SKILL_DATA } from "../data";

interface SkillsProps {
  lang: Language;
}

export default function Skills({ lang }: SkillsProps) {
  const t = TRANSLATIONS[lang];
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            {lang === "EN" ? "ABILITIES" : "សមត្ថភាពបច្ចេកវិទ្យា"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.skillsTitle}
          </motion.h2>
          <p className="font-sans text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
            {t.skillsDesc}
          </p>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {SKILL_DATA.map((group) => (
            <button
              id={`skills-tab-${group.category.replace(/\s+/g, '-').toLowerCase()}`}
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={`px-5 py-2.5 rounded-xl font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === group.category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/10"
                  : "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Displays Selected Tech Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SKILL_DATA.find((g) => g.category === activeCategory)?.skills.map((skill, idx) => (
            <motion.div
              id={`skill-row-${idx}`}
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (idx % 2) * 0.08 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                  <span className="font-display font-bold text-xs uppercase tracking-wide text-slate-800 dark:text-slate-200">{skill.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">{skill.level}%</span>
                </div>
              </div>

              {/* Progress Slider track */}
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full overflow-hidden">
                <motion.div
                  id={`skill-progress-bar-${idx}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.1, ease: "easeOut", delay: 0.1 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                ></motion.div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Highlight Quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-slate-200/40 dark:border-slate-800/60 pt-10">
          <Terminal size={18} className="text-slate-400 mx-auto mb-3" />
          <p className="font-sans italic text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {lang === "EN" 
              ? "\"As an engineer, I design my systems with horizontal scalability, modular architectures, clean state isolation, and absolute code type safety as uncompromised pillars.\""
              : "\"ក្នុងនាមជាវិស្វករអភិវឌ្ឍន៍ម្នាក់ ខ្ញុំតែងតែបង្កើតប្រព័ន្ធដែលមានមាត្រដ្ឋានផ្ដេក ស្ថាបត្យកម្មម៉ូឌុល ការបែងចែកជាក់លាក់ និងសុវត្ថិភាពកម្រិតកូដខ្ពស់ជាសសរទ្រទ្រង់ចម្បង។\""}
          </p>
        </div>

      </div>
    </section>
  );
}
