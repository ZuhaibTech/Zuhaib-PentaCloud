"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Atom, FileCode, Paintbrush, Sparkles, Server, Database, Cloud, Globe, PenTool } from "lucide-react";

const CLAY_CARD = "bg-background rounded-[20px] sm:rounded-[32px] border border-white/50 shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.6),-20px_-20px_40px_rgba(255,255,255,1)] transition-all duration-500";

const TechCard = ({ tech, index }: { tech: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, scale: 1.01 }}
      viewport={{ once: true }}
      className={`${CLAY_CARD} p-3.5 sm:p-5 flex flex-col h-full group`}
    >
      <div 
        className={`w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-[10px] sm:rounded-[14px] mb-3 sm:mb-4 transition-all duration-500 group-hover:rotate-[360deg] shadow-md shrink-0`}
        style={{ backgroundColor: tech.bg, color: tech.color === 'white' ? 'white' : tech.color }}
      >
        <tech.icon className={`w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 ${tech.color === 'white' ? 'text-white' : ''}`} />
      </div>
      <h3 className="font-nunito font-bold text-sm sm:text-[18px] text-[#0D1B2A] mb-0.5 sm:mb-1 truncate">{tech.name}</h3>
      <div className="text-[9px] sm:text-[11px] font-nunito font-bold text-[#8BA4BE] uppercase mb-2 sm:mb-3 tracking-[1px] truncate">{tech.sub}</div>
      <p className="font-inter text-[10px] sm:text-[12px] text-[#4A6080] leading-relaxed mb-4 sm:mb-6 flex-1">
        {tech.desc}
      </p>
      <div className="space-y-1.5 mt-auto">
        <div className="flex justify-between text-[9px] sm:text-[10px] font-nunito font-black text-[#1A7FD4]">
           <span>Expertise</span>
           <span>{tech.level}%</span>
        </div>
        <div className="h-1 sm:h-1.5 w-full bg-[#EEF3FF] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.level}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="h-full bg-[#1A7FD4] group-hover:brightness-110" 
          />
        </div>
      </div>
    </motion.div>
  );
};

