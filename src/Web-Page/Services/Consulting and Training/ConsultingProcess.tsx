"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLAY_CARD } from "./Constants";

const processSteps = [
  {
    step: "1",
    duration: "Day 1–2",
    title: "Discovery Call & Brief",
    body: "We begin with a structured discovery session — understanding your business challenge, current technology landscape, team capabilities, timeline, and budget constraints. No sales pitch. No generic recommendations. Just honest questions to fully understand your situation before we suggest any solutions.",
    activities: ["Stakeholder interviews", "Current state documentation", "Challenge & goal definition", "Constraint identification", "Preliminary scope agreement"],
    deliverable: "Discovery Summary Document"
  },
  {
    step: "2",
    duration: "Week 1–2",
    title: "Deep Assessment & Analysis",
    body: "Our certified experts conduct a thorough assessment of your current environment — whether that's your Salesforce org, cloud infrastructure, business processes, or team capability gaps. We gather data, interview stakeholders, and analyse findings before forming any recommendations — ensuring advice is grounded in your reality.",
    activities: ["Technical environment audit", "Stakeholder interviews", "Process mapping", "Gap analysis", "Benchmark comparison", "Risk identification"],
    deliverable: "Assessment Report & Gap Analysis"
  },
  {
    step: "3",
    duration: "Week 2–3",
    title: "Strategy & Recommendations",
    body: "We present a clear, prioritised set of recommendations — short-term quick wins, medium-term improvements, and long-term strategic initiatives. Every recommendation includes a business case, estimated effort, expected outcome, and suggested sequencing. You get honest advice — even when it means recommending a simpler or cheaper solution.",
    activities: ["Strategy document preparation", "Business case development", "Roadmap sequencing", "Investment vs return analysis", "Executive presentation", "Q&A and refinement session"],
    deliverable: "Technology Strategy & Roadmap Document"
  },
  {
    step: "4",
    duration: "Week 3 onwards",
    title: "Implementation or Handover",
    body: "Depending on your preference, we either support you through implementation — providing project oversight, quality assurance, and technical guidance — or hand over the strategy document to your internal team or preferred partner with a full briefing session to ensure successful execution.",
    activities: ["Implementation project oversight", "Vendor management support", "Quality assurance reviews", "Progress milestone reviews", "Risk monitoring & escalation", "Knowledge transfer sessions"],
    deliverable: "Implementation Guidance & Oversight Report"
  }
];

const ConsultingProcess = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="text-center mb-10 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          HOW WE CONSULT
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          From Challenge to <br/> <span className="text-[#1A7FD4]">Clear Solution in 4 Steps</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          Every consulting engagement follows a structured approach — starting with honest assessment and ending with actionable outcomes.
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
            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-background shadow-xl flex flex-col items-center justify-center border border-white/50">
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1.5 sm:gap-y-2">
                   {step.activities.map((act, i) => (
                     <li key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4A6080]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-200 shrink-0" /> <span className="truncate">{act}</span>
                     </li>
                   ))}
                </ul>
              </div>

              <div className="flex sm:inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#E8F0F8]/50 rounded-xl sm:rounded-2xl border border-white/30 w-fit">
                 <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest shrink-0">Deliverable:</span>
                 <span className="text-xs sm:text-sm font-bold text-[#0D1B2A] truncate">{step.deliverable}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingProcess;
