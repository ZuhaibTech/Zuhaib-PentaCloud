"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Activity, 
  ShoppingCart, 
  Target, 
  Building2, 
  Landmark, 
  Network,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    id: 1,
    title: "Automation",
    icon: <Bot className="w-8 h-8" />,
    description: "Streamlining operations with intelligent RPA and workflow automation.",
    color: "from-blue-600 to-cyan-500",
    bgImage: "bg-[url('/Industries/Automation.jpeg')]"
  },
  {
    id: 2,
    title: "Health Care",
    icon: <Activity className="w-8 h-8" />,
    description: "Secure, compliant cloud solutions for modern patient care and data management.",
    color: "from-emerald-500 to-teal-400",
    bgImage: "bg-[url('/Industries/Health%20Care.jpeg')]"
  },
  {
    id: 3,
    title: "Retail & eCommerce",
    icon: <ShoppingCart className="w-8 h-8" />,
    description: "Scalable architectures to handle peak traffic and personalize shopping experiences.",
    color: "from-orange-500 to-pink-500",
    bgImage: "bg-[url('/Industries/Retail%20&%20eCommerce.jpeg')]"
  },
  {
    id: 4,
    title: "Marketing & Advertising",
    icon: <Target className="w-8 h-8" />,
    description: "Data-driven platforms for real-time analytics and global campaign delivery.",
    color: "from-purple-600 to-pink-400",
    bgImage: "bg-[url('/Industries/Marketing%20&%20Advertising.jpeg')]"
  },
  {
    id: 5,
    title: "Corporate Enterprises",
    icon: <Building2 className="w-8 h-8" />,
    description: "Enterprise-grade digital transformation and legacy system modernization.",
    color: "from-blue-800 to-indigo-600",
    bgImage: "bg-[url('/Industries/Corporate%20Enterprises.jpeg')]"
  },
  {
    id: 6,
    title: "Financial Institutions",
    icon: <Landmark className="w-8 h-8" />,
    description: "Ultra-secure, high-performance infrastructure for fintech and banking.",
    color: "from-amber-500 to-orange-400",
    bgImage: "bg-[url('/Industries/Financial%20Institutions.jpeg')]"
  },
  {
    id: 7,
    title: "End to End IT Consulting",
    icon: <Network className="w-8 h-8" />,
    description: "Comprehensive architectural guidance from concept to global deployment.",
    color: "from-indigo-500 to-blue-500",
    bgImage: "bg-[url('/Industries/End%20to%20End%20IT%20Consulting.jpeg')]"
  },
];

const Industries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100 blur-[150px] rounded-[100%] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-sm"
          >
            Global Impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-slate-900 tracking-tight"
          >
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Transform</span>
          </motion.h2>
        </div>

        {/* Expandable Flex Cards Layout */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[380px] w-full gap-2 md:gap-4">
          {industries.map((industry, index) => {
            const isActive = hoveredIndex === index;

            return (
              <motion.div
                key={industry.id}
                onHoverStart={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)} // For mobile touch
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  layout: { duration: 0.5, ease: [0.32, 0.72, 0, 1] } 
                }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 md:flex-shrink will-change-[flex,transform] transform-gpu ${
                  isActive ? "md:flex-[4] flex-[2]" : "md:flex-[1] flex-[1]"
                }`}
              >
                {/* Background Image with Overlay */}
                <motion.div 
                  animate={{ 
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.32, 0.72, 0, 1] 
                  }}
                  className={`absolute inset-0 bg-cover bg-center ${industry.bgImage} opacity-100`} 
                />
                
                {/* Gradient Overlays for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-90" />
                
                {/* Subtle Active Tint Overlay */}
                <motion.div 
                  animate={{ 
                    opacity: isActive ? 1 : 0 
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-blue-600/20" 
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className={`flex items-center justify-center rounded-2xl backdrop-blur-md transition-all duration-500 origin-bottom-left ${
                      isActive 
                        ? 'w-16 h-16 bg-white/30 shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-100' 
                        : 'w-12 h-12 bg-white/10 scale-[0.8]'
                    }`}>
                      <div className="text-white">
                        {industry.icon}
                      </div>
                    </div>

                    {/* Title - Visible fully when active, truncated/rotated when inactive */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.h3
                          key="title"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                        >
                          {industry.title}
                        </motion.h3>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Description - Only visible when active */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-zinc-50 text-sm md:text-lg max-w-md leading-relaxed border-l-2 border-white/50 pl-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {industry.description}
                    </p>
                    <button className="mt-6 flex items-center gap-2 text-white font-black text-sm tracking-wider uppercase group/btn drop-shadow-lg">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Inactive Shade Overlay for vertical text readability */}
                <div className={`absolute inset-0 bg-slate-900/50 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`} />

                {/* Inactive Vertical Title (Desktop Only) */}
                {!isActive && (
                  <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none pb-16">
                    <div className="-rotate-90 whitespace-nowrap transform origin-center">
                      <span className="text-white font-bold text-[13px] md:text-sm tracking-[0.15em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        {industry.title}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
