"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import HeroPartnersOrbit from "./HeroPartnersOrbit";

const Hero = () => {
  const partners = [
    { name: "Salesforce", logo: "/Partners/SalesforcePartner.svg" },
    { name: "Xero", logo: "/Partners/XeroPartner.svg" },
    { name: "Zoho", logo: "/Partners/ZohoPartner.svg" },
    { name: "Meta", logo: "/Partners/MetaPartner.svg" },
  ];

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen py-8 sm:py-16 md:py-24 lg:py-0 overflow-hidden flex items-center justify-center bg-slate-50">
      {/* Background Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 z-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1fr] gap-6 md:gap-8 lg:gap-12 items-center px-6 md:px-10 relative z-20 pt-20 sm:pt-24 md:pt-28 lg:pt-20 pb-6 lg:pb-0">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full max-w-full min-w-0 overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-md text-blue-700 text-[9px] md:text-[11px] font-bold tracking-[2px] uppercase shadow-sm">
            Redefining Enterprise Cloud
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-nunito font-black text-slate-900 leading-[1.2] md:leading-[1.1] tracking-tight">
            Accelerate Your <br className="hidden sm:block" />
            <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Digital</span> Evolution
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed max-w-md md:max-w-lg font-medium font-inter">
            Pentacloud delivers cutting-edge consulting and infrastructure solutions 
            that help businesses scale for the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto max-w-xs sm:max-w-none bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-nunito font-bold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all active:scale-95 hover:-translate-y-0.5 duration-300 group text-xs sm:text-base cursor-pointer">
              Start Your Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full flex flex-wrap gap-5 md:gap-12 text-slate-500 text-xs font-semibold mt-4 md:mt-10"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-xl md:text-3xl font-nunito font-black text-slate-900 tracking-tight">50+</span>
              <span className="text-[8px] md:text-xs uppercase tracking-wider font-bold opacity-60">Certificates</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xl md:text-3xl font-nunito font-black text-slate-900 tracking-tight">99.9%</span>
              <span className="text-[8px] md:text-xs uppercase tracking-wider font-bold opacity-60">Uptime SLA</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xl md:text-3xl font-nunito font-black text-slate-900 tracking-tight">24/7</span>
              <span className="text-[8px] md:text-xs uppercase tracking-wider font-bold opacity-60">Expert Support</span>
            </div>
          </motion.div>

          {/* Mobile Partner Marquee Fallback */}
          <div className="lg:hidden w-full overflow-hidden py-3 mt-4 sm:mt-6 border-t border-slate-100">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[2px] mb-3">Trusted Partners</p>
            <div className="flex gap-4 whitespace-nowrap animate-marquee-fast">
              {[...partners, ...partners].map((partner, i) => (
                <div 
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-[6px_6px_12px_rgba(26,127,212,0.06),-3px_-3px_9px_rgba(255,255,255,0.9)] border border-blue-50/20"
                >
                  <div className="relative w-6 h-6">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                  <span className="text-[9px] font-bold font-nunito text-slate-500 uppercase tracking-widest">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Orbit Animation (Desktop) */}
        <div className="hidden lg:flex justify-center items-center">
          <HeroPartnersOrbit />
        </div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute right-[-10%] top-[-10%] w-1/2 h-full bg-blue-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-5%] w-1/3 h-1/2 bg-cyan-400/5 blur-[100px] rounded-full pointer-events-none" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-fast {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 20s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
