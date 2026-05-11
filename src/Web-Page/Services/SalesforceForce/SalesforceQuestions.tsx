"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Users, Target, Rocket, Heart } from "lucide-react";

const SalesforceQuestions = () => {
  const faqs = [
    { 
      question: "How long does a Salesforce implementation take?", 
      answer: "Timelines vary by complexity — a standard Sales Cloud implementation typically takes 4–8 weeks. Larger multi-cloud projects with custom integrations can take 3–6 months.",
      icon: Rocket,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "Do we need to already be on Salesforce to work with you?", 
      answer: "Not at all. We work with businesses at every stage — whether you're evaluating Salesforce for the first time, migrating from another CRM, or looking to optimise an existing Salesforce org.",
      icon: Target,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "What Salesforce certifications does your team hold?", 
      answer: "Our team collectively holds 16+ active Salesforce certifications spanning Salesforce Certified Administrator, Platform Developer I & II, Sales Cloud Consultant, and more.",
      icon: Shield,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "How do you ensure our data is safe during migration?", 
      answer: "Data security is non-negotiable. We follow strict protocols including full backups, sandbox testing, encrypted transfer, and a zero-data-loss guarantee.",
      icon: Users,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "What happens after our Salesforce goes live?", 
      answer: "We offer three post-launch options: 30-day hypercare, monthly managed support retainers, and ad-hoc support for specific requirements.",
      icon: Heart,
      color: "#EC4899",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#E8F0F8] px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-[10px] font-black tracking-widest uppercase mb-6 inline-block"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-[42px] font-nunito font-black text-[#0D1B2A]">
            Salesforce Consulting, <br />
            <span className="text-[#1A7FD4]">Answered Honestly</span>
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-[#E8F0F8] rounded-[32px] overflow-hidden transition-all duration-500 ${
                activeIndex === i 
                ? "shadow-[inset_6px_6px_12px_rgba(163,185,210,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]" 
                : "shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-10 py-8 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-0"
              >
                <div className="flex items-center gap-6">
                   <div className={`w-12 h-12 rounded-2xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center transition-all duration-500 ${activeIndex === i ? 'rotate-[15deg] shadow-inner scale-90' : 'group-hover:rotate-12'}`} style={{ color: faq.color }}>
                      <faq.icon size={24} />
                   </div>
                   <span className={`font-nunito font-black text-lg md:text-xl transition-colors duration-300 ${activeIndex === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'}`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`w-10 h-10 rounded-full bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4),-4px_-4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#1A7FD4] transition-all duration-500 ${activeIndex === i ? 'rotate-180 shadow-inner' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-10 pb-10 pt-2 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-48 h-32 rounded-2xl bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.3)] flex items-center justify-center overflow-hidden">
                           <motion.img 
                             whileHover={{ scale: 1.1 }}
                             src={faq.image} 
                             alt={faq.question} 
                             className="w-full h-full object-cover"
                           />
                        </div>
                       <div className="flex-1">
                          <p className="font-inter text-[#4A6080] text-[16px] leading-relaxed">
                            {faq.answer}
                          </p>
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-6 flex items-center gap-2 text-[#1A7FD4] font-nunito font-black text-sm uppercase tracking-wider"
                          >
                            View more detail <span>→</span>
                          </motion.button>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesforceQuestions;
