import React from "react";
import { motion } from "motion/react";
import { Laptop, Smartphone, Cpu, ShieldAlert, Bot, CloudLightning, ArrowRight } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";

interface ServicesProps {
  lang: Language;
}

export default function Services({ lang }: ServicesProps) {
  const t = TRANSLATIONS[lang];

  const list = [
    {
      icon: <Laptop size={22} />,
      title: lang === "EN" ? "Web Development" : "ការអភិវឌ្ឍន៍គេហទំព័រ",
      slogan: "Sleek, fluid dashboards and storefronts",
      desc: lang === "EN" 
        ? "Custom corporate websites, single-page client dashboards, and custom business systems engineered utilizing React, Next.js, and Tailwind CSS. Built to match high aesthetic designs and load instantly."
        : "អភិវឌ្ឍន៍គេហទំព័រអាជីវកម្ម កម្មវិធីគ្រប់គ្រងអាជីវកម្ម និងប្រព័ន្ធគ្រប់គ្រងផ្ទៃក្នុង ដោយប្រើប្រាស់បច្ចេកវិទ្យាទំនើបចុងក្រោយគឺ React, Next.js និង Tailwind CSS ដែលដំណើរការលឿនរហ័ស។"
    },
    {
      icon: <Smartphone size={22} />,
      title: lang === "EN" ? "Mobile App Development" : "ការអភិវឌ្ឍន៍កម្មវិធីទូរស័ព្ទ",
      slogan: "Android & iOS at absolute resolution",
      desc: lang === "EN" 
        ? "Multi-platform user tools written cleanly with React Native. Leverages local on-device caches, push alert engines, biometric checks, and full multi-touch features."
        : "បង្កើតកម្មវិធីទូរស័ព្ទដៃសម្រាប់ប្រព័ន្ធ iOS និង Android ដោយប្រើប្រាស់ React Native និង Expo ដែលមានសមត្ថភាពខ្ពស់ ស្ទាត់ជំនាញ មានប្រព័ន្ធជូនដំណឹង Push Notifications និងប្រើប្រាស់បានទោះគ្មានអ៊ីនធឺណិត។"
    },
    {
      icon: <Cpu size={22} />,
      title: lang === "EN" ? "API Development" : "ការអភិវឌ្ឍន៍ប្រព័ន្ធ API",
      slogan: "Scalable backend connection logs",
      desc: lang === "EN" 
        ? "Structured, gas-optimized REST and GraphQL endpoints built on clean Laravel and Node setups. Fully equipped with type validators, comprehensive JWT authentications, and complete cache layers."
        : "បង្កើត APIs រហ័ស ទ្រទ្រង់ការទិន្នន័យច្រើន និងមានសុវត្ថិភាពខ្ពស់ ល្អឥតខ្ចោះសម្រាប់ការតភ្ជាប់កម្មវិធីផ្សេងៗ (REST APIs, GraphQL APIs, OAuth, JWT Authentication)។"
    },
    {
      icon: <ShieldAlert size={22} />,
      title: lang === "EN" ? "Blockchain Development" : "ដំណោះស្រាយ Blockchain & Web3",
      slogan: "Solidity smart contracts integration",
      desc: lang === "EN" 
        ? "Immutable Solidity contracts, minting gateways, decentralized staking systems, and custom NFT distribution models checked and audited for absolute fund validation."
        : "អភិវឌ្ឍន៍ប្រព័ន្ធស្មុគស្មាញ Blockchain, សរសេរ Solidity Smart Contracts សម្រាប់ NFT Marketplaces, Defi, DAO, Web3, dApps និងការសហការជាមួយកាបូបលុយអេឡិចត្រូនិក។"
    },
    {
      icon: <Bot size={22} />,
      title: lang === "EN" ? "AI Solutions" : "ដំណោះស្រាយបញ្ញាសិប្បនិម្មិត AI",
      slogan: "LLM contextualization engines",
      desc: lang === "EN" 
        ? "Self-healing chatbots, custom agent flows, dynamic email drafts generation, and database-grounded natural language search configurations utilizing Gemini 3.5 architectures."
        : "រៀបចំប្រព័ន្ធឆ្លាតវៃ AI Chatbots, AI Agents, Prompt Engineering, និងបញ្ចូលជំនួយការ AI ទៅក្នុងអាជីវកម្ម ឬប្រព័ន្ធការងាររបស់អ្នកដើម្បីបង្កើនប្រសិទ្ធភាពការងារទ្វេដង។"
    },
    {
      icon: <CloudLightning size={22} />,
      title: lang === "EN" ? "Cloud Deployment" : "ប្រព័ន្ធ Cloud & DevOps",
      slogan: "Bulletproof containers orchestration",
      desc: lang === "EN" 
        ? "Continuous release configurations (CI/CD) with actions pipelines, Docker packaging, SSL setup, and optimal infrastructure hosting on AWS and Google Cloud servers."
        : "រៀបចំប្រព័ន្ធម៉ាស៊ីនបម្រើ Cloud, Docker containers, ការផ្សាយកម្មវិធីស្វ័យប្រវត្តិ (CI/CD workflows, GitHub Actions) និងការពារសុវត្ថិភាពប្រព័ន្ធ Cloud Infrastructure របស់អ្នក។"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 transition-colors">
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
            {lang === "EN" ? "EXPERTISES" : "សេវាកម្មជំនាញ"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white"
          >
            {t.servicesTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((srv, idx) => (
            <motion.div
              id={`service-card-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.08, type: "spring", stiffness: 110 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md transition-all text-left"
            >
              
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-405 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-extrabold text-slate-900 dark:text-white tracking-wide">{srv.title}</h3>
                  <p className="font-sans text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{srv.slogan}</p>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{srv.desc}</p>
              </div>

              {/* Action Trigger Link */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end">
                <a
                  id={`service-cta-btn-${idx}`}
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {lang === "EN" ? "Request Solution" : "ប្រឹក្សាយោបល់គម្រោង"}
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
