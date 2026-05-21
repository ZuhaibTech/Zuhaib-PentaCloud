"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Cloud, Zap, Search, Shield, FileText, Users, Settings, Code2, Server, LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";

const ConsultingOffer = () => {
  const [activeConsultingIndex, setActiveConsultingIndex] = useState(0);
  const [activeTrainingIndex, setActiveTrainingIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const consultingServices = [
    {
      icon: Target,
      color: "#1A7FD4",
      bg: "#EEF3FF",
      title: "Salesforce Strategy Consulting",
      desc: "We help organisations make the right Salesforce decisions before committing budget — which clouds, what roadmap, and how to measure ROI from your CRM investment. Our no-obligation Salesforce health check gives you an honest assessment of where your current org stands and what it needs.",
      tags: ["Evaluating Salesforce", "Low ROI Rescue", "Expansion Planning"],
      metric: "Salesforce Roadmap Document",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-[#1A7FD4] z-10 relative">
             <Target size={64} />
           </motion.div>
           {[1, 2, 3].map(i => (
             <motion.div key={i} animate={{ scale: [1, 2 + i * 0.5], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="absolute w-16 h-16 rounded-full border-2 border-[#1A7FD4]/40" />
           ))}
        </div>
      )
    },
    {
      icon: Cloud,
      color: "#29C6E0",
      bg: "#E0F7FF",
      title: "Cloud Strategy Consulting",
      desc: "We assess your current infrastructure and business requirements to design a cloud strategy that balances performance, security, compliance, and cost — recommending the right platform mix of AWS, Azure, and GCP for each workload, with a phased migration roadmap.",
      tags: ["Cloud Migration", "Multi-Cloud Strategy", "Cost Reduction"],
      metric: "Cloud Readiness Report",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center gap-4">
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity }} className="text-[#29C6E0]"><Cloud size={48} /></motion.div>
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 3, repeat: Infinity }} className="text-[#29C6E0]/60"><Cloud size={32} /></motion.div>
        </div>
      )
    },
    {
      icon: Zap,
      color: "#F59E0B",
      bg: "#FFF8E0",
      title: "Digital Transformation",
      desc: "End-to-end digital transformation advisory — mapping your business processes, identifying automation opportunities, recommending the right technology stack, and building a prioritised roadmap that delivers quick wins while building toward long-term digital maturity.",
      tags: ["Process Mapping", "Automation Opps", "Legacy Modernisation"],
      metric: "Transformation Roadmap",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="relative z-10 bg-white p-4 rounded-full shadow-lg">
             <Zap size={48} className="text-[#F59E0B]" />
           </div>
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute w-32 h-32 border border-dashed border-[#F59E0B]/50 rounded-full" />
           <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute w-48 h-48 border border-[#F59E0B]/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B] absolute top-0" />
           </motion.div>
        </div>
      )
    },
    {
      icon: Search,
      color: "#8B5CF6",
      bg: "#F3E8FF",
      title: "Technology Assessment & Audit",
      desc: "Our certified Tier 3 engineers conduct comprehensive technology assessments covering your Salesforce org, cloud infrastructure, network architecture, cybersecurity posture, and software licensing. You receive a detailed audit report with prioritised recommendations.",
      tags: ["Pre-Investment Audit", "Security Audit", "Cost Optimisation"],
      metric: "Detailed Audit Report",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity }} className="z-10 absolute text-[#8B5CF6]">
             <Search size={48} />
          </motion.div>
          <div className="w-32 h-24 bg-white shadow-sm rounded-xl border border-[#8B5CF6]/20 p-2 flex flex-col gap-2 opacity-50">
             <div className="h-2 w-full bg-[#8B5CF6]/20 rounded-full" />
             <div className="h-2 w-3/4 bg-[#8B5CF6]/20 rounded-full" />
             <div className="h-2 w-5/6 bg-[#8B5CF6]/20 rounded-full" />
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      color: "#34C98A",
      bg: "#E8FFE8",
      title: "IT Governance & Compliance",
      desc: "We help organisations build robust IT governance frameworks — defining policies, procedures, roles, and controls aligned to ISO 27001, GDPR, HIPAA, and NIST standards. Including GRC framework design and implementation for regulated industries.",
      tags: ["ISO 27001", "GDPR & HIPAA", "GRC Frameworks"],
      metric: "Compliance Roadmap",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-[#34C98A] z-10 relative bg-white p-3 rounded-2xl shadow-lg">
             <Shield size={56} />
           </motion.div>
           <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-40 h-0.5 bg-[#34C98A]/40" />
        </div>
      )
    },
    {
      icon: FileText,
      color: "#EC4899",
      bg: "#FFE8F0",
      title: "Vendor Selection & RFP Support",
      desc: "We help organisations select the right technology vendors — building requirements documents, writing RFPs, evaluating vendor responses, scoring proposals, and advising on commercial negotiations. Our vendor-agnostic approach ensures you choose technology based on your needs.",
      tags: ["RFP Creation", "Vendor Scoring", "ERP/CRM Selection"],
      metric: "Vendor Evaluation Report",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col gap-3 relative z-10 border border-[#EC4899]/20">
            <FileText size={32} className="text-[#EC4899] mb-1" />
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 border border-[#EC4899] rounded-sm flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#EC4899]" /></div>
               <div className="w-12 h-2 bg-[#EC4899]/20 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 border border-[#EC4899] rounded-sm flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#EC4899]" /></div>
               <div className="w-8 h-2 bg-[#EC4899]/20 rounded-full" />
            </div>
          </div>
        </div>
      )
    }
  ];

  const trainingProgrammes = [
    {
      icon: Users,
      color: "#1A7FD4",
      bg: "#EEF3FF",
      title: "Salesforce User Training",
      desc: "Role-specific Salesforce training designed to maximise platform adoption and productivity across your entire organisation. We deliver separate training tracks for different user roles — ensuring each team member learns exactly what they need to do their job better in Salesforce.",
      tags: ["Sales Rep Track", "Sales Manager Track", "Service Track"],
      metric: "Adoption Boost in 30 Days",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center gap-4">
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="bg-white p-3 rounded-xl shadow-md text-[#1A7FD4]"><Users size={24} /></motion.div>
          <motion.div animate={{ y: [0, -15, 0], scale: 1.2 }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="bg-white p-4 rounded-xl shadow-lg text-[#1A7FD4] z-10"><Users size={32} /></motion.div>
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="bg-white p-3 rounded-xl shadow-md text-[#1A7FD4]"><Users size={24} /></motion.div>
        </div>
      )
    },
    {
      icon: Settings,
      color: "#34C98A",
      bg: "#E8FFE8",
      title: "Salesforce Admin Training",
      desc: "Comprehensive Salesforce Admin training preparing your internal team members to manage and maintain your Salesforce org independently — reducing reliance on external support and building in-house capability that grows with your platform.",
      tags: ["User Management", "Flow Builder", "Security Settings"],
      metric: "Ready for Admin Exam",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div animate={{ rotate: 180 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="text-[#34C98A] z-10 bg-white rounded-full p-2 shadow-lg">
             <Settings size={48} />
          </motion.div>
          <div className="absolute w-24 h-24 border-4 border-dashed border-[#34C98A]/30 rounded-full" />
        </div>
      )
    },
    {
      icon: Code2,
      color: "#8B5CF6",
      bg: "#F3E8FF",
      title: "Salesforce Dev Training",
      desc: "Technical Salesforce developer training covering Apex, LWC, Visualforce, integration patterns, and deployment best practices — building your internal development capability to customise and extend Salesforce beyond standard configuration.",
      tags: ["Apex Programming", "LWC Framework", "REST/SOAP APIs"],
      metric: "Ready for Dev I Exam",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="bg-[#1e1e1e] p-4 rounded-xl flex flex-col gap-2 shadow-2xl relative z-10 min-w-30">
             <Code2 size={24} className="text-[#8B5CF6] mb-1" />
             <div className="flex gap-2">
               <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-2 h-4 bg-[#8B5CF6]" />
               <div className="w-12 h-4 bg-slate-700 rounded-sm" />
             </div>
             <div className="w-8 h-4 bg-slate-700 rounded-sm ml-4" />
          </div>
        </div>
      )
    },
    {
      icon: Server,
      color: "#F59E0B",
      bg: "#FFF8E0",
      title: "Cloud & Infrastructure",
      desc: "Practical cloud training covering AWS, Azure, and GCP fundamentals through to advanced topics — designed for IT teams transitioning to cloud environments and developers building cloud-native applications.",
      tags: ["AWS Fundamentals", "Azure Fundamentals", "DevOps & IaC"],
      metric: "Ready for Cloud Certs",
      visual: (
        <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center">
           {[1, 2, 3].map(i => (
             <div key={i} className="w-32 h-10 bg-white rounded-lg shadow-md border border-[#F59E0B]/20 flex items-center px-4 justify-between relative overflow-hidden">
               <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
               <motion.div animate={{ left: ["-20%", "120%"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="absolute h-full w-8 bg-linear-to-r from-transparent via-[#F59E0B]/10 to-transparent top-0" />
             </div>
           ))}
        </div>
      )
    },
    {
      icon: LayoutDashboard,
      color: "#EC4899",
      bg: "#FFE8F0",
      title: "Zoho Platform Training",
      desc: "End-to-end Zoho ecosystem training covering Zoho CRM, Books, Projects, Campaigns, and Zoho One administration — ensuring your team maximises the value from your Zoho investment without constant vendor support.",
      tags: ["Zoho CRM", "Zoho Books", "Zoho One Admin"],
      metric: "Full Ecosystem Adoption",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-xl shadow-xl z-10">
             <motion.div animate={{ height: [20, 30, 20] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 bg-[#EC4899]/20 rounded-md" />
             <motion.div animate={{ height: [40, 20, 40] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 bg-[#EC4899] rounded-md" />
             <motion.div animate={{ scale: [1, 0.9, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-10 h-10 bg-[#EC4899]/60 rounded-md col-span-2" />
          </div>
        </div>
      )
    },
    {
      icon: Shield,
      color: "#34C98A",
      bg: "#E8FFE8",
      title: "Cybersecurity Awareness",
      desc: "People are the biggest cybersecurity risk. Our programme educates your entire workforce on real threats — phishing, social engineering, password hygiene, and data handling — reducing human error risk.",
      tags: ["Phishing Recognition", "Password Best Practices", "Incident Reporting"],
      metric: "Incident Risk Reduction",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="bg-white p-4 rounded-2xl shadow-xl z-20 text-[#34C98A]">
             <Shield size={48} />
           </motion.div>
           <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute w-24 h-24 bg-[#34C98A]/20 rounded-full blur-md z-10" />
        </div>
      )
    }
  ];

  const activeConsulting = consultingServices[activeConsultingIndex];
  const activeTraining = trainingProgrammes[activeTrainingIndex];

  return (
    <section className="mb-12 sm:mb-24 md:mb-32 relative overflow-hidden">
      <div className="text-center mb-10 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          WHAT WE OFFER
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          Two Pillars of <br/> <span className="text-[#1A7FD4]">Business Growth</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          Strategic consulting that drives the right decisions and practical training that builds the skills to execute them, both delivered by the same certified experts.
        </p>
      </div>

      <div className="flex flex-col gap-16 sm:gap-24 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* PILLAR 1: TECHNOLOGY CONSULTING */}
        <div>
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
             <div className="text-3xl sm:text-5xl font-nunito font-black text-blue-100">01</div>
             <div>
                <h3 className="text-xl sm:text-3xl font-nunito font-black text-[#0D1B2A]">Technology Consulting</h3>
                <p className="text-sm sm:text-base text-[#4A6080] font-inter">Strategic guidance from certified practitioners.</p>
             </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="bg-background/80 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl sm:rounded-4xl shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] border border-white/50 flex justify-start sm:justify-center items-center overflow-x-auto no-scrollbar">
              <div className="flex gap-2.5 sm:gap-4 min-w-max px-2 sm:px-4">
                {consultingServices.map((service, i) => {
                  const isActive = activeConsultingIndex === i;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => setActiveConsultingIndex(i)}
                      whileHover={{ y: -3 }}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'shadow-[5px_5px_10px_rgba(163,185,210,0.4),-5px_-5px_10px_rgba(255,255,255,0.8)] scale-105' 
                          : 'hover:bg-slate-50'
                      }`}
                      style={{ backgroundColor: isActive ? service.bg : 'transparent', color: isActive ? service.color : '#94A3B8' }}
                    >
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      {isActive && (
                        <motion.div layoutId="activeGlowConsulting" className="absolute inset-0 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: service.color, boxShadow: `0 0 20px ${service.color}40` }} />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 min-h-90 sm:min-h-112.5">
              <motion.div
                key={`content-c-${activeConsultingIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-background rounded-2xl sm:rounded-[40px] p-5 sm:p-12 shadow-[20px_20px_40px_rgba(163,185,210,0.5),-20px_-20px_40px_rgba(255,255,255,0.95)] border border-white/50 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: activeConsulting.color }} />
                <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner shrink-0" style={{ backgroundColor: activeConsulting.bg, color: activeConsulting.color }}>
                    <activeConsulting.icon className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-nunito font-black text-lg sm:text-[32px] text-[#0D1B2A] leading-tight truncate">{activeConsulting.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider mt-1 truncate" style={{ backgroundColor: activeConsulting.bg, color: activeConsulting.color }}>
                      {activeConsulting.metric}
                    </div>
                  </div>
                </div>
                <p className="font-inter text-xs sm:text-[18px] md:text-[22px] text-[#4A6080] leading-relaxed mb-6 sm:mb-12 max-w-2xl">{activeConsulting.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-12">
                  {activeConsulting.tags.map((tag, j) => (
                    <span key={j} className="px-3.5 py-1.5 sm:px-5 sm:py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] sm:text-[12px] font-bold text-slate-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeConsulting.color }} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full sm:w-auto">
                  <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-white font-nunito font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-xs sm:text-base w-full sm:w-auto cursor-pointer" style={{ backgroundColor: activeConsulting.color, boxShadow: `0 10px 30px ${activeConsulting.color}40` }}>
                    <span>Book Consultation</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                key={`visual-c-${activeConsultingIndex}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="bg-background rounded-2xl sm:rounded-[40px] border border-white/50 shadow-[inset_10px_10px_20px_rgba(163,185,210,0.3),inset_-10px_-10px_20px_rgba(255,255,255,0.8)] relative overflow-hidden perspective-1000 hidden lg:flex items-center justify-center p-6"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A7FD4 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="w-full h-full relative flex items-center justify-center">{activeConsulting.visual}</div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40">
                  <div className="flex gap-1">
                     {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Audit</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* PILLAR 2: TRAINING PROGRAMMES */}
        <div>
          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
             <div className="text-3xl sm:text-5xl font-nunito font-black text-blue-100">02</div>
             <div>
                <h3 className="text-xl sm:text-3xl font-nunito font-black text-[#0D1B2A]">Training Programmes</h3>
                <p className="text-sm sm:text-base text-[#4A6080] font-inter">Hands-on, role-specific training for high adoption.</p>
             </div>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="bg-background/80 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl sm:rounded-4xl shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)] border border-white/50 flex justify-start sm:justify-center items-center overflow-x-auto no-scrollbar">
              <div className="flex gap-2.5 sm:gap-4 min-w-max px-2 sm:px-4">
                {trainingProgrammes.map((programme, i) => {
                  const isActive = activeTrainingIndex === i;
                  return (
                    <motion.button
                      key={i}
                      onClick={() => setActiveTrainingIndex(i)}
                      whileHover={{ y: -3 }}
                      className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'shadow-[5px_5px_10px_rgba(163,185,210,0.4),-5px_-5px_10px_rgba(255,255,255,0.8)] scale-105' 
                          : 'hover:bg-slate-50'
                      }`}
                      style={{ backgroundColor: isActive ? programme.bg : 'transparent', color: isActive ? programme.color : '#94A3B8' }}
                    >
                      <programme.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      {isActive && (
                        <motion.div layoutId="activeGlowTraining" className="absolute inset-0 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: programme.color, boxShadow: `0 0 20px ${programme.color}40` }} />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 min-h-90 sm:min-h-112.5">
              <motion.div
                key={`content-t-${activeTrainingIndex}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-background rounded-2xl sm:rounded-[40px] p-5 sm:p-12 shadow-[20px_20px_40px_rgba(163,185,210,0.5),-20px_-20px_40px_rgba(255,255,255,0.95)] border border-white/50 relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: activeTraining.color }} />
                <div className="flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-inner shrink-0" style={{ backgroundColor: activeTraining.bg, color: activeTraining.color }}>
                    <activeTraining.icon className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-nunito font-black text-lg sm:text-[32px] text-[#0D1B2A] leading-tight truncate">{activeTraining.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider mt-1 truncate" style={{ backgroundColor: activeTraining.bg, color: activeTraining.color }}>
                      {activeTraining.metric}
                    </div>
                  </div>
                </div>
                <p className="font-inter text-xs sm:text-[18px] md:text-[22px] text-[#4A6080] leading-relaxed mb-6 sm:mb-12 max-w-2xl">{activeTraining.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-12">
                  {activeTraining.tags.map((tag, j) => (
                    <span key={j} className="px-3.5 py-1.5 sm:px-5 sm:py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] sm:text-[12px] font-bold text-slate-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeTraining.color }} />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto w-full sm:w-auto">
                  <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl text-white font-nunito font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-xs sm:text-base w-full sm:w-auto cursor-pointer" style={{ backgroundColor: activeTraining.color, boxShadow: `0 10px 30px ${activeTraining.color}40` }}>
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>
              </motion.div>

              <motion.div
                key={`visual-t-${activeTrainingIndex}`}
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="bg-background rounded-2xl sm:rounded-[40px] border border-white/50 shadow-[inset_10px_10px_20px_rgba(163,185,210,0.3),inset_-10px_-10px_20px_rgba(255,255,255,0.8)] relative overflow-hidden perspective-1000 hidden lg:flex items-center justify-center p-6"
              >
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1A7FD4 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="w-full h-full relative flex items-center justify-center">{activeTraining.visual}</div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40">
                  <div className="flex gap-1">
                     {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />)}
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Training Active</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConsultingOffer;
