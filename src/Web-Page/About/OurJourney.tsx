"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Award, Globe, Handshake, Trophy, Star } from "lucide-react";

const TimelineCard = ({ milestone, index }: { milestone: any, index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative w-full flex justify-between items-center mb-16 sm:mb-20 md:mb-24 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col`}>
      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-[45%]" />
      
      {/* Center Line Dot */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center z-20">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] flex items-center justify-center">
            <motion.div 
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#1A7FD4] rounded-full shadow-[0_0_8px_rgba(26,127,212,0.5)]"
            />
        </div>
      </div>

      {/* Year Badge */}
      <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 -top-10 md:-top-12 z-20 px-4 py-1 sm:px-6 sm:py-1.5 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.5),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#1A7FD4] font-nunito font-black text-[12px] sm:text-[14px]">
        {milestone.year}
      </div>

      {/* Card */}
      <motion.div 
        initial={{ x: isLeft ? -40 : 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        whileHover={{ y: -10, scale: 1.02 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-[calc(100%-55px)] ml-[55px] md:ml-0 md:w-[45%] bg-[#E8F0F8] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 shadow-[8px_8px_16px_rgba(163,185,210,0.45),-8px_-8px_16px_rgba(255,255,255,0.9)] hover:shadow-[16px_16px_32px_rgba(163,185,210,0.5),-16px_-16px_32px_rgba(255,255,255,0.95)] group transition-all duration-500"
      >
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-[20px] bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.25),inset_-2px_-2px_4px_rgba(255,255,255,0.7)] flex items-center justify-center transition-all group-hover:rotate-[15deg] group-hover:shadow-[3px_3px_8px_rgba(163,185,210,0.3)] duration-500" style={{ color: milestone.color }}>
            {React.cloneElement(milestone.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
          </div>
          <div className="bg-[#E8F0F8] text-[#1A7FD4] font-nunito font-black text-[8px] sm:text-[10px] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-[2px_2px_4px_rgba(163,185,210,0.35),-2px_-2px_4px_rgba(255,255,255,0.8)] uppercase tracking-wider group-hover:scale-105 transition-transform">
            {milestone.stat}
          </div>
        </div>
        <h3 className="font-nunito font-black text-base sm:text-[22px] text-[#0D1B2A] mb-2 sm:mb-4 group-hover:text-[#1A7FD4] transition-colors">{milestone.title}</h3>
        <p className="font-inter text-xs sm:text-[14px] text-[#4A6080] leading-relaxed sm:leading-[1.8]">{milestone.text}</p>
      </motion.div>
    </div>
  );
};

const OurJourney = () => {
  const milestones = [
    { year: 2020, title: "The Beginning", text: "Pentacloud Consulting founded in Bengaluru with a vision to democratise enterprise technology solutions.", stat: "Day 1", icon: <Rocket />, color: '#1A7FD4' },
    { year: 2021, title: "First Certifications", text: "Achieved first 5 Salesforce certifications, establishing ourselves as a credible partner in South India.", stat: "5 Certs", icon: <Award />, color: '#F59E0B' },
    { year: 2022, title: "Expanding Horizons", text: "Expanded service offerings to include Cloud Infrastructure, DevOps, and Cybersecurity — serving 25+ clients.", stat: "25+ Clients", icon: <Globe />, color: '#34C98A' },
    { year: 2023, title: "Partnership Milestones", text: "Became official partners with Salesforce, Zoho, Xero, and Meta — unlocking enterprise capabilities.", stat: "4 Partnerships", icon: <Handshake />, color: '#8B5CF6' },
    { year: 2024, title: "100+ Projects", text: "Crossed the landmark of 100+ successful project deliveries with 16+ certifications and zero data loss.", stat: "100+ Projects", icon: <Trophy />, color: '#EC4899' },
    { year: 2025, title: "Going Global", text: "Established UAE presence and expanded digital marketing capabilities — now serving clients globally.", stat: "UAE Expansion", icon: <Star />, color: '#29C6E0' },
  ];

  return (
    <section className="relative w-full py-10 sm:py-16 md:py-24 bg-[#E8F0F8] overflow-hidden">
      {/* Soft Light effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1A7FD4] blur-[150px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#29C6E0] blur-[150px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20 md:mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6"
          >
            OUR JOURNEY
          </motion.div>
          <h2 className="font-nunito font-extrabold text-2xl sm:text-4xl md:text-[52px] text-[#0D1B2A] leading-tight px-2">
            Milestones That <span className="text-[#1A7FD4]">Define Us</span>
          </h2>
        </div>

        <div className="relative">
          {/* Main Timeline Trunk */}
          <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[6px] sm:w-[8px] bg-[#E8F0F8] shadow-[inset_1.5px_1.5px_3px_rgba(163,185,210,0.25),inset_-1.5px_-1.5px_3px_rgba(255,255,255,0.7)] rounded-full" />
          
          {/* Animated Draw Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="absolute left-[20px] md:left-1/2 -translate-x-1/2 top-0 w-[6px] sm:w-[8px] bg-gradient-to-b from-[#1A7FD4] to-[#29C6E0] rounded-full shadow-[0_0_12px_rgba(26,127,212,0.35)]"
          />

          <div className="relative z-10 pt-10 sm:pt-16">
            {milestones.map((m, i) => <TimelineCard key={i} milestone={m} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
