"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ClipboardList, FlaskConical, ShieldCheck, Rocket, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const processSteps = [
  {
    step: "1",
    duration: "Day 1–5",
    title: "Discovery & Data Audit",
    body: "We begin with a thorough audit of your source system — mapping all data objects, relationships, volumes, data quality issues, duplicate records, and dependencies. We assess data complexity, identify transformation requirements, and calculate migration effort and timeline. You receive a complete Migration Readiness Report before any work begins.",
    deliverable: "Migration Readiness Report",
    activities: ["Source system inventory", "Data volume assessment", "Data quality analysis", "Duplicate identification", "Dependency mapping", "Compliance requirements review"]
  },
  {
    step: "2",
    duration: "Day 5–10",
    title: "Migration Strategy & Planning",
    body: "We design your migration strategy — defining the migration approach (big bang vs phased), cutover windows, rollback plan, data transformation rules, field mapping specifications, and a detailed runbook with task-by-task execution steps. Nothing is left to chance or improvisation.",
    deliverable: "Migration Runbook",
    activities: ["Migration approach selection", "Cutover window planning", "Field mapping documentation", "Transformation rule design", "Rollback strategy definition", "Stakeholder communication plan"]
  },
  {
    step: "3",
    duration: "Week 2–3",
    title: "Environment Setup & Test Migration",
    body: "We configure the target environment and run a full test migration in a sandbox — migrating a representative sample of data to validate field mappings, transformation rules, data relationships, and application behaviour in the target system before a single byte of production data is touched.",
    deliverable: "Test Migration Report",
    activities: ["Target environment setup", "Sandbox migration execution", "Field mapping validation", "Relationship integrity check", "Application testing on migrated data", "Performance benchmarking"]
  },
  {
    step: "4",
    duration: "Week 3–4",
    title: "Data Cleansing & Preparation",
    body: "Before production migration, we cleanse and prepare your source data — removing duplicates, standardising formats, filling mandatory fields, archiving obsolete records, and applying transformation rules to ensure only clean, accurate data arrives in the target system.",
    deliverable: "Cleansed Data Set",
    activities: ["Duplicate record removal", "Data format standardisation", "Mandatory field population", "Obsolete record archiving", "Data transformation execution", "Pre-migration quality report"]
  },
  {
    step: "5",
    duration: "Week 4–5",
    title: "Production Migration & Cutover",
    body: "The production migration is executed during a pre-agreed cutover window — minimising business disruption. We run migration in phases, monitoring every step in real time. Full rollback capability is maintained until final validation sign-off from your team. No cutover is declared complete until your team confirms data accuracy in production.",
    deliverable: "Live Target System",
    activities: ["Pre-migration final backup", "Phased data migration execution", "Real-time progress monitoring", "Immediate post-migration validation", "User acceptance testing (UAT)", "Go/no-go decision with client"]
  },
  {
    step: "6",
    duration: "Week 5–6",
    title: "Validation, Reconciliation & Handover",
    body: "After go-live, we run a comprehensive reconciliation — comparing record counts, financial totals, relationship integrity, and data samples between source and target to prove 100% migration completeness. We also decommission the source system safely and provide full documentation of the completed migration for your records and compliance requirements.",
    deliverable: "Migration Completion Report",
    activities: ["Record count reconciliation", "Financial total validation", "Random sample audit", "Source system decommission", "Full documentation handover", "30-day post-migration support"]
  }
];

const deliverableIcons = [
  <FileText className="w-3.5 h-3.5 text-[#1A7FD4] shrink-0" key="1" />,
  <ClipboardList className="w-3.5 h-3.5 text-[#1A7FD4] shrink-0" key="2" />,
  <FlaskConical className="w-3.5 h-3.5 text-[#1A7FD4] shrink-0" key="3" />,
  <ShieldCheck className="w-3.5 h-3.5 text-[#34C98A] shrink-0" key="4" />,
  <Rocket className="w-3.5 h-3.5 text-[#34C98A] shrink-0" key="5" />,
  <CheckCircle2 className="w-3.5 h-3.5 text-[#34C98A] shrink-0" key="6" />
];

const MigrationProcess = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="text-center mb-10 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          HOW WE MIGRATE
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          Our Proven 6-Step <br/> <span className="text-[#1A7FD4]">Migration Methodology</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          Every migration follows our battle-tested methodology — built from 100+ successful migrations with zero data loss record.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 relative">
        {/* Responsive Connecting Line - connected on all screen sizes */}
        <div className="absolute left-[27px] sm:left-[39px] top-8 bottom-8 w-0.5 bg-blue-100" />
        
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-row gap-4 sm:gap-8 items-start relative z-10"
          >
            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center border border-blue-50">
              <span className="text-[8px] sm:text-[10px] font-black text-[#1A7FD4] uppercase tracking-tighter leading-none mb-0.5">Step</span>
              <span className="text-xl sm:text-3xl font-black text-[#0D1B2A] leading-none">{step.step}</span>
            </div>
            
            <div className={`${CLAY_CARD} p-5 sm:p-8 flex-grow rounded-[20px] sm:rounded-[32px] overflow-hidden`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 sm:mb-4">
                <h4 className="text-base sm:text-2xl font-nunito font-black text-[#0D1B2A]">{step.title}</h4>
                <div className="px-2.5 py-1 sm:px-4 sm:py-1.5 bg-blue-50 text-[#1A7FD4] rounded-lg sm:rounded-xl text-[9px] sm:text-xs font-black uppercase tracking-wider border border-blue-100">
                  {step.duration}
                </div>
              </div>
              <p className="text-[#4A6080] font-inter text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-4xl">{step.body}</p>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-[#0D1B2A] font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-3">Key Activities:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 sm:gap-y-2">
                   {step.activities.map((act, i) => (
                     <li key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4A6080]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-200 shrink-0" /> <span className="truncate">{act}</span>
                     </li>
                   ))}
                </ul>
              </div>

              <div className="flex sm:inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100 w-fit">
                 <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">Deliverable:</span>
                 <div className="flex items-center gap-1.5 min-w-0">
                    {deliverableIcons[idx]}
                    <span className="text-xs sm:text-sm font-bold text-[#0D1B2A] truncate">{step.deliverable}</span>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MigrationProcess;
