"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Layout, Code, CheckCircle, Rocket } from "lucide-react";

const CLAY_CARD = "bg-background rounded-[28px] shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]";

const HowWeWork = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    { step: "01", title: "Discovery & Audit", icon: Search, bg: "#EEF3FF", color: "#1A7FD4", desc: "Deep-dive discovery to understand goals, tech stack, and pain points — followed by a free audit." },
    { step: "02", title: "Solution Architecture", icon: Layout, bg: "#E0F7FF", color: "#29C6E0", desc: "Designing custom solutions, data models, integration points, and security architecture." },
    { step: "03", title: "Agile Build & Configure", icon: Code, bg: "#E8FFE8", color: "#34C98A", desc: "Building in 2-week sprints with continuous reviews, configuring flows, objects, and integrations." },
    { step: "04", title: "Testing & Training", icon: CheckCircle, bg: "#FFF8E0", color: "#F59E0B", desc: "Rigorous UAT testing and data validation followed by role-specific team training sessions." },
    { step: "05", title: "Go-Live & Support", icon: Rocket, bg: "#FFE8F0", color: "#EC4899", desc: "Zero-downtime deployment, hypercare support, and transition into managed support models." }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden px-6">
      {/* Background Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ y: [0, 40, 0], x: [0, 40, 0] }}
            transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-[#1A7FD4] rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] rounded-full px-5 py-1.5 mb-6">
            HOW WE WORK
          </div>
          <h2 className="font-nunito font-extrabold text-[42px] text-[#0D1B2A] leading-tight mb-4">
            Your Salesforce Journey <br/>
            In <span className="text-[#1A7FD4]">5 Clear Steps</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row gap-6 items-stretch">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[160px] left-0 right-0 h-[2px] hidden md:block">
             <motion.div 
               initial={{ scaleX: 0 }}
               whileInView={{ scaleX: 1 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-[#1A7FD4] to-[#29C6E0] origin-left"
             />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, type: "spring" }}
              viewport={{ once: true }}
              className={`${CLAY_CARD} p-8 flex-1 relative group journey-card flex flex-col items-center justify-center min-h-[400px] transition-all duration-500`}
            >
              {/* Watermark (Revealed on Hover) */}
              <div 
                className="absolute bottom-4 right-4 text-7xl font-nunito font-black text-[#1A7FD4] pointer-events-none select-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10"
              >
                {step.step}
              </div>

              {/* Main Content (Centered initially, moves up significantly on hover) */}
              <div className="flex flex-col items-center justify-center transition-all duration-700 group-hover:-translate-y-24 z-20">
                <div 
                  className={`w-[68px] h-[68px] flex items-center justify-center rounded-[22px] mb-4 shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] relative bg-background transition-all duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}
                  style={{ color: step.color, border: `2px solid ${step.bg}` }}
                >
                  <step.icon size={30} />
                  {i === 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping" />
                  )}
                </div>
                <h3 className="font-nunito font-bold text-[20px] text-[#0D1B2A] text-center transition-all duration-500 group-hover:scale-105">{step.title}</h3>
              </div>

              {/* Info Reveal (Positions lower to avoid overlap) */}
              <div className="absolute inset-x-6 bottom-8 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-10 group-hover:translate-y-0 z-20">
                <p className="font-inter text-[13px] text-[#4A6080] leading-relaxed mb-5 text-center px-2">
                  {step.desc}
                </p>
                

                
                {i === 0 && (
                  <div className="mt-4 text-[10px] font-nunito font-black text-green-500 uppercase tracking-widest animate-pulse">
                    Most Popular
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
