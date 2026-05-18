"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, Star, Zap } from "lucide-react";

const differentiators = [
  { title: "We're Technology + Marketing", body: "Unlike typical agencies, Pentacloud combines digital marketing with Salesforce CRM and automation — giving you a complete lead-to-close revenue engine." },
  { title: "100% Transparent Reporting", body: "No vanity metrics. No fluff. Every report shows real business impact — leads generated, cost per lead, revenue attributed, and ROI calculated." },
  { title: "Industry-Specific Strategies", body: "We build strategies tailored to your industry — Healthcare, Finance, Retail, SaaS, and Enterprise — understanding buyer journeys and competition." },
  { title: "Integrated CRM & Marketing", body: "As a certified Salesforce and Zoho partner, we connect your campaigns directly to your CRM — tracking every lead from first click to closed deal." },
  { title: "Creative + Data Combined", body: "We believe great marketing needs both — compelling creative that stops the scroll AND rigorous data analysis that optimises performance." },
  { title: "No Long-Term Lock-In", body: "We work on rolling monthly engagements — no 12-month contracts that trap you. We earn your business every month through results." },
  { title: "Meta & Google Partner Status", body: "Our partnership gives us access to beta features, priority support, and advanced audience tools not available to standard advertisers." },
  { title: "India + UAE Market Expertise", body: "Deep understanding of both Indian and Middle Eastern digital markets — consumer behaviour, platform preferences, and cultural nuances." }
];

const DigitalWhyPentacloud = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 p-4 sm:p-6 rounded-[24px] sm:rounded-[48px] shadow-2xl border border-white aspect-[4/5] flex items-center justify-center relative group">
             <div className="absolute inset-0 rounded-[24px] sm:rounded-[48px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Marketing Strategy" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
             </div>
             
             {/* Floating Badges - Optimized for Mobile Screen Bounds to prevent overflow */}
             <div className="absolute top-4 left-3 sm:top-12 sm:left-8 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center shrink-0">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">Data-Driven Decisions</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">Every strategy backed by data</p>
                </div>
             </div>

             <div className="absolute top-1/2 right-3 sm:-right-8 sm:-translate-y-1/2 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-50 text-[#34C98A] flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">ROI Guaranteed Focus</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">We track what matters</p>
                </div>
             </div>

             <div className="absolute bottom-4 left-3 sm:bottom-12 sm:left-10 p-2.5 sm:p-4 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-blue-50 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                   <p className="text-[8px] sm:text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-0.5 sm:mb-1">48hr Campaign Launch</p>
                   <p className="text-[7px] sm:text-[9px] text-slate-400 font-bold leading-none">Fastest in the industry</p>
                </div>
             </div>
          </div>
        </motion.div>

        <div className="pt-6 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
          >
            WHY PENTACLOUD
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-6 sm:mb-12 leading-tight">
            Marketing That Works <br/> <span className="text-[#1A7FD4]">For Your Business</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="group">
                <h4 className="font-nunito font-black text-sm sm:text-base text-[#0D1B2A] mb-1.5 sm:mb-2 flex items-center gap-2 group-hover:text-[#1A7FD4] transition-colors leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4] flex-shrink-0" /> {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-[#4A6080] font-inter leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWhyPentacloud;
