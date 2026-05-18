"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Cloud, Zap, Search, Shield, FileText, Users, Settings, Code2, Server, LayoutDashboard, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const consultingServices = [
  {
    icon: <Target className="text-[#1A7FD4]" />,
    title: "Salesforce Strategy Consulting",
    body: "We help organisations make the right Salesforce decisions before committing budget — which clouds to implement, whether to build or buy, how to phase a multi-year Salesforce roadmap, and how to measure ROI from your CRM investment. Our no-obligation Salesforce health check gives you an honest assessment of where your current org stands and what it needs.",
    ideal: ["Businesses evaluating Salesforce", "Existing Salesforce users underperforming", "Organisations planning expansion", "Companies struggling with adoption"],
    deliverable: "Salesforce Roadmap Document"
  },
  {
    icon: <Cloud className="text-[#29C6E0]" />,
    title: "Cloud Strategy Consulting",
    body: "We assess your current infrastructure and business requirements to design a cloud strategy that balances performance, security, compliance, and cost — recommending the right platform mix of AWS, Azure, and GCP for each workload, with a phased migration roadmap and total cost of ownership analysis included.",
    ideal: ["Businesses planning cloud migration", "Companies reducing cloud costs", "Enterprises evaluating multi-cloud", "Startups building infrastructure"],
    deliverable: "Cloud Readiness & Strategy Report"
  },
  {
    icon: <Zap className="text-[#F59E0B]" />,
    title: "Digital Transformation Consulting",
    body: "End-to-end digital transformation advisory — mapping your current business processes, identifying automation opportunities, recommending the right technology stack, and building a prioritised transformation roadmap that delivers quick wins while building toward long-term digital maturity.",
    ideal: ["Businesses starting transformation", "Mid-market modernising operations", "Enterprises consolidating systems", "Leadership needing strategy"],
    deliverable: "Digital Transformation Roadmap & Business Case"
  },
  {
    icon: <Search className="text-[#8B5CF6]" />,
    title: "Technology Assessment & Audit",
    body: "Our certified Tier 3 engineers conduct comprehensive no-obligation technology assessments — covering your Salesforce org, cloud infrastructure, network architecture, cybersecurity posture, and software licensing. You receive a detailed audit report with prioritised recommendations and potential cost savings identified.",
    ideal: ["Pre-investment due diligence", "Post-implementation reviews", "Security and compliance audits", "Cost optimisation assessments"],
    deliverable: "Technology Audit Report with Recommendations"
  },
  {
    icon: <Shield className="text-[#34C98A]" />,
    title: "IT Governance & Compliance",
    body: "We help organisations build robust IT governance frameworks — defining policies, procedures, roles, and controls aligned to ISO 27001, GDPR, HIPAA, and NIST standards. Including GRC (Governance, Risk, and Compliance) framework design and implementation for regulated industries.",
    ideal: ["Healthcare (HIPAA compliance)", "Businesses handling EU data (GDPR)", "Financial institutions", "Enterprises preparing for ISO 27001"],
    deliverable: "IT Governance Framework & Compliance Roadmap"
  },
  {
    icon: <FileText className="text-[#EC4899]" />,
    title: "Vendor Selection & RFP Support",
    body: "We help organisations select the right technology vendors — building requirements documents, writing RFPs, evaluating vendor responses, scoring proposals, and advising on commercial negotiations. Our vendor-agnostic approach ensures you choose technology based on your needs — not vendor sales pressure.",
    ideal: ["ERP selection projects", "CRM platform evaluation", "Cloud vendor selection", "Software procurement"],
    deliverable: "Vendor Evaluation Report & Recommendation"
  }
];

