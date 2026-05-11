"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cloud, Shield, Zap, Database, Lock, RefreshCw, HelpCircle } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const migrationStats = [
  { val: "10M+", label: "Records Migrated", sub: "Across all projects", icon: Database, color: "#1A7FD4" },
  { val: "100%", label: "Migration Success Rate", sub: "Zero data loss — ever", icon: Shield, color: "#34C98A" },
  { val: "100+", label: "Migrations Completed", sub: "Across CRM, cloud & database", icon: Zap, color: "#F59E0B" },
  { val: "30", label: "Days Post-Migration Support", sub: "Included on every project", icon: RefreshCw, color: "#8B5CF6" }
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
    <div className="py-24 bg-[#E8F0F8] px-6">
      {/* STATS SECTION */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[10px] font-black tracking-widest uppercase mb-6 inline-block"
          >
            OUR MIGRATION RECORD
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-6 leading-tight">
            Numbers That Prove <br/> <span className="text-[#1A7FD4]">Our Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {migrationStats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${CLAY_CARD} p-8 text-center bg-[#E8F0F8] shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]`}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center mx-auto mb-4" style={{ color: stat.color }}>
                <stat.icon size={24} />
              </div>
              <p className="text-4xl md:text-5xl font-nunito font-black text-[#1A7FD4] mb-2">{stat.val}</p>
              <p className="text-sm font-black text-[#0D1B2A] mb-1 leading-tight">{stat.label}</p>
              <p className="text-[10px] text-[#4A6080] font-bold">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[10px] font-black tracking-widest uppercase mb-6 inline-block"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-[42px] font-nunito font-black text-[#0D1B2A]">
            Data Migration, <br />
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
      </section>
    </div>
  );
};

export default MigrationFAQ;
