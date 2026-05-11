"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Activity, DollarSign, Server, Shield, Cloud, ChevronDown, Phone, ArrowRight
} from "lucide-react";
import CountUp from "react-countup";

const CloudCTA = () => {
  const stats = [
    { icon: Activity, color: "#1A7FD4", val: 99.9, suffix: "%", label: "Uptime SLA", sub: "Guaranteed availability" },
    { icon: DollarSign, color: "#34C98A", val: 40, suffix: "%", label: "Avg Cost Reduction", sub: "vs. unoptimised spend" },
    { icon: Server, color: "#8B5CF6", val: 500, suffix: "+", label: "Cloud Workloads", sub: "Across AWS, Azure & GCP" },
    { icon: Shield, color: "#EC4899", val: 0, label: "Security Breaches", sub: "Across all managed clients" }
  ];

  const faqs = [
    {
      q: "What is the difference between cloud migration and cloud architecture?",
      a: "Cloud architecture is designing how your systems should be structured in the cloud — which services to use, security boundaries, and cost optimisation. Cloud migration is the execution — actually moving your workloads to that architecture. We do both, always starting with architecture first.",
      type: "clay"
    },
    {
      q: "How long does cloud migration take?",
      a: "A typical SMB cloud migration takes 4–8 weeks from assessment to go-live. Enterprise migrations with multiple applications and databases take 3–6 months. We always start with non-critical workloads to ensure zero disruption.",
      type: "neuro"
    },
    {
      q: "Which cloud platform should we choose?",
      a: "It depends on your existing stack and compliance needs. We're cloud-agnostic and recommend AWS for general workloads, Azure for Microsoft-first organisations, and GCP for data/AI workloads. Many clients use two platforms side by side.",
      type: "clay"
    },
    {
      q: "How do you ensure our data is secure during migration?",
      a: "Security is designed into every migration. We use encrypted data transfer, minimal privilege IAM policies, network isolation, and full backups before cutover. We also provide a complete security audit report post-migration.",
      type: "neuro"
    },
    {
      q: "What does managed cloud support include?",
      a: "Our managed support covers 24/7 monitoring, automated alerting, monthly cost optimisation reviews, patch management, incident response with Tier 3 escalation, and quarterly architecture reviews.",
      type: "clay"
    },
    {
      q: "Can you reduce our existing cloud costs?",
      a: "In almost every case — yes. We typically find 30–50% cost savings through right-sizing, reserved instance planning, and removing zombie resources. We offer a free cost optimisation audit first.",
      type: "neuro"
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-background">
      {/* --- STATS ROW (NEUMORPHIC) --- */}
      <div className="py-24 bg-[#E8F0F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 flex flex-col items-center">
            <div className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-xs font-bold tracking-widest uppercase mb-6">
              OUR CLOUD IMPACT
            </div>
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-4">
              Numbers That Prove <br />
              <span className="text-[#1A7FD4]">Our Cloud Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, type: "spring" }}
                whileHover={{ y: -6 }}
                className="bg-[#E8F0F8] rounded-[24px] p-8 shadow-[8px_8px_16px_rgba(163,185,210,0.6),-8px_-8px_16px_rgba(255,255,255,0.9)] flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] flex items-center justify-center mb-6 group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.6),-4px_-4px_12px_rgba(255,255,255,0.9)] transition-all duration-500">
                  <stat.icon size={28} color={stat.color} />
                </div>
                <div className="text-5xl font-nunito font-black text-[#1A7FD4] mb-2 flex items-baseline">
                  <CountUp end={stat.val} decimals={stat.val % 1 !== 0 ? 1 : 0} duration={2.5} enableScrollSpy />
                  {stat.suffix}
                </div>
                <div className="font-nunito font-bold text-sm text-[#0D1B2A] mb-2 uppercase tracking-wide">{stat.label}</div>
                <div className="text-[11px] font-inter text-[#8BA4BE] font-medium">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- CTA CARD --- */}
      <div className="py-24 px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.88, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#0D1B2A] via-[#1A3A5C] to-[#1A7FD4] rounded-[40px] p-12 md:p-20 shadow-[0_32px_80px_rgba(13,27,42,0.40)] relative flex flex-col items-center text-center border border-white/10"
        >
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: -200, opacity: [0, 0.08, 0.08, 0] }}
              transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, delay: i * 2 }}
              className="absolute text-white pointer-events-none"
              style={{ left: `${Math.random() * 100}%` }}
            >
              <Cloud size={24} />
            </motion.div>
          ))}

          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1A7FD4] blur-[100px] opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#29C6E0] blur-[80px] opacity-15 pointer-events-none" />

          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 border border-white/20"
          >
            <Cloud size={32} />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-nunito font-black text-white leading-tight mb-8">
            Ready to Move Your <br />
            Business to the Cloud?
          </h2>

          <p className="max-w-2xl text-white/80 font-inter text-lg mb-12 leading-relaxed">
            Get a free no-obligation cloud assessment from our Tier 3 certified engineers. 
            We'll analyse your current infrastructure and show you exactly what 
            cloud transformation looks like for your business.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="bg-white text-[#1A7FD4] font-nunito font-bold px-10 py-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Book Free Cloud Assessment <ArrowRight size={20} />
            </button>
            <button className="bg-transparent text-white font-nunito font-bold px-10 py-5 rounded-full border-2 border-white hover:bg-white/10 transition-all flex items-center gap-2">
              <Phone size={20} /> Call +971 545 132 807
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["☁ Free Assessment", "⚡ Report in 48hrs", "🔒 100% Confidential"].map((trust, i) => (
              <div key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-white/60 text-[11px] font-bold tracking-wider">
                {trust}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* --- FAQ ACCORDION --- */}
      <div className="py-24 px-6 bg-[#E8F0F8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#1A7FD4] text-xs font-bold tracking-[2px] uppercase">COMMON QUESTIONS</span>
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mt-4">
              Cloud Questions, <br />
              <span className="text-[#1A7FD4]">Answered Honestly</span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="group">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full text-left p-8 rounded-[24px] transition-all flex items-center justify-between gap-4 ${
                    faq.type === 'clay' 
                      ? 'bg-white border border-[#1A7FD4]/10 shadow-sm hover:shadow-md' 
                      : 'bg-[#E8F0F8] shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.85)] hover:shadow-[6px_6px_12px_rgba(163,185,210,0.5)]'
                  } ${openFaq === i ? 'ring-2 ring-[#1A7FD4]/20' : ''}`}
                >
                  <span className="font-nunito font-bold text-[#0D1B2A] text-lg leading-tight">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    className="shrink-0 text-[#1A7FD4]"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-8 pt-0 text-[#4A6080] font-inter leading-relaxed ${faq.type === 'neuro' ? 'bg-[#E8F0F8] rounded-b-[24px] -mt-6 pt-10 shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3)]' : ''}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudCTA;
