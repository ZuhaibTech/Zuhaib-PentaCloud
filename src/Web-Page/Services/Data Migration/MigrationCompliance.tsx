"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, FileCheck, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const complianceCards = [
  {
    title: "GDPR Compliant",
    body: "All data migrations involving EU personal data are handled under full GDPR compliance — data minimisation, purpose limitation, lawful transfer mechanisms, audit trails, and data destruction certificates for source systems post-migration.",
    coverage: ["Personal data identification", "Lawful basis documentation", "Data transfer agreements", "Retention policy enforcement", "Right to erasure compliance", "Breach notification readiness"]
  },
  {
    title: "HIPAA Compliant",
    body: "Healthcare data migrations are handled with full HIPAA compliance — PHI identification and classification, Business Associate Agreements, encrypted transfer protocols, access control logging, and audit trails meeting HIPAA Security Rule requirements.",
    coverage: ["PHI identification & mapping", "BAA documentation", "Encrypted transfer (AES-256)", "Access control & logging", "Audit trail maintenance", "Incident response plan"]
  },
  {
    title: "ISO 27001 Aligned",
    body: "Our migration methodology is aligned to ISO 27001 information security standards — risk assessment, asset management, access control, cryptography, and supplier relationship security controls applied throughout every migration engagement.",
    coverage: ["Information security policy", "Risk assessment & treatment", "Asset classification", "Cryptographic controls", "Supplier security assessment", "Security incident management"]
  },
  {
    title: "Enterprise Security Standards",
    body: "Every migration uses enterprise-grade security protocols throughout — AES-256 encryption for data in transit and at rest, VPN-secured transfer channels, multi-factor authentication on all migration tools, and IP-whitelisted access to source and target systems during migration.",
    coverage: ["AES-256 encryption in transit", "AES-256 encryption at rest", "VPN-secured data channels", "MFA on all migration access", "IP whitelisting enforced", "Complete access audit log"]
  }
];

const MigrationCompliance = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          SECURITY & COMPLIANCE
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          Your Data Stays <br/> <span className="text-[#1A7FD4]">Safe. Always.</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-lg">
          Every migration is executed under strict security protocols and regulatory compliance frameworks — protecting your data and your business reputation throughout the entire journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {complianceCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${CLAY_CARD} p-10 flex flex-col h-full`}
          >
            <h3 className="text-2xl font-nunito font-black text-[#0D1B2A] mb-4">{card.title}</h3>
            <p className="text-[#4A6080] font-inter text-sm leading-relaxed mb-8 flex-grow">{card.body}</p>
            
            <div>
              <p className="text-[#0D1B2A] font-black text-[10px] uppercase tracking-widest mb-4">Compliance Coverage:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                {card.coverage.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[11px] text-[#4A6080]">
                    <CheckCircle2 size={12} className="text-[#34C98A]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`${CLAY_CARD} p-8 overflow-x-auto`}>
         <div className="flex flex-nowrap md:flex-wrap items-center justify-between gap-8 min-w-max md:min-w-0">
            {["Full source backup before start", "Encrypted transfer protocols", "Sandbox testing before production", "Rollback available at every stage", "Post-migration reconciliation report", "Source system decommission certificate"].map((check, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] font-black text-[#0D1B2A] uppercase tracking-wider">
                 <div className="w-6 h-6 rounded-lg bg-green-50 text-[#34C98A] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} />
                 </div>
                 {check}
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default MigrationCompliance;