const trainingProgrammes = [
  {
    icon: <Users className="text-[#1A7FD4]" />,
    title: "Salesforce User Training",
    body: "Role-specific Salesforce training designed to maximise platform adoption and productivity across your entire organisation. We deliver separate training tracks for different user roles — ensuring each team member learns exactly what they need to do their job better in Salesforce.",
    tracks: ["Sales Rep Track", "Sales Manager Track", "Customer Service Track", "Admin Foundation Track"],
    duration: "1–3 days per track",
    outcome: "Adoption & quality boost in 30 days"
  },
  {
    icon: <Settings className="text-[#34C98A]" />,
    title: "Salesforce Administrator Training",
    body: "Comprehensive Salesforce Admin training preparing your internal team members to manage and maintain your Salesforce org independently — reducing reliance on external support and building in-house capability that grows with your platform.",
    tracks: ["User & Profile Management", "Validation Rules & Formulas", "Flow Builder Fundamentals", "Security & Sharing Settings"],
    duration: "5-day intensive programme",
    outcome: "Ready for Salesforce Admin Exam"
  },
  {
    icon: <Code2 className="text-[#8B5CF6]" />,
    title: "Salesforce Developer Training",
    body: "Technical Salesforce developer training covering Apex, LWC, Visualforce, integration patterns, and deployment best practices — building your internal development capability to customise and extend Salesforce beyond standard configuration.",
    tracks: ["Apex Programming Fundamentals", "SOQL & SOSL Query Language", "Lightning Web Components (LWC)", "REST & SOAP API Integration"],
    duration: "10-day intensive programme",
    outcome: "Ready for Platform Developer I"
  },
  {
    icon: <Server className="text-[#F59E0B]" />,
    title: "Cloud & Infrastructure Training",
    body: "Practical cloud training covering AWS, Azure, and GCP fundamentals through to advanced topics — designed for IT teams transitioning from on-premise to cloud environments and developers building cloud-native applications.",
    tracks: ["AWS Fundamentals Track", "Azure Fundamentals Track", "Cloud Architecture Track", "DevOps & IaC Track"],
    duration: "3–5 days per track",
    outcome: "Ready for Associate Certs"
  },
  {
    icon: <LayoutDashboard className="text-[#EC4899]" />,
    title: "Zoho Platform Training",
    body: "End-to-end Zoho ecosystem training covering Zoho CRM, Books, Projects, Campaigns, and Zoho One administration — ensuring your team maximises the value from your Zoho investment without constant vendor support.",
    tracks: ["Zoho CRM Configuration", "Zoho Books Financial Workflows", "Zoho Campaigns Marketing", "Zoho One Admin & Management"],
    duration: "2–4 days",
    outcome: "Full adoption & workflow boost"
  },
  {
    icon: <Shield className="text-[#34C98A]" />,
    title: "Cybersecurity Awareness Training",
    body: "People are the biggest cybersecurity risk. Our programme educates your workforce on real threats — phishing, social engineering, password hygiene, and data handling — reducing human error risk and building a security-conscious culture.",
    tracks: ["Phishing Recognition", "Social Engineering Awareness", "Password & MFA Best Practices", "Incident Reporting Procedures"],
    duration: "Half-day workshop",
    outcome: "Incident risk reduction"
  }
];

const ConsultingOffer = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
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
          Strategic consulting that drives the right decisions and practical training that builds the skills to execute them — both delivered by the same certified experts.
        </p>
      </div>

      {/* Pillar 1: Technology Consulting */}
      <div className="mb-12 sm:mb-24 md:mb-32">
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-12">
           <div className="text-2xl sm:text-4xl font-nunito font-black text-blue-100">01</div>
           <div>
              <h3 className="text-lg sm:text-3xl font-nunito font-black text-[#0D1B2A]">Technology Consulting</h3>
              <p className="text-xs sm:text-sm text-[#4A6080] font-inter">Strategic guidance from certified practitioners.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {consultingServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`${CLAY_CARD} p-5 sm:p-8 group hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full rounded-[20px] sm:rounded-[32px]`}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-inner flex items-center justify-center mb-4 sm:mb-6 border border-white/50 group-hover:scale-110 transition-transform shrink-0">
                {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
              </div>
              <h3 className="text-base sm:text-xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4 leading-tight">{service.title}</h3>
              <p className="text-[#4A6080] font-inter text-[11px] sm:text-xs leading-relaxed mb-4 sm:mb-6 flex-grow">{service.body}</p>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-[#0D1B2A] font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-3">Ideal For:</p>
                <ul className="grid grid-cols-1 gap-1.5">
                  {service.ideal.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4A6080]">
                      <CheckCircle2 size={11} className="text-[#34C98A] shrink-0" /> <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-blue-50">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider shrink-0">Deliverable</div>
                  <p className="text-[9px] sm:text-[10px] font-bold text-[#0D1B2A] truncate">{service.deliverable}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pillar 2: Training Programmes */}
      <div>
        <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-12">
           <div className="text-2xl sm:text-4xl font-nunito font-black text-blue-100">02</div>
           <div>
              <h3 className="text-lg sm:text-3xl font-nunito font-black text-[#0D1B2A]">Training Programmes</h3>
              <p className="text-xs sm:text-sm text-[#4A6080] font-inter">Hands-on, role-specific training for high adoption.</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {trainingProgrammes.map((programme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`${CLAY_CARD} p-5 sm:p-8 group hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full rounded-[20px] sm:rounded-[32px]`}
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white shadow-inner flex items-center justify-center mb-4 sm:mb-6 border border-white/50 group-hover:scale-110 transition-transform shrink-0">
                {React.cloneElement(programme.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
              </div>
              <h3 className="text-base sm:text-xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4 leading-tight">{programme.title}</h3>
              <p className="text-[#4A6080] font-inter text-[11px] sm:text-xs leading-relaxed mb-4 sm:mb-6 flex-grow">{programme.body}</p>
              
              <div className="mb-4 sm:mb-6">
                <p className="text-[#0D1B2A] font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-3">Key Focus:</p>
                <ul className="grid grid-cols-1 gap-1.5">
                  {programme.tracks.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] sm:text-[11px] text-[#4A6080]">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" /> <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-blue-50">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">Duration:</span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#0D1B2A]">{programme.duration}</span>
                  </div>
                </div>
                <p className="mt-2 text-[8px] sm:text-[9px] font-bold text-[#34C98A] bg-green-50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full w-fit uppercase tracking-wider">{programme.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingOffer;
