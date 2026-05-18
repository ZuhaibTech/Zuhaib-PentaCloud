"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Cloud, 
  Trophy,
  Zap,
  Layers,
  Code,
  TrendingUp,
  MessageCircle,
  DollarSign,
  RefreshCw,
  BarChart3,
  CheckCircle2
} from "lucide-react";

const certificates = [
  // Salesforce Certifications
  { id: 1, title: "Salesforce Certified Administrator", issuer: "Salesforce", icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-400" />, color: "from-sky-500/20" },
  { id: 2, title: "Salesforce Platform Developer I", issuer: "Salesforce", icon: <Code className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-500" />, color: "from-sky-500/20" },
  { id: 3, title: "Salesforce Application Architect", issuer: "Salesforce", icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-600" />, color: "from-sky-600/20" },
  { id: 4, title: "Salesforce System Architect", issuer: "Salesforce", icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-400" />, color: "from-sky-400/20" },
  { id: 5, title: "Salesforce Sales Cloud Consultant", issuer: "Salesforce", icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-500" />, color: "from-sky-500/20" },
  { id: 6, title: "Salesforce Service Cloud Consultant", issuer: "Salesforce", icon: <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-sky-500" />, color: "from-sky-500/20" },
  
  // Xero Certifications
  { id: 7, title: "Xero Advisor Certified", issuer: "Xero", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />, color: "from-blue-500/20" },
  { id: 8, title: "Xero Payroll Certified", issuer: "Xero", icon: <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 9, title: "Xero App Advisory Certified", issuer: "Xero", icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />, color: "from-blue-600/20" },
  { id: 10, title: "Xero Migration Specialist", issuer: "Xero", icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />, color: "from-blue-400/20" },
  { id: 11, title: "Xero Reporting Specialist", issuer: "Xero", icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 12, title: "Xero Bronze Partner", issuer: "Xero", icon: <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-300" />, color: "from-blue-300/20" },
];

const Certificates = () => {
  // Duplicate the list for seamless infinite scroll
  const scrollingList = [...certificates, ...certificates];

  return (
    <section className="bg-background py-6 sm:py-12 md:py-18 overflow-hidden border-t border-slate-200 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0F8] to-transparent pointer-events-none" />
      
      <div className="px-6 md:px-12 mb-4 md:mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[9px] md:text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-1">
            World-Class Expertise
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            Our Certified Capabilities
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden w-full">
        {/* Left and Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#E8F0F8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#E8F0F8] to-transparent z-10" />

        <div className="flex gap-3 sm:gap-6 py-2 sm:py-4 animate-scrollCerts">
          {scrollingList.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 w-48 sm:w-64 md:w-80 p-4 sm:p-6 md:p-8 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] bg-background border-2 border-white/50 shadow-[4px_4px_8px_rgba(163,185,210,0.3),-4px_-4px_8px_rgba(255,255,255,0.95)] hover:shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Uniform Blue Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-20">
                <div className="w-8 h-8 sm:w-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#f8fafc] border border-white shadow-[2px_2px_4px_#e2e8f0,-2px_-2px_4px_#ffffff,inset_0.5px_0.5px_1px_#ffffff,inset_-0.5px_-0.5px_1px_#e2e8f0] flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-[11px] sm:text-sm md:text-base font-bold text-black mb-1 group-hover:text-blue-700 transition-colors line-clamp-2 h-[30px] sm:h-[40px] md:h-[48px] flex items-center">
                  {cert.title}
                </h4>
                <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                  {cert.issuer}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-2 sm:p-4 opacity-30">
                <CheckCircle2 className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12 text-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollCerts {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollCerts {
          animation: scrollCerts 45s linear infinite;
        }
        .animate-scrollCerts:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Certificates;