const WebTechnology = () => {
  const frontend = [
    { name: "Next.js", sub: "React Framework", icon: Code2, color: "#1A7FD4", bg: "#0D1B2A", level: 95, desc: "Server-side rendering and static generation for blazing-fast performance." },
    { name: "React.js", sub: "UI Library", icon: Atom, color: "#29C6E0", bg: "#E0F7FF", level: 95, desc: "Component-driven interfaces with smooth interactions and optimal performance." },
    { name: "TypeScript", sub: "Type Safety", icon: FileCode, color: "#1A7FD4", bg: "#EEF3FF", level: 90, desc: "Strongly-typed codebase reducing bugs and improving maintainability." },
    { name: "Tailwind", sub: "Utility-First CSS", icon: Paintbrush, color: "#29C6E0", bg: "#E0F7FF", level: 95, desc: "Pixel-perfect responsive designs built at speed with consistent systems." },
    { name: "Framer Motion", sub: "Animations", icon: Sparkles, color: "#8B5CF6", bg: "#F3E8FF", level: 88, desc: "Silky smooth micro-animations that make interactions feel premium." }
  ];

  const backend = [
    { name: "Node.js", sub: "Backend Runtime", icon: Server, color: "#34C98A", bg: "#E8FFE8", level: 90, desc: "Scalable, event-driven server architecture handling concurrent connections." },
    { name: "MongoDB/Postgre", sub: "Database", icon: Database, color: "#F59E0B", bg: "#FFF8E0", level: 88, desc: "Flexible databases chosen based on your architecture requirements." },
    { name: "AWS / Vercel", sub: "Cloud Hosting", icon: Cloud, color: "#1A7FD4", bg: "#EEF3FF", level: 92, desc: "Enterprise-grade cloud infrastructure with global CDN delivery." },
    { name: "WordPress/Webflow", sub: "CMS Platforms", icon: Globe, color: "#EC4899", bg: "#FFE8F0", level: 95, desc: "Powerful content management for clients who update their own content." },
    { name: "Figma → Code", sub: "Design to Dev", icon: PenTool, color: "#8B5CF6", bg: "#F3E8FF", level: 98, desc: "Pixel-perfect translation from Figma designs to production code." }
  ];

  const row1 = ["GraphQL", "Redis", "Docker", "Stripe", "Google Analytics", "Hotjar", "SendGrid", "Firebase"];
  const row2 = ["Redux", "Zustand", "Prisma", "Supabase", "Storybook", "Jest", "Cypress", "Github Actions"];

  return (
    <section className="py-10 sm:py-24 bg-background relative overflow-hidden px-4 sm:px-6">
      {/* Particles bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {[
          { top: 10, left: 20 }, { top: 80, left: 85 }, { top: 35, left: 50 },
          { top: 70, left: 15 }, { top: 25, left: 90 }, { top: 90, left: 40 },
          { top: 15, left: 75 }, { top: 60, left: 8 },  { top: 45, left: 80 },
          { top: 85, left: 25 }, { top: 5,  left: 60 }, { top: 55, left: 95 },
          { top: 95, left: 70 }, { top: 30, left: 5 },  { top: 50, left: 30 }
        ].map((pos, i) => (
          <motion.div 
            key={i}
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 10 + (i % 5), repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-[#1A7FD4] rounded-full"
            style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-16">
          <div className="text-[#1A7FD4] font-nunito font-bold text-[9px] sm:text-[11px] tracking-[2px] uppercase mb-3 sm:mb-4">TECHNOLOGY</div>
          <h2 className="font-nunito font-extrabold text-2xl sm:text-[42px] text-[#0D1B2A] leading-tight">
            Built With The Best <br className="sm:hidden" /> <span className="text-[#1A7FD4]">Modern Tech Stack</span>
          </h2>
        </div>

        {/* Frontend Row */}
        <div className="mb-10 sm:mb-20">
          <div className="bg-[#EEF3FF] text-[#1A7FD4] font-nunito font-bold text-[9px] sm:text-[11px] tracking-[2px] rounded-full px-4 py-1.5 sm:px-5 sm:py-1.5 mb-4 sm:mb-8 w-fit mx-auto md:mx-0">
            FRONTEND
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
            {frontend.map((tech, i) => (
               <TechCard key={i} tech={tech} index={i} />
            ))}
          </div>
        </div>

        {/* Backend Row */}
        <div>
          <div className="bg-[#E8FFE8] text-[#34C98A] font-nunito font-bold text-[9px] sm:text-[11px] tracking-[2px] rounded-full px-4 py-1.5 sm:px-5 sm:py-1.5 mb-4 sm:mb-8 w-fit mx-auto md:mx-0">
            BACKEND & TOOLS
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-6">
            {backend.map((tech, i) => (
               <TechCard key={i} tech={tech} index={i + 5} />
            ))}
          </div>
        </div>

        {/* More Pills (Marquee) */}
        <div className="mt-16 sm:mt-24 w-full relative max-w-[100vw] overflow-hidden -mx-4 sm:-mx-6 px-4 sm:px-6">
           <div className="text-center text-[10px] sm:text-[12px] font-nunito font-extrabold tracking-[3px] text-[#8BA4BE] uppercase mb-8 sm:mb-12">
             And Expanding Horizons
           </div>
           
           <div 
             className="relative w-full overflow-hidden flex flex-col gap-4 sm:gap-5"
             style={{
               maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
               WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
             }}
           >
             {/* Row 1 - Left */}
             <motion.div 
               className="flex w-max gap-4 sm:gap-5"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 30, repeat: Infinity }}
             >
               {[...row1, ...row1, ...row1].map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[4px_4px_15px_rgba(163,185,210,0.3),inset_2px_2px_5px_rgba(255,255,255,0.8)] text-[#4A6080] font-nunito font-bold text-[13px] sm:text-[14px] hover:bg-white hover:text-[#1A7FD4] hover:shadow-[4px_4px_20px_rgba(26,127,212,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#1A7FD4] to-[#29C6E0]" />
                    {pill}
                  </div>
               ))}
             </motion.div>

             {/* Row 2 - Right */}
             <motion.div 
               className="flex w-max gap-4 sm:gap-5"
               animate={{ x: ["-50%", "0%"] }}
               transition={{ ease: "linear", duration: 35, repeat: Infinity }}
             >
               {[...row2, ...row2, ...row2].map((pill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[4px_4px_15px_rgba(163,185,210,0.3),inset_2px_2px_5px_rgba(255,255,255,0.8)] text-[#4A6080] font-nunito font-bold text-[13px] sm:text-[14px] hover:bg-white hover:text-[#34C98A] hover:shadow-[4px_4px_20px_rgba(52,201,138,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-[#34C98A] to-[#29C6E0]" />
                    {pill}
                  </div>
               ))}
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WebTechnology;
