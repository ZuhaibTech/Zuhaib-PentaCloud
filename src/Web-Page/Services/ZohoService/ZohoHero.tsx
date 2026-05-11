"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Globe } from "lucide-react";
import { CLAY_CARD, NEUMORPHIC_BUTTON } from "./Constants";

const ZohoHero = () => {
  return (
    <section className="relative w-full pt-32 pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 bg-white/60 backdrop-blur-sm border border-[#1A7FD4]/20 text-[#1A7FD4] rounded-full text-[11px] font-black uppercase tracking-[3px] mb-8"
            >
              ZOHO SERVICES
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-nunito font-black text-[#0D1B2A] leading-[1.1] mb-8">
              Unlock the Full Power <br/>
              <span className="text-[#1A7FD4]">of the Zoho Ecosystem.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#4A6080] font-inter leading-relaxed mb-10 max-w-xl">
              Pentacloud is a certified Zoho partner delivering end-to-end Zoho consulting, implementation, integration, and training services — helping businesses across India and the UAE maximise their Zoho investment and run smarter, faster, and more profitably.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-[#1A7FD4] text-white px-8 py-5 rounded-2xl font-nunito font-black text-lg shadow-[0_12px_24px_rgba(26,127,212,0.3)] hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 group">
                Get Free Zoho Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className={`${NEUMORPHIC_BUTTON} text-[#1A7FD4] px-8 py-5 rounded-2xl font-nunito font-bold text-lg`}>
                Explore Zoho Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[12px] font-bold text-[#4A6080] border-t border-slate-200 pt-8">
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#34C98A]" />
                  <span>Certified Zoho Partner</span>
               </div>
               <div className="flex items-center gap-2">
                  <Zap size={16} className="text-amber-500" />
                  <span>48hr Response</span>
               </div>
               <div className="flex items-center gap-2">
                  <Globe size={16} className="text-[#1A7FD4]" />
                  <span>India & UAE</span>
               </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Area */}
            <div className="bg-white p-2 rounded-[48px] shadow-2xl border border-white/80 relative overflow-hidden aspect-[4/3] flex items-center justify-center group">
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
              className={`${CLAY_CARD} absolute -top-8 -right-8 p-6 max-w-[200px] border-[#1A7FD4]/10`}
            >
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Zoho Apps Expertise</p>
               <h4 className="text-3xl font-nunito font-black text-[#1A7FD4] mb-1">45+ Apps</h4>
               <p className="text-[10px] font-bold text-[#4A6080]">Across Zoho ecosystem</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className={`${CLAY_CARD} absolute bottom-12 -left-12 p-6 max-w-[200px] border-amber-200/50`}
            >
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Zoho Projects Delivered</p>
               <h4 className="text-3xl font-nunito font-black text-amber-500 mb-1">40+ Projects</h4>
               <p className="text-[10px] font-bold text-[#4A6080]">Across industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className={`${CLAY_CARD} absolute -bottom-8 right-12 p-6 max-w-[200px] border-green-200/50`}
            >
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Avg ROI from Zoho</p>
               <h4 className="text-3xl font-nunito font-black text-[#34C98A] mb-1">250% ↑</h4>
               <p className="text-[10px] font-bold text-[#4A6080]">Within first 12 months</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ZohoHero;
