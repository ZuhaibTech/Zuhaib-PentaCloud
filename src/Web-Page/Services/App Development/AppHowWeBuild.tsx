"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Palette, Code2, TestTube2, Rocket, Apple, Smartphone } from "lucide-react";

const CLAY_CARD = "bg-background rounded-[20px] sm:rounded-[28px] shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]";

const AppHowWeBuild = () => {
  const steps = [
    { title: "Idea Validation", duration: "Day 1–3", icon: Lightbulb, bg: "#EEF3FF", color: "#1A7FD4", deliverable: "Validation Report", desc: "We analyse your app idea, market size, competitor apps, technical feasibility, and monetisation potential.", visual: "lightbulb" },
    { title: "UX Wireframes", duration: "Day 3–10", icon: Users, bg: "#EEF3FF", color: "#1A7FD4", deliverable: "User Flow Diagrams", desc: "User journey mapping, persona definition, and low-fidelity wireframes across every screen.", visual: "userflow" },
    { title: "UI Design", duration: "Day 10–20", icon: Palette, bg: "#FFE8F0", color: "#EC4899", deliverable: "Interactive Prototype", desc: "High-fidelity mobile UI designs across all screens, animations, micro-interactions, and empty states.", visual: "uidesign" },
    { title: "Development Sprints", duration: "Week 3–8", icon: Code2, bg: "#E8FFE8", color: "#34C98A", deliverable: "Weekly Test Builds", desc: "2-week agile sprints with weekly TestFlight / internal builds shared for your review.", visual: "sprints" },
    { title: "QA & Testing", duration: "Week 8–9", icon: TestTube2, bg: "#FFF8E0", color: "#F59E0B", deliverable: "QA Test Report", desc: "Testing on 30+ real devices, functional testing, performance profiling, and battery usage.", visual: "qa" },
    { title: "Launch & Growth", duration: "Week 9–10", icon: Rocket, bg: "#FFE8F0", color: "#EC4899", deliverable: "Live on App Stores", desc: "End-to-end App Store and Play Store submission, screenshots, descriptions, and metadata.", visual: "launch" }
  ];

  return (
    <section className="py-8 sm:py-12 bg-background relative overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-6 sm:mb-10">
          <div className="bg-background shadow-[3px_3px_8px_rgba(163,185,210,0.3),-3px_-3px_8px_rgba(255,255,255,0.85)] text-[#1A7FD4] font-nunito font-bold text-[10px] sm:text-[11px] tracking-[2px] rounded-full px-4 py-1.5 mb-4 sm:mb-6 w-fit mx-auto">
            HOW WE BUILD
          </div>
          <h2 className="font-nunito font-extrabold text-2xl sm:text-[42px] text-[#0D1B2A] leading-tight">
            From Idea to <span className="text-[#1A7FD4]">App Store in 6 Steps</span>
          </h2>
        </div>

        <div className="relative pt-6 lg:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={`${CLAY_CARD} p-6 sm:p-8 group transition-all relative flex flex-col h-full overflow-hidden`}
              >

                <div className="absolute top-4 right-5 text-5xl sm:text-7xl font-nunito font-black text-[#1A7FD4] opacity-[0.04] group-hover:opacity-[0.08] pointer-events-none transition-opacity">
                  {`0${i + 1}`}
                </div>

                <div className="mb-5 sm:mb-6">
                  <div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-[20px] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.85)] transition-transform group-hover:rotate-[10deg] shrink-0`}
                    style={{ backgroundColor: 'transparent', color: step.color }}
                  >
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </div>

                <h3 className="font-nunito font-bold text-[18px] sm:text-[22px] text-[#0D1B2A] mb-2 leading-tight">{step.title}</h3>
                <div className="font-nunito font-bold text-[10px] sm:text-[11px] text-[#1A7FD4] bg-background shadow-[2px_2px_4px_rgba(163,185,210,0.3),-2px_-2px_4px_rgba(255,255,255,0.85)] px-3 py-1 rounded-full uppercase tracking-wider w-fit mb-4 sm:mb-5">
                  {step.duration}
                </div>
                <p className="font-inter text-xs sm:text-[14px] text-[#4A6080] leading-relaxed mb-6 sm:mb-8 flex-1">
                  {step.desc}
                </p>

                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg sm:rounded-full font-nunito font-bold text-[10px] sm:text-[12px] bg-background shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.85)] transition-transform group-hover:scale-105 mb-5 sm:mb-6 w-fit"
                  style={{ color: step.color }}
                >
                  <step.icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{step.deliverable}</span>
                </div>

                {/* Mini Visuals */}
                <div className="h-16 sm:h-20 border-t border-slate-50 pt-4 sm:pt-5 flex items-center justify-center shrink-0">
                   {step.visual === "lightbulb" && (
                      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                         <div className="text-[12px] sm:text-[14px] font-bold text-[#8B5CF6]">Validated ✓</div>
                      </motion.div>
                   )}
                   {step.visual === "userflow" && (
                      <div className="flex gap-2 sm:gap-3">
                         {[1, 2, 3].map(j => <motion.div key={j} animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: j * 0.2 }} className="w-5 h-10 sm:w-8 sm:h-12 border border-[#1A7FD4]/30 rounded-sm" />)}
                      </div>
                   )}
                   {step.visual === "uidesign" && (
                      <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-inner group-hover:scale-110 transition-transform" />
                   )}
                   {step.visual === "sprints" && (
                      <div className="grid grid-cols-3 gap-1.5 w-full max-w-[80px] sm:max-w-[100px]">
                         {[...Array(3)].map((_, j) => <div key={j} className="h-8 sm:h-10 bg-green-50 border border-green-100 rounded p-1.5 flex flex-col gap-1.5">
                            <motion.div 
                               animate={{ x: j === 1 ? [0, 10, 10] : 0 }}
                               transition={{ duration: 4, repeat: Infinity }}
                               className={`h-1.5 sm:h-2 rounded-full ${j === 1 ? 'bg-green-400' : 'bg-green-200'}`} 
                               style={{ width: '80%' }}
                            />
                         </div>)}
                      </div>
                   )}
                   {step.visual === "qa" && (
                      <div className="grid grid-cols-3 gap-1.5">
                         {[...Array(6)].map((_, j) => <motion.div key={j} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, delay: j * 0.3, repeat: Infinity, repeatDelay: 2 }} className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 flex items-center justify-center text-white text-[8px] sm:text-[10px]">✓</motion.div>)}
                      </div>
                   )}
                   {step.visual === "launch" && (
                      <div className="flex gap-2 sm:gap-3">
                         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center"><Apple className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-slate-100 flex items-center justify-center"><Smartphone className="w-4 h-4 sm:w-5 sm:h-5" /></div>
                      </div>
                   )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHowWeBuild;
