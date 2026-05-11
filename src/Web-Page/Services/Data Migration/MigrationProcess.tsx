"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLAY_CARD } from "./Constants";

const processSteps = [
  {
    step: "1",
    duration: "Day 1–5",
    title: "Discovery & Data Audit",
    body: "We begin with a thorough audit of your source system — mapping all data objects, relationships, volumes, data quality issues, duplicate records, and dependencies. We assess data complexity, identify transformation requirements, and calculate migration effort and timeline. You receive a complete Migration Readiness Report before any work begins.",
    deliverable: "📊 Migration Readiness Report",
    activities: ["Source system inventory", "Data volume assessment", "Data quality analysis", "Duplicate identification", "Dependency mapping", "Compliance requirements review"]
  },
  {
    step: "2",
    duration: "Day 5–10",
    title: "Migration Strategy & Planning",
    body: "We design your migration strategy — defining the migration approach (big bang vs phased), cutover windows, rollback plan, data transformation rules, field mapping specifications, and a detailed runbook with task-by-task execution steps. Nothing is left to chance or improvisation.",
    deliverable: "📋 Migration Runbook",
    activities: ["Migration approach selection", "Cutover window planning", "Field mapping documentation", "Transformation rule design", "Rollback strategy definition", "Stakeholder communication plan"]
  },
  {
    step: "3",
    duration: "Week 2–3",
    title: "Environment Setup & Test Migration",
    body: "We configure the target environment and run a full test migration in a sandbox — migrating a representative sample of data to validate field mappings, transformation rules, data relationships, and application behaviour in the target system before a single byte of production data is touched.",
    deliverable: "🧪 Test Migration Report",
    activities: ["Target environment setup", "Sandbox migration execution", "Field mapping validation", "Relationship integrity check", "Application testing on migrated data", "Performance benchmarking"]
  },
  {
    step: "4",
    duration: "Week 3–4",
    title: "Data Cleansing & Preparation",
    body: "Before production migration, we cleanse and prepare your source data — removing duplicates, standardising formats, filling mandatory fields, archiving obsolete records, and applying transformation rules to ensure only clean, accurate data arrives in the target system.",
    deliverable: "✅ Cleansed Data Set",
    activities: ["Duplicate record removal", "Data format standardisation", "Mandatory field population", "Obsolete record archiving", "Data transformation execution", "Pre-migration quality report"]
  },
  {
    step: "5",
    duration: "Week 4–5",
    title: "Production Migration & Cutover",
    body: "The production migration is executed during a pre-agreed cutover window — minimising business disruption. We run migration in phases, monitoring every step in real time. Full rollback capability is maintained until final validation sign-off from your team. No cutover is declared complete until your team confirms data accuracy in production.",
    deliverable: "🚀 Live Target System",
    activities: ["Pre-migration final backup", "Phased data migration execution", "Real-time progress monitoring", "Immediate post-migration validation", "User acceptance testing (UAT)", "Go/no-go decision with client"]
  },
  {
    step: "6",
    duration: "Week 5–6",
    title: "Validation, Reconciliation & Handover",
    body: "After go-live, we run a comprehensive reconciliation — comparing record counts, financial totals, relationship integrity, and data samples between source and target to prove 100% migration completeness. We also decommission the source system safely and provide full documentation of the completed migration for your records and compliance requirements.",
    deliverable: "📄 Migration Completion Report",
    activities: ["Record count reconciliation", "Financial total validation", "Random sample audit", "Source system decommission", "Full documentation handover", "30-day post-migration support"]
  }
];

const MigrationProcess = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          HOW WE MIGRATE
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          Our Proven 6-Step <br/> <span className="text-[#1A7FD4]">Migration Methodology</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-lg">
          Every migration follows our battle-tested methodology — built from 100+ successful migrations with zero data loss record.
        </p>
      </div>

      <div className="space-y-8 relative">
        {/* Connecting Line */}
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-blue-100 hidden md:block" />
        
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start relative z-10"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center border border-blue-50">
              <span className="text-[10px] font-black text-[#1A7FD4] uppercase tracking-tighter leading-none mb-1">Step</span>
              <span className="text-3xl font-black text-[#0D1B2A] leading-none">{step.step}</span>
            </div>
            
            <div className={`${CLAY_CARD} p-8 flex-grow`}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h4 className="text-2xl font-nunito font-black text-[#0D1B2A]">{step.title}</h4>
                <div className="px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-xl text-xs font-black uppercase tracking-wider border border-blue-100">
                  {step.duration}
                </div>
              </div>
              <p className="text-[#4A6080] font-inter text-sm leading-relaxed mb-6 max-w-4xl">{step.body}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <p className="text-[10px] font-black text-[#0D1B2A] uppercase tracking-widest mb-3">Key Activities:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                       {step.activities.map((act, i) => (
                         <li key={i} className="flex items-center gap-2 text-[11px] text-[#4A6080]">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-200" /> {act}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Deliverable:</span>
                 <span className="text-sm font-bold text-[#0D1B2A]">{step.deliverable}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MigrationProcess;
