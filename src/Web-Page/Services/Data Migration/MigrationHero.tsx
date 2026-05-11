"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database } from "lucide-react";
import { NEUMORPHIC_BUTTON } from "./Constants";

const MigrationHero = () => {
  return (
    <section className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm text-[#1A7FD4] text-[11px] font-black tracking-[4px] uppercase mb-8 border border-white/40 inline-block">
          DATA MIGRATION
        </div>
        <h1 className="text-5xl md:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.1] mb-8">
          Move Your Data. <br/>
          <span className="text-[#1A7FD4]">Zero Loss.</span> <br/>
          Zero Downtime.
        </h1>
        <p className="text-lg md:text-xl text-[#4A6080] max-w-xl font-inter leading-relaxed mb-12">
          Pentacloud delivers secure, compliant, and seamless data migration across platforms, systems, and clouds — protecting every record, every relationship, and every byte of your business-critical data through every stage of the migration journey.
        </p>
        
        <div className="flex flex-wrap gap-6 mb-12">
          <button className="bg-[#1A7FD4] text-white px-10 py-5 rounded-2xl font-nunito font-black text-xl shadow-[0_12px_24px_rgba(26,127,212,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3">
            Get Free Migration Assessment <ArrowRight size={20} />
          </button>
          <button className={`px-10 py-5 rounded-2xl font-nunito font-bold text-lg text-[#1A7FD4] ${NEUMORPHIC_BUTTON}`}>
            Talk to Our Experts
          </button>
        </div>

        <div className="flex items-center gap-6 py-4 px-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 w-fit">
           <span className="text-[#4A6080] text-sm font-bold flex items-center gap-2">🔒 100% Data Integrity</span>
           <span className="text-gray-300">|</span>
           <span className="text-[#4A6080] text-sm font-bold flex items-center gap-2">⚡ Zero Downtime Guaranteed</span>
           <span className="text-gray-300">|</span>
           <span className="text-[#1A7FD4] text-sm font-black flex items-center gap-2">✅ GDPR & HIPAA Compliant</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-[48px] shadow-2xl border border-white aspect-[4/3] flex items-center justify-center relative group">
           <div className="absolute inset-0 rounded-[48px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Cloud Infrastructure" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
           </div>
           
           {/* Floating Stat Cards */}
           <motion.div 
             animate={{ y: [0, -10, 0] }} 
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-10 -left-8 p-6 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Data Migrated</p>
              <p className="text-2xl font-black text-[#1A7FD4]">10M+ Records</p>
              <p className="text-[9px] text-slate-400 font-bold">Across all projects</p>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-20 -right-8 p-6 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Success Rate</p>
              <p className="text-3xl font-black text-[#34C98A]">100%</p>
              <p className="text-[9px] text-slate-400 font-bold">Zero data loss record</p>
           </motion.div>

           <motion.div 
             animate={{ y: [-5, 5, -5] }} 
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 right-10 p-5 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Compliance</p>
              <p className="text-xl font-black text-[#1A7FD4]">GDPR · HIPAA · ISO</p>
              <p className="text-[9px] text-slate-400 font-bold">Fully compliant migrations</p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default MigrationHero;
