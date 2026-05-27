"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const differentiators = [
  { title: "100% Data Loss-Free Track Record", body: "In 100+ migrations across CRM, cloud, database, and ERP platforms, we have never lost a single record. Our methodology, tooling, and multi-stage validation process is built around one non-negotiable outcome: your data arrives complete, accurate, and intact." },
  { title: "Full Backup Before Every Migration", body: "We take complete verified backups of your source system before touching a single record. Rollback is always possible at every stage, you never reach a point of no return until your team has validated the migrated data in production." },
  { title: "Certified Salesforce Migration Specialists", body: "As a certified Salesforce partner with 16+ active certifications, we are specialists in Salesforce data migrations, understanding metadata, relationships, governor limits, and data loader nuances that generic IT teams miss." },
  { title: "GDPR, HIPAA & ISO 27001 Compliant", body: "Every migration is executed with full compliance, encrypted data transfer, data minimisation principles, audit trails, access controls, and post-migration data destruction certificates for source systems where required." },
  { title: "Parallel Run Validation", body: "For complex migrations, we run source and target systems in parallel, comparing outputs in real time before cutover. This dual-run approach catches discrepancies before your users ever see the target system, eliminating post-go-live surprises completely." },
  { title: "No Hidden Downtime", body: "We plan every cutover window in advance, agreed with your team for minimum business impact. For most migrations, we achieve zero-downtime cutover using delta migration techniques that capture changes made during migration." },
  { title: "Complete Documentation Provided", body: "Every migration includes full documentation, field mapping specifications, transformation rules, reconciliation reports, and a migration completion certificate suitable for compliance and audit purposes." },
  { title: "30-Day Post-Migration Support", body: "Every migration engagement includes 30 days of post-migration support, covering data queries, discrepancy investigation, and any minor corrections identified after go-live. We don't disappear the moment cutover is declared." }
];

const MigrationWhyPentacloud = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white aspect-[4/5] flex items-center justify-center relative group">
             <div className="absolute inset-0 rounded-[24px] sm:rounded-[48px] overflow-hidden">
                <img 
                  src="/Images/Data Migration Images/data migration-why.webp" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Secure Data Center" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
             </div>
             
             {/* Floating Badges - Optimized for Mobile Screen Bounds to prevent overflow */}
             <div className="absolute top-4 left-3 sm:top-12 sm:left-8 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">100% Success Rate</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">Zero data loss record</p>
                </div>
             </div>

             <div className="absolute top-1/2 right-3 sm:-right-8 sm:-translate-y-1/2 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-50 text-[#34C98A] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">GDPR + HIPAA Compliant</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">Full regulatory compliance</p>
                </div>
             </div>

             <div className="absolute bottom-4 left-3 sm:bottom-12 sm:left-10 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">Zero Downtime</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">Business continuity guaranteed</p>
                </div>
             </div>
          </div>
        </motion.div>

        <div className="pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
          >
            WHY PENTACLOUD
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-6 sm:mb-12 leading-tight">
            Migration Experts You <br/> <span className="text-[#1A7FD4]">Can Actually Trust</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="group">
                <h4 className="font-nunito font-black text-sm sm:text-base text-[#0D1B2A] mb-1.5 sm:mb-2 flex items-center gap-2 group-hover:text-[#1A7FD4] transition-colors leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4] flex-shrink-0" /> {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#4A6080] font-inter leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationWhyPentacloud;
