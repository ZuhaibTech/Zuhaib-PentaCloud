"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, PenTool, Paintbrush, Code2, TestTube2, Rocket 
} from "lucide-react";

const WebHowWeBuild = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Briefing",
      duration: "Day 1–3",
      icon: MessageSquare,
      color: "#1A7FD4",
      body: "Structured discovery session covering business goals, target audience, brand guidelines, and technical requirements, resulting in a clear project brief.",
      deliverable: "Project Brief",
      side: "left"
    },
    {
      num: "02",
      title: "UX Wireframing",
      duration: "Day 3–7",
      icon: PenTool,
      color: "#8B5CF6",
      body: "Mapping every page as a wireframe, defining information architecture, user flows, and conversion paths before any visual design.",
      deliverable: "Wireframe Deck",
      side: "right"
    },
    {
      num: "03",
      title: "UI Design in Figma",
      duration: "Day 7–14",
      icon: Paintbrush,
      color: "#29C6E0",
      body: "Pixel-perfect UI design responsive across all devices. Fully interactive prototype provided for feedback and approval.",
      deliverable: "Figma Prototype",
      side: "left"
    },
    {
      num: "04",
      title: "Development & Build",
      duration: "Week 2–5",
      icon: Code2,
      color: "#34C98A",
      body: "Clean, documented code translating Figma designs into production-ready components using Next.js and Tailwind CSS.",
      deliverable: "Staging Website",
      side: "right"
    },
    {
      num: "05",
      title: "Testing & Optimisation",
      duration: "Week 5–6",
      icon: TestTube2,
      color: "#F59E0B",
      body: "Comprehensive cross-browser testing, Core Web Vitals optimisation, SEO audit, security hardening, and accessibility checks.",
      deliverable: "QA Report",
      side: "left"
    },
    {
      num: "06",
      title: "Launch & Handover",
      duration: "Week 6–7",
      icon: Rocket,
      color: "#EC4899",
      body: "Zero-downtime deployment, analytics integration, and full handover session including CMS training for your team.",
      deliverable: "Live Website",
      side: "right"
    }
  ];

  return (
    <section className="py-10 sm:py-24 bg-[#E8F0F8] relative overflow-hidden px-4 sm:px-6">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(#1A7FD4 1px, transparent 1px), linear-gradient(90deg, #1A7FD4 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 sm:px-6 sm:py-2 bg-white/60 shadow-[inset_2px_2px_5px_rgba(163,185,210,0.25)] rounded-full text-[#1A7FD4] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-6"
          >
            HOW WE BUILD
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4 leading-tight"
          >
            Your Website Journey <br />
            From Brief to <span className="text-[#1A7FD4]">Browser in 6 Steps</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - left-aligned on mobile, centered on desktop */}
          <div className="absolute left-[27px] sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#D0DDE8] shadow-[1px_0_3px_rgba(255,255,255,0.8),-1px_0_3px_rgba(163,185,210,0.5)] overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full bg-[#1A7FD4] shadow-[0_0_10px_#1A7FD4]"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-24 relative">
            {steps.map((step, i) => (
              <div key={i} className={`flex items-center w-full ${step.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row gap-6 md:gap-8`}>
                
                {/* Card - padded to the right of left-aligned timeline center line on mobile */}
                <motion.div 
                  initial={{ x: step.side === 'left' ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`w-[calc(100%-54px)] ml-[54px] sm:w-full sm:ml-0 md:w-[44%] bg-[#E8F0F8] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 shadow-[10px_10px_20px_rgba(163,185,210,0.6),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)] relative group transition-all duration-500 overflow-hidden`}
                >
                  <span className="absolute top-3 right-4 text-4xl sm:text-6xl font-black text-[#0D1B2A] opacity-[0.04] pointer-events-none group-hover:opacity-10 transition-opacity">
                    {step.num}
                  </span>

                  <div className="flex flex-col gap-3.5 sm:gap-4">
                    <div className="flex items-center gap-3.5 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#1A7FD4] group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)] group-hover:rotate-[15deg] transition-all duration-500 shrink-0">
                        <step.icon className="w-5 h-5 sm:w-6 sm:h-6" color={step.color} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <h3 className="font-nunito font-bold text-sm sm:text-lg text-[#0D1B2A] group-hover:text-[#1A7FD4] transition-colors truncate">{step.title}</h3>
                        <div className="px-2.5 py-0.5 bg-[#E8F0F8] rounded-full shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.8)] text-[8px] sm:text-[9px] font-bold text-[#1A7FD4]/60 w-fit">
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    <p className="text-[10px] sm:text-xs text-[#4A6080] font-inter leading-relaxed">
                      {step.body}
                    </p>

                    <div className="px-3 py-1.5 bg-[#E8F0F8] rounded-lg sm:rounded-full shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] text-[8.5px] sm:text-[10px] font-bold text-[#1A7FD4] w-fit mt-1 sm:mt-2 group-hover:scale-105 transition-transform origin-left flex items-center gap-1.5">
                      <step.icon className="w-3.5 h-3.5 shrink-0" color={step.color} />
                      <span>{step.deliverable}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Center Dot Container - aligned left on mobile, center on desktop */}
                <div className="absolute left-[27px] sm:left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 items-center justify-center flex z-20">
                  <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#E8F0F8] shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] flex items-center justify-center relative">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#1A7FD4] shadow-[0_0_10px_#1A7FD4]" />
                    <motion.div 
                      animate={{ scale: [1, 1.8], opacity: [1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-[#1A7FD4]/40"
                    />
                  </div>
                  {/* Connector Line - only shown on desktop */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={`hidden md:block absolute h-[2px] w-12 bg-transparent border-t-2 border-dashed border-[#1A7FD4]/20 ${step.side === 'left' ? 'right-12 origin-right' : 'left-12 origin-left'}`}
                  />
                </div>

                {/* Empty space for zigzag */}
                <div className="hidden md:block w-[44%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebHowWeBuild;
