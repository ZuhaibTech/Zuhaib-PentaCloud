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
    { title: "Sales Cloud", icon: TrendingUp, bg: "#EEF3FF", color: "#1A7FD4", desc: "Supercharge your sales pipeline with AI-driven lead scoring and opportunity management.", metric: "45% faster closure ↑", metricBg: "#E8FFE8", metricColor: "#34C98A" },
    { title: "Service Cloud", icon: HeadphonesIcon, bg: "#E0F7FF", color: "#29C6E0", desc: "Transform customer service with AI-powered routing and self-service portals.", metric: "60% resolution time ↓", metricBg: "#E0F7FF", metricColor: "#29C6E0" },
    { title: "Marketing Cloud", icon: Megaphone, bg: "#FFE8F0", color: "#EC4899", desc: "Deliver personalised customer journeys across email, SMS, and social media.", metric: "200% engagement ↑", metricBg: "#FFE8F0", metricColor: "#EC4899" },
    { title: "Experience Cloud", icon: Users, bg: "#F3E8FF", color: "#8B5CF6", desc: "Build branded portals for customers, partners, and self-service communities.", metric: "80% self-service ↑", metricBg: "#F3E8FF", metricColor: "#8B5CF6" },
    { title: "Commerce Cloud", icon: ShoppingCart, bg: "#FFF8E0", color: "#F59E0B", desc: "Launch and scale B2B/B2C commerce with AI-powered merchandising.", metric: "35% conversion ↑", metricBg: "#FFF8E0", metricColor: "#F59E0B" },
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
    <section className="py-10 px-4 sm:px-6 bg-background relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A7FD4]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A7FD4]/3 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="text-center mb-6 sm:mb-10 flex flex-col items-center">
          <div className="text-[#1A7FD4] font-nunito font-bold text-[9px] sm:text-[11px] tracking-[4px] uppercase mb-2 leading-none">OUR EXPERTISE</div>
          <h2 className="font-nunito font-extrabold text-2xl sm:text-[36px] md:text-[42px] text-[#0D1B2A] leading-tight">
            Salesforce Clouds <span className="text-[#1A7FD4]">We Master</span>
          </h2>
        </div>

        {/* File Organizer UI Container */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[320px_1fr] gap-0 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[20px_20px_60px_rgba(163,185,210,0.2),-10px_-10px_40px_rgba(255,255,255,0.9)] border border-slate-200/40 bg-background">
          
          {/* Left Sidebar: Folder Tabs */}
          <div className="bg-background/80 p-4 sm:p-6 border-b md:border-b-0 md:border-r border-slate-200/60 flex flex-row md:flex-col overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto shrink-0 w-full md:w-auto">
            <div className="hidden md:flex items-center gap-3 mb-6 pb-4 border-b border-slate-300/30 shrink-0">
              <div className="w-10 h-10 bg-[#1A7FD4] rounded-xl flex items-center justify-center text-white shadow-md">
                <Files size={20} />
              </div>
              <span className="font-nunito font-black text-[10px] uppercase tracking-[2px] text-[#0D1B2A]">Solutions Catalog</span>
            </div>

            <div className="flex flex-row md:flex-col gap-2 md:space-y-1.5 overflow-x-auto overflow-y-hidden md:overflow-x-hidden md:overflow-y-auto pr-1 flex-1 custom-scrollbar w-full whitespace-nowrap">
              {clouds.map((cloud, i) => {
                const isActive = activeIndex === i;
                return (
                  <motion.div
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ x: 3 }}
                    className={`relative p-2.5 md:p-3 rounded-lg md:rounded-xl cursor-pointer transition-all duration-300 flex flex-row items-center gap-2 md:gap-4 group shrink-0 ${
                      isActive 
                        ? 'bg-white shadow-[4px_4px_15px_rgba(0,0,0,0.05)] md:translate-x-3 z-20' 
                        : 'hover:bg-slate-200/50 z-10'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabIndicator"
                        className="absolute left-2 right-2 bottom-0 h-[3px] md:left-0 md:top-2 md:bottom-2 md:w-1.5 md:h-auto rounded-full"
                        style={{ backgroundColor: cloud.color }}
                      />
                    )}

                    <div 
                      className={`w-7 h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isActive ? 'scale-110 shadow-sm' : 'opacity-60 grayscale'
                      } [&_svg]:w-4 [&_svg]:h-4 [&_svg]:md:w-[18px] [&_svg]:md:h-[18px]`}
                      style={{ backgroundColor: isActive ? cloud.bg : 'transparent', color: isActive ? cloud.color : '#64748B' }}
                    >
                      <cloud.icon />
                    </div>

                    <span className={`font-nunito font-bold text-xs md:text-[14px] transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#0D1B2A]' : 'text-[#64748B]'
                    }`}>
                      {cloud.title}
                    </span>

                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto text-[#1A7FD4] hidden md:block"
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
          <div className="p-5 sm:p-10 lg:p-16 bg-background relative flex items-center justify-center min-h-[380px] md:min-h-[500px] overflow-hidden w-full">
            
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
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 mb-6 sm:mb-10">
                  <motion.div 
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[32px] flex items-center justify-center shadow-2xl relative bg-white border-4 border-white overflow-hidden shrink-0 [&_svg]:w-8 [&_svg]:h-8 [&_svg]:md:w-11 [&_svg]:md:h-11"
                    style={{ boxShadow: `0 20px 40px ${activeCloud.bg}80`, color: activeCloud.color }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{ backgroundColor: activeCloud.bg }} />
                    <activeCloud.icon className="relative z-10" />
                  </motion.div>

                  <div className="text-center md:text-left flex-1 min-w-0">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <div className="w-8 h-[1px] bg-[#1A7FD4]/30" />
                      <span className="text-[#1A7FD4] font-nunito font-black text-[8.5px] sm:text-[10px] tracking-[3px] uppercase leading-none">Expertise Module</span>
                      <div className="w-8 h-[1px] bg-[#1A7FD4]/30" />
                    </div>
                    <h3 className="font-nunito font-black text-xl sm:text-[32px] md:text-[44px] text-[#0D1B2A] leading-tight mb-2 sm:mb-4 truncate">
                      {activeCloud.title}
                    </h3>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-nunito font-bold text-[11px] sm:text-[13px] shadow-sm border leading-none"
                      style={{ backgroundColor: activeCloud.metricBg, color: activeCloud.metricColor, borderColor: `${activeCloud.metricColor}20` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: activeCloud.metricColor }} />
                      <span>{activeCloud.metric}</span>
                    </motion.div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-100 mb-6 sm:mb-10" />

                <p className="font-inter text-xs sm:text-[17px] md:text-[20px] text-[#4A6080] leading-[1.8] mb-6 sm:mb-12">
                  {activeCloud.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                  <button className="bg-[#1A7FD4] text-white font-nunito font-bold text-xs sm:text-[15px] px-6 py-3 sm:px-10 sm:py-4 rounded-xl shadow-[0_10px_20px_rgba(26,127,212,0.3)] hover:shadow-[0_15px_30px_rgba(26,127,212,0.4)] hover:-translate-y-1 active:scale-95 transition-all cursor-pointer">
                    Request Strategy Call
                  </button>
                  <button className="bg-white text-[#1A7FD4] border-2 border-[#1A7FD4]/10 font-nunito font-bold text-xs sm:text-[15px] px-6 py-3 sm:px-10 sm:py-4 rounded-xl hover:bg-[#F8FAFC] hover:border-[#1A7FD4]/30 transition-all cursor-pointer">
                    Download Case Study
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background watermark */}
            <div className="absolute bottom-4 right-4 opacity-[0.02] pointer-events-none select-none">
               <Files size={150} className="md:w-[250px] md:h-[250px]" strokeWidth={0.5} />
            </div>
          </div>
        </div>

        {/* Marquee Row */}
        <div className="relative w-full overflow-hidden py-5 mt-5 before:absolute before:left-0 before:top-0 before:h-full before:w-16 sm:before:w-32 before:bg-gradient-to-r before:from-background before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-16 sm:after:w-32 after:bg-gradient-to-l after:from-background after:to-transparent after:z-10">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 sm:gap-8 whitespace-nowrap"
          >
            {[...certs, ...certs].map((cert, i) => (
              <div key={i} className="bg-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-2xl text-[#64748B] font-nunito font-bold text-xs sm:text-[14px] shadow-sm border border-slate-100/80 leading-none">
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
