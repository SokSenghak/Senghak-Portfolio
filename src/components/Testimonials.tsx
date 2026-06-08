import React, { useState } from "react";
import { motion } from "motion/react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS, TESTIMONIAL_DATA } from "../data";

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = TRANSLATIONS[lang];
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIAL_DATA.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIAL_DATA.length) % TESTIMONIAL_DATA.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
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
            {lang === "EN" ? "ENDORSEMENTS" : "ការវាយតម្លៃខ្ពស់"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.testimonialsTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel slide design */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, type: "spring", stiffness: 90 }}
          className="max-w-4xl mx-auto relative px-4 sm:px-12"
        >
          
          <div className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-3xl p-6 sm:p-12 shadow-sm text-left">
            <Quote size={50} className="absolute top-6 right-6 text-blue-500/5 dark:text-blue-500/10 shrink-0" />
            
            <div className="space-y-6 relative z-10">
              
              {/* Stars rendering */}
              <div className="flex gap-0.5">
                {Array.from({ length: TESTIMONIAL_DATA[activeIndex].rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-amber-400 fill-amber-400 shrink-0" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-sans text-xs sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 italic">
                "{TESTIMONIAL_DATA[activeIndex].text}"
              </p>

              {/* Client Info details */}
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800/60 pt-6">
                <img
                  src={TESTIMONIAL_DATA[activeIndex].photo}
                  alt={TESTIMONIAL_DATA[activeIndex].name}
                  className="h-11 w-11 rounded-full object-cover object-center ring-2 ring-blue-500/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white leading-tight">{TESTIMONIAL_DATA[activeIndex].name}</h4>
                  <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400">
                    {TESTIMONIAL_DATA[activeIndex].position} &bull; <span className="text-blue-600 dark:text-blue-400 font-medium">{TESTIMONIAL_DATA[activeIndex].company}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation sliders buttons */}
          <div className="flex justify-center gap-2.5 mt-8">
            <button
              id="testimonial-prev-btn"
              onClick={prev}
              className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={next}
              className="p-3 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowRight size={16} />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
