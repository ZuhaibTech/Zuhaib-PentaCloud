"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, Globe, MapPin, Send, CheckCircle2, 
  Loader2, Clock, ShieldCheck, Zap, MessageCircle, ChevronDown
} from "lucide-react";
import { CLAY_CARD, CLAY_INPUT } from "./Constants";
import ContactLocations from "./ContactLocations";

const CustomSelect = ({ label, options, placeholder, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">{label}</label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`${CLAY_INPUT} flex items-center justify-between cursor-pointer group`}
      >
        <span className={value ? "text-[#0D1B2A]" : "text-[#4A6080]/60"}>
          {value || placeholder}
        </span>
        <ChevronDown size={18} className={`text-[#1A7FD4] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 left-0 right-0 top-[calc(100%+8px)] bg-background rounded-2xl shadow-[10px_10px_30px_rgba(163,185,210,0.4),-10px_-10px_30px_rgba(255,255,255,0.9)] border border-white/50 overflow-hidden"
          >
            <div className="max-h-[240px] overflow-y-auto custom-scrollbar">
              {options.map((opt: string) => (
                <div
                  key={opt}
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className="px-6 py-3 font-inter text-sm text-[#4A6080] hover:bg-[#1A7FD4] hover:text-white transition-colors cursor-pointer"
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
    <div className="bg-background min-h-screen pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {formStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`${CLAY_CARD} p-12 md:p-24 text-center max-w-4xl mx-auto`}
          >
            <div className="w-24 h-24 bg-background shadow-[inset_4px_4px_10px_rgba(163,185,210,0.4),inset_-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#34C98A] rounded-full flex items-center justify-center mx-auto mb-8">
               <CheckCircle2 size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-nunito font-black text-[#0D1B2A] mb-6">Message Sent! 🎉</h2>
            <p className="text-[#4A6080] text-lg font-inter mb-12 max-w-2xl mx-auto leading-relaxed">
              Thank you for reaching out. One of our consultants will contact you within 24 business hours. In the meantime, feel free to explore our services or connect with us on LinkedIn.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-[#1A7FD4] text-white px-10 py-5 rounded-2xl font-nunito font-black text-xl shadow-[0_12px_24px_rgba(26,127,212,0.3)] hover:-translate-y-1 transition-all"
            >
              Back to Home
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
            
            {/* LEFT SIDE: HERO + INFO + SOCIAL (Side-by-Side with Form) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32 space-y-8"
            >
              <div>
                <div className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-black text-[10px] tracking-[4px] rounded-full px-5 py-1.5 mb-8 inline-block uppercase">
                  GET IN TOUCH
                </div>
                
                <h1 className="font-nunito font-black text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] mb-6 leading-[1.1]">
                  Let's Build Something <br/>
                  <span className="text-[#1A7FD4]">Extraordinary Together.</span>
                </h1>
                
                <p className="font-inter text-[#4A6080] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                  Whether you have a project in mind, need expert advice, or just want to explore how Pentacloud can help your business grow.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    { text: "⚡ Response Within 24hrs", color: "text-[#1A7FD4]" },
                    { text: "🔒 100% Confidential", color: "text-[#34C98A]" }
                  ].map((pill, i) => (
                    <div 
                      key={i} 
                      className="bg-background px-4 py-2 rounded-full shadow-[2px_2px_5px_rgba(163,185,210,0.3),-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center gap-2"
                    >
                      <span className={`font-nunito font-bold text-xs ${pill.color}`}>{pill.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-4">
                 <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-[#1A7FD4]/10 flex items-center justify-center text-[#1A7FD4] group-hover:scale-110 transition-transform">
                       <Mail size={18} />
                    </div>
                    <span className="font-nunito font-black text-[#0D1B2A] text-sm">hello@pentacloudconsulting.com</span>
                 </div>
                 <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-[#34C98A]/10 flex items-center justify-center text-[#34C98A] group-hover:scale-110 transition-transform">
                       <MessageCircle size={18} />
                    </div>
                    <span className="font-nunito font-black text-[#0D1B2A] text-sm">+971 545 132 807</span>
                 </div>
              </div>

              {/* Follow Us Section */}
              <div>
                <span className="font-nunito font-black text-[#0D1B2A] uppercase tracking-wider text-[10px] mb-4 block">FOLLOW US</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "LinkedIn", sub: "Company updates", color: "bg-[#0A66C2]", icon: "linkedin" },
                    { label: "Instagram", sub: "Culture", color: "bg-[#E4405F]", icon: "instagram" },
                    { label: "Facebook", sub: "News", color: "bg-[#1877F2]", icon: "facebook" },
                    { label: "X (Twitter)", sub: "Insights", color: "bg-[#000000]", icon: "twitter" }
                  ].map((social, i) => (
                    <a key={i} href="#" className={`flex items-center gap-3 p-3 ${CLAY_CARD} hover:shadow-lg transition-all group`}>
                      <div className={`w-8 h-8 rounded-lg ${social.color} text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Globe size={14} />
                      </div>
                      <div>
                        <p className="font-nunito font-black text-[12px] text-[#0D1B2A]">{social.label}</p>
                        <p className="text-[9px] text-[#4A6080] font-bold">{social.sub}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Promise Section */}
              <div className="bg-[#0D1B2A] p-8 rounded-[32px] text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1A7FD4] rounded-full blur-[60px] opacity-20" />
                <div className="flex items-center gap-3 mb-8 relative z-10">
                  <ShieldCheck size={20} className="text-[#1A7FD4]" />
                  <span className="font-nunito font-black text-[10px] tracking-[3px] uppercase">OUR RESPONSE PROMISE</span>
                </div>
                <div className="space-y-6 relative z-10">
                  {[
                    { text: "All enquiries acknowledged within 4 hours", icon: <Zap size={14} className="text-amber-400" /> },
                    { text: "Phone calls answered during business hours", icon: <Phone size={14} className="text-[#34C98A]" /> },
                    { text: "WhatsApp responded within 2 hours", icon: <MessageCircle size={14} className="text-[#1A7FD4]" /> }
                  ].map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1">{p.icon}</div>
                      <p className="text-sm font-bold opacity-80">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: CONTACT FORM (Image 2) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${CLAY_CARD} p-8 md:p-12`}
            >
              <div className="mb-10">
                <h3 className="text-3xl font-nunito font-black text-[#0D1B2A] mb-3">Send Us a Message</h3>
                <p className="text-[#4A6080] font-inter text-sm">Fill in the form below and one of our consultants will reach out within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">Full Name *</label>
                    <input required minLength={2} type="text" placeholder="Your full name" className={CLAY_INPUT} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">Work Email *</label>
                    <input required type="email" placeholder="your@company.com" className={CLAY_INPUT} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">Phone Number</label>
                    <input type="tel" placeholder="+91 or +971 ..." className={CLAY_INPUT} />
                  </div>
                  <div className="space-y-2">
                    <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">Company Name</label>
                    <input type="text" placeholder="Your company name" className={CLAY_INPUT} />
                  </div>
                </div>

                <CustomSelect 
                  label="Service You're Interested In *"
                  placeholder="Select a service"
                  options={["Salesforce Consulting", "Cloud Solutions", "Web Development", "App Development", "Digital Marketing", "Data Migration", "Consulting & Training", "Zoho Services", "Multiple Services", "Not Sure — Need Advice"]}
                  value={formData.service}
                  onChange={(val: string) => setFormData({ ...formData, service: val })}
                />



                <div className="space-y-2">
                  <label className="font-nunito font-black text-[#0D1B2A] text-sm ml-2">Tell Us About Your Project *</label>
                  <textarea required minLength={20} rows={5} placeholder="Briefly describe what you're looking to achieve, any challenges you're facing, and what success looks like for you..." className={CLAY_INPUT}></textarea>
                </div>

                <CustomSelect 
                  label="How Did You Hear About Us?"
                  placeholder="Select an option"
                  options={["Google Search", "LinkedIn", "Instagram", "Facebook", "Referral from someone", "Existing client", "Industry event", "Other"]}
                  value={formData.source}
                  onChange={(val: string) => setFormData({ ...formData, source: val })}
                />

                <div className="flex items-start gap-4 px-2">
                  <div className="mt-1">
                     <input 
                       id="consent" 
                       type="checkbox" 
                       required 
                       checked={agreed}
                       onChange={(e) => setAgreed(e.target.checked)}
                       className="w-5 h-5 rounded border-[#1A7FD4]/20 text-[#1A7FD4] focus:ring-[#1A7FD4]/20 cursor-pointer" 
                     />
                  </div>
                  <label htmlFor="consent" className="text-xs text-[#4A6080] font-inter leading-relaxed cursor-pointer select-none">
                    I agree to Pentacloud Consulting storing my details to respond to this enquiry.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={formStatus === "loading" || !agreed}
                  className={`w-full py-6 rounded-2xl font-nunito font-black text-xl flex items-center justify-center gap-3 transition-all ${
                    agreed 
                      ? "bg-[#1A7FD4] text-white shadow-[0_12px_24px_rgba(26,127,212,0.3)] hover:-translate-y-1 active:translate-y-0" 
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {formStatus === "loading" ? (
                    <>Processing... <Loader2 size={24} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={24} /></>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
        
        {/* Office Locations Section */}
        <div className="mt-24">
          <ContactLocations />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
