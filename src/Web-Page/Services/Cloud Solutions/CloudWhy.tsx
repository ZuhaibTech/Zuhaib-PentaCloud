"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, Search, TrendingDown, Lock, Shield, 
  Activity, Cloud, Server, Cpu, CheckCircle2
} from "lucide-react";

const CloudWhy = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Award,
      color: "#1A7FD4",
      title: "Certified Tier 3 Engineers",
      desc: "Every cloud project is led by Tier 3 certified engineers with hands-on expertise in AWS, Azure, and GCP.",
      badge: "SLA Guaranteed",
      visual: "tier3",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Search,
      color: "#34C98A",
      title: "No-Obligation Assessment",
      desc: "We start with a free cloud audit — real findings, no sales pitch. Know your infrastructure health before you commit.",
      badge: "Free Audit",
      visual: "audit",
      image: "https://images.unsplash.com/photo-1454165833762-0204b2816718?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: TrendingDown,
      color: "#F59E0B",
      title: "40% Cost Reduction",
      desc: "Right-sizing and automated governance deliver massive savings within 90 days of implementation.",
      badge: "ROI Focused",
      visual: "cost",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Lock,
      color: "#8B5CF6",
      title: "Zero Breach Infrastructure",
      desc: "Compliance-ready architecture (GDPR, HIPAA) with hardened security protocols from day one.",
      badge: "SOC2 Ready",
      visual: "security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-[#E8F0F8] relative px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative">
        
        {/* Left Column - Visual Card (Sticky, Image 3/WhyPentacloud Style) */}
        <div className="sticky top-28 self-start">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative min-h-[580px] rounded-[48px] overflow-hidden shadow-[20px_20px_60px_rgba(13,27,42,0.15)] group flex flex-col items-center justify-center border border-white/50"
            style={{ background: 'linear-gradient(135deg, #0D1B2A, #1A7FD4)' }}
          >
            {/* Mesh Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center p-12"
              >
                <div className="w-full h-full rounded-[40px] bg-white/5 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden group/img">
                   <motion.img 
                     key={`img-${activeFeature}`}
                     initial={{ scale: 1.2, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     src={features[activeFeature].image} 
                     alt={features[activeFeature].title} 
                     className="absolute inset-0 w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/20 to-transparent opacity-80" />
                   
                   <div className="relative z-10 flex flex-col items-center text-center px-8">
                      <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 shadow-2xl border border-white/20">
                         {React.createElement(features[activeFeature].icon, { size: 40, className: "text-white" })}
                      </div>
                      <h3 className="text-white font-nunito font-black text-3xl mb-4 tracking-tight">
                         {features[activeFeature].title}
                      </h3>
                      <div className="px-6 py-2 bg-white/10 rounded-full text-white/80 font-black text-[10px] uppercase tracking-[3px] border border-white/20">
                         {features[activeFeature].badge}
                      </div>
                   </div>

                   {/* Background Number */}
                   <div className="absolute top-0 right-0 p-12">
                      <div className="text-white/05 font-nunito font-black text-[180px] leading-none select-none">0{activeFeature + 1}</div>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Floating Badges */}
            <AnimatePresence>
               <motion.div
                 key={`badge-${activeFeature}`}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -30 }}
                 className="absolute bottom-12 left-12 bg-white p-5 rounded-[24px] shadow-2xl z-20 flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-xl bg-[#E8F0F8] flex items-center justify-center text-[#1A7FD4]">
                    <CheckCircle2 size={24} />
                 </div>
                 <div>
                    <div className="font-nunito font-black text-[14px] text-[#0D1B2A]">Enterprise Ready</div>
                    <div className="font-inter text-[11px] text-[#4A6080] font-bold uppercase tracking-wider">Tier 3 Verified</div>
                 </div>
               </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column - Content & Interactive List */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="px-6 py-2 bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.3)] rounded-full text-[#1A7FD4] text-[10px] font-black tracking-widest uppercase mb-4 inline-block w-fit"
            >
              THE PENTACLOUD EDGE
            </motion.div>
            <h2 className="text-[42px] md:text-[52px] font-nunito font-black text-[#0D1B2A] leading-tight">
              Your Infrastructure, <br />
              <span className="text-[#1A7FD4]">Our Obsession</span>
            </h2>
            <p className="text-[#4A6080] font-inter text-lg leading-relaxed max-w-lg">
              We combine deep technical certification with real-world infrastructure expertise — delivering cloud solutions that genuinely transform how your business performs.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveFeature(i)}
                className={`relative flex gap-6 p-6 rounded-[32px] transition-all duration-500 cursor-default group ${
                  activeFeature === i 
                  ? "bg-white shadow-[15px_15px_40px_rgba(163,185,210,0.4)] -translate-x-2" 
                  : "hover:bg-white/40"
                }`}
              >
                <div 
                  className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-[20px] transition-all duration-500 ${
                    activeFeature === i 
                    ? "bg-[#1A7FD4] text-white shadow-lg rotate-[15deg] scale-110" 
                    : "bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4)] text-[#1A7FD4]"
                  }`}
                >
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className={`font-nunito font-black text-[20px] transition-colors mb-2 ${
                    activeFeature === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'
                  }`}>
                    {item.title}
                  </h3>
                  <AnimatePresence>
                    {activeFeature === i && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="font-inter text-[14px] text-[#4A6080] leading-relaxed pr-6"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudWhy;
