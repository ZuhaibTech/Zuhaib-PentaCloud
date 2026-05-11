"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Layout, Smartphone, Globe, ShieldCheck } from "lucide-react";

const WebDevelopQuestions = () => {
  const faqs = [
    { 
      question: "How long does a website take to build?", 
      answer: "For a standard business website (5–15 pages), our timeline is typically 5–7 weeks. eCommerce and custom web applications take 8–16 weeks depending on complexity.",
      icon: Layout,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "Do you build on WordPress or custom code?", 
      answer: "Both — we recommend the right approach for your needs. We use WordPress/Webflow for content-heavy sites and Next.js/React for performance-critical applications.",
      icon: Code2,
      color: "#34C98A",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "Will my website be mobile-friendly?", 
      answer: "Absolutely — every website we build is mobile-first by default. We test across 20+ screen sizes and aim for 100/100 Mobile scores.",
      icon: Smartphone,
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "How do you handle website security?", 
      answer: "Security is built-in, not bolted on. We implement SSL, firewall protection, automated backups, and follow OWASP security standards for every project.",
      icon: ShieldCheck,
      color: "#8B5CF6",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
    },
    { 
      question: "Do you provide hosting and maintenance?", 
      answer: "Yes — we offer high-performance cloud hosting and managed maintenance packages so you can focus on your business while we handle the tech.",
      icon: Globe,
      color: "#1A7FD4",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
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
            Web Development, <br />
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

export default WebDevelopQuestions;
