"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageSquare, ShieldCheck, HelpCircle, MapPin, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What is your primary professional focus and background?",
    a: "I am a Data Analyst specializing in Business Intelligence, Machine Learning, and Predictive Analytics. I graduated with an Informatics degree (S.Kom, GPA 3.86 / 4.00) from Universitas Samudra, with hands-on experience in regression modeling, time-series forecasting, and Microsoft Excel dashboards.",
  },
  {
    q: "What tools and technologies do you use in analytics workflows?",
    a: "My primary analytics stack includes Python (Pandas, NumPy, Scikit-learn, PyTorch), SQL (MySQL, SQLite), and Microsoft Excel (Pivot Tables, Advanced Slicers, Data Cleansing). For Business Intelligence and reporting, I work with Streamlit, Plotly, and Chart.js, with supporting web implementation skills in Flask and Laravel.",
  },
  {
    q: "How do you approach business problems with data?",
    a: "I follow an end-to-end analytical workflow: Understand the operational objective → Collect relevant data → Prepare and clean the dataset with strict data leakage safeguards → Explore trends and relationships → Apply statistical or machine learning models (e.g., constrained SGD, LSTM) when needed → Communicate clear findings via interactive dashboards and structured recommendations.",
  },
  {
    q: "What types of roles or projects are you currently open to?",
    a: "I am open to full-time Data Analyst, Business Intelligence, and Machine Learning roles, as well as data consulting and freelance analytics projects.",
  },
];

function FaqItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-left gap-2"
      >
        <h4 className="text-xs font-bold text-foreground leading-snug">{faq.q}</h4>
        {open ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground shrink-0" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-3 text-[11px] text-muted-foreground leading-relaxed font-light">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", org: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest font-mono">
          Direct Contact
        </span>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="mt-4 text-lg text-muted-foreground font-light leading-relaxed">
          Interested in data analytics, business intelligence, or data-driven projects? Let&apos;s connect.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-5 items-start">
        {/* Contact Form panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-indigo-500" />
            Send a Direct Message
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-4 ring-emerald-500/20">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h4 className="text-base font-bold text-foreground">Message Dispatched</h4>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                Thank you. Your message has been received. I will respond to your email address shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-indigo-500 hover:underline font-mono"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-bold text-muted-foreground uppercase font-mono">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-muted-foreground uppercase font-mono">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-org" className="text-xs font-bold text-muted-foreground uppercase font-mono">
                  Organization / Company
                </label>
                <input
                  id="contact-org"
                  type="text"
                  value={formState.org}
                  onChange={(e) => setFormState({ ...formState, org: e.target.value })}
                  placeholder="Enterprise Inc."
                  className="w-full h-10 px-3.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-msg" className="text-xs font-bold text-muted-foreground uppercase font-mono">
                  Message *
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={5}
                  value={formState.msg}
                  onChange={(e) => setFormState({ ...formState, msg: e.target.value })}
                  placeholder="Share details regarding data opportunities, analytics projects, or inquiries..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow transition-all hover:scale-[1.01] active:scale-[0.99] hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Sidebar panels & FAQs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 space-y-6"
        >
          {/* Direct Coordinates */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3">
              Direct Coordinates
            </h3>
            <div className="space-y-3.5 text-xs text-muted-foreground font-mono">
              <a href="mailto:mhdfarid1811@gmail.com" className="flex items-center gap-3.5 hover:text-foreground transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="truncate">mhdfarid1811@gmail.com</span>
              </a>

              <a href="https://github.com/farid1811" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 hover:text-foreground transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </div>
                <span>github.com/farid1811</span>
              </a>

              <a href="https://www.linkedin.com/in/muhammad-farid-fitriansyah-53527a249" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 hover:text-foreground transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500/20 transition-colors shrink-0">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </div>
                <span>linkedin.com/in/farid-fitriansyah</span>
              </a>

              <a href="https://wa.me/6281362015571" target="_blank" rel="noreferrer" className="flex items-center gap-3.5 hover:text-foreground transition-colors group">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">WhatsApp (+62 813-6201-5571)</span>
              </a>

              <div className="flex items-center gap-3.5 pt-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>P.Brandan, Sumatra Utara, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Availability status */}
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase font-mono tracking-wider">
                Open for Opportunities
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Available for Data Analyst, Business Intelligence, and Machine Learning positions and consulting projects.
            </p>
          </div>

          {/* FAQS Accordion */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-bold text-foreground font-mono uppercase tracking-wider border-b border-border pb-3 flex items-center gap-1.5 mb-2">
              <HelpCircle className="h-4 w-4 text-indigo-500" />
              Frequently Asked Questions
            </h3>
            <div>
              {faqs.map((faq) => (
                <FaqItem key={faq.q} faq={faq} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
