"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, Shield, Server, Activity, ArrowRight, CheckCircle2, Zap 
} from "lucide-react";

const CloudHero = () => {
  const [nodesOnline, setNodesOnline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodesOnline((prev) => (prev < 247 ? prev + 1 : 247));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-screen overflow-hidden bg-[#F0F6FF] flex items-center pt-16 sm:pt-28 md:pt-32 pb-8 sm:pb-16 px-4 sm:px-6">
      {/* Background Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#C8E2FA] rounded-full blur-[130px] opacity-55 pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, -50, 0],
          scale: [1, 1.05, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#D4EEFF] rounded-full blur-[100px] opacity-40 pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#E0F7FF] rounded-full blur-[80px] opacity-30 pointer-events-none" 
      />

      {/* Cloud Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 0.12, 0.12, 0]
          }}
          transition={{ 
            duration: 20 + Math.random() * 20, 
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute text-[#1A7FD4] pointer-events-none z-0"
        >
          <Cloud size={16 + Math.random() * 24} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left gap-4 sm:gap-6 w-full">
          {/* Badge Row */}
          <div className="flex flex-wrap gap-2 justify-start">
            {[
              { text: "Cloud Solutions", bg: "bg-[#EEF3FF]", border: "border-[#1A7FD4]/30", color: "text-[#1A7FD4]", icon: Cloud },
              { text: "Enterprise Grade", bg: "bg-[#E8FFE8]", border: "border-[#34C98A]/30", color: "text-[#34C98A]", icon: Shield },
              { text: "99.9% Uptime", bg: "bg-[#FFF8E0]", border: "border-[#F59E0B]/30", color: "text-[#F59E0B]", icon: CheckCircle2 }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: i * 0.05 }}
                className={`px-3 py-1 sm:py-1.5 rounded-full border ${badge.bg} ${badge.border} ${badge.color} text-[9px] sm:text-[11px] font-bold tracking-wide uppercase shadow-sm flex items-center gap-1.5`}
              >
                <badge.icon className="w-3.5 h-3.5" />
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Headline */}
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="font-nunito font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[68px] text-[#0D1B2A] leading-[1.2] md:leading-[1.1] tracking-tight"
            >
              Enterprise Cloud <br className="hidden sm:block" />
              Infrastructure That <br />
              <span className="bg-gradient-to-r from-[#1A7FD4] via-[#29C6E0] to-[#2563EB] bg-[length:300%_auto] bg-clip-text text-transparent animate-gradient-sweep">
                Never Sleeps.
              </span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-inter text-xs sm:text-base md:text-[17px] text-[#4A6080] leading-relaxed max-w-[520px] pr-2"
          >
            Pentacloud designs, deploys, and manages enterprise-grade cloud infrastructure — from architecture blueprints to 24/7 managed operations. Scalable, secure, and optimised for performance from day one.
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-[#1A7FD4] text-white font-nunito font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-full shadow-[0_8px_24px_rgba(26,127,212,0.35),inset_0_-3px_0_rgba(0,0,0,0.12)] hover:-translate-y-0.5 active:translate-y-[2px] transition-all text-xs sm:text-base cursor-pointer flex items-center justify-center gap-2">
              <span>Get Free Cloud Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto bg-transparent text-[#1A7FD4] font-nunito font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-[#1A7FD4] hover:bg-[#1A7FD4] hover:text-white transition-all text-xs sm:text-base cursor-pointer flex items-center justify-center">
              View Cloud Services
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[#8BA4BE] text-[10px] sm:text-[13px] font-inter flex flex-wrap items-center gap-x-3 gap-y-1.5"
          >
            <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-[#34C98A]" /> HIPAA + GDPR Compliant</span>
            <span className="opacity-30 hidden sm:block">·</span>
            <span className="flex items-center gap-1.5"><Cloud className="w-3.5 h-3.5 text-[#1A7FD4]" /> AWS + GCP Certified</span>
            <span className="opacity-30 hidden sm:block">·</span>
            <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-[#F59E0B]" fill="#F59E0B" /> 99.9% Uptime SLA</span>
          </motion.div>

          {/* Floating Cards */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mt-4 sm:mt-6 w-full relative z-20">
            {[
              { icon: Activity, title: "Uptime: 99.97%", sub: "Health", delay: 0 },
              { icon: Server, title: `${nodesOnline} Nodes`, sub: "Active Servers", delay: 1 },
              { icon: Shield, title: "All Secure", sub: "Security", delay: 2 }
            ].map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                className="bg-[#E8F0F8] rounded-xl sm:rounded-[16px] p-1.5 sm:p-3 shadow-[6px_6px_12px_rgba(163,185,210,0.5),-6px_-6px_12px_rgba(255,255,255,0.9)] flex items-center gap-1.5 min-w-0 border border-white/40"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#1A7FD4] shadow-inner shrink-0">
                  <card.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${i === 0 || i === 2 ? "text-green-500" : ""}`} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[6.5px] sm:text-[8px] text-[#8BA4BE] font-bold uppercase leading-none mb-0.5 truncate">{card.sub}</span>
                  <span className="text-[8.5px] sm:text-[11px] font-bold text-[#0D1B2A] whitespace-nowrap leading-none truncate">{card.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", delay: 0.4 }}
          className="relative w-full max-w-full px-2 sm:px-8 lg:px-0 mt-6 lg:-mt-24 overflow-hidden sm:overflow-visible flex items-center justify-center"
        >
          <div className="bg-gradient-to-br from-[#EEF3FF] to-[#E0EEFF] rounded-2xl sm:rounded-[32px] p-4 sm:p-12 min-h-[280px] sm:min-h-[540px] max-w-[420px] lg:max-w-none w-full border-2 border-dashed border-[#1A7FD4]/15 shadow-[12px_12px_32px_rgba(26,127,212,0.15),-6px_-6px_16px_rgba(255,255,255,0.95)] relative flex flex-col items-center justify-center">
            
            {/* Diagram */}
            <div className="w-full flex flex-col items-center gap-10 sm:gap-16 relative">
              {/* Cloud Icon */}
              <motion.div 
                animate={{ boxShadow: ["0 0 0px rgba(26,127,212,0)", "0 0 20px rgba(26,127,212,0.4)", "0 0 0px rgba(26,127,212,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-[#1A7FD4] shadow-lg relative z-10"
              >
                <Cloud className="w-8 h-8 sm:w-12 sm:h-12" />
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute top-14 sm:top-20 w-full h-24 sm:h-32 -z-0" viewBox="0 0 200 80">
                <motion.path 
                  d="M 100 0 L 30 60" 
                  stroke="#1A7FD4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.3"
                />
                <motion.path 
                  d="M 100 0 L 100 60" 
                  stroke="#1A7FD4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.3"
                />
                <motion.path 
                  d="M 100 0 L 170 60" 
                  stroke="#1A7FD4" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.3"
                />
                {/* Data Dots */}
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    r="2"
                    fill="#1A7FD4"
                    animate={{ 
                      offsetDistance: ["0%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    style={{ offsetPath: `path('${i === 0 ? "M 100 0 L 30 60" : i === 1 ? "M 100 0 L 100 60" : "M 100 0 L 170 60"}')` }}
                  />
                ))}
              </svg>

              {/* Server Blocks */}
              <div className="flex gap-4 sm:gap-6 w-full justify-center">
                {["Web", "API", "DB"].map((label, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#E8F0F8] rounded-xl p-2.5 sm:p-4 shadow-[4px_4px_8px_rgba(163,185,210,0.6),-4px_-4px_8px_rgba(255,255,255,0.9)] flex flex-col items-center gap-1.5 sm:gap-2 min-w-[64px] sm:min-w-[80px]"
                  >
                    <Server className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#1A7FD4]" />
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#0D1B2A]">{label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 text-[10px] sm:text-[13px] text-[#1A7FD4]/40 font-inter">
              Cloud Architecture Blueprint
            </div>

            <div className="absolute top-[-12px] sm:top-[-16px] right-4 sm:right-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1A7FD4] text-white rounded-full font-bold text-[9px] sm:text-xs shadow-lg flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> <span>End-to-End Cloud</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-sweep {
          animation: sweep 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CloudHero;
