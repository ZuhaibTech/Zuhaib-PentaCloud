"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Users, Star } from "lucide-react";
import { NEUMORPHIC_BUTTON } from "./Constants";

const ConsultingHero = () => {
  return (
    <section className="py-6 sm:py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 sm:mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-full shadow-sm text-[#1A7FD4] text-[10px] sm:text-[11px] font-black tracking-[3px] sm:tracking-[4px] uppercase mb-4 sm:mb-8 border border-white/40 inline-block">
          CONSULTING & TRAINING
        </div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.2] lg:leading-[1.1] mb-4 sm:mb-8">
          Expert Guidance. <br/>
          <span className="text-[#1A7FD4]">Real Skills.</span> <br/>
          Measurable Growth.
        </h1>
        <p className="text-xs sm:text-base md:text-lg lg:text-xl text-[#4A6080] max-w-xl font-inter leading-relaxed mb-6 sm:mb-12">
          Pentacloud's consulting and training programmes bridge the gap between technology investment and business impact. Whether you need strategic technology consulting to navigate complex decisions or hands-on training to upskill your team — our certified experts deliver programmes that create lasting capability inside your organisation.
        </p>
        
        <div className="flex flex-wrap gap-3 sm:gap-6 mb-6 sm:mb-12">
          <button className="bg-[#1A7FD4] text-white px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-nunito font-black text-sm sm:text-xl shadow-[0_10px_20px_rgba(26,127,212,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all flex items-center gap-2">
            Book Free Consultation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className={`px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-nunito font-bold text-xs sm:text-base md:text-lg text-[#1A7FD4] transition-all active:scale-95 ${NEUMORPHIC_BUTTON}`}>
            Explore Training Programmes
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-3.5 px-5 sm:py-4 sm:px-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 w-full sm:w-fit shadow-[2px_2px_5px_rgba(163,185,210,0.15)]">
           <span className="text-[#4A6080] text-xs sm:text-sm font-bold flex items-center gap-2">
             <Trophy className="w-4 h-4 text-[#F59E0B] shrink-0" /> 16+ Certifications
           </span>
           <span className="text-gray-300 hidden sm:block">|</span>
           <span className="text-[#4A6080] text-xs sm:text-sm font-bold flex items-center gap-2">
             <Users className="w-4 h-4 text-[#1A7FD4] shrink-0" /> 500+ Professionals Trained
           </span>
           <span className="text-gray-300 hidden sm:block">|</span>
           <span className="text-[#1A7FD4] text-xs sm:text-sm font-black flex items-center gap-2">
             <Star className="w-4 h-4 text-[#34C98A] fill-[#34C98A] shrink-0" /> Certified Tier 3 Experts
           </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-6 lg:pt-0"
      >
        <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white aspect-[4/3] flex items-center justify-center relative group">
           <div className="absolute inset-0 rounded-[24px] sm:rounded-[48px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Consulting Team" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
           </div>
           
           {/* Floating Stat Cards - Optimized for Mobile Bounds to prevent overflow */}
           <motion.div 
             animate={{ y: [0, -6, 0] }} 
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-6 -left-2 sm:-left-8 p-3 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Professionals Trained</p>
              <p className="text-base sm:text-3xl font-black text-[#1A7FD4]">500+</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">Across India & UAE</p>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 6, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-12 -right-2 sm:-right-8 p-3 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Training Programmes</p>
              <p className="text-sm sm:text-2xl font-black text-[#34C98A]">10+ Active Courses</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">Salesforce & Cloud</p>
           </motion.div>

           <motion.div 
             animate={{ y: [-4, 4, -4] }} 
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-4 right-4 sm:right-10 p-2.5 sm:p-5 bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[8px] sm:text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-0.5">Expert Consultants</p>
              <p className="text-xs sm:text-xl font-black text-[#1A7FD4]">Certified Tier 3</p>
              <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none mt-0.5">16+ Certifications</p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultingHero;
