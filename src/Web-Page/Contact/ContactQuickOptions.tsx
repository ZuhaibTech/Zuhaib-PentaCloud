"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, ArrowRight, Zap, Clock, Calendar } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const options = [
  {
    icon: <MessageCircle size={32} />,
    title: "WhatsApp Us",
    body: "The fastest way to reach us. Send us a message on WhatsApp and our team will respond within 2 hours during business hours.",
    cta: "Open WhatsApp →",
    href: "https://wa.me/971545132807?text=Hi%20Pentacloud!%20I'd%20like%20to%20discuss%20a%20project.",
    color: "bg-background text-[#34C98A] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
    btnColor: "bg-[#34C98A]",
    btnShadow: "shadow-[0_8px_16px_rgba(52,201,138,0.3)]",
    response: "⚡ Typically within 2 hours",
    responseIcon: <Zap size={14} className="text-amber-400" />
  },
  {
    icon: <Mail size={32} />,
    title: "Email Us",
    body: "For detailed project briefs, RFP submissions, or formal enquiries — email us and we'll respond with a thorough reply within 24 hours.",
    cta: "Send Email →",
    href: "mailto:hello@pentacloudconsulting.com",
    color: "bg-background text-[#1A7FD4] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
    btnColor: "bg-[#1A7FD4]",
    btnShadow: "shadow-[0_8px_16px_rgba(26,127,212,0.3)]",
    response: "📧 Within 24 business hours",
    responseIcon: <Clock size={14} className="text-blue-400" />
  },
  {
    icon: <Phone size={32} />,
    title: "Schedule a Call",
    body: "Book a free 30-minute discovery call with one of our certified consultants. We'll discuss your project and advise on the best approach.",
    cta: "Book Discovery Call →",
    href: "#", // Add Calendly link
    color: "bg-background text-[#F59E0B] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
    btnColor: "bg-[#F59E0B]",
    btnShadow: "shadow-[0_8px_16px_rgba(245,158,11,0.3)]",
    response: "📅 Choose your preferred time",
    responseIcon: <Calendar size={14} className="text-amber-400" />
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: "Connect on LinkedIn",
    body: "Follow Pentacloud on LinkedIn for technology insights and company updates. You can also send us a direct message on LinkedIn.",
    cta: "Follow on LinkedIn →",
    href: "https://linkedin.com/company/pentacloudconsulting",
    color: "bg-background text-[#0A66C2] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]",
    btnColor: "bg-[#0A66C2]",
    btnShadow: "shadow-[0_8px_16px_rgba(10,102,194,0.3)]",
    response: "💼 LinkedIn monitored daily",
    responseIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-blue-400">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
];

const ContactQuickOptions = () => {
  return (
    <section className="pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
          >
            QUICK WAYS TO REACH US
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A]">
            Choose How You'd <br/><span className="text-[#1A7FD4]">Like to Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${CLAY_CARD} p-8 group flex flex-col h-full`}
            >
              <div className={`w-16 h-16 rounded-2xl ${option.color} flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                 {option.icon}
              </div>
              <h3 className="text-xl font-nunito font-black text-[#0D1B2A] mb-4">{option.title}</h3>
              <p className="text-sm text-[#4A6080] font-inter leading-relaxed mb-8 flex-grow">
                {option.body}
              </p>
              
              <div className="mt-auto">
                 <div className="flex items-center gap-2 mb-6 p-2 bg-background shadow-[inset_2px_2px_5px_rgba(163,185,210,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] rounded-lg">
                    {option.responseIcon}
                    <span className="text-[10px] font-black text-[#0D1B2A] uppercase tracking-wider">{option.response}</span>
                 </div>
                 <a 
                   href={option.href}
                   target="_blank"
                   className={`w-full py-3 rounded-xl ${option.btnColor} text-white font-nunito font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${option.btnShadow} hover:-translate-y-1 transition-all`}
                 >
                   {option.cta}
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactQuickOptions;
