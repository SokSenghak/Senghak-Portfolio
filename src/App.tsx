import React, { useState, useEffect } from "react";
import { Language, Theme } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AITwin from "./components/AITwin";

export default function App() {
  const [lang, setLang] = useState<Language>("EN");
  const [theme, setTheme] = useState<Theme>("dark"); // Let's default to dark theme for a premium, slick opening!

  // Apply class adjustments to the document root element to make Tailwind v4 dark modifiers work perfectly
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-blue-600/20 selection:text-blue-500 font-sans transition-colors duration-300">
      
      {/* Frosted Floating Top Menu Bar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Content Layout */}
      <main id="main-content-flow">
        
        {/* Hero Section */}
        <Hero lang={lang} theme={theme} />

        {/* Counters & Domain Highlights */}
        <About lang={lang} />

        {/* Dynamic Skill Bars */}
        <Skills lang={lang} />

        {/* ProfessionalTimeline */}
        <Experience lang={lang} />

        {/* Web, Mobile & Blockchain Filterable Grid */}
        <Projects lang={lang} />

        {/* Specialized Solutions Bento Grid */}
        <Services lang={lang} />

        {/* Key Milestones Metrics */}
        <Achievements lang={lang} />

        {/* Carousel Testimonial Reviews */}
        <Testimonials lang={lang} />

        {/* Articles publications */}
        <Blog lang={lang} />

        {/* Contact Form with real AI automatic email draft replication */}
        <Contact lang={lang} />

      </main>

      {/* Bottom Footer Credits */}
      <Footer lang={lang} />

      {/* Docked AI Twin Chat Companion representing Senghak */}
      <AITwin lang={lang} />

    </div>
  );
}

