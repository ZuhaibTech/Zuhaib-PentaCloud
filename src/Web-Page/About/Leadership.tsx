"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TeamCard = ({ member, index }: { member: any, index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: 1000 }}
      className="w-full"
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        className="w-full max-w-[320px] mx-auto bg-background rounded-[28px] overflow-hidden shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] group transition-all duration-300 hover:shadow-[15px_15px_30px_rgba(163,185,210,0.6)] hover:-translate-y-2"
      >
        {/* Avatar Area */}
        <div className="relative h-[180px]">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src={member.banner} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Banner" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-white shadow-xl overflow-hidden">
              <img 
                src={member.image} 
                className="w-full h-full object-cover" 
                alt={member.name} 
              />
            </div>
          </div>
        </div>
        
        <div className="h-10" /> {/* Spacer for avatar overlap */}
        
        {/* Info Area */}
        <div className="p-6">
          <h3 className="font-nunito font-bold text-[20px] text-[#0D1B2A]">{member.name}</h3>
          <div className="font-nunito font-semibold text-[13px] text-[#1A7FD4] tracking-[1px] mb-4 uppercase">{member.role}</div>
          <p className="font-inter text-[13px] text-[#4A6080] leading-[1.7] mb-6 min-h-[80px]">
            {member.bio}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {member.tags.map((tag:string, i:number) => (
              <span key={i} className="bg-background shadow-[2px_2px_4px_rgba(163,185,210,0.4),-2px_-2px_4px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[11px] px-3 py-1 rounded-full group-hover:scale-105 transition-transform">
                {tag}
              </span>
            ))}
          </div>

          {/* Socials Placeholder */}
          <div className="flex gap-2 border-t border-slate-100 pt-4">
             <div className="w-8 h-8 rounded-lg bg-background shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#1A7FD4] hover:bg-[#1A7FD4] hover:text-white transition-colors cursor-pointer text-xs font-bold">in</div>
             <div className="w-8 h-8 rounded-lg bg-background shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#1A7FD4] hover:bg-[#1A7FD4] hover:text-white transition-colors cursor-pointer text-xs font-bold">tw</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Leadership = () => {
  const team = [
    { 
      name: "Founder CEO", 
      role: "Pentacloud Consulting", 
      bio: "Visionary technology leader driving Pentacloud's mission to democratise enterprise cloud solutions across Asia with a passion for Salesforce and AI.", 
      tags: ["Salesforce", "Cloud Strategy", "AI"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      banner: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Cloud Architect", 
      role: "Infra & DevOps Lead", 
      bio: "Certified Tier 3 engineer specialising in enterprise cloud infrastructure, cybersecurity, and DevOps transformation for Fortune-level deployments.", 
      tags: ["AWS", "DevOps", "Cybersecurity"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200",
      banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    },
    { 
      name: "Salesforce Lead", 
      role: "CRM & Integration", 
      bio: "16+ Salesforce certifications and deep expertise in CRM implementation, customisation, and enterprise system integrations across multiple industries.", 
      tags: ["Salesforce CRM", "Integrations", "Training"],
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
      banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <div className="text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] uppercase mb-4">THE PEOPLE</div>
          <h2 className="font-nunito font-extrabold text-4xl md:text-[42px] text-[#0D1B2A] leading-[1.2]">
            Leadership That Leads <br/>
            <span className="text-[#1A7FD4]">By Example</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {team.map((m, i) => <TeamCard key={i} member={m} index={i} />)}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
