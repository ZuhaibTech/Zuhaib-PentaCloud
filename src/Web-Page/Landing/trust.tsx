"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { TrendingUp, Globe2, Briefcase } from "lucide-react";

const stats = [
  { 
    id: 1, 
    value: 25, 
    suffix: "+", 
    label: "Industries Served",
    description: "Deep domain expertise across diverse global markets.",
    icon: <Globe2 className="w-6 h-6 text-blue-400" />
  },
  { 
    id: 2, 
    value: 100, 
    suffix: "+", 
    label: "Projects Completed",
    description: "Successful delivery of complex enterprise solutions.",
    icon: <Briefcase className="w-6 h-6 text-indigo-400" />
  },
  { 
    id: 3, 
    value: 300, 
    suffix: "%", 
    label: "Average ROI",
    description: "Measurable business growth and operational efficiency.",
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />
  },
];

const Counter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={nodeRef}>{from}</span>;
};

const Trust = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section ref={containerRef} className="relative flex items-center justify-center py-16 md:py-20 overflow-hidden bg-background">
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-100"
          poster="/Hero/Penta-Hero-BG.jpeg"
        >
          <source src="/Hero/Global Earth.mp4" type="video/mp4" />
        </video>
        
        {/* Light Theme Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#E8F0F8] via-[#E8F0F8]/50 to-transparent" />
        <div className="absolute inset-0 z-10 bg-[#E8F0F8]/10" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <motion.div 
        style={{ opacity, y }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full"
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white border border-white shadow-[4px_4px_10px_#e2e8f0,-4px_-4px_10px_#ffffff,inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_#e2e8f0] text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            Global Reach
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]"
          >
            Companies Trust Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
              Salesforce Expertise
            </span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative rounded-[3rem] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[15px_15px_30px_rgba(15,23,42,0.08),-5px_-5px_15px_rgba(255,255,255,0.8),inset_5px_5px_10px_rgba(255,255,255,1),inset_-5px_-5px_10px_rgba(15,23,42,0.03)] p-6 md:p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {stats.map((stat, index) => (
              <div key={stat.id} className="relative group">
                {/* Vertical Divider for Desktop */}
                {index !== stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-slate-200 to-transparent" />
                )}
                {/* Horizontal Divider for Mobile */}
                {index !== stats.length - 1 && (
                  <div className="block md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                )}

                <div className="flex flex-col items-center text-center px-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-white shadow-[6px_6px_12px_#e2e8f0,-6px_-6px_12px_#ffffff,inset_3px_3px_6px_#ffffff,inset_-3px_-3px_6px_#e2e8f0] flex items-center justify-center mb-6 text-slate-700 group-hover:bg-blue-50 transition-all duration-500">
                    {stat.icon}
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">
                      <Counter from={0} to={stat.value} duration={2.5} />
                    </span>
                    <span className="text-3xl md:text-4xl font-black text-blue-600">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                    {stat.label}
                  </h4>
                  
                  <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed max-w-[280px]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Trust;
