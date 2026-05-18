"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[75vh] lg:min-h-screen bg-[#E8F0F8] flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-0">
      {/* Background Blobs */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#1A7FD4] rounded-full filter blur-[120px] opacity-[0.04] pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#29C6E0] rounded-full filter blur-[100px] opacity-[0.04] pointer-events-none" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-5 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[9px] md:text-[10px] font-black tracking-[3px] uppercase mb-6 md:mb-10"
        >
          OUR STORY
        </motion.div>

        {/* Main Headline */}
        <div className="flex flex-col gap-2 mb-6 md:mb-10 font-nunito font-black text-[clamp(36px,8vw,80px)] leading-[1.1] md:leading-[1.05]">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
              className="text-[#0D1B2A]"
            >
              We Are
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.45 }}
              className="text-transparent bg-clip-text bg-[length:200%_auto] animate-gradientSweep py-1 md:py-2"
              style={{ backgroundImage: 'linear-gradient(90deg, #1A7FD4, #29C6E0, #1A7FD4)' }}
            >
              Pentacloud
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.6 }}
              className="text-[#0D1B2A]"
            >
              Consulting
            </motion.div>
          </div>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-inter text-sm sm:text-base md:text-lg lg:text-xl text-[#4A6080] max-w-[640px] leading-relaxed mb-10 md:mb-16"
        >
          Bengaluru-based technology consulting firm dedicated to driving digital transformation through AI-powered solutions and a human-centric approach.
        </motion.p>

        {/* Scroll Indicator Moved into Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-3 pointer-events-none mt-4 md:mt-8"
        >
          <span className="font-nunito font-black text-[9px] md:text-[10px] text-[#8BA4BE] uppercase tracking-[3px]">Explore Story</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center">
               <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-[#1A7FD4]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
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

export default AboutHero;
