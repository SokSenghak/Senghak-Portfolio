import React from "react";
import { Code2, Github, Linkedin, Facebook, Send, Mail } from "lucide-react";
import { Language } from "../types";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: lang === "EN" ? "Web Solutions" : "កម្មវិធីគេហទំព័រ", href: "#services" },
    { name: lang === "EN" ? "Mobile Development" : "កម្មវិធីទូរស័ព្ទដៃ", href: "#services" },
    { name: lang === "EN" ? "REST/GraphQL APIs" : "សំណង់ប្រព័ន្ធ APIs", href: "#services" },
    { name: lang === "EN" ? "Web3 Smart Contracts" : "កិច្ចសន្យា Web3", href: "#services" },
    { name: lang === "EN" ? "AI Integration" : "ដំណោះស្រាយ AI", href: "#services" }
  ];

  const quickLinks = [
    { name: lang === "EN" ? "About Me" : "អំពីខ្ញុំ", href: "#about" },
    { name: lang === "EN" ? "My Capabilities" : "ជំនាញស្នូល", href: "#skills" },
    { name: lang === "EN" ? "Career Path" : "ប្រវត្តិការងារ", href: "#experience" },
    { name: lang === "EN" ? "Featured Works" : "ស្នាដៃលេចធ្លោ", href: "#projects" },
    { name: lang === "EN" ? "Publications" : "អត្ថបទចំណេះដឹង", href: "#blog" }
  ];

  return (
    <footer id="main-footer" className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 sm:py-16 text-left transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-white">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Code2 size={16} />
              </div>
              <span>Senghak<span className="text-blue-500 font-extrabold">.</span></span>
            </a>
            <p className="font-sans text-xs leading-relaxed text-slate-400 max-w-sm">
              {lang === "EN" 
                ? "Senior Developer and AI integrator constructing premium, responsive software solutions across desktop and mobile devices. Delivering high performance to fast scaling companies."
                : "អ្នកបង្កើតកម្មវិធីនិងប្រព័ន្ធបច្ចេកវិទ្យាជាន់ខ្ពស់ ដើម្បីផ្តល់ជូននូវដំណោះស្រាយឌីជីថលសមស្រប និងប្រតិបត្តិការរហ័សទាន់ចិត្តសម្រាប់អាជីវកម្មគ្រប់ប្រភេទ។"}
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-300">{lang === "EN" ? "Explorations" : "កាលវិភាគ"}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-sans text-xs hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3.5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-300">{lang === "EN" ? "Domains" : "ជំនាញសេវាកម្ម"}</h4>
            <ul className="space-y-2">
              {services.map((srv) => (
                <li key={srv.name}>
                  <a href={srv.href} className="font-sans text-xs hover:text-white transition-colors">{srv.name}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright & socials */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <p className="font-sans text-xs text-slate-500">
            © {currentYear} Senghak. All rights reserved.
          </p>

          <div className="flex gap-3">
            {[
              { id: "git", icon: <Github size={13} />, href: "https://github.com" },
              { id: "lnk", icon: <Linkedin size={13} />, href: "https://linkedin.com" },
              { id: "fb", icon: <Facebook size={13} />, href: "https://facebook.com" },
              { id: "tg", icon: <Send size={13} />, href: "https://t.me" },
              { id: "mail", icon: <Mail size={13} />, href: "mailto:angkotai456@gmail.com" }
            ].map((social) => (
              <a
                id={`footer-social-${social.id}`}
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-full border border-slate-800 bg-slate-950 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors text-slate-550 shadow-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
