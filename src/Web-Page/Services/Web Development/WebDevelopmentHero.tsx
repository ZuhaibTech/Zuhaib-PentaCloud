"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Zap, Target, Smartphone } from "lucide-react";

const CLAY_BUTTON = "rounded-[50px] shadow-[0_8px_20px_rgba(26,127,212,0.30),inset_0_-3px_0_rgba(0,0,0,0.12)]";

const WebDevelopmentHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F0F6FF] flex items-center overflow-hidden pt-20 px-6">
      {/* Background Blobs */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8E2FA] rounded-full filter blur-[120px] opacity-50 pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#D4EEFF] rounded-full filter blur-[90px] opacity-35 pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#E0F0FF] rounded-full filter blur-[70px] pointer-events-none" 
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
              className="bg-[#EEF3FF] text-[#1A7FD4] font-nunito font-bold text-[13px] rounded-full px-5 py-1.5"
            >
              🌐 Web Development
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#E8FFE8] text-[#34C98A] font-nunito font-bold text-[13px] rounded-full px-5 py-1.5"
            >
              ⚡ High Performance
            </motion.div>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1 mb-8">
            {["Websites That", "Don't Just Look Good —"].map((text, i) => (
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
                className="font-nunito font-extrabold text-[clamp(42px,6vw,72px)] leading-[1.1] text-transparent bg-clip-text bg-[length:300%_auto] animate-gradientSweep"
                style={{ backgroundImage: 'linear-gradient(90deg, #1A7FD4, #29C6E0, #34C98A, #1A7FD4)' }}
              >
                They Perform.
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
            Pentacloud builds stunning, high-performance websites tailored to your business — combining cutting-edge design, bulletproof security, and scalable architecture that grows with your ambitions. Every pixel purposeful. Every millisecond optimised.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button className={`bg-[#1A7FD4] text-white font-nunito font-bold px-8 py-4 ${CLAY_BUTTON} hover:-translate-y-1 active:translate-y-[2px] transition-all flex items-center gap-2 group`}>
              Start Your Website Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-[#1A7FD4] text-[#1A7FD4] font-nunito font-bold px-8 py-4 rounded-full hover:bg-[#1A7FD4] hover:text-white transition-all">
              View Our Work
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-inter text-[13px] text-[#8BA4BE] flex items-center gap-4"
          >
            <span>🔒 Secure by Default</span>
            <span>·</span>
            <span>📱 Mobile First</span>
            <span>·</span>
            <span>⚡ Core Web Vitals Optimised</span>
          </motion.div>
        </div>

        {/* Right Column - Browser Mockup */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", delay: 0.3 }}
            className={`relative w-full max-w-[600px] aspect-[16/10] bg-white rounded-[32px] shadow-[12px_12px_40px_rgba(26,127,212,0.15)] group`}
          >
            {/* Browser Content Wrapper (Clipped) */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              {/* Top Bar */}
              <div className="h-10 bg-[#EEF3FF] flex items-center px-6 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 max-w-[300px] mx-auto h-6 bg-white/60 rounded-md border border-[#1A7FD4]/05 flex items-center px-3 text-[10px] text-[#8BA4BE] font-inter">
                  pentacloudconsulting.com
                </div>
              </div>

              {/* Browser Content */}
              <div className="p-6 space-y-6">
                <div className="flex gap-6 items-start">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-28 h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400" 
                      alt="Coding" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1 space-y-2 pt-1">
                    <h3 className="text-sm font-nunito font-black text-[#0D1B2A]">Pentacloud Consulting</h3>
                    <p className="text-[10px] text-[#4A6080] leading-relaxed max-w-[200px]">
                      Building high-performance digital experiences with React and cloud technology.
                    </p>
                    <div className="pt-1 flex gap-2">
                       <div className="px-3 py-1 bg-green-50 text-[8px] font-bold text-green-600 rounded-full">Optimized</div>
                       <div className="px-3 py-1 bg-blue-50 text-[8px] font-bold text-[#1A7FD4] rounded-full">React 19</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300", tag: "UI Design", label: "Custom UI/UX" },
                    { url: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&q=80&w=300", tag: "Full Stack", label: "Robust Backend" },
                    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300", tag: "Security", label: "SSL + Secure" }
                  ].map((img, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="space-y-2"
                    >
                      <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-white/50">
                        <img 
                          src={img.url} 
                          alt={img.tag} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-[9px] font-bold text-[#0D1B2A]">{img.tag}</div>
                      <div className="text-[8px] text-slate-400 leading-none">{img.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Top-Right Badge */}
            <div className="absolute top-12 right-6 bg-[#1A7FD4] text-white font-nunito font-bold text-[13px] px-5 py-2 rounded-full shadow-lg">
              Full Stack Development ✓
            </div>

            {/* Floating Mini Cards */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-1/3 bg-white p-4 rounded-[20px] shadow-xl flex flex-col gap-2 z-20 w-[160px]"
            >
              <div className="font-nunito font-bold text-[12px] text-[#0D1B2A]">Page Load Speed</div>
              <div className="flex items-center justify-between">
                <span className="font-nunito font-black text-[14px] text-[#34C98A] flex items-center gap-1.5">{"< 1.2s"} <Zap size={14} fill="#34C98A" /></span>
              </div>
              <div className="h-1.5 w-full bg-[#E8FFE8] rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "100%" }}
                   transition={{ duration: 2, delay: 1 }}
                   className="h-full bg-[#34C98A]" 
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-1/4 bg-white p-4 rounded-[20px] shadow-xl flex flex-col gap-2 z-20"
            >
              <div className="font-inter text-[10px] text-[#8BA4BE]">SEO Score</div>
              <div className="font-nunito font-bold text-[14px] text-[#0D1B2A] flex items-center gap-2">98 / 100 <Target size={14} className="text-[#E11D48]" /></div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-[#34C98A]" />)}
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute right-10 bottom-6 bg-white p-4 rounded-[20px] shadow-xl z-20"
            >
              <div className="font-inter text-[10px] text-[#8BA4BE]">Mobile Score</div>
              <div className="font-nunito font-bold text-[14px] text-[#0D1B2A] flex items-center gap-2">100 / 100 <Smartphone size={14} className="text-[#1A7FD4]" /></div>
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
        <span className="text-[12px] font-inter text-[#8BA4BE]">Explore our capabilities</span>
        <ChevronDown size={20} className="text-[#8BA4BE]" />
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradientSweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientSweep {
          animation: gradientSweep 4s ease infinite;
        }
        .skeleton {
          background: linear-gradient(90deg, #EEF3FF 25%, #D4EEFF 50%, #EEF3FF 75%);
          background-size: 200% 100%;
          animation: skeletonShimmer 2s infinite;
          border-radius: 4px;
        }
        @keyframes skeletonShimmer {
          0% { background-position: -200% 0 }
          100% { background-position: 200% 0 }
        }
      `}} />
    </section>
  );
};

export default WebDevelopmentHero;
