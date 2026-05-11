"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, CheckCircle2, Star, Zap } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const differentiators = [
  { title: "100% Data Loss-Free Track Record", body: "In 100+ migrations across CRM, cloud, database, and ERP platforms — we have never lost a single record. Our methodology, tooling, and multi-stage validation process is built around one non-negotiable outcome: your data arrives complete, accurate, and intact." },
  { title: "Full Backup Before Every Migration", body: "We take complete verified backups of your source system before touching a single record. Rollback is always possible at every stage — you never reach a point of no return until your team has validated the migrated data in production." },
  { title: "Certified Salesforce Migration Specialists", body: "As a certified Salesforce partner with 16+ active certifications, we are specialists in Salesforce data migrations — understanding metadata, relationships, governor limits, and data loader nuances that generic IT teams miss." },
  { title: "GDPR, HIPAA & ISO 27001 Compliant", body: "Every migration is executed with full compliance — encrypted data transfer, data minimisation principles, audit trails, access controls, and post-migration data destruction certificates for source systems where required." },
  { title: "Parallel Run Validation", body: "For complex migrations, we run source and target systems in parallel — comparing outputs in real time before cutover. This dual-run approach catches discrepancies before your users ever see the target system, eliminating post-go-live surprises completely." },
  { title: "No Hidden Downtime", body: "We plan every cutover window in advance — agreed with your team for minimum business impact. For most migrations, we achieve zero-downtime cutover using delta migration techniques that capture changes made during migration." },
  { title: "Complete Documentation Provided", body: "Every migration includes full documentation — field mapping specifications, transformation rules, reconciliation reports, and a migration completion certificate suitable for compliance and audit purposes." },
  { title: "30-Day Post-Migration Support", body: "Every migration engagement includes 30 days of post-migration support — covering data queries, discrepancy investigation, and any minor corrections identified after go-live. We don't disappear the moment cutover is declared." }
];

const MigrationWhyPentacloud = () => {
  return (
    <section className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-[48px] shadow-2xl border border-white aspect-[4/5] flex items-center justify-center relative group">
             <div className="absolute inset-0 rounded-[48px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Secure Data Center" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-12 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center"><CheckCircle2 size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">✅ 100% Success Rate</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Zero data loss across all migrations</p>
                </div>
             </div>

             <div className="absolute top-1/2 -right-8 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-[#34C98A] flex items-center justify-center"><ShieldCheck size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">🔒 GDPR + HIPAA Compliant</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Full regulatory compliance</p>
                </div>
             </div>

             <div className="absolute bottom-12 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center"><Zap size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">⚡ Zero Downtime</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Business continuity guaranteed</p>
                </div>
             </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
          >
            WHY PENTACLOUD
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-12">
            Migration Experts You <br/> <span className="text-[#1A7FD4]">Can Actually Trust</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="group">
                <h4 className="font-nunito font-black text-[#0D1B2A] mb-2 flex items-center gap-2 group-hover:text-[#1A7FD4] transition-colors leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4] flex-shrink-0" /> {item.title}
                </h4>
                <p className="text-[11px] text-[#4A6080] font-inter leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationWhyPentacloud;
