"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cloud, Shield, Zap, Database, Lock, RefreshCw, HelpCircle } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const migrationStats = [
  { val: "10M+", label: "Records Migrated", sub: "Across all projects", icon: Database, color: "#1A7FD4" },
  { val: "100%", label: "Migration Success", sub: "Zero data loss — ever", icon: Shield, color: "#34C98A" },
  { val: "100+", label: "Migrations Done", sub: "CRM, cloud & database", icon: Zap, color: "#F59E0B" },
  { val: "30", label: "Days Support", sub: "Included on every project", icon: RefreshCw, color: "#8B5CF6" }
];

const MigrationFAQ = () => {
  const faqs = [
    {
      question: "How do you guarantee zero data loss?",
      answer: "Our zero data loss guarantee is backed by three layers of protection: First, a complete verified backup of your source system before we touch anything — giving us a full restore point at all times. Second, a full test migration in a sandbox environment that validates every field mapping and relationship before production. Third, a post-migration reconciliation report that compares record counts, financial totals, and data samples between source and target to mathematically prove completeness.",
      icon: Lock,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "How long does a data migration take?",
      answer: "Timeline depends on data volume and complexity. A standard CRM migration (under 500,000 records) typically takes 3–5 weeks from assessment to go-live. Complex ERP or database migrations with high volumes and transformation requirements take 6–12 weeks. Cloud infrastructure migrations with multiple workloads take 4–8 weeks. We provide a precise timeline in your Migration Readiness Report after the initial assessment.",
      icon: Zap,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Will there be any downtime during migration?",
      answer: "For most migrations, we achieve zero downtime using delta migration techniques — where we migrate the bulk of data while your system stays live, then capture only the changes made during migration in a final cutover delta. For migrations that require a cutover window, we plan this during off-peak hours — typically weekends — and the window is rarely more than 2–4 hours for standard migrations.",
      icon: RefreshCw,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Can you migrate from any CRM to Salesforce?",
      answer: "Yes — we have migrated data to Salesforce from virtually every major CRM including HubSpot, Microsoft Dynamics, Zoho CRM, SugarCRM, Pipedrive, legacy in-house CRMs, and even Excel-based contact databases. As a certified Salesforce partner, Salesforce migrations are one of our core specialisations — we understand Salesforce data architecture, governor limits, and metadata relationships deeply enough to handle even the most complex migration scenarios.",
      icon: Cloud,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "What happens if something goes wrong during migration?",
      answer: "This is exactly why our methodology includes rollback capability at every stage. If anything unexpected occurs during production migration, we have the ability to roll back to your source system immediately — restoring full operational status within minutes. No migration is declared complete until your team has signed off on data accuracy in the target system. Additionally, our 30-day post-migration support covers any issues identified after go-live at no additional cost.",
      icon: Shield,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Do you handle the decommission of the old system after migration?",
      answer: "Yes — source system decommission is included in our full-service migration engagements. After your team confirms migration completeness and a safe parallel-run period, we manage the controlled shutdown of the source system — including data archiving for compliance retention periods, licence cancellation recommendations, and a formal decommission certificate documenting data destruction where required for GDPR or other compliance frameworks.",
      icon: HelpCircle,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="py-10 sm:py-24 bg-[#E8F0F8] px-4 sm:px-10 rounded-[24px] sm:rounded-[48px]">
      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto mb-12 sm:mb-24 md:mb-32">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#1A7FD4] text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 inline-block"
          >
            OUR MIGRATION RECORD
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
            Numbers That Prove <br/> <span className="text-[#1A7FD4]">Our Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {migrationStats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`${CLAY_CARD} p-4 sm:p-8 text-center bg-[#E8F0F8] shadow-[6px_6px_12px_rgba(163,185,210,0.4),-6px_-6px_12px_rgba(255,255,255,0.85)] rounded-[20px] sm:rounded-[32px]`}
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center mx-auto mb-3 sm:mb-4" style={{ color: stat.color }}>
                <stat.icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" />
              </div>
              <p className="text-xl sm:text-4xl md:text-5xl font-nunito font-black text-[#1A7FD4] mb-1 sm:mb-2">{stat.val}</p>
              <p className="text-[10px] sm:text-sm font-black text-[#0D1B2A] mb-0.5 sm:mb-1 leading-tight">{stat.label}</p>
              <p className="text-[8px] sm:text-[10px] text-[#4A6080] font-bold">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#1A7FD4] text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 inline-block"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-2xl sm:text-[42px] font-nunito font-black text-[#0D1B2A] leading-tight">
            Data Migration, <br />
            <span className="text-[#1A7FD4]">Answered Honestly</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-[#E8F0F8] rounded-[20px] sm:rounded-[32px] overflow-hidden transition-all duration-500 ${
                activeIndex === i 
                ? "shadow-[inset_4px_4px_8px_rgba(163,185,210,0.25),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]" 
                : "shadow-[6px_6px_12px_rgba(163,185,210,0.4),-6px_-6px_12px_rgba(255,255,255,0.85)]"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-4 py-5 sm:px-10 sm:py-8 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-0 gap-3"
              >
                <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
                   <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 shrink-0 ${activeIndex === i ? 'rotate-[15deg] shadow-inner scale-90' : 'group-hover:rotate-12'}`} style={{ color: faq.color }}>
                      <faq.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                   </div>
                   <span className={`font-nunito font-black text-sm sm:text-lg md:text-xl transition-colors duration-300 truncate ${activeIndex === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'}`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#1A7FD4] transition-all duration-500 shrink-0 ${activeIndex === i ? 'rotate-180 shadow-inner' : ''}`}>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-5 pt-1 sm:px-10 sm:pb-10 sm:pt-2 flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
                        <div className="w-24 sm:w-48 h-16 sm:h-32 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.25)] flex items-center justify-center overflow-hidden shrink-0">
                           <motion.img 
                             whileHover={{ scale: 1.1 }}
                             src={faq.image} 
                             alt={faq.question} 
                             className="w-full h-full object-cover"
                           />
                        </div>
                       <div className="flex-1 min-w-0">
                          <p className="font-inter text-[#4A6080] text-xs sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-4 sm:mt-6 flex items-center gap-1.5 text-[#1A7FD4] font-nunito font-black text-xs sm:text-sm uppercase tracking-wider"
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
      </section>
    </div>
  );
};

export default MigrationFAQ;
