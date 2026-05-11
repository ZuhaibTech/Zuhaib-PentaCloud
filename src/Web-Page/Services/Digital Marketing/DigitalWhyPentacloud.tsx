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
    <section className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-[48px] shadow-2xl border border-white aspect-[4/5] flex items-center justify-center relative group">
             <div className="absolute inset-0 rounded-[48px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Marketing Strategy" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-12 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center"><BarChart3 size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">📊 Data-Driven Decisions</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Every strategy backed by data</p>
                </div>
             </div>

             <div className="absolute top-1/2 -right-8 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-[#34C98A] flex items-center justify-center"><Star size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">🎯 ROI Guaranteed Focus</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">We track what matters</p>
                </div>
             </div>

             <div className="absolute bottom-12 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center"><Zap size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">⚡ 48hr Campaign Launch</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Fastest in the industry</p>
                </div>
             </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
          >
            WHY PENTACLOUD
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-12">
            Marketing That Works <br/> <span className="text-[#1A7FD4]">For Your Business</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="group">
                <h4 className="font-nunito font-black text-[#0D1B2A] mb-2 flex items-center gap-2 group-hover:text-[#1A7FD4] transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4]" /> {item.title}
                </h4>
                <p className="text-xs text-[#4A6080] font-inter leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalWhyPentacloud;
