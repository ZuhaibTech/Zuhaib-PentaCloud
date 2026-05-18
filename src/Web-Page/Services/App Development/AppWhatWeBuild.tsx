"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Smartphone, Tablet, Cpu, Cloud, ShieldCheck, Zap, 
  Layers, AppWindow, Code2, Users, ArrowRight, Star
} from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";

// --- Custom Counter Component ---
const Counter = ({ from, to, duration = 2 }: { from: number, to: number | string, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  const numericTo = typeof to === 'string' ? parseFloat(to.replace(/[^0-9.]/g, '')) : to;

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, numericTo, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            const displayValue = Math.round(value);
            nodeRef.current.textContent = typeof to === 'string' ? to.replace(/[0-9.]+/, displayValue.toString()) : displayValue.toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, numericTo, duration, inView, to]);

  return <span ref={nodeRef}>{from}</span>;
};

const AppWhatWeBuild = () => {
  const apps = [
    {
      title: "iOS & Android Apps",
      desc: "Native-quality cross-platform applications built with React Native and Flutter. Single codebase, dual-platform dominance.",
      icon: Smartphone,
      color: "#1A7FD4",
      tags: ["React Native", "Flutter", "App Store", "Play Store"],
      visual: "ios"
    },
    {
      title: "Enterprise Solutions",
      desc: "Secure, scalable internal applications for workforce management, logistics, and data collection.",
      icon: Tablet,
      color: "#8B5CF6",
      tags: ["RBAC", "Offline Sync", "Custom ERP", "Internal"],
      visual: "enterprise"
    },
    {
      title: "FinTech & Payments",
      desc: "PCI-compliant applications with high-security biometric authentication and real-time transaction processing.",
      icon: ShieldCheck,
      color: "#34C98A",
      tags: ["PCI-DSS", "Biometrics", "Stripe", "Ledger"],
      visual: "fintech"
    },
    {
      title: "Real-time Social Apps",
      desc: "Applications requiring low-latency communication, real-time notifications, and high concurrent user handling.",
      icon: Zap,
      color: "#F59E0B",
      tags: ["WebSockets", "Push API", "Live Chat", "Scalable"],
      visual: "social"
    }
  ];

  return (
    <section className="py-10 sm:py-24 bg-[#E8F0F8] relative overflow-hidden px-4 sm:px-10 rounded-[24px] sm:rounded-[48px]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A7FD4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#1A7FD4] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
          >
            MOBILE INNOVATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-nunito font-extrabold text-2xl sm:text-[42px] md:text-[52px] text-[#0D1B2A] leading-tight mb-3 sm:mb-4"
          >
            Mobile Experiences <span className="text-[#1A7FD4]">Built for Scale</span>
          </motion.h2>
          <p className="font-inter text-[#4A6080] max-w-[620px] text-xs sm:text-[16px] leading-relaxed px-2">
            We transform your ideas into powerful, pocket-sized experiences that engage users and drive business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8, type: "spring" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-[#E8F0F8] p-5 sm:p-8 rounded-[20px] sm:rounded-[40px] shadow-[10px_10px_20px_rgba(163,185,210,0.6),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)] group transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              <div 
                className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-[24px] bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)] flex items-center justify-center mb-4 sm:mb-8 group-hover:rotate-[15deg] transition-all duration-500 shrink-0"
                style={{ color: app.color }}
              >
                <app.icon className="w-5 h-5 sm:w-[30px] sm:h-[30px]" />
              </div>

              <h3 className="font-nunito font-black text-lg sm:text-[22px] text-[#0D1B2A] mb-2 sm:mb-4 group-hover:text-[#1A7FD4] transition-colors leading-tight">{app.title}</h3>
              <p className="font-inter text-xs sm:text-sm leading-relaxed text-[#4A6080] mb-4 sm:mb-8 flex-1">
                {app.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-8 min-h-[4rem] content-start">
                {app.tags.map((tag, j) => (
                  <span key={j} className="bg-[#E8F0F8] shadow-[2px_2px_4px_rgba(163,185,210,0.3),-2px_-2px_4px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[8px] sm:text-[9px] px-2.5 py-1 rounded-full uppercase tracking-wider group-hover:scale-105 transition-transform">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini Visuals */}
              <div className="pt-4 sm:pt-6 border-t border-[#1A7FD4]/08 mt-auto">
                {app.visual === "ios" && (
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-0.5">
                       <div className="text-[8px] sm:text-[10px] font-bold text-[#4A6080] uppercase tracking-tighter">App Rating</div>
                       <div className="flex gap-0.5 text-amber-500">
                          {[...Array(5)].map((_, j) => <Star key={j} size={10} fill="currentColor" className="w-2.5 h-2.5" />)}
                       </div>
                    </div>
                    <div className="text-base sm:text-[20px] font-black text-[#0D1B2A] flex items-baseline">
                      4.9<span className="text-[9px] sm:text-[10px] text-[#4A6080] font-bold ml-0.5">/5</span>
                    </div>
                  </div>
                )}
                {app.visual === "enterprise" && (
                   <div className="w-full flex flex-col gap-1.5">
                      <div className="h-1.5 w-full bg-[#E8F0F8] shadow-inner rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} transition={{ duration: 1.5 }} className="h-full bg-[#8B5CF6]" />
                      </div>
                      <div className="flex justify-between text-[8px] sm:text-[9px] font-black text-[#4A6080] uppercase">
                         <span>CPU usage</span>
                         <span className="text-[#8B5CF6]">Optimized</span>
                      </div>
                   </div>
                )}
                {app.visual === "fintech" && (
                   <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] flex items-center justify-center text-[#34C98A] shrink-0">
                         <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                         <div className="h-1 w-full bg-[#E8F0F8] shadow-inner rounded-full mb-1" />
                         <div className="text-[7px] sm:text-[8px] font-black text-[#34C98A] uppercase tracking-widest truncate">Biometric Encrypted</div>
                      </div>
                   </div>
                )}
                {app.visual === "social" && (
                   <div className="flex items-center gap-2">
                      <div className="flex -space-x-1.5">
                         {[
                           "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=50",
                           "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=50",
                           "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=50"
                         ].map((src, j) => (
                           <div key={j} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-[#E8F0F8] bg-slate-200 shadow-md overflow-hidden shrink-0">
                              <img src={src} className="w-full h-full object-cover" alt={`User ${j}`} />
                           </div>
                         ))}
                      </div>
                      <div className="text-[8px] sm:text-[9px] font-black text-[#F59E0B] uppercase truncate">
                        +1.2k Active Now
                      </div>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { label: "Successful Deployments", value: "30+" },
              { label: "Crash-Free Rate", value: "99.9%" },
              { label: "Active App Users", value: "100k+" },
              { label: "On-Time Delivery", value: "100%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#E8F0F8] rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(163,185,210,0.5)] transition-all duration-300 flex flex-col items-center text-center group overflow-hidden"
              >
                <div className="text-2xl sm:text-[36px] font-nunito font-black text-[#1A7FD4] leading-none mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform">
                  <Counter from={0} to={stat.value} />
                </div>
                <div className="text-[9px] sm:text-[12px] font-inter text-[#4A6080] font-bold uppercase tracking-widest leading-tight">{stat.label}</div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AppWhatWeBuild;
