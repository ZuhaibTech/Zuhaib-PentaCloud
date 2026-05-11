"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLAY_CARD } from "./Constants";

const resultStats = [
  { val: "300%", label: "Average ROI Delivered", sub: "Across all marketing clients" },
  { val: "180%", label: "Avg Organic Traffic Growth", sub: "Within first 6 months of SEO" },
  { val: "65%", label: "Avg Reduction in Cost Per Lead", sub: "Through PPC optimisation" },
  { val: "42%", label: "Avg Email Open Rate", sub: "vs 21% industry average" }
];

const caseStudies = [
  {
    industry: "Healthcare",
    service: "SEO + Content Marketing",
    challenge: "A Bengaluru-based healthcare clinic had zero organic visibility and was fully dependent on paid ads for patient acquisition.",
    solution: "Full technical SEO audit, local SEO optimisation for 5 clinic locations, medical content blog (2 articles per week), and Google Business profile optimisation.",
    result: "240% increase in organic traffic in 5 months. First page rankings for 47 target keywords. 60% reduction in paid ad dependency.",
    timeline: "5 months",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400"
  },
  {
    industry: "Retail & eCommerce",
    service: "Meta Ads + Email Marketing",
    challenge: "An online retail brand was getting high website traffic but low conversion rates and poor customer retention after first purchase.",
    solution: "Meta retargeting campaigns for abandoned cart recovery, post-purchase email sequences, loyalty campaign automation in Zoho Campaigns, and lookalike audience campaigns.",
    result: "4.8x ROAS on Meta Ads. 35% increase in repeat purchase rate. Email revenue grew to 28% of total store revenue.",
    timeline: "3 months",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=400"
  },
  {
    industry: "Corporate Enterprise (B2B)",
    service: "LinkedIn Ads + SEO + Salesforce",
    challenge: "A B2B technology company had no digital marketing presence and was entirely dependent on referrals for new business.",
    solution: "LinkedIn lead generation campaigns targeting C-suite decision makers, technical SEO and blog content strategy, and Salesforce integration to track leads.",
    result: "120 qualified leads in the first 90 days. 22 deals closed attributed to digital marketing. 310% ROI within 6 months.",
    timeline: "6 months",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
  }
];

const DigitalResults = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          PROVEN RESULTS
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          Numbers That Tell <br/> <span className="text-[#1A7FD4]">Our Story</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {resultStats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className={`${CLAY_CARD} p-8 text-center`}
          >
            <p className="text-4xl md:text-5xl font-nunito font-black text-[#1A7FD4] mb-2">{stat.val}</p>
            <p className="text-sm font-black text-[#0D1B2A] mb-1">{stat.label}</p>
            <p className="text-[10px] text-[#4A6080]">{stat.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`${CLAY_CARD} p-8 flex flex-col h-full`}
          >
            <div className="flex justify-between items-start mb-6">
               <div className="px-3 py-1 bg-blue-50 text-[#1A7FD4] rounded-lg text-[10px] font-black uppercase tracking-wider">{cs.industry}</div>
               <div className="text-[10px] font-bold text-slate-400 flex items-center gap-1">⏱️ {cs.timeline}</div>
            </div>
            <h4 className="text-xl font-nunito font-black text-[#0D1B2A] mb-4">{cs.service}</h4>
            
            <div className="space-y-4 flex-grow">
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Challenge:</p>
                  <p className="text-xs text-[#4A6080] leading-relaxed">{cs.challenge}</p>
               </div>
               <div>
                  <p className="text-[10px] font-black text-[#1A7FD4] uppercase tracking-widest mb-1">What We Did:</p>
                  <p className="text-xs text-[#4A6080] leading-relaxed">{cs.solution}</p>
               </div>
               <div className="p-4 bg-green-50 rounded-2xl border border-green-100">
                  <p className="text-[10px] font-black text-[#34C98A] uppercase tracking-widest mb-1">Result:</p>
                  <p className="text-xs font-bold text-[#0D1B2A] leading-relaxed">{cs.result}</p>
               </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-blue-50 flex items-center justify-center">
               <div className="w-full aspect-video bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 overflow-hidden relative group">
                  <img src={cs.image} alt={cs.industry} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalResults;
