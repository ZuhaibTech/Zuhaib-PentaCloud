"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, CheckCircle2, Loader2, Clock, ShieldCheck, Zap, MessageCircle, ChevronDown, Send
} from "lucide-react";
import { CLAY_CARD, CLAY_INPUT } from "./Constants";
import ContactLocations from "./ContactLocations";

const CustomSelect = ({ label, options, placeholder, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm flex items-center justify-between cursor-pointer group`}
      >
        <span className={value ? "text-[#0D1B2A]" : "text-[#4A6080]/60"}>
          {value || placeholder}
        </span>
        <ChevronDown size={16} className={`text-[#1A7FD4] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 left-0 right-0 top-[calc(100%+6px)] bg-background rounded-2xl shadow-[10px_10px_30px_rgba(163,185,210,0.4),-10px_-10px_30px_rgba(255,255,255,0.9)] border border-white/50 overflow-hidden"
          >
            <div className="max-h-[200px] sm:max-h-[240px] overflow-y-auto custom-scrollbar">
              {options.map((opt: string) => (
                <div
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2.5 sm:px-6 sm:py-3 font-inter text-xs sm:text-sm text-[#4A6080] hover:bg-[#1A7FD4] hover:text-white transition-colors cursor-pointer"
                >
                  {opt}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FormBlock = ({ handleSubmit, formStatus, agreed, setAgreed, formData, setFormData }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${CLAY_CARD} p-5 sm:p-8 md:p-12 rounded-[20px] sm:rounded-[32px]`}
    >
      <div className="mb-6 sm:mb-10">
        <h3 className="text-xl sm:text-3xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-3">Send Us a Message</h3>
        <p className="text-[#4A6080] font-inter text-xs sm:text-sm leading-relaxed">Fill in the form below and one of our consultants will reach out within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-1.5">
            <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">Full Name *</label>
            <input required minLength={2} type="text" placeholder="Your full name" className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm`} />
          </div>
          <div className="space-y-1.5">
            <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">Work Email *</label>
            <input required type="email" placeholder="your@company.com" className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm`} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <div className="space-y-1.5">
            <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">Phone Number</label>
            <input type="tel" placeholder="+91 or +971 ..." className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm`} />
          </div>
          <div className="space-y-1.5">
            <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">Company Name</label>
            <input type="text" placeholder="Your company name" className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm`} />
          </div>
        </div>

        <CustomSelect 
          label="Service You're Interested In *"
          placeholder="Select a service"
          options={["Salesforce Consulting", "Cloud Solutions", "Web Development", "App Development", "Digital Marketing", "Data Migration", "Consulting & Training", "Zoho Services", "Multiple Services", "Not Sure — Need Advice"]}
          value={formData.service}
          onChange={(val: string) => setFormData({ ...formData, service: val })}
        />

        <div className="space-y-1.5">
          <label className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm ml-2">Tell Us About Your Project *</label>
          <textarea required minLength={20} rows={4} placeholder="Briefly describe what you're looking to achieve, any challenges you're facing, and what success looks like for you..." className={`${CLAY_INPUT} px-4 py-3 sm:px-6 sm:py-4 text-xs sm:text-sm`}></textarea>
        </div>

        <CustomSelect 
          label="How Did You Hear About Us?"
          placeholder="Select an option"
          options={["Google Search", "LinkedIn", "Instagram", "Facebook", "Referral from someone", "Existing client", "Industry event", "Other"]}
          value={formData.source}
          onChange={(val: string) => setFormData({ ...formData, source: val })}
        />

        <div className="flex items-start gap-3 px-2">
          <div className="mt-0.5 shrink-0">
             <input 
               id="consent" 
               type="checkbox" 
               required 
               checked={agreed}
               onChange={(e) => setAgreed(e.target.checked)}
               className="w-4 h-4 rounded border-[#1A7FD4]/20 text-[#1A7FD4] focus:ring-[#1A7FD4]/20 cursor-pointer" 
             />
          </div>
          <label htmlFor="consent" className="text-[10px] sm:text-xs text-[#4A6080] font-inter leading-relaxed cursor-pointer select-none">
            I agree to Pentacloud Consulting storing my details to respond to this enquiry.
          </label>
        </div>

        <button 
          type="submit"
          disabled={formStatus === "loading" || !agreed}
          className={`w-full py-3.5 sm:py-5 rounded-xl sm:rounded-2xl font-nunito font-black text-sm sm:text-xl flex items-center justify-center gap-2.5 transition-all ${
            agreed 
              ? "bg-[#1A7FD4] text-white shadow-[0_10px_20px_rgba(26,127,212,0.25)] hover:-translate-y-0.5 active:translate-y-0" 
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {formStatus === "loading" ? (
            <>Processing... <Loader2 size={20} className="animate-spin" /></>
          ) : (
            <>Send Message <Send size={20} /></>
          )}
        </button>
      </form>
    </motion.div>
  );
};

const ContactInfoForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    source: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen pt-20 sm:pt-32 pb-16 sm:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {formStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${CLAY_CARD} p-8 sm:p-12 md:p-24 text-center max-w-4xl mx-auto rounded-[20px] sm:rounded-[32px]`}
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 bg-background shadow-[inset_3px_3px_8px_rgba(163,185,210,0.3),inset_-3px_-3px_8px_rgba(255,255,255,0.7)] text-[#34C98A] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
               <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6">Message Sent! 🎉</h2>
            <p className="text-[#4A6080] text-xs sm:text-base md:text-lg font-inter mb-6 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Thank you for reaching out. One of our consultants will contact you within 24 business hours. In the meantime, feel free to explore our services or connect with us on LinkedIn.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#1A7FD4] text-white px-6 py-3.5 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-nunito font-black text-sm sm:text-xl shadow-[0_10px_20px_rgba(26,127,212,0.25)] hover:-translate-y-1 transition-all"
            >
              Back to Home
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-start">
            
            {/* LEFT SIDE: HERO + INFO + SOCIAL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 space-y-6 sm:space-y-8"
            >
              {/* [image 2] Area: Intro Header */}
              <div>
                <div className="bg-background shadow-[3px_3px_8px_rgba(163,185,210,0.3),-3px_-3px_8px_rgba(255,255,255,0.75)] text-[#1A7FD4] font-nunito font-black text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] rounded-full px-4 py-1.5 mb-4 sm:mb-8 inline-block uppercase">
                  GET IN TOUCH
                </div>
                
                <h1 className="font-nunito font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] mb-4 sm:mb-6 leading-[1.2] lg:leading-[1.1]">
                  Let's Build Something <br/>
                  <span className="text-[#1A7FD4]">Extraordinary Together.</span>
                </h1>
                
                <p className="font-inter text-[#4A6080] text-xs sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  Whether you have a project in mind, need expert advice, or just want to explore how Pentacloud can help your business grow.
                </p>
                
                <div className="flex flex-wrap gap-2.5 sm:gap-4 mb-6">
                  {[
                    { text: "⚡ Response Within 24hrs", color: "text-[#1A7FD4]" },
                    { text: "🔒 100% Confidential", color: "text-[#34C98A]" }
                  ].map((pill, i) => (
                    <div 
                      key={i} 
                      className="bg-background px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-[1.5px_1.5px_4px_rgba(163,185,210,0.25),-1.5px_-1.5px_4px_rgba(255,255,255,0.7)] flex items-center gap-1.5"
                    >
                      <span className={`font-nunito font-bold text-[10px] sm:text-xs ${pill.color}`}>{pill.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Only: Form Block inserted immediately after the Intro info */}
              <div className="block lg:hidden">
                <FormBlock 
                  handleSubmit={handleSubmit}
                  formStatus={formStatus}
                  agreed={agreed}
                  setAgreed={setAgreed}
                  formData={formData}
                  setFormData={setFormData}
                />
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-3 sm:space-y-4 pt-4 lg:pt-0">
                 <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white shadow-sm border border-[#1A7FD4]/10 flex items-center justify-center text-[#1A7FD4] group-hover:scale-105 transition-transform shrink-0">
                       <Mail size={15} />
                    </div>
                    <span className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm break-all">hello@pentacloudconsulting.com</span>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-4 group">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white shadow-sm border border-[#34C98A]/10 flex items-center justify-center text-[#34C98A] group-hover:scale-105 transition-transform shrink-0">
                       <MessageCircle size={15} />
                    </div>
                    <span className="font-nunito font-black text-[#0D1B2A] text-xs sm:text-sm">+971 545 132 807</span>
                 </div>
              </div>

              {/* Follow Us Section - aligned in exactly 1 line */}
              <div>
                <span className="font-nunito font-black text-[#0D1B2A] uppercase tracking-wider text-[9px] sm:text-[10px] mb-3 block">FOLLOW US</span>
                <div className="grid grid-cols-4 gap-2 sm:gap-4">
                  {[
                    { 
                      label: "LinkedIn", 
                      color: "bg-[#0A66C2]", 
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )
                    },
                    { 
                      label: "Instagram", 
                      color: "bg-[#E4405F]", 
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )
                    },
                    { 
                      label: "Facebook", 
                      color: "bg-[#1877F2]", 
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      )
                    },
                    { 
                      label: "X", 
                      color: "bg-[#000000]", 
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      )
                    }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className={`flex flex-col items-center justify-center p-2.5 sm:p-3 ${CLAY_CARD} hover:shadow-lg transition-all group rounded-[16px] sm:rounded-[20px] text-center`}
                    >
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${social.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform`}>
                        {social.icon}
                      </div>
                      <span className="font-nunito font-black text-[9px] sm:text-[11px] text-[#0D1B2A] mt-1.5 leading-none">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Promise Section */}
              <div className="bg-[#0D1B2A] p-5 sm:p-8 rounded-[20px] sm:rounded-[32px] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A7FD4] rounded-full blur-[60px] opacity-20" />
                <div className="flex items-center gap-2.5 mb-5 sm:mb-8 relative z-10">
                  <ShieldCheck size={18} className="text-[#1A7FD4] shrink-0" />
                  <span className="font-nunito font-black text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase">OUR RESPONSE PROMISE</span>
                </div>
                <div className="space-y-4 sm:space-y-6 relative z-10">
                  {[
                    { text: "All enquiries acknowledged within 4 hours", icon: <Zap size={13} className="text-amber-400 shrink-0" /> },
                    { text: "Phone calls answered during business hours", icon: <Phone size={13} className="text-[#34C98A]" /> },
                    { text: "WhatsApp responded within 2 hours", icon: <MessageCircle size={13} className="text-[#1A7FD4]" /> }
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-0.5">{p.icon}</div>
                      <p className="text-xs sm:text-sm font-bold opacity-80 leading-relaxed">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Desktop Only: Form Block */}
            <div className="hidden lg:block">
              <FormBlock 
                handleSubmit={handleSubmit}
                formStatus={formStatus}
                agreed={agreed}
                setAgreed={setAgreed}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
        )}
        
        {/* Office Locations Section */}
        <div className="mt-12 sm:mt-24">
          <ContactLocations />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
