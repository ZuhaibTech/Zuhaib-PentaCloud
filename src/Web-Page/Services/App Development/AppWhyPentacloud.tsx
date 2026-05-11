"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Eye, Shield, Zap, BarChart2, RefreshCw, Lock, Users } from "lucide-react";

const AppWhyPentacloud = () => {
  const [activeWhy, setActiveWhy] = useState(0);
  const differentiators = [
    { title: "True Cross-Platform Expertise", icon: Smartphone, bg: "#EEF3FF", color: "#1A7FD4", desc: "Certified in React Native, Swift, and Kotlin — we choose the right technology for your app.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" },
    { title: "Weekly Test Builds Shared", icon: Eye, bg: "#E0F7FF", color: "#29C6E0", desc: "Every 2 weeks you receive a TestFlight build to test on your real device.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
    { title: "App Store Submission Managed", icon: Shield, bg: "#EEF3FF", color: "#1A7FD4", desc: "We handle every aspect of submission — screenshots, metadata, and rejection handling.", image: "https://images.unsplash.com/photo-1523206489230-c012c45b1580?auto=format&fit=crop&q=80&w=800" },
    { title: "Performance Obsessed", icon: Zap, bg: "#FFF8E0", color: "#F59E0B", desc: "< 0.8s cold start, smooth 60fps animations, and minimal battery drain.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Analytics Built-In", icon: BarChart2, bg: "#E8FFE8", color: "#34C98A", desc: "Mixpanel, Firebase, or your preferred tool configured at launch for data-driven decisions.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" },
    { title: "Post-Launch Updates", icon: RefreshCw, bg: "#EEF3FF", color: "#1A7FD4", desc: "Every project ends with a prioritised feature roadmap to keep your app fresh.", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
    { title: "Security & Privacy First", icon: Lock, bg: "#FFE8F0", color: "#EC4899", desc: "Encrypted storage, secure APIs, and GDPR-compliant data handling.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
    { title: "Salesforce-Connected Apps", icon: Users, bg: "#EEF3FF", color: "#1A7FD4", desc: "As certified partners, we build apps that connect directly to your Salesforce org.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="py-24 bg-background relative px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        
        {/* Left Column - Visual Card (Sticky) */}
        <div className="sticky top-28 self-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative min-h-[600px] rounded-[32px] shadow-[0_24px_60px_rgba(26,127,212,0.30)] group flex flex-col items-center justify-center"
            style={{ background: 'linear-gradient(145deg, #1A7FD4 0%, #0D1B2A 50%, #1A7FD4 100%)' }}
          >
          {/* Main Dynamic Image Placeholder */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWhy}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 1.1, x: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-12"
            >
              <div className="w-full h-full rounded-[24px] bg-white/5 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden group/img">
                   <motion.img 
                     key={`img-${activeWhy}`}
                     initial={{ scale: 1.2, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     src={differentiators[activeWhy].image} 
                     alt={differentiators[activeWhy].title} 
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent opacity-80" />
                   
                   <div className="relative z-10 flex flex-col items-center text-center px-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 shadow-2xl">
                         {React.createElement(differentiators[activeWhy].icon, { size: 32, className: "text-white" })}
                      </div>
                      <div className="text-white font-nunito font-black text-2xl uppercase tracking-[2px] leading-tight mb-2">{differentiators[activeWhy].title}</div>
                      <div className="text-white/60 font-inter text-sm max-w-[280px]">{differentiators[activeWhy].desc}</div>
                   </div>

                 {/* Corner Accents */}
                 <div className="absolute top-0 right-0 p-8">
                    <div className="text-white/10 font-nunito font-black text-8xl leading-none">0{activeWhy + 1}</div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floating Badges - Dynamic based on selection */}
          <AnimatePresence>
            {activeWhy === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute bottom-12 left-8 bg-white p-4 rounded-[16px] shadow-2xl z-20"
              >
                <div className="font-nunito font-bold text-[14px] text-[#0D1B2A]">📱 iOS + Android</div>
                <div className="font-inter text-[12px] text-[#4A6080]">One Codebase, Both Platforms</div>
              </motion.div>
            )}
            {activeWhy === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-12 right-8 bg-white p-4 rounded-[16px] shadow-2xl z-20"
              >
                <div className="font-nunito font-bold text-[14px] text-[#0D1B2A]">⚡ 0.8s Cold Start</div>
                <div className="font-inter text-[12px] text-[#4A6080]">Performance Optimized</div>
              </motion.div>
            )}
            {activeWhy === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute bottom-32 right-10 bg-white p-4 rounded-[16px] shadow-2xl z-20"
              >
                <div className="font-nunito font-bold text-[14px] text-[#0D1B2A]">🚀 App Store Ready</div>
                <div className="font-inter text-[12px] text-[#4A6080]">Submission Experts</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

        {/* Right Column - Differentiators */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] uppercase mb-4">
            WHY PENTACLOUD
          </div>
          <h2 className="font-nunito font-extrabold text-[38px] text-[#0D1B2A] leading-tight mb-6">
            Apps Built for <br/>
            <span className="text-[#1A7FD4] relative inline-block">
              Real Users, Real Results
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-1 bg-[#1A7FD4] opacity-20 rounded-full"
              />
            </span>
          </h2>
          <p className="font-inter text-[16px] text-[#4A6080] leading-[1.8] mb-10">
            We obsess over user experience, performance, and retention — building apps that users love, businesses trust, and App Store reviewers approve.
          </p>

          <div className="grid grid-cols-1 gap-2">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveWhy(i)}
                className={`relative flex gap-5 p-4 rounded-[20px] transition-all duration-300 cursor-default group ${activeWhy === i ? 'bg-[#E8F0F8] shadow-lg -translate-x-2' : 'hover:bg-[#E8F0F8]/40'}`}
              >
                <div 
                  className={`w-[52px] h-[52px] shrink-0 flex items-center justify-center rounded-[14px] transition-all duration-300 ${activeWhy === i ? 'bg-[#1A7FD4] text-white' : 'bg-white shadow-sm text-[#1A7FD4]'}`}
                >
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className={`font-nunito font-bold text-[17px] transition-colors mb-1 ${activeWhy === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'}`}>
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {activeWhy === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-inter text-[13px] text-[#4A6080] leading-relaxed pr-4"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .skeleton {
          background: linear-gradient(90deg, #EEF3FF 25%, #E0F7FF 50%, #EEF3FF 75%);
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

export default AppWhyPentacloud;
