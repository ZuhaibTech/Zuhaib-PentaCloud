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
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-slate-50">
      {/* Background Theme */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 z-10" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_1fr] gap-8 items-center px-6 md:px-10 relative z-20 pt-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 backdrop-blur-md text-blue-700 text-[11px] font-bold tracking-[2px] uppercase shadow-sm">
            Redefining Enterprise Cloud
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-nunito font-black text-slate-900 leading-[1.1] tracking-tight">
            Accelerate Your <br />
            <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Digital</span> Evolution
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg font-medium font-inter">
            Pentacloud provides cutting-edge consulting and infrastructure solutions 
            designed to scale your business into the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full font-nunito font-bold flex items-center justify-center gap-3 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] transition-all hover:shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff] hover:-translate-y-1 active:scale-95 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full flex flex-wrap gap-8 md:gap-12 text-slate-500 text-sm font-semibold mt-8 md:mt-12"
          >
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-nunito font-black text-slate-900 tracking-tight">50+</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-60">Certificates</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-nunito font-black text-slate-900 tracking-tight">99.9%</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-60">Uptime SLA</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-nunito font-black text-slate-900 tracking-tight">24/7</span>
              <span className="text-xs uppercase tracking-wider font-bold opacity-60">Expert Support</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Orbit Animation (Desktop) */}
        <div className="hidden lg:flex justify-center items-center">
          <HeroPartnersOrbit />
        </div>
      </div>

      {/* Mobile Partner Marquee Fallback */}
      <div className="lg:hidden absolute bottom-12 left-0 w-full overflow-hidden py-10 z-20">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-fast">
          {[...partners, ...partners].map((partner, i) => (
            <div 
              key={i}
              className="inline-flex flex-col items-center gap-3 px-6 py-4 bg-white rounded-[24px] shadow-[8px_8px_16px_rgba(26,127,212,0.1),-4px_-4px_12px_rgba(255,255,255,0.9)] border border-blue-50/50"
            >
              <div className="relative w-10 h-10">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold font-nunito text-slate-500 uppercase tracking-widest">{partner.name}</span>
            </div>
          ))}
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
