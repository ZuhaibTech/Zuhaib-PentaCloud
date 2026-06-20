"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe } from "lucide-react";
import { CLAY_CARD, NEUMORPHIC_BUTTON } from "./Constants";

const ZohoHero = () => {
  return (
    <section className="relative w-full pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-6 md:pb-10 overflow-hidden px-4 sm:px-6">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 bg-white/60 backdrop-blur-sm border border-[#1A7FD4]/20 text-[#1A7FD4] rounded-full text-[8.5px] sm:text-[11px] font-black uppercase tracking-[3px] mb-4 sm:mb-5"
            >
              ZOHO SERVICES
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] font-nunito font-black text-[#0D1B2A] leading-[1.2] md:leading-[1.1] mb-3 sm:mb-5">
              Unlock the Full Power <br className="hidden sm:block"/>
              <span className="text-[#1A7FD4]">of the Zoho Ecosystem.</span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-base text-[#4A6080] font-inter leading-relaxed mb-4 sm:mb-6 max-w-xl">
              Pentacloud is a certified Zoho partner delivering end-to-end Zoho consulting, implementation, integration, and training services, helping businesses across India and the UAE maximise their Zoho investment and run smarter, faster, and more profitably.
            </p>



            <div className="flex flex-row items-center justify-between sm:justify-start gap-1.5 sm:gap-6 text-[8px] sm:text-[11px] md:text-[12px] font-bold text-[#4A6080] border-t border-slate-200 pt-5 sm:pt-6 w-full">
               <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#34C98A] shrink-0" />
                  <span className="truncate hidden sm:inline">Certified Zoho Partner</span>
                  <span className="truncate sm:hidden">Certified Partner</span>
               </div>
               <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 shrink-0" />
                  <span className="truncate">48hr Response</span>
               </div>
               <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[#1A7FD4] shrink-0" />
                  <span className="truncate">India & UAE</span>
               </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-full px-4 sm:px-8 lg:px-0 mt-8 lg:mt-0 overflow-hidden sm:overflow-visible"
          >
            {/* Main Image Area */}
            <div className="bg-white p-2 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white/80 relative overflow-hidden aspect-[4/3] flex items-center justify-center group">
               <img 
                 src="/Images/Zoho Images/Zoho-Hero.webp" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 alt="Zoho Dashboard" 
               />
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-50/10" />
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(163,185,210,0.3)] absolute top-2 right-2 sm:-top-4 sm:-right-4 p-2 sm:p-4 max-w-[95px] sm:max-w-[160px]"
            >
               <p className="text-[6px] sm:text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1 leading-none">Apps Expertise</p>
               <h4 className="text-sm sm:text-2xl font-nunito font-black text-[#1A7FD4] mb-0 leading-none">45+ Apps</h4>
               <p className="text-[6px] sm:text-[9px] font-bold text-[#4A6080] leading-none">Zoho ecosystem</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(163,185,210,0.3)] absolute bottom-4 left-2 sm:bottom-8 sm:-left-6 p-2 sm:p-4 max-w-[95px] sm:max-w-[160px]"
            >
               <p className="text-[6px] sm:text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1 leading-none">Projects</p>
               <h4 className="text-sm sm:text-2xl font-nunito font-black text-amber-500 mb-0 leading-none">40+ Projects</h4>
               <p className="text-[6px] sm:text-[9px] font-bold text-[#4A6080] leading-none">Across industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="bg-white rounded-[24px] border border-slate-100 shadow-[0_4px_20px_rgba(163,185,210,0.3)] absolute bottom-2 right-2 sm:-bottom-4 sm:right-8 p-2 sm:p-4 max-w-[90px] sm:max-w-[160px]"
            >
               <p className="text-[6px] sm:text-[9px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1 leading-none">Avg ROI</p>
               <h4 className="text-sm sm:text-2xl font-nunito font-black text-[#34C98A] mb-0 leading-none">250% ↑</h4>
               <p className="text-[6px] sm:text-[9px] font-bold text-[#4A6080] leading-none">Within 12mo</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ZohoHero;
