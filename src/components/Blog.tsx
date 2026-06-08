import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight, X, Heart } from "lucide-react";
import { BlogPost, Language } from "../types";
import { TRANSLATIONS, BLOG_DATA } from "../data";

interface BlogProps {
  lang: Language;
}

export default function Blog({ lang }: BlogProps) {
  const t = TRANSLATIONS[lang];
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
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
            {lang === "EN" ? "PUBLICATIONS" : "អត្ថបទបច្ចេកវិទ្យា"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.blogTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Blog layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {BLOG_DATA.map((post, idx) => (
            <motion.article
              id={`blog-card-${post.id}`}
              key={post.id}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, type: "spring", stiffness: 110 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setReadingPost(post)}
              className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer text-left"
            >
              
              <div className="space-y-4">
                {/* Photo banner */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">{post.category}</span>
                </div>

                {/* Info parameters */}
                <div className="px-5 space-y-2">
                  <div className="flex items-center gap-3 font-mono text-[9px] text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-wide leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="font-sans text-xs text-slate-550 dark:text-slate-400 line-clamp-2 leading-relaxed">{post.summary}</p>
                </div>
              </div>

              {/* Action read button */}
              <div className="p-5 pt-3 border-t border-slate-100 dark:border-slate-805/60 mt-4 flex justify-between items-center bg-slate-50/50 dark:bg-slate-950/20">
                <span className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-slate-700 dark:text-slate-350">{lang === "EN" ? "Read Article" : "អានអត្ថបទ"}</span>
                <div className="rounded-full bg-slate-100 dark:bg-slate-805 text-slate-650 p-1.5 group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowRight size={12} /></div>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Dynamic Modal Reading Box */}
        <AnimatePresence>
          {readingPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm">
              <motion.div
                id="blog-reading-modal"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                
                {/* Image layout overlay */}
                <div className="relative h-56 sm:h-64 w-full shrink-0">
                  <img
                    src={readingPost.image}
                    alt={readingPost.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  
                  {/* Close floating button */}
                  <button
                    id="close-reading-modal"
                    onClick={() => setReadingPost(null)}
                    className="absolute top-4 right-4 rounded-full p-2 bg-slate-950/50 hover:bg-slate-950/70 text-white backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">{readingPost.category}</span>
                    <h3 className="font-display text-base sm:text-xl font-bold mt-1.5 tracking-wide leading-tight">{readingPost.title}</h3>
                  </div>
                </div>

                {/* Article Info details */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950/45 border-b border-slate-100 dark:border-slate-850/60 shrink-0 flex gap-4 text-[10px] sm:text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {lang === "EN" ? "Released" : "ថ្ងៃចេញផ្សាយ"}៖ {readingPost.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {lang === "EN" ? "Read Time" : "ពេលវេលាអាន"}៖ {readingPost.readTime}</span>
                </div>

                {/* Core scrollable article text content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
                  <div className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-350 leading-relaxed space-y-4">
                    <p className="font-extrabold text-slate-900 dark:text-white mb-4 text-xs sm:text-base italic">"{readingPost.summary}"</p>
                    <p>{readingPost.content}</p>
                    <p>{lang === "EN" 
                      ? "As technology stacks progress rapidly, adopting solid continuous testing setups alongside automated pipelines lets teams push new features safely without disrupting existing systems. Maintain strict type declarations across your routes to keep bugs entirely out of your integration stages."
                      : "ស្របពេលដែលបច្ចេកវិទ្យាមានការរីកចម្រើនយ៉ាងរហ័ស ការរៀបចំប្រព័ន្ធតេស្តសាកល្បងស្វ័យប្រវត្តរួមជាមួយ continuous pipelines ជួយឱ្យក្រុមការងារអាចបញ្ចេញមុខងារថ្មីៗបានយ៉ាងមានសុវត្ថិភាព។ សូមប្រើយន្តការប្រកាសកូដ type-safe ឱ្យបានខ្ជាប់ខ្ជួនដើម្បីជៀសវាងបញ្ហាកូដផ្សេងៗ។"}</p>
                  </div>
                </div>

                {/* Action footer */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950/45 border-t border-slate-200/50 dark:border-slate-800/60 flex justify-between items-center shrink-0">
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                    <Heart size={14} className="fill-slate-400" />
                    <span className="font-mono text-[9px] uppercase tracking-wider">Senghak Series</span>
                  </div>
                  <button
                    id="close-reading-modal-btn"
                    onClick={() => setReadingPost(null)}
                    className="px-5 py-2 rounded-xl bg-slate-900 dark:bg-slate-850 hover:opacity-90 font-sans text-xs font-semibold text-white cursor-pointer"
                  >
                    {lang === "EN" ? "Close Read" : "បិទការអាន"}
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
