"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Settings, 
  Sliders, 
  Activity, 
  GitMerge, 
  HeadphonesIcon, 
  GraduationCap, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const WhatWeOffer = () => {
  const services = [
    {
      title: "Salesforce Implementation",
      desc: "We handle complete end-to-end Salesforce deployment, from requirements gathering and solution architecture to go-live support. Sales Cloud, Service Cloud, Marketing Cloud, we implement them all with zero disruption to your operations.",
      icon: Settings,
      color: "#1A7FD4",
      tags: ["Sales Cloud", "Service Cloud", "Marketing Cloud"],
      visual: "steps"
    },
    {
      title: "Customisation & Optimisation",
      desc: "Your business is unique, your Salesforce should be too. We build custom objects, flows, validation rules, and Lightning components that perfectly mirror your business processes and eliminate every manual workaround.",
      icon: Sliders,
      color: "#29C6E0",
      tags: ["Custom Objects", "Lightning", "Process Builder", "Flows"],
      visual: "gears"
    },
    {
      title: "Salesforce Health Check",
      desc: "Is your Salesforce underperforming? Our certified Tier 3 engineers conduct a comprehensive no-obligation audit covering data quality, security settings, automation efficiency, and adoption rates, delivering an actionable improvement roadmap.",
      icon: Activity,
      color: "#34C98A",
      tags: ["Free Audit", "Security Review", "Performance Report"],
      visual: "health"
    },
    {
      title: "System Integration",
      desc: "We seamlessly connect Salesforce with your existing tech stack, ERP systems, marketing tools, accounting software like Xero, Zoho, and custom APIs. Data flows automatically, eliminating silos and giving you a single source of business truth.",
      icon: GitMerge,
      color: "#8B5CF6",
      tags: ["API Integration", "Xero", "Zoho", "ERP", "REST/SOAP"],
      visual: "apps"
    },
    {
      title: "Support & Maintenance",
      desc: "Your Salesforce journey doesn't end at go-live. We provide dedicated ongoing support with guaranteed 48-hour response SLA, proactive monitoring, release management, and continuous improvement, so your CRM stays ahead of your business needs.",
      icon: HeadphonesIcon,
      color: "#F59E0B",
      tags: ["48hr SLA", "Release Mgmt", "Proactive Monitoring"],
      visual: "ticket"
    },
    {
      title: "Training & Enablement",
      desc: "User adoption is where most Salesforce investments fail. Our certified trainers deliver role-specific training programs, Admin, Sales Rep, Manager, ensuring your team uses Salesforce confidently and productively from day one.",
      icon: GraduationCap,
      color: "#EC4899",
      tags: ["Admin Training", "User Adoption", "Role-Based", "Certified Trainers"],
      visual: "progress"
    }
  ];

  return (
    <section className="py-10 px-4 sm:px-6 bg-[#E8F0F8] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A7FD4] blur-[120px] opacity-[0.05] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#29C6E0] blur-[120px] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-4 sm:mb-6 leading-none"
          >
            WHAT WE OFFER
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-nunito font-extrabold text-2xl sm:text-[42px] text-[#0D1B2A] leading-tight"
          >
            Complete Salesforce <span className="text-[#1A7FD4]">Service Ecosystem</span>
          </motion.h2>
          <p className="font-inter text-[#4A6080] max-w-[560px] text-xs sm:text-[16px] leading-relaxed mt-2 sm:mt-4">
            From initial implementation to ongoing optimisation, we cover every aspect of your Salesforce journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, duration: 0.8, type: "spring" }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#E8F0F8] rounded-[20px] sm:rounded-[32px] p-5 sm:p-8 shadow-[10px_10px_20px_rgba(163,185,210,0.6),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)] group relative overflow-hidden transition-all duration-500 flex flex-col min-w-0"
            >
              <div 
                className={`w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] flex items-center justify-center mb-5 sm:mb-8 rounded-xl sm:rounded-[20px] bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)] group-hover:rotate-[15deg] transition-all duration-500 shrink-0 [&_svg]:w-5.5 [&_svg]:h-5.5 [&_svg]:sm:w-7 [&_svg]:sm:h-7`}
                style={{ color: service.color }}
              >
                <service.icon />
              </div>

              <h3 className="font-nunito font-black text-lg sm:text-[22px] text-[#0D1B2A] mb-2 sm:mb-4 group-hover:text-[#1A7FD4] transition-colors">{service.title}</h3>
              <p className="font-inter text-xs sm:text-[14px] text-[#4A6080] leading-[1.8] mb-4 sm:mb-8">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-8">
                {service.tags.map((tag, j) => (
                  <span key={j} className="bg-[#E8F0F8] text-[#1A7FD4] font-nunito font-bold text-[8.5px] sm:text-[10px] px-2.5 py-1 rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] uppercase tracking-wider group-hover:scale-105 transition-transform leading-none">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini Visuals */}
              <div className="pt-4 border-t border-[#1A7FD4]/10 flex items-center overflow-hidden mt-auto min-h-[48px] w-full min-w-0">
                {service.visual === "steps" && (
                  <div className="flex items-center gap-2 sm:gap-3 text-[8.5px] sm:text-[10px] font-bold text-[#1A7FD4] min-w-0 truncate">
                    <span className="animate-pulse px-2 py-0.5 bg-[#E8F0F8] rounded shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)]">Discovery</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                    <span className="opacity-50">Build</span>
                    <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                    <span className="opacity-50">Launch</span>
                  </div>
                )}
                {service.visual === "gears" && (
                  <div className="flex items-center gap-3 sm:gap-4 w-full min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.3)] flex items-center justify-center shrink-0">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="flex items-center justify-center"
                      >
                        <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#29C6E0]" />
                      </motion.div>
                    </div>
                    <div className="flex-1 h-2 bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        className="h-full bg-gradient-to-r from-[#29C6E0] to-[#1A7FD4]" 
                      />
                    </div>
                  </div>
                )}
                {service.visual === "health" && (
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-[#E8F0F8] rounded-full shadow-[inset_3px_3px_6px_rgba(163,185,210,0.3)] flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 36 36" className="w-8 h-8 sm:w-10 sm:h-10 transform -rotate-90">
                        <circle cx="18" cy="18" r="16" fill="transparent" stroke="rgba(52,201,138,0.1)" strokeWidth="3" />
                        <motion.circle 
                          initial={{ strokeDashoffset: 100 }}
                          whileInView={{ strokeDashoffset: 13 }}
                          cx="18" cy="18" r="16" fill="transparent" stroke="#34C98A" strokeWidth="3" strokeDasharray="100" className="transition-all duration-1000" 
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-[9px] sm:text-[11px] font-black text-[#34C98A] leading-none">87%</div>
                    </div>
                    <span className="text-[10px] sm:text-[12px] font-black text-[#34C98A] uppercase tracking-widest truncate">Health Score</span>
                  </div>
                )}
                {service.visual === "apps" && (
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0 w-full">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4)] flex items-center justify-center text-[9.5px] sm:text-[11px] font-black text-[#1A7FD4] shrink-0">SF</div>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((dot) => (
                        <motion.div 
                          key={dot}
                          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: dot * 0.3 }}
                          className="w-1.5 h-1.5 rounded-full bg-[#1A7FD4]" 
                        />
                      ))}
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4)] flex items-center justify-center text-[9.5px] sm:text-[11px] font-black text-[#8B5CF6] shrink-0">ERP</div>
                  </div>
                )}
                {service.visual === "ticket" && (
                  <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#E8F0F8] rounded-xl shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] text-[8.5px] sm:text-[10px] font-black text-[#34C98A] uppercase tracking-wider min-w-0 truncate">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="truncate">Ticket #ID132 Resolved</span>
                  </div>
                )}
                {service.visual === "progress" && (
                  <div className="flex flex-col gap-1 sm:gap-2 w-full min-w-0">
                    <div className="flex justify-between text-[8.5px] sm:text-[10px] font-black text-[#EC4899] uppercase tracking-widest leading-none">
                      <span className="truncate">Admin Training</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full overflow-hidden w-full">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-[#EC4899] to-[#EC4899]/60" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
