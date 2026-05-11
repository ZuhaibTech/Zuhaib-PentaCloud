"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Atom, FileCode, Paintbrush, Sparkles, Server, Database, Cloud, Globe, PenTool } from "lucide-react";

const CLAY_CARD = "bg-background rounded-[40px] border border-white/50 shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.6),-20px_-20px_40px_rgba(255,255,255,1)] transition-all duration-500";

const TechCard = ({ tech, index }: { tech: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", bounce: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      viewport={{ once: true }}
      className={`${CLAY_CARD} p-5 flex flex-col h-full group`}
    >
      <div 
        className={`w-12 h-12 flex items-center justify-center rounded-[14px] mb-4 transition-all duration-500 group-hover:rotate-[360deg] shadow-md`}
        style={{ backgroundColor: tech.bg, color: tech.color === 'white' ? 'white' : tech.color }}
      >
        <tech.icon size={22} className={tech.color === 'white' ? 'text-white' : ''} />
      </div>
      <h3 className="font-nunito font-bold text-[18px] text-[#0D1B2A] mb-1">{tech.name}</h3>
      <div className="text-[11px] font-nunito font-bold text-[#8BA4BE] uppercase mb-3 tracking-[1px]">{tech.sub}</div>
      <p className="font-inter text-[12px] text-[#4A6080] leading-relaxed mb-6 flex-1">
        {tech.desc}
      </p>
      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-nunito font-black text-[#1A7FD4]">
           <span>Expertise</span>
           <span>{tech.level}%</span>
        </div>
        <div className="h-1.5 w-full bg-[#EEF3FF] rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${tech.level}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
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
    { name: "Tailwind CSS", sub: "Utility-First CSS", icon: Paintbrush, color: "#29C6E0", bg: "#E0F7FF", level: 95, desc: "Pixel-perfect responsive designs built at speed with consistent systems." },
    { name: "Framer Motion", sub: "Animations", icon: Sparkles, color: "#8B5CF6", bg: "#F3E8FF", level: 88, desc: "Silky smooth micro-animations that make interactions feel premium." }
  ];

  const backend = [
    { name: "Node.js", sub: "Backend Runtime", icon: Server, color: "#34C98A", bg: "#E8FFE8", level: 90, desc: "Scalable, event-driven server architecture handling concurrent connections." },
    { name: "MongoDB / Postgre", sub: "Database", icon: Database, color: "#F59E0B", bg: "#FFF8E0", level: 88, desc: "Flexible NoSQL and relational databases chosen based on your structure." },
    { name: "AWS / Vercel", sub: "Cloud Hosting", icon: Cloud, color: "#1A7FD4", bg: "#EEF3FF", level: 92, desc: "Enterprise-grade cloud infrastructure with global CDN delivery." },
    { name: "WordPress / Webflow", sub: "CMS Platforms", icon: Globe, color: "#EC4899", bg: "#FFE8F0", level: 95, desc: "Powerful content management for clients who update their own content." },
    { name: "Figma → Code", sub: "Design to Dev", icon: PenTool, color: "#8B5CF6", bg: "#F3E8FF", level: 98, desc: "Pixel-perfect translation from Figma designs to production code." }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden px-6">
      {/* Particles bg */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {[...Array(15)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 10 + Math.random() * 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-2 h-2 bg-[#1A7FD4] rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] uppercase mb-4">TECHNOLOGY</div>
          <h2 className="font-nunito font-extrabold text-[42px] text-[#0D1B2A]">
            Built With The Best <span className="text-[#1A7FD4]">Modern Tech Stack</span>
          </h2>
        </div>

        {/* Frontend Row */}
        <div className="mb-20">
          <div className="bg-[#EEF3FF] text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] rounded-full px-5 py-1.5 mb-8 w-fit mx-auto md:mx-0">
            FRONTEND
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {frontend.map((tech, i) => (
               <TechCard key={i} tech={tech} index={i} />
            ))}
          </div>
        </div>

        {/* Backend Row */}
        <div>
          <div className="bg-[#E8FFE8] text-[#34C98A] font-nunito font-bold text-[11px] tracking-[2px] rounded-full px-5 py-1.5 mb-8 w-fit mx-auto md:mx-0">
            BACKEND & TOOLS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {backend.map((tech, i) => (
               <TechCard key={i} tech={tech} index={i + 5} />
            ))}
          </div>
        </div>

        {/* More Pills */}
        <div className="mt-20 flex flex-col items-center">
           <div className="text-[13px] font-inter text-[#8BA4BE] mb-6">And more:</div>
           <div className="flex flex-wrap justify-center gap-3">
              {["GraphQL", "Redis", "Docker", "Stripe", "Google Analytics", "Hotjar", "SendGrid", "Firebase", "Redux", "Zustand", "Prisma", "Supabase", "Storybook", "Jest", "Cypress", "Github Actions"].map((pill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white px-4 py-1.5 rounded-full text-[#4A6080] font-nunito font-bold text-[12px] shadow-sm"
                >
                  {pill}
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default WebTechnology;
