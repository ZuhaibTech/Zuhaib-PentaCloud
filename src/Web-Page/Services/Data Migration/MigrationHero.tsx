"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Zap, CheckCircle2 } from "lucide-react";
import { NEUMORPHIC_BUTTON } from "./Constants";

const MigrationHero = () => {
  return (
    <section className="py-6 sm:py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 sm:mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start w-full"
      >
        <div className="px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full shadow-sm text-[#1A7FD4] text-[10px] sm:text-[11px] font-black tracking-[3px] uppercase mb-4 sm:mb-6 border border-white/40 inline-block">
          DATA MIGRATION
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.2] lg:leading-[1.1] mb-4 sm:mb-6">
          Move Your Data. <br className="hidden sm:block"/>
          <span className="text-[#1A7FD4]">Zero Loss.</span> <br/>
          Zero Downtime.
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#4A6080] max-w-xl font-inter leading-relaxed mb-6 sm:mb-8">
          Pentacloud delivers secure, compliant, and seamless data migration across platforms, systems, and clouds — protecting every record, every relationship, and every byte of your business-critical data through every stage of the migration journey.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
          <button className="bg-[#1A7FD4] hover:bg-blue-600 active:bg-blue-700 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-nunito font-black text-sm sm:text-base md:text-lg shadow-[0_8px_16px_rgba(26,127,212,0.2)] hover:shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer">
            Get Free Migration Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`px-5 py-3 sm:px-8 sm:py-4 rounded-xl font-nunito font-bold text-sm sm:text-base md:text-lg text-[#1A7FD4] w-full sm:w-auto flex items-center justify-center cursor-pointer ${NEUMORPHIC_BUTTON}`}>
            Talk to Our Experts
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 py-3.5 px-5 sm:py-4 sm:px-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 w-full sm:w-fit justify-center sm:justify-start text-[11px] sm:text-xs shadow-[2px_2px_5px_rgba(163,185,210,0.15)]">
           <span className="text-[#4A6080] font-bold flex items-center gap-2">
             <Lock className="w-3.5 h-3.5 text-[#1A7FD4] shrink-0" /> 100% Data Integrity
           </span>
           <span className="text-gray-300 hidden sm:inline">|</span>
           <span className="text-[#4A6080] font-bold flex items-center gap-2">
             <Zap className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" /> Zero Downtime Guaranteed
           </span>
           <span className="text-gray-300 hidden sm:inline">|</span>
           <span className="text-[#1A7FD4] font-black flex items-center gap-2">
             <CheckCircle2 className="w-3.5 h-3.5 text-[#34C98A] shrink-0" /> GDPR & HIPAA Compliant
           </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-full px-4 sm:px-8 lg:px-0 mt-8 lg:mt-0 overflow-hidden sm:overflow-visible"
      >
        <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white aspect-[4/3] flex items-center justify-center relative group max-w-[420px] lg:max-w-none mx-auto w-full">
           <div className="absolute inset-0 rounded-[24px] sm:rounded-[48px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Cloud Infrastructure" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
           </div>
           
           {/* Floating Stat Cards - Optimized coordinates for perfect mobile alignments */}
           <motion.div 
             animate={{ y: [0, -6, 0] }} 
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-4 -left-2 sm:top-10 sm:-left-8 p-2.5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Data Migrated</p>
              <p className="text-base sm:text-2xl font-black text-[#1A7FD4]">10M+ Records</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">Across all projects</p>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 6, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-4 -right-2 sm:bottom-20 sm:-right-8 p-2.5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-[#EEF3FF]/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Success Rate</p>
              <p className="text-base sm:text-3xl font-black text-[#34C98A]">100%</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">Zero data loss record</p>
           </motion.div>

           <motion.div 
             animate={{ y: [-4, 4, -4] }} 
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-3 right-4 sm:-top-6 sm:right-10 p-2.5 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Compliance</p>
              <p className="text-xs sm:text-xl font-black text-[#1A7FD4]">GDPR · HIPAA · ISO</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">Fully compliant migrations</p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MigrationHero;
