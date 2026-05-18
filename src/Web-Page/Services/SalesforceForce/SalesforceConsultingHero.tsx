"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sliders, ArrowRight, ChevronDown } from "lucide-react";

const CLAY_BUTTON = "rounded-[50px] shadow-[0_8px_20px_rgba(26,127,212,0.30),inset_0_-3px_0_rgba(0,0,0,0.12)]";

const SalesforceConsultingHero = () => {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen bg-background flex items-center overflow-hidden pt-10 sm:pt-28 md:pt-32 pb-10 sm:pb-16 lg:pb-24 px-4 sm:px-6">
      {/* Background Blobs */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8E2FA] rounded-full filter blur-[120px] opacity-50 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D4EEFF] rounded-full filter blur-[90px] opacity-35 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute center-right w-[250px] h-[250px] bg-[#E8F4FF] rounded-full filter blur-[70px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col items-start w-full">
          {/* Badge Row */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[9px] sm:text-[13px] rounded-full px-3 py-1 sm:px-4 sm:py-1.5"
            >
              ☁ Salesforce Partner
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#34C98A] font-nunito font-bold text-[9px] sm:text-[13px] rounded-full px-3 py-1 sm:px-4 sm:py-1.5"
            >
              ✓ 16+ Certifications
            </motion.div>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1 mb-4 sm:mb-6">
            {["Salesforce Solutions", "That Actually"].map((text, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any, delay: 0.4 + i * 0.15 }}
                  className="font-nunito font-extrabold text-[clamp(24px,5.5vw,72px)] leading-[1.2] md:leading-[1.1] text-[#0D1B2A]"
                >
                  {text}
                </motion.h1>
              </div>
            ))}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any, delay: 0.7 }}
                className="font-nunito font-extrabold text-[clamp(24px,5.5vw,72px)] leading-[1.2] md:leading-[1.1] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradientSweep"
                style={{ backgroundImage: 'linear-gradient(90deg, #1A7FD4, #29C6E0, #1A7FD4)' }}
              >
                Deliver Results
              </motion.h1>
            </div>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-inter text-xs sm:text-base md:text-[17px] text-[#4A6080] leading-[1.8] max-w-[520px] mb-6 sm:mb-8"
          >
            As a certified Salesforce Partner, Pentacloud delivers end-to-end Salesforce implementation, customization, and optimization services that transform your CRM into a scalable revenue-driving engine.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-row items-center gap-2 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto"
          >
            <button className={`flex-1 bg-[#1A7FD4] text-white font-nunito font-bold px-3 py-3 sm:px-8 sm:py-4 ${CLAY_BUTTON} hover:-translate-y-1 active:translate-y-[2px] transition-all flex items-center justify-center gap-1.5 group text-[11px] sm:text-base cursor-pointer truncate`}>
              <span>Get Free Salesforce Audit</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
            <button className="flex-1 border-2 border-[#1A7FD4] text-[#1A7FD4] font-nunito font-bold px-3 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#1A7FD4] hover:text-white transition-all text-[11px] sm:text-base flex items-center justify-center cursor-pointer truncate">
              View Case Studies
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-inter text-[8.5px] sm:text-[13px] text-[#8BA4BE] flex flex-row items-center justify-between sm:justify-start gap-1 sm:gap-4 w-full"
          >
            <span className="flex items-center gap-1 shrink-0">
               <span>🔒</span>
               <span className="truncate">Certified Partner</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 shrink-0">
               <span>⚡</span>
               <span className="truncate">48hr Response</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 shrink-0">
               <span>🌟</span>
               <span className="truncate">50+ Projects</span>
            </span>
          </motion.div>
        </div>

        {/* Right Column - Visual Area */}
        <div className="relative flex items-center justify-center w-full max-w-full px-4 sm:px-8 lg:px-0 mt-8 lg:mt-0 overflow-hidden sm:overflow-visible">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            className={`relative w-full max-w-[420px] lg:max-w-[500px] aspect-[4/5] bg-background rounded-[24px] sm:rounded-[32px] border-2 border-dashed border-[#1A7FD4]/20 flex items-center justify-center shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] group`}
          >
            {/* Hero Image */}
            <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Salesforce Team" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
            </div>

            {/* Top-Right Badge */}
            <div className="absolute -top-3 right-4 bg-[#1A7FD4] text-white font-nunito font-bold text-[9px] sm:text-[13px] px-3 py-1 sm:px-5 sm:py-2 rounded-full shadow-lg leading-none">
              Salesforce Certified ✓
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 sm:-right-8 top-1/4 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-[20px] shadow-xl flex flex-col gap-1.5 sm:gap-2 z-20 w-[120px] sm:w-[160px]"
            >
              <div className="font-nunito font-bold text-[10px] sm:text-[12px] text-[#0D1B2A] leading-none">CRM Pipeline</div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1A7FD4] animate-pulse" />
                <div className="h-[2px] flex-1 bg-[#EEF3FF]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#34C98A]" />
                <div className="h-[2px] flex-1 bg-[#EEF3FF]" />
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#29C6E0]" />
              </div>
              <div className="flex justify-between text-[8px] sm:text-[10px] text-[#8BA4BE] leading-none">
                <span>Lead</span>
                <span>Won</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 sm:-left-12 bottom-1/4 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-[20px] shadow-xl flex items-center gap-2 sm:gap-3 z-20"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EEF3FF] text-[#1A7FD4] flex items-center justify-center shrink-0">
                <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-inter text-[8px] sm:text-[10px] text-[#8BA4BE] leading-none">Avg. Implementation</div>
                <div className="font-nunito font-bold text-[11px] sm:text-[14px] text-[#0D1B2A] leading-none mt-1">3–6 Weeks</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-2 sm:-right-4 bottom-10 bg-white p-2.5 sm:p-4 rounded-xl sm:rounded-[20px] shadow-xl flex flex-col gap-1 z-20 w-[110px] sm:w-auto"
            >
              <div className="font-inter text-[8px] sm:text-[10px] text-[#8BA4BE] leading-none">Client Satisfaction</div>
              <div className="font-nunito font-bold text-[11px] sm:text-[14px] text-[#0D1B2A] leading-none mt-1">⭐ 4.9 / 5.0</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 bg-amber-400 rounded-sm" />)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 opacity-50"
      >
        <span className="text-[10px] sm:text-[12px] font-inter text-[#8BA4BE]">Explore our services</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#8BA4BE]" />
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientSweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientSweep {
          animation: gradientSweep 3s ease infinite;
        }
      `}} />
    </section>
  );
};

export default SalesforceConsultingHero;
