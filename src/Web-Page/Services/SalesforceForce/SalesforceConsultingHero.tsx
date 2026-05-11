"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Sliders, ArrowRight, ChevronDown } from "lucide-react";

const CLAY_BUTTON = "rounded-[50px] shadow-[0_8px_20px_rgba(26,127,212,0.30),inset_0_-3px_0_rgba(0,0,0,0.12)]";

const SalesforceConsultingHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-background flex items-center overflow-hidden pt-32 lg:pt-40 pb-20 lg:pb-32 px-6">
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

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Badge Row */}
          <div className="flex gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[13px] rounded-full px-5 py-1.5"
            >
              ☁ Salesforce Partner
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#34C98A] font-nunito font-bold text-[13px] rounded-full px-5 py-1.5"
            >
              ✓ 16+ Certifications
            </motion.div>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1 mb-8">
            {["Salesforce Solutions", "That Actually"].map((text, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as any, delay: 0.4 + i * 0.15 }}
                  className="font-nunito font-extrabold text-[clamp(42px,6vw,72px)] leading-[1.1] text-[#0D1B2A]"
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
                className="font-nunito font-extrabold text-[clamp(42px,6vw,72px)] leading-[1.1] text-transparent bg-clip-text bg-[length:200%_auto] animate-gradientSweep"
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
            className="font-inter text-[17px] text-[#4A6080] leading-[1.8] max-w-[520px] mb-12"
          >
            As a certified Salesforce Partner, Pentacloud delivers end-to-end Salesforce implementation, customisation, and optimisation services — turning your CRM into a revenue-generating engine that scales with your business.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button className={`bg-[#1A7FD4] text-white font-nunito font-bold px-8 py-4 ${CLAY_BUTTON} hover:-translate-y-1 active:translate-y-[2px] transition-all flex items-center gap-2 group`}>
              Get Free Salesforce Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[#1A7FD4] text-[#1A7FD4] font-nunito font-bold px-8 py-4 rounded-full hover:bg-[#1A7FD4] hover:text-white transition-all">
              View Case Studies
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-inter text-[13px] text-[#8BA4BE] flex items-center gap-4"
          >
            <span>🔒 Certified Partner</span>
            <span>·</span>
            <span>⚡ 48hr Response</span>
            <span>·</span>
            <span>🌟 50+ Projects</span>
          </motion.div>
        </div>

        {/* Right Column - Visual Area */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            className={`relative w-full max-w-[500px] aspect-[4/5] bg-background rounded-[32px] border-2 border-dashed border-[#1A7FD4]/20 flex items-center justify-center shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] group`}
          >
            {/* Hero Image */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Salesforce Team" 
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#EEF3FF]/40 to-transparent" />
            </div>

            {/* Top-Right Badge */}
            <div className="absolute -top-4 right-6 bg-[#1A7FD4] text-white font-nunito font-bold text-[13px] px-5 py-2 rounded-full shadow-lg">
              Salesforce Certified ✓
            </div>

            {/* Floating Stat Cards */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 bg-white p-4 rounded-[20px] shadow-xl flex flex-col gap-2 z-20 w-[160px]"
            >
              <div className="font-nunito font-bold text-[12px] text-[#0D1B2A]">CRM Pipeline</div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-[#1A7FD4] animate-pulse" />
                <div className="h-[2px] flex-1 bg-[#EEF3FF]" />
                <div className="w-2 h-2 rounded-full bg-[#34C98A]" />
                <div className="h-[2px] flex-1 bg-[#EEF3FF]" />
                <div className="w-2 h-2 rounded-full bg-[#29C6E0]" />
              </div>
              <div className="flex justify-between text-[10px] text-[#8BA4BE]">
                <span>Lead</span>
                <span>Won</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-1/4 bg-white p-4 rounded-[20px] shadow-xl flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FF] text-[#1A7FD4] flex items-center justify-center">
                <Sliders size={20} />
              </div>
              <div>
                <div className="font-inter text-[10px] text-[#8BA4BE]">Avg. Implementation</div>
                <div className="font-nunito font-bold text-[14px] text-[#0D1B2A]">3–6 Weeks</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -right-4 bottom-10 bg-white p-4 rounded-[20px] shadow-xl flex flex-col gap-1 z-20"
            >
              <div className="font-inter text-[10px] text-[#8BA4BE]">Client Satisfaction</div>
              <div className="font-nunito font-bold text-[14px] text-[#0D1B2A]">⭐ 4.9 / 5.0</div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <div key={i} className="w-2.5 h-2.5 bg-amber-400 rounded-sm" />)}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[12px] font-inter text-[#8BA4BE]">Explore our services</span>
        <ChevronDown size={20} className="text-[#8BA4BE]" />
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
