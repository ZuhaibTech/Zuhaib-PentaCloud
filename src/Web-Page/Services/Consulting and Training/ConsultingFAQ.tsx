"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Globe, GraduationCap, Cloud, BarChart2, Shield, HelpCircle } from "lucide-react";

const ConsultingFAQ = () => {
  const faqs = [
    {
      question: "What is the difference between your consulting and implementation services?",
      answer: "Consulting is advisory — we analyse your situation, provide recommendations, and deliver strategy documents and roadmaps that guide your decisions. Implementation is execution — we actually build, configure, and deploy the technology. Many clients start with consulting to validate their strategy, then engage us for implementation.",
      icon: Users,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Can training be delivered in languages other than English?",
      answer: "Yes — we deliver training in English, Hindi, Kannada, and Tamil for Indian clients, and English and Arabic for UAE clients. Training materials can be provided in multiple languages for corporate programmes. Please specify your language preference when booking.",
      icon: Globe,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Do participants need prior Salesforce or cloud knowledge for training?",
      answer: "It depends on the programme. Our Salesforce User Training and Zoho Training require no prior technical knowledge. Salesforce Admin Training requires basic familiarity with Salesforce. Developer Training requires programming experience (any language). We assess participant backgrounds before every programme.",
      icon: GraduationCap,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Can you train our team on our own Salesforce org?",
      answer: "Yes — and we strongly recommend it. Training on your actual Salesforce org (using a sandbox copy) makes learning immediately applicable to daily work. Participants recognise the fields, processes, and layouts they use every day — dramatically improving retention and adoption.",
      icon: Cloud,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "How do you measure training effectiveness?",
      answer: "We measure training effectiveness through three mechanisms: immediate assessment (knowledge check quiz), a 30-day adoption review measuring actual platform usage metrics (login rates, record creation), and participant feedback. For certification prep, exam pass rate is the primary metric (85%+).",
      icon: BarChart2,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400"
    },
    {
      question: "Do you offer ongoing support after engagements?",
      answer: "Yes — every consulting engagement includes a minimum 30-day follow-up support period. Every training programme includes 30–60 days of post-training support. For clients wanting longer-term advisory, our monthly consulting retainer provides ongoing access to our experts.",
      icon: Shield,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1454165833767-131f36967718?auto=format&fit=crop&q=80&w=400"
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
            Consulting & Training, <br />
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

export default ConsultingFAQ;
