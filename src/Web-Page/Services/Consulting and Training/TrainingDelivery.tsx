"use client";

import React from "react";
import { motion } from "framer-motion";
import { Presentation, Globe, Building2, GraduationCap } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const deliveryFormats = [
  {
    icon: <Building2 className="text-[#1A7FD4]" />,
    title: "On-Site Instructor-Led",
    body: "Our certified trainers come to your office and deliver training directly to your team in your working environment — using your own Salesforce org or cloud environment where possible, making training immediately relevant and applicable to daily tasks.",
    bestFor: "Teams of 5–30 people"
  },
  {
    icon: <Globe className="text-[#34C98A]" />,
    title: "Virtual Instructor-Led (VILT)",
    body: "Live online training delivered via Zoom or Teams — interactive sessions with screen sharing, live demonstrations, breakout rooms for practice, and Q&A throughout. Recorded for participants to revisit after the session.",
    bestFor: "Remote or distributed teams"
  },
  {
    icon: <Presentation className="text-[#F59E0B]" />,
    title: "Custom Corporate Programmes",
    body: "Fully bespoke training programmes designed around your specific Salesforce configuration, business processes, and team skill levels. We use your actual org, your actual data (anonymised), and your actual workflows as training scenarios.",
    bestFor: "Post-implementation & new rollouts"
  },
  {
    icon: <GraduationCap className="text-[#8B5CF6]" />,
    title: "Certification Preparation",
    body: "Structured exam preparation programmes for Salesforce and cloud certifications — covering exam topic areas, practice questions, mock exams, study guides, and expert coaching sessions. Our pass rate exceeds 85%.",
    bestFor: "Individual or team certifications"
  }
];

const trainingPrinciples = [
  { icon: "🎯", title: "Role-Specific Content", sub: "Not one-size-fits-all" },
  { icon: "💻", title: "Hands-On Practice", sub: "Learn by doing, not watching" },
  { icon: "🔄", title: "Real Scenarios", sub: "Using your actual systems" },
  { icon: "📹", title: "Recorded Sessions", sub: "Review anytime after" },
  { icon: "📞", title: "30-Day Support", sub: "Post-training questions answered" }
];

const TrainingDelivery = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="text-center mb-10 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          HOW WE TRAIN
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          Training That Actually <br/> <span className="text-[#1A7FD4]">Changes Behaviour</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          We design every training programme around adult learning principles, hands-on practice, real-world scenarios, and immediate application.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {deliveryFormats.map((format, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`${CLAY_CARD} p-5 sm:p-8 group rounded-[20px] sm:rounded-[32px]`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shrink-0">
                {React.cloneElement(format.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
              </div>
              <h4 className="text-base sm:text-lg font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-3 leading-tight">{format.title}</h4>
              <p className="text-[10px] sm:text-[11px] text-[#4A6080] font-inter leading-relaxed mb-3 sm:mb-4">{format.body}</p>
              <div className="pt-3 sm:pt-4 border-t border-blue-50">
                 <p className="text-[9px] sm:text-[10px] font-black text-[#0D1B2A] uppercase tracking-widest mb-0.5 sm:mb-1">Best For:</p>
                 <p className="text-[9px] sm:text-[10px] font-bold text-[#1A7FD4]">{format.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
           <div className="bg-background p-4 sm:p-6 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white/50 aspect-[4/5] flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-background flex items-center justify-center">
                 <div className="text-center opacity-20 group-hover:opacity-30 transition-opacity px-6 sm:px-12">
                    <Presentation className="mx-auto mb-4 text-[#1A7FD4] w-16 h-16 sm:w-28 sm:h-28" />
                    <p className="font-nunito font-black uppercase tracking-widest text-center text-xs sm:text-sm">Training Delivery Image</p>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>

      {/* Principles Row - Dynamic Grid Symmetry */}
      <div className={`${CLAY_CARD} p-6 sm:p-10 rounded-[20px] sm:rounded-[32px]`}>
         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-10">
            {trainingPrinciples.map((principle, i) => (
              <div 
                key={i} 
                className={`flex flex-col items-center text-center gap-1.5 ${i === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                 <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">{principle.icon}</span>
                 <p className="text-[10px] sm:text-xs font-black text-[#0D1B2A] uppercase tracking-wider">{principle.title}</p>
                 <p className="text-[9px] sm:text-[10px] font-bold text-[#4A6080]">{principle.sub}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default TrainingDelivery;
