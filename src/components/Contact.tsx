import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, Sparkles, AlertCircle, CheckCircle2, RefreshCw } from "lucide-react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";

interface ContactProps {
  lang: Language;
}

export default function Contact({ lang }: ContactProps) {
  const t = TRANSLATIONS[lang];

  // Forms states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [replyDraft, setReplyDraft] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg(lang === "EN" ? "Please fill out all required fields." : "សូមបំពេញព័ត៌មានដែលចាំបាច់ទាំងអស់។");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccess(false);
    setReplyDraft("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setReplyDraft(data.autoReply);
        // Clear fields
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.error || "Failed payload");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg(lang === "EN" ? "Unable to transmit message. Please check connection and try again." : "មិនអាចផ្ញើសារបានទេ។ សូមពិនិត្យមើលការតភ្ជាប់ម្តងទៀត។");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors">
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
            {lang === "EN" ? "GET IN TOUCH" : "ទាក់ទងមកខ្ញុំ"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="font-display text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white"
          >
            {t.contactFormTitle}
          </motion.h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column info & map */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            
            <div className="space-y-6">
              <h3 className="font-display text-lg font-extrabold text-slate-900 dark:text-white tracking-wide">{lang === "EN" ? "Contact Information" : "ព័ត៌មានទំនាក់ទំនង"}</h3>
              <p className="font-sans text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                {lang === "EN" 
                  ? "Are you looking for a Senior Developer to launch an enterprise application or customized Web3 smart contract? Deploy a message below, and my integration pipeline will trigger an instant reply."
                  : "តើអ្នកកំពុងស្វែងរកអ្នកអភិវឌ្ឍន៍ជំនាញដើម្បីបង្កើតកម្មវិធី ឬសរសេរ Web3 Smart Contract ដែរឬទេ? សរសេរសារមកខ្ញុំនៅខាងក្រោមឥឡូវនេះ។"}
              </p>

              {/* Direct channels List */}
              <div className="space-y-3.5 pt-2">
                
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h5 className="font-display text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email Address</h5>
                    <a href="mailto:angkotai456@gmail.com" className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors font-medium">angkotai456@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h5 className="font-display text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Telegram Connect</h5>
                    <a href="https://t.me" target="_blank" rel="noreferrer" className="font-sans text-xs sm:text-sm text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors font-medium">@SenghakDev</a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h5 className="font-display text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Physical Hub</h5>
                    <span className="font-sans text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">{t.locationDetail}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google map iframe */}
            <div className="rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 h-52 sm:h-64 w-full relative shrink-0">
              <iframe
                id="phnom-penh-google-map"
                title="Phnom Penh Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125091.22919429447!2d104.81180295325881!3d11.547169400262142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab52545!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>

          </motion.div>

          {/* Right Column / Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="lg:col-span-7 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/40 dark:border-slate-800/60 rounded-3xl p-6 sm:p-10 text-left"
          >
            <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Full Name" : "ឈ្មោះ​ពេញ"} <span className="text-pink-500">*</span></label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.placeholderName}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm font-sans focus:border-blue-500 focus:outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Email Address" : "អាសយដ្ឋានអ៊ីមែល"} <span className="text-pink-500">*</span></label>
                  <input
                    id="contact-form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.placeholderEmail}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm font-sans focus:border-blue-500 focus:outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Phone (Optional)" : "លេខទូរស័ព្ទ"}</label>
                  <input
                    id="contact-form-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t.placeholderPhone}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm font-sans focus:border-blue-500 focus:outline-none dark:text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Subject" : "ប្រធានបទ"} <span className="text-pink-500">*</span></label>
                  <input
                    id="contact-form-subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.placeholderSubject}
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm font-sans focus:border-blue-500 focus:outline-none dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">{lang === "EN" ? "Briefing Message" : "ខ្លឹមសារសារ"} <span className="text-pink-500">*</span></label>
                <textarea
                  id="contact-form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.placeholderMessage}
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-xs sm:text-sm font-sans focus:border-blue-500 focus:outline-none dark:text-white"
                ></textarea>
              </div>

              {/* Error warning box */}
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex gap-2 items-center">
                  <AlertCircle size={15} className="shrink-0 animate-bounce" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Action Button trigger */}
              <button
                id="contact-form-submit"
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-sans text-xs font-semibold text-white shadow-md hover:opacity-95 flex items-center justify-center gap-2 transition-opacity cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw size={13} className="animate-spin" />
                    <span>{t.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send size={13} />
                    <span>{t.sendBtn}</span>
                  </>
                )}
              </button>

            </form>

            {/* AI Auto-reply preview container */}
            <AnimatePresence>
              {success && (
                <motion.div
                  id="ai-auto-reply-box"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="mt-6 border border-emerald-500/20 dark:border-emerald-500/10 bg-emerald-500/5 rounded-2xl p-5 sm:p-6"
                >
                  <div className="flex gap-2.5 items-center text-emerald-600 dark:text-emerald-400 mb-2.5 font-display text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 size={16} className="shrink-0" />
                    <span>{t.successMsg}</span>
                  </div>
                  <div className="glass-panel p-4 rounded-xl border-white/40 dark:border-slate-800 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-350 leading-relaxed shadow-xs flex gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                      <Sparkles size={12} className="animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-[10px] text-slate-400 dark:text-slate-500">{lang === "EN" ? "AI DESCIPTION AUTO REPLIER" : "សេចក្តីព្រាងឆ្លើយតបដោយភ្នាក់ងារ AI"}</p>
                      <p className="italic whitespace-pre-wrap">"{replyDraft}"</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
