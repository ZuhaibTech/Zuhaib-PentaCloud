"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Users, Globe, GraduationCap, Cloud, BarChart2, Shield } from "lucide-react";

const ConsultingFAQ = () => {
  const faqs = [
    {
      question: "What's the difference between consulting and implementation?",
      answer: "Consulting is advisory — we analyse your situation and deliver strategy documents and roadmaps. Implementation is execution — we build and deploy the technology. Many clients start with consulting, then engage us for implementation.",
      icon: Users,
      color: "#1A7FD4",
      image: "/Images/CONSULTING & TRAINING Images/CONSULTING & TRAINING-question-1.webp"
    },
    {
      question: "Can training be delivered in local languages?",
      answer: "Yes — we deliver in English, Hindi, Kannada, and Tamil for Indian clients, and English and Arabic for UAE clients. Please specify your language preference when booking.",
      icon: Globe,
      color: "#34C98A",
      image: "/Images/CONSULTING & TRAINING Images/CONSULTING & TRAINING-question-2.webp"
    },
    {
      question: "Do participants need prior knowledge for training?",
      answer: "It depends on the programme. User training requires no prior knowledge. Admin training needs basic Salesforce familiarity. Developer training requires programming experience. We assess participant backgrounds before every session.",
      icon: GraduationCap,
      color: "#F59E0B",
      image: "/Images/CONSULTING & TRAINING Images/CONSULTING & TRAINING-question-3.webp"
    },
    {
      question: "Can you train our team on our own Salesforce org?",
      answer: "Yes — and we strongly recommend it. Training on your actual org makes learning immediately applicable to daily work. We set up a training sandbox from your production org before each session.",
      icon: Cloud,
      color: "#8B5CF6",
      image: "/Images/CONSULTING & TRAINING Images/CONSULTING & TRAINING-question-4.webp"
    },
    {
      question: "What support do you give after training?",
      answer: "Every programme includes 30–60 days of post-training support — questions answered within 24 hours. We also measure adoption at 30 days to ensure the training actually stuck.",
      icon: Shield,
      color: "#34C98A",
      image: "/Images/CONSULTING & TRAINING Images/CONSULTING & TRAINING-question-5.webp"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-10 sm:py-24 bg-[#E8F0F8] px-4 sm:px-10 rounded-[24px] sm:rounded-[48px]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 bg-[#E8F0F8] rounded-full shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#1A7FD4] text-[9px] sm:text-[10px] font-black tracking-widest uppercase mb-4 sm:mb-6 inline-block"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-2xl sm:text-[42px] font-nunito font-black text-[#0D1B2A] leading-tight">
            Consulting & Training, <br />
            <span className="text-[#1A7FD4]">Answered Honestly</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-[#E8F0F8] rounded-[20px] sm:rounded-[32px] overflow-hidden transition-all duration-500 ${
                activeIndex === i 
                ? "shadow-[inset_4px_4px_8px_rgba(163,185,210,0.25),inset_-4px_-4px_8px_rgba(255,255,255,0.7)]" 
                : "shadow-[6px_6px_12px_rgba(163,185,210,0.4),-6px_-6px_12px_rgba(255,255,255,0.85)]"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-4 py-5 sm:px-10 sm:py-8 flex items-center justify-between text-left group focus:outline-none focus-visible:ring-0 gap-3"
              >
                <div className="flex items-center gap-3 sm:gap-6 flex-1 min-w-0">
                   <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center transition-all duration-500 shrink-0 ${activeIndex === i ? 'rotate-[15deg] shadow-inner scale-90' : 'group-hover:rotate-12'}`} style={{ color: faq.color }}>
                      <faq.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                   </div>
                   <span className={`font-nunito font-black text-sm sm:text-lg md:text-xl transition-colors duration-300 truncate ${activeIndex === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A]'}`}>
                     {faq.question}
                   </span>
                </div>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.3),-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center text-[#1A7FD4] transition-all duration-500 shrink-0 ${activeIndex === i ? 'rotate-180 shadow-inner' : ''}`}>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <div className="px-4 pb-5 pt-1 sm:px-10 sm:pb-10 sm:pt-2 flex flex-col md:flex-row gap-4 sm:gap-8 items-start">
                        <div className="w-24 sm:w-48 h-16 sm:h-32 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.25)] flex items-center justify-center overflow-hidden shrink-0">
                           <motion.img 
                             whileHover={{ scale: 1.1 }}
                             src={faq.image} 
                             alt={faq.question} 
                             className="w-full h-full object-cover"
                           />
                        </div>
                       <div className="flex-1 min-w-0">
                          <p className="font-inter text-[#4A6080] text-xs sm:text-base leading-relaxed">
                            {faq.answer}
                          </p>
                          <motion.button
                            whileHover={{ x: 5 }}
                            className="mt-4 sm:mt-6 flex items-center gap-1.5 text-[#1A7FD4] font-nunito font-black text-xs sm:text-sm uppercase tracking-wider"
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
