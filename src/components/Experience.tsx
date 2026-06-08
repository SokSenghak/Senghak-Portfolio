import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS, EXPERIENCE_DATA } from "../data";

interface ExperienceProps {
  lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
  const t = TRANSLATIONS[lang];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            {lang === "EN" ? "JOURNEY" : "ដំណើរការងារ"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white"
          >
            {t.expTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Elegant Timeline Construct */}
        <div className="relative max-w-3xl mx-auto border-l border-slate-200 dark:border-slate-800 pl-6 sm:pl-10 space-y-12">
          
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              id={`experience-timeline-node-${exp.id}`}
              key={exp.id}
              initial={{ opacity: 0, x: -40, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.55, type: "spring", stiffness: 110 }}
              className="relative"
            >
              
              {/* Timeline Bullet Anchor */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-slate-100 dark:ring-slate-950 text-white shadow-sm">
                <Briefcase size={11} />
              </span>

              {/* Body Card */}
              <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-slate-900 dark:text-white tracking-wide">{exp.role}</h3>
                    <p className="font-sans text-xs font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 font-mono text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><Calendar size={11} /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} /> {exp.location}</span>
                  </div>
                </div>

                {/* Checklist Bullet Points */}
                <ul className="space-y-2.5 text-left">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
