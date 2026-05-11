"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Zap, Globe, ShieldCheck } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const differentiators = [
  {
    title: "Certified Zoho Partner Status",
    body: "Pentacloud holds official Zoho Partner certification — giving you access to priority Zoho support, product roadmap insights, and a team that has passed Zoho's technical assessments."
  },
  {
    title: "We Know All 45+ Zoho Apps",
    body: "Most Zoho partners specialise in CRM only. Pentacloud has hands-on implementation experience across the full Zoho ecosystem — CRM, Books, Campaigns, Desk, Projects, and more."
  },
  {
    title: "Zoho + Salesforce Combined",
    body: "We are one of the very few partners in India certified in both Zoho and Salesforce — giving us a unique perspective on CRM strategy and objective platform advice."
  },
  {
    title: "Training That Drives Adoption",
    body: "Implementation without adoption is money wasted. We include role-specific training on your actual Zoho environment in every implementation — ensuring your team uses Zoho confidently."
  },
  {
    title: "GST-Ready Zoho Books Setup",
    body: "As Indian and UAE compliance experts, we configure Zoho Books with full GST compliance — correct tax codes, e-invoicing setup, and HSN/SAC mapping."
  },
  {
    title: "Deep Xero + Zoho Integration",
    body: "As both a Zoho and Xero partner, we specialise in connecting Zoho CRM with Xero accounting — automating invoice creation, payment sync, and financial reporting."
  },
  {
    title: "No Lock-In Contracts",
    body: "Our Zoho engagements run on rolling monthly agreements — no 12-month contracts that trap you. We keep your business by delivering results every month."
  },
  {
    title: "Post Go-Live Dedicated Support",
    body: "Every Zoho implementation includes 30 days of dedicated post-launch support — covering user questions and configuration tweaks after go-live."
  }
];

const ZohoWhyPentacloud = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-[#E8F0F8] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="bg-white p-2 rounded-[48px] shadow-2xl border border-white relative overflow-hidden aspect-square flex items-center justify-center group">
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 alt="Zoho Partnership" 
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-transparent" />
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${CLAY_CARD} absolute -top-8 -right-8 p-6 border-[#1A7FD4]/10 flex items-center gap-4`}
            >
               <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-[#34C98A]">
                  <CheckCircle2 size={24} />
               </div>
               <div>
                  <p className="text-xs font-black text-[#0D1B2A]">Certified Zoho Partner</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Official partner status</p>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${CLAY_CARD} absolute bottom-12 -left-12 p-6 border-amber-100 flex items-center gap-4 hidden md:flex`}
            >
               <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <Zap size={24} />
               </div>
               <div>
                  <p className="text-xs font-black text-[#0D1B2A]">⚡ 48hr Response SLA</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Always available</p>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`${CLAY_CARD} absolute -bottom-8 right-12 p-6 border-blue-100 flex items-center gap-4`}
            >
               <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1A7FD4]">
                  <Globe size={24} />
               </div>
               <div>
                  <p className="text-xs font-black text-[#0D1B2A]">🌍 India & UAE Coverage</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Local expertise</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Right: Content Side */}
          <div className="py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
            >
              WHY PENTACLOUD
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-8 leading-tight">
              Your Certified Zoho <br/> <span className="text-[#1A7FD4]">Partner in India & UAE</span>
            </h2>

            <div className="space-y-4">
              {differentiators.map((item, i) => {
                const isOpen = activeIndex === i;
                return (
                  <motion.div 
                    key={i}
                    layout
                    className={`${CLAY_CARD} overflow-hidden transition-all duration-500 ${isOpen ? "ring-2 ring-[#1A7FD4]/10 shadow-lg shadow-blue-50" : "hover:bg-slate-50/50"}`}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : i)}
                      className="w-full p-5 flex items-center justify-between text-left group"
                    >
                      <h4 className="text-md font-nunito font-black text-[#0D1B2A] flex items-center gap-3">
                        <div className={`w-1.5 h-6 rounded-full transition-all duration-500 ${isOpen ? "bg-[#1A7FD4] scale-y-125" : "bg-slate-200 group-hover:bg-[#1A7FD4]/40"}`} />
                        {item.title}
                      </h4>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className={`text-[#1A7FD4] transition-colors ${isOpen ? "opacity-100" : "opacity-40"}`}
                      >
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </motion.div>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                          <div className="px-5 pb-6 pt-0 ml-4.5">
                            <p className="text-sm text-[#4A6080] font-inter leading-relaxed">
                              {item.body}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ZohoWhyPentacloud;
