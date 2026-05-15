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
  { id: 1, title: "Salesforce Certified Administrator", issuer: "Salesforce", icon: <Cloud className="w-6 h-6 text-sky-400" />, color: "from-sky-500/20" },
  { id: 2, title: "Salesforce Platform Developer I", issuer: "Salesforce", icon: <Code className="w-6 h-6 text-sky-500" />, color: "from-sky-500/20" },
  { id: 3, title: "Salesforce Application Architect", issuer: "Salesforce", icon: <Zap className="w-6 h-6 text-sky-600" />, color: "from-sky-600/20" },
  { id: 4, title: "Salesforce System Architect", issuer: "Salesforce", icon: <ShieldCheck className="w-6 h-6 text-sky-400" />, color: "from-sky-400/20" },
  { id: 5, title: "Salesforce Sales Cloud Consultant", issuer: "Salesforce", icon: <TrendingUp className="w-6 h-6 text-sky-500" />, color: "from-sky-500/20" },
  { id: 6, title: "Salesforce Service Cloud Consultant", issuer: "Salesforce", icon: <MessageCircle className="w-6 h-6 text-sky-500" />, color: "from-sky-500/20" },
  
  // Xero Certifications
  { id: 7, title: "Xero Advisor Certified", issuer: "Xero", icon: <Award className="w-6 h-6 text-blue-400" />, color: "from-blue-500/20" },
  { id: 8, title: "Xero Payroll Certified", issuer: "Xero", icon: <DollarSign className="w-6 h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 9, title: "Xero App Advisory Certified", issuer: "Xero", icon: <Layers className="w-6 h-6 text-blue-600" />, color: "from-blue-600/20" },
  { id: 10, title: "Xero Migration Specialist", issuer: "Xero", icon: <RefreshCw className="w-6 h-6 text-blue-400" />, color: "from-blue-400/20" },
  { id: 11, title: "Xero Reporting Specialist", issuer: "Xero", icon: <BarChart3 className="w-6 h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 12, title: "Xero Bronze Partner", issuer: "Xero", icon: <Trophy className="w-6 h-6 text-blue-300" />, color: "from-blue-300/20" },
];

const Certificates = () => {
  // Duplicate the list for seamless infinite scroll
  const scrollingList = [...certificates, ...certificates];

  return (
    <section className="bg-background py-24 overflow-hidden border-t border-slate-200 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0F8] to-transparent pointer-events-none" />
      
      <div className="px-8 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
            World-Class Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Certified Capabilities
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex">
        {/* Left and Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E8F0F8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E8F0F8] to-transparent z-10" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: [0, -1920], // Adjusted based on card width + gap
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingList.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-background border-2 border-white/50 shadow-[8px_8px_16px_rgba(163,185,210,0.5),-8px_-8px_16px_rgba(255,255,255,0.95)] hover:shadow-[12px_12px_24px_rgba(163,185,210,0.6),-12px_-12px_24px_rgba(255,255,255,1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Uniform Blue Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-20">
                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-white shadow-[4px_4px_8px_#e2e8f0,-4px_-4px_8px_#ffffff,inset_1px_1px_2px_#ffffff,inset_-1px_-1px_2px_#e2e8f0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-black mb-2 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                  {cert.issuer}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4 opacity-40">
                <CheckCircle2 className="w-12 h-12 text-slate-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Certificates;
