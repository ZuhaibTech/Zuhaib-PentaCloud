"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Cloud, 
  Lock, 
  Globe, 
  Server, 
  Database,
  CheckCircle2,
  Trophy,
  Zap,
  Layers,
  Rocket,
  Code
} from "lucide-react";

const certificates = [
  // Cloud - AWS
  { id: 1, title: "AWS Solutions Architect", issuer: "Amazon Web Services", icon: <Cloud className="w-6 h-6 text-orange-400" />, color: "from-orange-500/20" },
  { id: 2, title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", icon: <Award className="w-6 h-6 text-orange-500" />, color: "from-orange-500/20" },
  { id: 3, title: "AWS Certified Developer", issuer: "Amazon Web Services", icon: <Zap className="w-6 h-6 text-orange-400" />, color: "from-orange-500/20" },
  { id: 4, title: "AWS Certified SysOps", issuer: "Amazon Web Services", icon: <Server className="w-6 h-6 text-orange-400" />, color: "from-orange-500/20" },
  { id: 5, title: "AWS Security Specialty", issuer: "Amazon Web Services", icon: <Lock className="w-6 h-6 text-orange-600" />, color: "from-orange-600/20" },
  
  // Cloud - Azure
  { id: 6, title: "Azure Solutions Architect", issuer: "Microsoft", icon: <Layers className="w-6 h-6 text-blue-400" />, color: "from-blue-500/20" },
  { id: 7, title: "Azure Fundamentals", issuer: "Microsoft", icon: <Award className="w-6 h-6 text-blue-300" />, color: "from-blue-300/20" },
  { id: 8, title: "Azure Developer Associate", issuer: "Microsoft", icon: <Zap className="w-6 h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 9, title: "Azure Security Engineer", issuer: "Microsoft", icon: <ShieldCheck className="w-6 h-6 text-blue-600" />, color: "from-blue-600/20" },
  { id: 10, title: "Azure DevOps Engineer", issuer: "Microsoft", icon: <Rocket className="w-6 h-6 text-blue-400" />, color: "from-blue-400/20" },

  // Cloud - Google
  { id: 11, title: "Google Cloud Professional", issuer: "Google Cloud", icon: <Globe className="w-6 h-6 text-red-400" />, color: "from-red-500/20" },
  { id: 12, title: "GCP Cloud Digital Leader", issuer: "Google Cloud", icon: <Award className="w-6 h-6 text-red-300" />, color: "from-red-300/20" },
  { id: 13, title: "GCP Security Engineer", issuer: "Google Cloud", icon: <Lock className="w-6 h-6 text-red-600" />, color: "from-red-600/20" },
  { id: 14, title: "GCP Data Engineer", issuer: "Google Cloud", icon: <Database className="w-6 h-6 text-red-500" />, color: "from-red-500/20" },

  // Cybersecurity
  { id: 15, title: "CISSP Cybersecurity", issuer: "ISC²", icon: <ShieldCheck className="w-6 h-6 text-green-400" />, color: "from-green-500/20" },
  { id: 16, title: "CCSP Cloud Security", issuer: "ISC²", icon: <Cloud className="w-6 h-6 text-green-500" />, color: "from-green-500/20" },
  { id: 17, title: "CISM Security Manager", issuer: "ISACA", icon: <Award className="w-6 h-6 text-emerald-500" />, color: "from-emerald-500/20" },
  { id: 18, title: "CISA Systems Auditor", issuer: "ISACA", icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />, color: "from-emerald-400/20" },
  { id: 19, title: "CEH Ethical Hacker", issuer: "EC-Council", icon: <Lock className="w-6 h-6 text-emerald-400" />, color: "from-emerald-500/20" },
  { id: 20, title: "CompTIA Security+", issuer: "CompTIA", icon: <Award className="w-6 h-6 text-purple-400" />, color: "from-purple-500/20" },
  { id: 21, title: "CompTIA Network+", issuer: "CompTIA", icon: <Globe className="w-6 h-6 text-purple-300" />, color: "from-purple-300/20" },
  { id: 22, title: "CompTIA Cloud+", issuer: "CompTIA", icon: <Cloud className="w-6 h-6 text-purple-500" />, color: "from-purple-500/20" },

  // Project & IT Management
  { id: 23, title: "PMP Project Management", issuer: "PMI", icon: <Trophy className="w-6 h-6 text-yellow-400" />, color: "from-yellow-500/20" },
  { id: 24, title: "CAPM Management", issuer: "PMI", icon: <Award className="w-6 h-6 text-yellow-500" />, color: "from-yellow-500/20" },
  { id: 25, title: "ITIL v4 Foundation", issuer: "AXELOS", icon: <Zap className="w-6 h-6 text-pink-500" />, color: "from-pink-500/20" },
  { id: 26, title: "Prince2 Practitioner", issuer: "AXELOS", icon: <Trophy className="w-6 h-6 text-pink-400" />, color: "from-pink-400/20" },

  // Networking & Infrastructure
  { id: 27, title: "CCNP Enterprise", issuer: "Cisco Systems", icon: <Server className="w-6 h-6 text-blue-600" />, color: "from-blue-600/20" },
  { id: 28, title: "CCNA Networking", issuer: "Cisco Systems", icon: <Globe className="w-6 h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 29, title: "CCNP Data Center", issuer: "Cisco Systems", icon: <Database className="w-6 h-6 text-blue-700" />, color: "from-blue-700/20" },
  { id: 30, title: "JNCIA-Junos", issuer: "Juniper Networks", icon: <Zap className="w-6 h-6 text-blue-400" />, color: "from-blue-400/20" },

  // Kubernetes & DevOps
  { id: 31, title: "CKA Administrator", issuer: "CNCF", icon: <Zap className="w-6 h-6 text-blue-300" />, color: "from-blue-300/20" },
  { id: 32, title: "CKAD Developer", issuer: "CNCF", icon: <Code className="w-6 h-6 text-blue-400" />, color: "from-blue-400/20" },
  { id: 33, title: "CKS Security", issuer: "CNCF", icon: <ShieldCheck className="w-6 h-6 text-blue-500" />, color: "from-blue-500/20" },
  { id: 34, title: "Terraform Associate", issuer: "HashiCorp", icon: <Cpu className="w-6 h-6 text-indigo-400" />, color: "from-indigo-500/20" },
  { id: 35, title: "Docker Certified Assoc.", issuer: "Docker Inc.", icon: <Zap className="w-6 h-6 text-blue-400" />, color: "from-blue-400/20" },

  // Databases & CRM
  { id: 36, title: "Salesforce Architect", issuer: "Salesforce", icon: <Database className="w-6 h-6 text-sky-400" />, color: "from-sky-500/20" },
  { id: 37, title: "Salesforce Administrator", issuer: "Salesforce", icon: <Award className="w-6 h-6 text-sky-500" />, color: "from-sky-500/20" },
  { id: 38, title: "Salesforce Developer", issuer: "Salesforce", icon: <Zap className="w-6 h-6 text-sky-600" />, color: "from-sky-600/20" },
  { id: 39, title: "MongoDB Certified DBA", issuer: "MongoDB", icon: <Database className="w-6 h-6 text-green-500" />, color: "from-green-500/20" },
  { id: 40, title: "OCP Java SE 17", issuer: "Oracle", icon: <Cpu className="w-6 h-6 text-red-600" />, color: "from-red-600/20" },

  // Specialised & Hybrid
  { id: 41, title: "Red Hat Certified Engineer", issuer: "Red Hat", icon: <Layers className="w-6 h-6 text-red-500" />, color: "from-red-500/20" },
  { id: 42, title: "IBM Cloud Specialist", issuer: "IBM", icon: <CheckCircle2 className="w-6 h-6 text-blue-700" />, color: "from-blue-700/20" },
  { id: 43, title: "VCP Data Center", issuer: "VMware", icon: <Server className="w-6 h-6 text-slate-500" />, color: "from-slate-500/20" },
  { id: 44, title: "Nutanix Certified Prof.", issuer: "Nutanix", icon: <Zap className="w-6 h-6 text-emerald-600" />, color: "from-emerald-600/20" },
  { id: 45, title: "Citrix Certified Assoc.", issuer: "Citrix", icon: <Globe className="w-6 h-6 text-blue-300" />, color: "from-blue-300/20" },
  { id: 46, title: "PCNSA Security", issuer: "Palo Alto", icon: <ShieldCheck className="w-6 h-6 text-orange-600" />, color: "from-orange-600/20" },
  { id: 47, title: "NSE 4 Network Security", issuer: "Fortinet", icon: <Lock className="w-6 h-6 text-red-700" />, color: "from-red-700/20" },
  { id: 48, title: "Splunk Core Certified", issuer: "Splunk", icon: <Zap className="w-6 h-6 text-pink-600" />, color: "from-pink-600/20" },
  { id: 49, title: "ServiceNow Admin", issuer: "ServiceNow", icon: <CheckCircle2 className="w-6 h-6 text-green-600" />, color: "from-green-600/20" },
  { id: 50, title: "Zendesk Support Admin", issuer: "Zendesk", icon: <Award className="w-6 h-6 text-orange-400" />, color: "from-orange-400/20" },
];

const Certificates = () => {
  // Duplicate the list for seamless infinite scroll
  const scrollingList = [...certificates, ...certificates];

  return (
    <section className="bg-background py-24 overflow-hidden border-t border-slate-200 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0F8] to-transparent pointer-events-none" />
      
      <div className="px-8 md:px-12 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">
            World-Class Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Certified Capabilities
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex">
        {/* Left and Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#E8F0F8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#E8F0F8] to-transparent z-10" />

        <motion.div
          className="flex gap-6 py-4"
          animate={{
            x: [0, -1920], // Adjusted based on card width + gap
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {scrollingList.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 w-80 p-8 rounded-[2rem] bg-background border-2 border-white/50 shadow-[8px_8px_16px_rgba(163,185,210,0.5),-8px_-8px_16px_rgba(255,255,255,0.95)] hover:shadow-[12px_12px_24px_rgba(163,185,210,0.6),-12px_-12px_24px_rgba(255,255,255,1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Uniform Blue Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-20">
                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-white shadow-[4px_4px_8px_#e2e8f0,-4px_-4px_8px_#ffffff,inset_1px_1px_2px_#ffffff,inset_-1px_-1px_2px_#e2e8f0] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-lg font-bold text-black mb-2 group-hover:text-blue-700 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">
                  {cert.issuer}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-4 opacity-40">
                <CheckCircle2 className="w-12 h-12 text-slate-300" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Certificates;
