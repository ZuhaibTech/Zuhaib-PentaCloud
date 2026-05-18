"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Zap, Clock, Calendar } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const options = [
  {
    icon: <MessageCircle />,
    title: "WhatsApp Us",
    body: "The fastest way to reach us. Send us a message on WhatsApp and our team will respond within 2 hours during business hours.",
    cta: "Open WhatsApp →",
    href: "https://wa.me/971545132807?text=Hi%20Pentacloud!%20I'd%20like%20to%20discuss%20a%20project.",
    color: "bg-background text-[#34C98A] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
    btnColor: "bg-[#34C98A]",
    btnShadow: "shadow-[0_6px_12px_rgba(52,201,138,0.25)]",
    response: "⚡ Typically within 2 hours",
    responseIcon: <Zap size={13} className="text-amber-400 shrink-0" />
  },
  {
    icon: <Mail />,
    title: "Email Us",
    body: "For detailed project briefs, RFP submissions, or formal enquiries — email us and we'll respond with a thorough reply within 24 hours.",
    cta: "Send Email →",
    href: "mailto:hello@pentacloudconsulting.com",
    color: "bg-background text-[#1A7FD4] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
    btnColor: "bg-[#1A7FD4]",
    btnShadow: "shadow-[0_6px_12px_rgba(26,127,212,0.25)]",
    response: "📧 Within 24 business hours",
    responseIcon: <Clock size={13} className="text-blue-400 shrink-0" />
  },
  {
    icon: <Phone />,
    title: "Schedule a Call",
    body: "Book a free 30-minute discovery call with one of our certified consultants. We'll discuss your project and advise on the best approach.",
    cta: "Book Discovery Call →",
    href: "#", // Add Calendly link
    color: "bg-background text-[#F59E0B] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
    btnColor: "bg-[#F59E0B]",
    btnShadow: "shadow-[0_6px_12px_rgba(245,158,11,0.25)]",
    response: "📅 Choose your preferred time",
    responseIcon: <Calendar size={13} className="text-amber-400 shrink-0" />
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    title: "Connect on LinkedIn",
    body: "Follow Pentacloud on LinkedIn for technology insights and company updates. You can also send us a direct message on LinkedIn.",
    cta: "Follow on LinkedIn →",
    href: "https://linkedin.com/company/pentacloudconsulting",
    color: "bg-background text-[#0A66C2] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.35),inset_-3px_-3px_6px_rgba(255,255,255,0.7)]",
    btnColor: "bg-[#0A66C2]",
    btnShadow: "shadow-[0_6px_12px_rgba(10,102,194,0.25)]",
    response: "💼 LinkedIn monitored daily",
    responseIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-blue-400 shrink-0">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
];

const ContactQuickOptions = () => {
  return (
    <section className="pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-background shadow-[3px_3px_8px_rgba(163,185,210,0.3),-3px_-3px_8px_rgba(255,255,255,0.75)] text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
          >
            QUICK WAYS TO REACH US
          </motion.div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] leading-tight px-2">
            Choose How You'd <br/><span className="text-[#1A7FD4]">Like to Connect</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {options.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`${CLAY_CARD} p-5 sm:p-8 group flex flex-col h-full rounded-[20px] sm:rounded-[32px]`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${option.color} flex items-center justify-center mb-4 sm:mb-8 group-hover:rotate-12 transition-transform shrink-0`}>
                 {React.cloneElement(option.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
              </div>
              <h3 className="text-base sm:text-xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4">{option.title}</h3>
              <p className="text-xs sm:text-sm text-[#4A6080] font-inter leading-relaxed mb-4 sm:mb-8 flex-grow">
                {option.body}
              </p>
              
              <div className="mt-auto">
                 <div className="flex items-center gap-2 mb-4 sm:mb-6 p-2 bg-background shadow-[inset_1.5px_1.5px_3px_rgba(163,185,210,0.25),inset_-1.5px_-1.5px_3px_rgba(255,255,255,0.7)] rounded-lg">
                    {option.responseIcon}
                    <span className="text-[9px] sm:text-[10px] font-black text-[#0D1B2A] uppercase tracking-wider">{option.response}</span>
                 </div>
                 <a 
                   href={option.href}
                   target="_blank"
                   className={`w-full py-2.5 sm:py-3 rounded-xl ${option.btnColor} text-white font-nunito font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${option.btnShadow} hover:-translate-y-1 transition-all`}
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
