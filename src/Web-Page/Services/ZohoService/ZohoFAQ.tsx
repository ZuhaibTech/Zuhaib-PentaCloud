"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cloud, Shield, Zap, Settings, Database, HelpCircle } from "lucide-react";

const ZohoFAQ = () => {
  const faqs = [
    {
      question: "What is the difference between Zoho CRM and Zoho One?",
      answer: "Zoho CRM is a single application focused on sales, marketing, and customer relationship management. Zoho One is a complete business operating suite containing 40+ integrated Zoho applications covering sales, marketing, finance, HR, project management, and more — all under one subscription. Zoho One is significantly better value for growing businesses that need multiple functions.",
      icon: Settings,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "How long does a Zoho CRM implementation take?",
      answer: "A standard Zoho CRM implementation for an SMB takes 2–4 weeks from kickoff to go-live. More complex implementations with custom modules, Deluge scripting, and multiple integrations take 5–8 weeks. A full Zoho One deployment across multiple departments takes 8–16 weeks depending on business complexity.",
      icon: Zap,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Can you migrate our data from Salesforce to Zoho?",
      answer: "Yes — Salesforce to Zoho CRM migration is one of our most common requests. We migrate all standard objects as well as custom objects, fields, attachments, and historical data — maintaining all relationships between records. We run a full test migration in a Zoho sandbox before touching production data.",
      icon: Database,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Is Zoho Books GST compliant for Indian businesses?",
      answer: "Yes — Zoho Books is fully GST compliant and is approved by the Indian government for GST e-invoicing. We configure Zoho Books with correct GST tax rates, HSN/SAC codes, e-invoice generation, and GSTR report generation. For UAE clients, we set up VAT compliance per Federal Tax Authority requirements.",
      icon: Shield,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Can Zoho integrate with our existing tools?",
      answer: "Zoho has native integrations with hundreds of popular business tools and connects to 800+ apps through Zoho Flow. Commonly requested integrations include Zoho CRM with Xero, WhatsApp Business, Google Workspace, Microsoft 365, Shopify, Stripe, and Slack.",
      icon: Cloud,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Do you provide ongoing Zoho support after implementation?",
      answer: "Yes — ongoing Zoho managed support is one of our core offerings. We offer monthly retainer plans starting from 4 hours per month — covering user management, configuration changes, new automation builds, and troubleshooting. Most growing businesses find the Standard plan (8hrs/month) sufficient for day-to-day management.",
      icon: HelpCircle,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#E8F0F8] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[10px] font-black tracking-widest uppercase mb-6 inline-block"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-[42px] font-nunito font-black text-[#0D1B2A]">
            Zoho Ecosystem, <br />
            <span className="text-[#1A7FD4]">Answered Honestly</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#E8F0F8] rounded-[32px] overflow-hidden transition-all duration-500 ${
                activeIndex === i 
                ? "shadow-[inset_6px_6px_12px_rgba(163,185,210,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]" 
                : "shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-10 py-8 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-0"
              >
                <div className="flex items-center gap-6">
                   <div className={`w-12 h-12 rounded-2xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'rotate-[15deg] shadow-inner scale-90' : 'group-hover:rotate-12'}`} style={{ color: faq.color }}>
                      <faq.icon size={24} />
                   </div>
                   <span className={`font-nunito font-black text-lg md:text-xl transition-colors duration-300 ${activeIndex === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'}`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`w-10 h-10 rounded-full bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#1A7FD4] transition-all duration-500 ${activeIndex === i ? 'rotate-180 shadow-inner' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-10 pb-10 pt-2 flex flex-col md:flex-row gap-8 items-start">
                       <div className="w-full md:w-48 h-32 rounded-2xl bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3)] flex items-center justify-center overflow-hidden">
                          <motion.img 
                            whileHover={{ scale: 1.1 }}
                            src={faq.image} 
                            alt={faq.question} 
                            className="w-full h-full object-cover"
                          />
                       </div>
                       <div className="flex-1">
                          <p className="font-inter text-[#4A6080] text-[16px] leading-relaxed">
                            {faq.answer}
                          </p>
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-6 flex items-center gap-2 text-[#1A7FD4] font-nunito font-black text-sm uppercase tracking-wider"
                          >
                            View more detail <span>→</span>
                          </motion.button>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZohoFAQ;
