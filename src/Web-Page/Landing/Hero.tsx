"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Briefcase, ShieldCheck, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroPartnersOrbit from "./HeroPartnersOrbit";

const Hero = () => {
  const partners = [
    { name: "Salesforce", logo: "/Partners/Salesforceb.svg" },
    { name: "Xero", logo: "/Partners/XeroPartner.svg" },
    { name: "Zoho", logo: "/Partners/ZohoPartner.svg" },
    { name: "Meta", logo: "/Partners/MetaPartner.svg" },
  ];

  return (
    <section className="relative w-full min-h-[70vh] lg:min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-36">
      {/* Background Image & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-20"
        style={{ backgroundImage: "url('/Hero/Hero-BG.webp')" }}
      />
      <div className="absolute inset-0 bg-[#F8FAFC]/90 z-10" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-8 lg:gap-4 items-center px-6 md:px-10 relative z-20">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 sm:gap-6 md:gap-8 w-full max-w-full min-w-0 overflow-hidden"
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-transparent border border-[#1A7FD4]/30 text-[#1A7FD4] text-[8px] md:text-[9px] font-extrabold tracking-[2px] uppercase">
            REDEFINING ENTERPRISE CLOUD
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-[56px] font-nunito font-black text-[#0D1B2A] leading-[1.1] md:leading-[1.15] tracking-tight">
            Transform Ideas Into <br className="hidden lg:block" />
            Scalable <span className="text-[#1A7FD4]">Digital</span><br className="hidden sm:block" />
            <span className="text-[#1A7FD4]">Ecosystems</span>
          </h1>
          
          <div className="w-16 h-[3px] bg-[#1A7FD4] rounded-full mt-1 mb-1" />

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-[#4A6080] leading-relaxed max-w-md md:max-w-lg font-medium font-inter mt-1">
            Enterprise-grade Salesforce, Cloud, AI & Web solutions that drive innovation, efficiency and growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto bg-[#1A7FD4] hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-nunito font-bold flex items-center justify-center gap-2 shadow-[0_8px_16px_rgba(26,127,212,0.24)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer">
              Schedule Consultation
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link href="/services/salesforce" className="w-full sm:w-auto bg-white border border-slate-200 hover:border-slate-300 text-[#0D1B2A] px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-nunito font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-xs sm:text-sm cursor-pointer">
              Explore Services
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500" />
            </Link>
          </div>

          {/* Badges below buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-5">
            <div className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <Image src="/Partners/Salesforceb.svg" alt="Salesforce" width={24} height={24} className="object-contain" />
              <div className="flex flex-col">
                 <span className="text-[11px] sm:text-xs font-bold text-[#0D1B2A] leading-tight">Salesforce</span>
                 <span className="text-[11px] sm:text-xs font-medium text-[#4A6080] leading-tight">Partner</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <Image src="/Partners/ZohoPartner.svg" alt="Zoho" width={24} height={24} className="object-contain" />
              <div className="flex flex-col">
                 <span className="text-[11px] sm:text-xs font-bold text-[#0D1B2A] leading-tight">Zoho</span>
                 <span className="text-[11px] sm:text-xs font-medium text-[#4A6080] leading-tight">Partner</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-slate-100/50">
              <Image src="/Partners/XeroPartner.svg" alt="Xero" width={24} height={24} className="object-contain" />
              <div className="flex flex-col">
                 <span className="text-[11px] sm:text-xs font-bold text-[#0D1B2A] leading-tight">Xero</span>
                 <span className="text-[11px] sm:text-xs font-medium text-[#4A6080] leading-tight">Partner</span>
              </div>
            </div>
          </div>


        </motion.div>

        {/* Right Column - Orbit Animation (Desktop) */}
        <div className="hidden lg:flex justify-center items-center">
          <HeroPartnersOrbit />
        </div>
      </div>

      {/* Bottom Stats Bar Container */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 z-30 relative lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2 mt-12 lg:mt-0">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-slate-100 p-4 sm:p-6 grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-y-6 md:gap-4">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#1A7FD4]/30 text-[#1A7FD4] flex items-center justify-center">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-nunito font-black text-[#1A7FD4]">10+</span>
              <span className="text-[10px] sm:text-[11px] xl:text-xs text-[#4A6080] font-medium tracking-wide">Years Experience</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 sm:h-12 bg-slate-100" />
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#1A7FD4]/30 text-[#1A7FD4] flex items-center justify-center">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-nunito font-black text-[#1A7FD4]">50+</span>
              <span className="text-[10px] sm:text-[11px] xl:text-xs text-[#4A6080] font-medium tracking-wide">Projects Delivered</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 sm:h-12 bg-slate-100" />

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#1A7FD4]/30 text-[#1A7FD4] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-nunito font-black text-[#1A7FD4]">99.9%</span>
              <span className="text-[10px] sm:text-[11px] xl:text-xs text-[#4A6080] font-medium tracking-wide">Service Availability</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 sm:h-12 bg-slate-100" />

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#1A7FD4]/30 text-[#1A7FD4] flex items-center justify-center">
              <Headset className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl xl:text-2xl font-nunito font-black text-[#1A7FD4]">24/7</span>
              <span className="text-[10px] sm:text-[11px] xl:text-xs text-[#4A6080] font-medium tracking-wide">Dedicated Support</span>
            </div>
          </div>

        </div>
      </div>



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
