"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Users, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const differentiators = [
  { title: "Practitioners, Not Theorists", body: "Every consultant and trainer at Pentacloud is a certified practitioner who has built real Salesforce implementations, migrated real cloud workloads, and solved real business problems — not someone who learned from textbooks. Your team learns from people who have done what they're teaching." },
  { title: "16+ Active Certifications", body: "Our team collectively holds 16+ active certifications across Salesforce, AWS, Azure, GCP, and cybersecurity — maintained and renewed regularly. When we consult or train on a platform, we hold the vendor's own certification validating our expertise." },
  { title: "Vendor-Agnostic Consulting", body: "We are partners with Salesforce, Zoho, Xero, and Meta — but our consulting advice is always driven by what is right for your business. If a simpler or cheaper solution serves you better, we will say so — even if it means less work for us." },
  { title: "Training Using Your Environment", body: "Unlike generic training providers, we deliver training using your actual Salesforce org or cloud environment — so participants learn in context. Your custom fields, your layouts, your workflows. Immediately applicable on Monday morning." },
  { title: "End-to-End Support", body: "Pentacloud covers the full journey — we consult on the strategy, implement the solution, train your team to use it, and support them afterward. One partner for every stage of your technology journey means no gaps in knowledge or accountability." },
  { title: "Flexible Delivery, Your Schedule", body: "We work around your business calendar — weekday, weekend, morning, evening, on-site, virtual, or hybrid. Training programmes are scheduled to minimise disruption to your operations and accommodate participants across multiple time zones." },
  { title: "India & UAE Expertise", body: "Deep understanding of both Indian and Middle Eastern business environments — regulatory context, organisational culture, technology maturity levels, and industry-specific requirements across Healthcare, Finance, Retail, and Enterprise sectors." },
  { title: "Measurable Outcomes Defined Upfront", body: "Every consulting engagement and training programme begins with defined, measurable outcomes — Salesforce adoption rates, certification pass rates, or cost reduction targets. We agree on success criteria before we start." }
];

const ConsultingWhyPentacloud = () => {
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt="Training Workshop" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
             </div>
             
             {/* Floating Badges */}
             <div className="absolute top-12 left-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A7FD4] flex items-center justify-center"><Award size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">🏆 16+ Active Certifications</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Real expertise, proven credentials</p>
                </div>
             </div>

             <div className="absolute top-1/2 -right-8 -translate-y-1/2 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 text-[#34C98A] flex items-center justify-center"><Users size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">👥 500+ Professionals Trained</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">Across India & UAE</p>
                </div>
             </div>

             <div className="absolute bottom-12 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center"><GraduationCap size={20} /></div>
                <div>
                   <p className="text-[10px] font-black text-[#0D1B2A] uppercase leading-none mb-1">85%+ Cert Pass Rate</p>
                   <p className="text-[9px] font-bold text-[#4A6080] leading-none">For exam prep participants</p>
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
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-12 leading-tight">
            Consultants Who Build. <br/> <span className="text-[#1A7FD4]">Trainers Who Do.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="group">
                <h4 className="font-nunito font-black text-[#0D1B2A] mb-2 flex items-center gap-2 group-hover:text-[#1A7FD4] transition-colors leading-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4] flex-shrink-0" /> {item.title}
                </h4>
                <p className="text-[11px] text-[#4A6080] font-inter leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingWhyPentacloud;
