"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, 
  HeadphonesIcon, 
  Megaphone, 
  Users, 
  ShoppingCart, 
  BarChart2, 
  DollarSign, 
  Heart,
  ChevronRight,
  Files,
  Cloud
} from "lucide-react";

const OurExpertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const clouds = [
    { title: "Sales Cloud", icon: TrendingUp, bg: "#EEF3FF", color: "#1A7FD4", desc: "Supercharge your sales pipeline with AI-driven lead scoring and opportunity management.", metric: "↑ 45% faster closure", metricBg: "#E8FFE8", metricColor: "#34C98A" },
    { title: "Service Cloud", icon: HeadphonesIcon, bg: "#E0F7FF", color: "#29C6E0", desc: "Transform customer service with AI-powered routing and self-service portals.", metric: "↓ 60% resolution time", metricBg: "#E0F7FF", metricColor: "#29C6E0" },
    { title: "Marketing Cloud", icon: Megaphone, bg: "#FFE8F0", color: "#EC4899", desc: "Deliver personalised customer journeys across email, SMS, and social media.", metric: "↑ 200% engagement", metricBg: "#FFE8F0", metricColor: "#EC4899" },
    { title: "Experience Cloud", icon: Users, bg: "#F3E8FF", color: "#8B5CF6", desc: "Build branded portals for customers, partners, and self-service communities.", metric: "↑ 80% self-service", metricBg: "#F3E8FF", metricColor: "#8B5CF6" },
    { title: "Commerce Cloud", icon: ShoppingCart, bg: "#FFF8E0", color: "#F59E0B", desc: "Launch and scale B2B/B2C commerce with AI-powered merchandising.", metric: "↑ 35% conversion", metricBg: "#FFF8E0", metricColor: "#F59E0B" },
    { title: "Analytics Cloud", icon: BarChart2, bg: "#E8FFE8", color: "#34C98A", desc: "Turn CRM data into insights with real-time Einstein Analytics dashboards.", metric: "Real-time insights", metricBg: "#E8FFE8", metricColor: "#34C98A" },
    { title: "Financial Services", icon: DollarSign, bg: "#EEF3FF", color: "#1A7FD4", desc: "Purpose-built CRM for banks, insurance, and wealth management firms.", metric: "HIPAA + GDPR Ready", metricBg: "#EEF3FF", metricColor: "#1A7FD4" },
    { title: "Health Cloud", icon: Heart, bg: "#FFE8F0", color: "#EC4899", desc: "Connect patients and care teams in a unified platform with HIPAA compliance.", metric: "Full Compliance", metricBg: "#FFE8F0", metricColor: "#EC4899" }
  ];

  const certs = [
    "Salesforce Admin ✓", "Sales Cloud Consultant ✓", "Service Cloud Consultant ✓", "Platform Developer I ✓", 
    "Marketing Cloud ✓", "Experience Cloud ✓", "CPQ Specialist ✓", "Data Architect ✓",
    "Sharing & Visibility ✓", "Development Lifecycle ✓", "App Builder ✓", "Advanced Admin ✓",
    "B2C Commerce ✓", "Einstein Analytics ✓", "Field Service ✓", "Pardot Specialist ✓"
  ];

  const activeCloud = clouds[activeIndex];

  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden px-6 min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A7FD4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A7FD4]/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-10">
          <div className="text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[4px] uppercase mb-3">OUR EXPERTISE</div>
          <h2 className="font-nunito font-extrabold text-[36px] md:text-[42px] text-[#0D1B2A] leading-tight">
            Salesforce Clouds <span className="text-[#1A7FD4]">We Master</span>
          </h2>
        </div>

        {/* File Organizer UI Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-0 rounded-[32px] overflow-hidden shadow-[20px_20px_60px_rgba(163,185,210,0.2),-10px_-10px_40px_rgba(255,255,255,0.9)] border border-white/80 bg-background">
          
          {/* Left Sidebar: Folder Tabs */}
          <div className="bg-background/80 p-6 border-r border-slate-200/60 flex flex-col min-h-[500px]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300/30 shrink-0">
              <div className="w-10 h-10 bg-[#1A7FD4] rounded-xl flex items-center justify-center text-white shadow-md">
                <Files size={20} />
              </div>
              <span className="font-nunito font-black text-[10px] uppercase tracking-[2px] text-[#0D1B2A]">Solutions Catalog</span>
            </div>

            <div className="space-y-1.5 overflow-y-auto overflow-x-hidden pr-1 custom-scrollbar flex-1 max-h-[500px]">
              {clouds.map((cloud, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ x: 6 }}
                    className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-4 group ${
                      isActive 
                        ? 'bg-white shadow-[4px_4px_15px_rgba(0,0,0,0.05)] translate-x-3 z-20' 
                        : 'hover:bg-slate-200/50 z-10'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-0 top-2 bottom-2 w-1.5 rounded-full"
                        style={{ backgroundColor: cloud.color }}
                      />
                    )}

                    <div 
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-sm' : 'opacity-60 grayscale'
                      }`}
                      style={{ backgroundColor: isActive ? cloud.bg : 'transparent', color: isActive ? cloud.color : '#64748B' }}
                    >
                      <cloud.icon size={18} />
                    </div>

                    <span className={`font-nunito font-bold text-[14px] transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#0D1B2A]' : 'text-[#64748B]'
                    }`}>
                      {cloud.title}
                    </span>

                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto text-[#1A7FD4]"
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Area: Content Sheet */}
          <div className="p-10 lg:p-16 bg-background relative flex items-center justify-center min-h-[500px] overflow-hidden">
            
            {/* Floating Clouds Background Animation */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {mounted && [...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ y: "120%", x: `${10 + i * 15}%`, opacity: 0 }}
                  animate={{ 
                    y: "-120%", 
                    opacity: [0, 0.08, 0.08, 0],
                  }}
                  transition={{ 
                    duration: 12 + Math.random() * 8, 
                    repeat: Infinity, 
                    delay: i * 2.5,
                    ease: "linear"
                  }}
                  className="absolute text-[#1A7FD4]"
                >
                  <Cloud size={50 + Math.random() * 70} strokeWidth={0.5} />
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-2xl relative z-10"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-24 h-24 rounded-[32px] flex items-center justify-center shadow-2xl relative bg-white border-4 border-white overflow-hidden shrink-0"
                    style={{ boxShadow: `0 20px 40px ${activeCloud.bg}80`, color: activeCloud.color }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: activeCloud.bg }} />
                    <activeCloud.icon size={44} className="relative z-10" />
                  </motion.div>

                  <div className="text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                      <div className="w-8 h-[1px] bg-[#1A7FD4]/30" />
                      <span className="text-[#1A7FD4] font-nunito font-black text-[10px] uppercase tracking-[3px]">Expertise Module</span>
                      <div className="w-8 h-[1px] bg-[#1A7FD4]/30" />
                    </div>
                    <h3 className="font-nunito font-black text-[32px] md:text-[44px] text-[#0D1B2A] leading-tight mb-4">
                      {activeCloud.title}
                    </h3>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-nunito font-bold text-[13px] shadow-sm border"
                      style={{ backgroundColor: activeCloud.metricBg, color: activeCloud.metricColor, borderColor: `${activeCloud.metricColor}20` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeCloud.metricColor }} />
                      {activeCloud.metric}
                    </motion.div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-10" />

                <p className="font-inter text-[17px] md:text-[20px] text-[#4A6080] leading-[1.8] mb-12">
                  {activeCloud.desc}
                </p>

                <div className="flex flex-wrap gap-5">
                  <button className="bg-[#1A7FD4] text-white font-nunito font-bold text-[15px] px-10 py-4 rounded-xl shadow-[0_10px_20px_rgba(26,127,212,0.3)] hover:shadow-[0_15px_30px_rgba(26,127,212,0.4)] hover:-translate-y-1 active:scale-95 transition-all">
                    Request Strategy Call
                  </button>
                  <button className="bg-white text-[#1A7FD4] border-2 border-[#1A7FD4]/10 font-nunito font-bold text-[15px] px-10 py-4 rounded-xl hover:bg-[#F8FAFC] hover:border-[#1A7FD4]/30 transition-all">
                    Download Case Study
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background watermark */}
            <div className="absolute bottom-8 right-8 opacity-[0.02] pointer-events-none select-none">
               <Files size={250} strokeWidth={0.5} />
            </div>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden py-10 mt-10 before:absolute before:left-0 before:top-0 before:h-full before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...certs, ...certs].map((cert, i) => (
              <div key={i} className="bg-white px-8 py-3.5 rounded-2xl text-[#64748B] font-nunito font-bold text-[14px] shadow-sm border border-slate-100/80">
                {cert}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
