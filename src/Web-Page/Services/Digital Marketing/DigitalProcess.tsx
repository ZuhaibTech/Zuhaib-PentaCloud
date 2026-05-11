"use client";

import React from "react";
import { motion } from "framer-motion";
import { CLAY_CARD } from "./Constants";

const processSteps = [
  {
    step: "1",
    duration: "Week 1",
    title: "Discovery & Marketing Audit",
    body: "We begin by understanding your business, target audience, competitors, and current marketing performance. We audit your existing digital presence — website SEO health, social media performance, ad account history, and email metrics — delivering a clear picture of where you stand.",
    deliverable: "📊 Marketing Audit Report"
  },
  {
    step: "2",
    duration: "Week 2",
    title: "Strategy & Channel Planning",
    body: "Based on the audit, we build a custom 90-day marketing strategy — selecting the right channels for your business, defining monthly targets, content themes, campaign calendars, and KPIs. You receive a complete marketing roadmap with clear milestones.",
    deliverable: "📋 90-Day Marketing Roadmap"
  },
  {
    step: "3",
    duration: "Week 2–3",
    title: "Creative & Content Production",
    body: "Our team of designers and copywriters produce all campaign assets — ad creatives, social media graphics, email templates, blog posts, and landing page copy. All creative is reviewed and approved by you before any campaign goes live.",
    deliverable: "🎨 Campaign Creative Assets"
  },
  {
    step: "4",
    duration: "Week 3–4",
    title: "Campaign Launch & Execution",
    body: "We launch campaigns across all agreed channels — Google Ads, Meta Ads, email sequences, social media publishing, and SEO implementation — with all tracking, pixels, and analytics configured before go-live to ensure zero data is missed.",
    deliverable: "🚀 Live Campaigns"
  },
  {
    step: "5",
    duration: "Ongoing Monthly",
    title: "Optimisation & Reporting",
    body: "Every campaign is continuously monitored and optimised — A/B testing ad creatives, adjusting bid strategies, refining audience targeting, and improving content performance. You receive a comprehensive monthly report covering all KPIs.",
    deliverable: "📈 Monthly Performance Report"
  }
];

const DigitalProcess = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          HOW WE WORK
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          Your Marketing Journey <br/> <span className="text-[#1A7FD4]">In 5 Clear Steps</span>
        </h2>
      </div>

      <div className="space-y-8 relative">
        {/* Connecting Line */}
        <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-blue-100 hidden md:block" />
        
        {processSteps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 items-start relative z-10"
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center border border-blue-50">
              <span className="text-[10px] font-black text-[#1A7FD4] uppercase tracking-tighter leading-none mb-1">Step</span>
              <span className="text-3xl font-black text-[#0D1B2A] leading-none">{step.step}</span>
            </div>
            
            <div className={`${CLAY_CARD} p-8 flex-grow`}>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h4 className="text-2xl font-nunito font-black text-[#0D1B2A]">{step.title}</h4>
                <div className="px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-xl text-xs font-black uppercase tracking-wider border border-blue-100">
                  {step.duration}
                </div>
              </div>
              <p className="text-[#4A6080] font-inter leading-relaxed mb-6 max-w-4xl">{step.body}</p>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Deliverable:</span>
                 <span className="text-sm font-bold text-[#0D1B2A]">{step.deliverable}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalProcess;
