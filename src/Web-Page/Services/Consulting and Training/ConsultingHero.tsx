"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { NEUMORPHIC_BUTTON } from "./Constants";

const ConsultingHero = () => {
  return (
    <section className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full shadow-sm text-[#1A7FD4] text-[11px] font-black tracking-[4px] uppercase mb-8 border border-white/40 inline-block">
          CONSULTING & TRAINING
        </div>
        <h1 className="text-5xl md:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.1] mb-8">
          Expert Guidance. <br/>
          <span className="text-[#1A7FD4]">Real Skills.</span> <br/>
          Measurable Growth.
        </h1>
        <p className="text-lg md:text-xl text-[#4A6080] max-w-xl font-inter leading-relaxed mb-12">
          Pentacloud's consulting and training programmes bridge the gap between technology investment and business impact. Whether you need strategic technology consulting to navigate complex decisions or hands-on training to upskill your team — our certified experts deliver programmes that create lasting capability inside your organisation.
        </p>
        
        <div className="flex flex-wrap gap-6 mb-12">
          <button className="bg-[#1A7FD4] text-white px-10 py-5 rounded-2xl font-nunito font-black text-xl shadow-[0_12px_24px_rgba(26,127,212,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-3">
            Book Free Consultation <ArrowRight size={20} />
          </button>
          <button className={`px-10 py-5 rounded-2xl font-nunito font-bold text-lg text-[#1A7FD4] ${NEUMORPHIC_BUTTON}`}>
            Explore Training Programmes
          </button>
        </div>

        <div className="flex items-center gap-6 py-4 px-8 bg-white/40 backdrop-blur-sm rounded-2xl border border-white/40 w-fit">
           <span className="text-[#4A6080] text-sm font-bold flex items-center gap-2">🏆 16+ Certifications</span>
           <span className="text-gray-300">|</span>
           <span className="text-[#4A6080] text-sm font-bold flex items-center gap-2">👥 500+ Professionals Trained</span>
           <span className="text-gray-300">|</span>
           <span className="text-[#1A7FD4] text-sm font-black flex items-center gap-2">⭐ Certified Tier 3 Experts</span>
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
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Consulting Team" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
           </div>
           
           {/* Floating Stat Cards */}
           <motion.div 
             animate={{ y: [0, -10, 0] }} 
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-10 -left-8 p-6 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Professionals Trained</p>
              <p className="text-3xl font-black text-[#1A7FD4]">500+</p>
              <p className="text-[9px] text-slate-400 font-bold">Across India & UAE</p>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 10, 0] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-20 -right-8 p-6 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Training Programmes</p>
              <p className="text-2xl font-black text-[#34C98A]">10+ Active Courses</p>
              <p className="text-[9px] text-slate-400 font-bold">Salesforce & Cloud</p>
           </motion.div>

           <motion.div 
             animate={{ y: [-5, 5, -5] }} 
             transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-6 right-10 p-5 bg-white rounded-3xl shadow-xl border border-blue-50/50 z-20"
           >
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1">Expert Consultants</p>
              <p className="text-xl font-black text-[#1A7FD4]">Certified Tier 3</p>
              <p className="text-[9px] text-slate-400 font-bold">16+ Certifications</p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultingHero;
