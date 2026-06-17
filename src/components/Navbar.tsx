import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Language, Theme } from "../types";
import { PROJECT_AVATAR_PATH, TRANSLATIONS } from "../data";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}

export default function Navbar({ lang, setLang, theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: lang === "EN" ? "About" : "អំពីខ្ញុំ", href: "#about" },
    { name: lang === "EN" ? "Skills" : "ជំនាញស្នូល", href: "#skills" },
    { name: lang === "EN" ? "Experience" : "ប្រវត្តិការងារ", href: "#experience" },
    { name: lang === "EN" ? "Projects" : "គម្រោង", href: "#projects" },
    { name: lang === "EN" ? "Services" : "សេវាកម្ម", href: "#services" },
    { name: lang === "EN" ? "Achievements" : "សមិទ្ធផល", href: "#achievements" },
    { name: lang === "EN" ? "Blog" : "អត្ថបទ", href: "#blog" },
    { name: lang === "EN" ? "Contact" : "ទំនាក់ទំនង", href: "#contact" }
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md/10 border-b border-slate-100 dark:border-slate-800/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <motion.a
            id="nav-logo"
            href="#hero"
            className="flex items-center gap-1.5 focus:outline-none"
            whileHover={{ scale: 1.02 }}
          >
            <div className="h-9 w-9 overflow-hidden rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 shadow-md">
              <img
                src={PROJECT_AVATAR_PATH}
                alt="Senghak profile"
                className="h-full w-full rounded-[10px] object-cover object-center"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white flex items-center gap-1">
              Senghak<span className="text-blue-600 font-extrabold">.</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 roundedbg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50">Dev</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                id={`nav-link-${item.href.replace('#', '')}`}
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 rounded-lg font-sans text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Global Operations (Theme, Lang, Mobile Menu) */}
          <div className="flex items-center gap-2">
            
            {/* Language Selector Selector */}
            <div className="relative flex items-center bg-slate-100/80 dark:bg-slate-800/80 rounded-lg p-0.5 border border-slate-200/40 dark:border-slate-700/30">
              <button
                id="lang-btn-en"
                onClick={() => setLang("EN")}
                className={`px-2 py-1 font-mono text-[10px] font-bold rounded-md transition-colors cursor-pointer ${
                  lang === "EN"
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                }`}
              >
                EN
              </button>
              <button
                id="lang-btn-kh"
                onClick={() => setLang("KH")}
                className={`px-2 py-1 font-mono text-[10px] font-bold rounded-md transition-colors cursor-pointer ${
                  lang === "KH"
                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300"
                }`}
              >
                KH Khmer
              </button>
            </div>

            {/* Dark Mode Icon Switcher */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Mobile Expand Toggle Button */}
            <button
              id="mobile-menu-burger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200/40 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 md:hidden hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              {mobileMenuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="flex items-center gap-3 px-4 py-3">
                <img
                  src={PROJECT_AVATAR_PATH}
                  alt="Senghak profile"
                  className="h-11 w-11 rounded-xl object-cover object-center ring-2 ring-blue-500/30"
                />
                <div>
                  <p className="font-display text-sm font-bold text-slate-950 dark:text-white">Senghak Developer</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-blue-600 dark:text-blue-400">Full-Stack Dev</p>
                </div>
              </div>
              {navItems.map((item) => (
                <a
                  id={`mobile-nav-link-${item.href.replace('#', '')}`}
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-sans text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
