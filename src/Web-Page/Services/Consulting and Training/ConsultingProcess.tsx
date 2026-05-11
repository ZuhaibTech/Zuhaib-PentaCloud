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
    body: "We present a clear, prioritised set of recommendations — short-term quick wins, medium-term improvements, and long-term strategic initiatives. Every recommendation includes a business case, estimated effort, expected outcome, and suggested sequencing. You get honest advice — even for simpler or cheaper solutions.",
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
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          HOW WE CONSULT
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          From Challenge to <br/> <span className="text-[#1A7FD4]">Clear Solution in 4 Steps</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-lg">
          Every consulting engagement follows a structured approach — starting with honest assessment and ending with actionable outcomes.
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
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-background shadow-xl flex flex-col items-center justify-center border border-white/50">
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
              
              <div className="mb-6">
                <p className="text-[#0D1B2A] font-black text-[10px] uppercase tracking-widest mb-3">Key Activities:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                   {step.activities.map((act, i) => (
                     <li key={i} className="flex items-center gap-2 text-[11px] text-[#4A6080]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-200" /> {act}
                     </li>
                   ))}
                </ul>
              </div>

              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#E8F0F8]/50 rounded-2xl border border-white/30">
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

export default ConsultingProcess;
