"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cloud, Shield, Server, Activity, ArrowRight, CheckCircle2 
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
    <section className="relative w-full min-h-[90vh] lg:min-h-0 overflow-hidden bg-[#F0F6FF] flex items-center pt-32 lg:pt-36 pb-12 md:pb-16">
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

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-start text-left gap-8">
          {/* Badge Row */}
          <div className="flex flex-wrap gap-3 justify-start">
            {[
              { text: "☁ Cloud Solutions", bg: "bg-[#EEF3FF]", border: "border-[#1A7FD4]/30", color: "text-[#1A7FD4]" },
              { text: "🔒 Enterprise Grade", bg: "bg-[#E8FFE8]", border: "border-[#34C98A]/30", color: "text-[#34C98A]" },
              { text: "⚡ 99.9% Uptime SLA", bg: "bg-[#FFF8E0]", border: "border-[#F59E0B]/30", color: "text-[#F59E0B]" }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", damping: 12, delay: i * 0.08 }}
                className={`px-4 py-2 rounded-full border ${badge.bg} ${badge.border} ${badge.color} text-[11px] font-bold tracking-wide uppercase shadow-sm`}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>

          {/* Headline */}
          <div className="flex flex-col items-start">
            <motion.h1 
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="font-nunito font-extrabold text-[42px] md:text-[68px] text-[#0D1B2A] leading-[1.1] tracking-tight"
            >
              Enterprise Cloud <br />
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
            className="font-inter text-[17px] text-[#4A6080] leading-[1.8] max-w-[520px]"
          >
            Pentacloud designs, deploys, and manages enterprise-grade cloud infrastructure — 
            from architecture blueprints to 24/7 managed operations. Scalable, secure, 
            and optimised for performance from day one.
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto bg-[#1A7FD4] text-white font-nunito font-bold px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(26,127,212,0.35),inset_0_-3px_0_rgba(0,0,0,0.12)] hover:-translate-y-1 active:translate-y-[2px] transition-all">
              Get Free Cloud Assessment →
            </button>
            <button className="w-full sm:w-auto bg-transparent text-[#1A7FD4] font-nunito font-bold px-8 py-4 rounded-full border-2 border-[#1A7FD4] hover:bg-[#1A7FD4] hover:text-white transition-all">
              View Cloud Services
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-[#8BA4BE] text-[13px] font-inter flex flex-wrap items-center gap-x-4 gap-y-2"
          >
            <span className="flex items-center gap-1.5">🛡 HIPAA + GDPR Compliant</span>
            <span className="opacity-30 hidden sm:block">·</span>
            <span className="flex items-center gap-1.5">☁ AWS + GCP Certified</span>
            <span className="opacity-30 hidden sm:block">·</span>
            <span className="flex items-center gap-1.5">⚡ 99.9% Uptime SLA</span>
          </motion.div>

          {/* Floating Cards */}
          <div className="flex flex-wrap lg:flex-nowrap gap-3 mt-6 w-full relative z-20">
            {[
              { icon: Activity, title: "Uptime: 99.97% ✓", sub: "Infrastructure Health", delay: 0 },
              { icon: Server, title: `${nodesOnline} Nodes Online`, sub: "Active Servers", delay: 1 },
              { icon: Shield, title: "All Systems Secure", sub: "Security Status", delay: 2 }
            ].map((card, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                className="bg-[#E8F0F8] rounded-[16px] p-3 shadow-[6px_6px_12px_rgba(163,185,210,0.5),-6px_-6px_12px_rgba(255,255,255,0.9)] flex items-center gap-2 shrink-0 flex-1 min-w-[160px]"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1A7FD4] shadow-inner">
                  <card.icon size={16} className={i === 0 || i === 2 ? "text-green-500" : ""} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] text-[#8BA4BE] font-bold uppercase leading-none mb-1">{card.sub}</span>
                  <span className="text-[11px] font-bold text-[#0D1B2A] whitespace-nowrap leading-none">{card.title}</span>
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
          className="relative lg:-mt-24"
        >
          <div className="bg-gradient-to-br from-[#EEF3FF] to-[#E0EEFF] rounded-[32px] p-12 min-h-[540px] border-2 border-dashed border-[#1A7FD4]/15 shadow-[12px_12px_32px_rgba(26,127,212,0.15),-6px_-6px_16px_rgba(255,255,255,0.95)] relative flex flex-col items-center justify-center">
            
            {/* Diagram */}
            <div className="w-full flex flex-col items-center gap-16 relative">
              {/* Cloud Icon */}
              <motion.div 
                animate={{ boxShadow: ["0 0 0px rgba(26,127,212,0)", "0 0 20px rgba(26,127,212,0.4)", "0 0 0px rgba(26,127,212,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#1A7FD4] shadow-lg relative z-10"
              >
                <Cloud size={48} />
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute top-20 w-full h-32 -z-0" viewBox="0 0 200 80">
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
              <div className="flex gap-6 w-full justify-center">
                {["Web", "API", "DB"].map((label, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#E8F0F8] rounded-xl p-4 shadow-[4px_4px_8px_rgba(163,185,210,0.6),-4px_-4px_8px_rgba(255,255,255,0.9)] flex flex-col items-center gap-2 min-w-[80px]"
                  >
                    <Server size={20} className="text-[#1A7FD4]" />
                    <span className="text-[10px] font-bold text-[#0D1B2A]">{label}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-8 text-[13px] text-[#1A7FD4]/40 font-inter">
              Cloud Architecture Blueprint
            </div>

            <div className="absolute top-[-16px] right-6 px-4 py-2 bg-[#1A7FD4] text-white rounded-full font-bold text-xs shadow-lg flex items-center gap-2">
              <CheckCircle2 size={14} /> End-to-End Cloud
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
