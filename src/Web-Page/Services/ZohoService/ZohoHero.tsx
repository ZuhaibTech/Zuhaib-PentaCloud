"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe } from "lucide-react";
import { CLAY_CARD, NEUMORPHIC_BUTTON } from "./Constants";

const ZohoHero = () => {
  return (
    <section className="relative w-full pt-10 sm:pt-28 md:pt-32 pb-10 sm:pb-16 md:pb-24 overflow-hidden px-4 sm:px-6">
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
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.2] md:leading-[1.1] mb-4 sm:mb-6">
              Unlock the Full Power <br className="hidden sm:block"/>
              <span className="text-[#1A7FD4]">of the Zoho Ecosystem.</span>
            </h1>
            
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#4A6080] font-inter leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Pentacloud is a certified Zoho partner delivering end-to-end Zoho consulting, implementation, integration, and training services — helping businesses across India and the UAE maximise their Zoho investment and run smarter, faster, and more profitably.
            </p>

            <div className="flex flex-row items-center gap-2 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <button className="flex-1 bg-[#1A7FD4] hover:bg-blue-600 active:bg-blue-700 text-white px-3 py-3 sm:px-8 sm:py-4 rounded-xl font-nunito font-black text-[11px] sm:text-base shadow-[0_8px_16px_rgba(26,127,212,0.2)] hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-1.5 group cursor-pointer truncate">
                <span>Get Free Zoho Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
              <button className={`flex-1 ${NEUMORPHIC_BUTTON} text-[#1A7FD4] px-3 py-3 sm:px-8 sm:py-4 rounded-xl font-nunito font-bold text-[11px] sm:text-base flex items-center justify-center cursor-pointer truncate`}>
                Explore Zoho Services
              </button>
            </div>

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
                 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
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
              className={`${CLAY_CARD} absolute -top-2 -right-2 sm:-top-8 sm:-right-8 p-2.5 sm:p-6 max-w-[110px] sm:max-w-[200px] border-[#1A7FD4]/10`}
            >
               <p className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-2 leading-none">Apps Expertise</p>
               <h4 className="text-sm sm:text-3xl font-nunito font-black text-[#1A7FD4] mb-0.5 leading-none">45+ Apps</h4>
               <p className="text-[7px] sm:text-[10px] font-bold text-[#4A6080] leading-none">Zoho ecosystem</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className={`${CLAY_CARD} absolute bottom-6 -left-2 sm:bottom-12 sm:-left-12 p-2.5 sm:p-6 max-w-[110px] sm:max-w-[200px] border-amber-200/50`}
            >
               <p className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-2 leading-none">Projects</p>
               <h4 className="text-sm sm:text-3xl font-nunito font-black text-amber-500 mb-0.5 leading-none">40+ Projects</h4>
               <p className="text-[7px] sm:text-[10px] font-bold text-[#4A6080] leading-none">Across industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className={`${CLAY_CARD} absolute -bottom-2 right-2 sm:-bottom-8 sm:right-12 p-2.5 sm:p-6 max-w-[110px] sm:max-w-[200px] border-green-200/50`}
            >
               <p className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-2 leading-none">Avg ROI</p>
               <h4 className="text-sm sm:text-3xl font-nunito font-black text-[#34C98A] mb-0.5 leading-none">250% ↑</h4>
               <p className="text-[7px] sm:text-[10px] font-bold text-[#4A6080] leading-none">Within 12mo</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ZohoHero;
