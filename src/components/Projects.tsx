import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Filter, ExternalLink, Github, ZoomIn, X, ThumbsUp, Code, Laptop } from "lucide-react";
import { Project, Language } from "../types";
import { TRANSLATIONS, PROJECT_DATA } from "../data";

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const t = TRANSLATIONS[lang];
  const [filter, setFilter] = useState<string>("All");
  const [expandedProject, setExpandedProject] = useState<Project | null>(null);

  const categories = ["All", "Web", "Mobile", "Blockchain", "AI", "Full Stack"];

  const filteredProjects = filter === "All"
    ? PROJECT_DATA
    : PROJECT_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
          >
            {lang === "EN" ? "PORTFOLIO" : "កម្រងស្នាដៃ"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            {t.projectsTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/60 p-1 rounded-2xl shadow-sm">
          {categories.map((cat) => (
            <button
              id={`projects-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                filter === cat
                  ? "bg-slate-900 dark:bg-slate-850 text-white shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40"
              }`}
            >
              {cat === "All" ? t.all : cat}
            </button>
          ))}
        </div>

        {/* Project Layout Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.08, type: "spring", stiffness: 100 }}
                key={project.id}
                className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/10 transition-all cursor-pointer"
                onClick={() => setExpandedProject(project)}
              >
                
                {/* Hero Thumbnail banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">{project.category}</span>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 flex items-center justify-center backdrop-blur-[2px] transition-all">
                    <span className="flex items-center gap-1.5 bg-white text-slate-900 rounded-full px-4 py-1.5 font-sans text-xs font-bold shadow-md"><ZoomIn size={13} /> {lang === "EN" ? "Explore Details" : "លម្អិតគម្រោង"}</span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white tracking-wide">{project.name}</h3>
                    <p className="font-sans text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Badges tech list */}
                  <div className="flex flex-wrap gap-1 pb-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-mono text-[9px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded px-1.5 py-0.5 border border-slate-200/50 dark:border-slate-700/50">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="font-mono text-[9px] font-semibold bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 rounded px-1.5 py-0.5 border border-blue-100 dark:border-blue-900/20">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Actions Links inside card */}
                  <div className="flex gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60" onClick={(e) => e.stopPropagation()}>
                    <a
                      id={`project-demo-btn-${project.id}`}
                      href={project.demoUrl}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(lang === "EN" ? `Launching full-stack client gateway for: ${project.name}` : `កំពុងដំណើរការគម្រោង៖ ${project.name}`);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 font-sans text-[11px] font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      <ExternalLink size={12} />
                      {lang === "EN" ? "Demo" : "កម្មវិធីគំរូ"}
                    </a>
                    <a
                      id={`project-git-btn-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github size={14} />
                    </a>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Expand Drawer Modal Popup */}
        <AnimatePresence>
          {expandedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                id="project-depth-modal"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                
                {/* Image Banner Header */}
                <div className="relative h-64 sm:h-72 w-full shrink-0">
                  <img
                    src={expandedProject.image}
                    alt={expandedProject.name}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                  
                  {/* Close floating button */}
                  <button
                    id="close-project-modal"
                    onClick={() => setExpandedProject(null)}
                    className="absolute top-4 right-4 rounded-full p-2 bg-slate-950/50 hover:bg-slate-950/70 text-white backdrop-blur-sm transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  {/* Title labels overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                    <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">{expandedProject.category}</span>
                    <h3 className="font-display text-lg sm:text-2xl font-black mt-1.5 tracking-wide">{expandedProject.name}</h3>
                  </div>
                </div>

                {/* Modal scrollable details */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Architecture Study" : "ព័ត៌មានលម្អិតស្ថាបត្យកម្ម"}</h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed whitespace-pre-wrap">{expandedProject.longDescription}</p>
                  </div>

                  {/* Functional highlights */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Core Capabilities" : "មុខងារនិងសមត្ថភាពស្នូល"}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {expandedProject.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-950/35 border border-slate-100 dark:border-slate-800/40 rounded-xl p-3">
                          <Code size={13} className="text-blue-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete tags */}
                  <div className="space-y-2.5">
                    <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Framework Library Matrix" : "ក្របខ័ណ្ឌនិងបណ្ណាល័យដែលប្រើ"}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {expandedProject.tags.map((tag) => (
                        <span key={tag} className="font-mono text-[9px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded px-2.5 py-1 border border-slate-200/50 dark:border-slate-700/50">{tag}</span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Actions bottom bar */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500">
                    <ThumbsUp size={14} className="animate-bounce" />
                    <span className="font-sans text-[10px] font-semibold tracking-wider uppercase">{lang === "EN" ? "Approved" : "គាំទ្រ"}</span>
                  </div>
                  <div className="flex gap-2.5">
                    <button
                      id="project-depth-demo"
                      onClick={() => alert(lang === "EN" ? `Deploying demo sandbox instance for: ${expandedProject.name}` : `កំពុងរៀបចំប្រព័ន្ធគំរូ៖ ${expandedProject.name}`)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-sans text-xs font-semibold text-white shadow-md active:scale-95 cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      {lang === "EN" ? "Launch Demo" : "ដំណើរការសាកល្បង"}
                    </button>
                    <a
                      id="project-depth-git"
                      href={expandedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                    >
                      <Github size={15} />
                    </a>
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
