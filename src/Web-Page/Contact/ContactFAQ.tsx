"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const faqs = [
  {
    question: "How long does it take for you to respond to an enquiry?",
    answer: "We acknowledge every enquiry within 4 business hours. You will receive a detailed response from a certified consultant within 24 business hours to schedule a discovery call or answer your specific questions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
  },
  {
    question: "Is the initial 30-minute discovery call really free?",
    answer: "Yes, absolutely. The discovery call is completely free and carries no obligation to proceed. It's designed to understand your needs and for us to provide initial expert advice on the best path forward for your business.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400"
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes. We understand that your project details and business data are sensitive. We are happy to sign an NDA before any detailed technical discussions or project briefs are shared.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
  },
  {
    question: "Can we visit your office in Bengaluru or meet in the UAE?",
    answer: "Yes! For clients in India, you are welcome to visit our Bengaluru headquarters. For clients in the UAE, we can arrange to meet at your office or a convenient business hub across Dubai or Abu Dhabi.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400"
  },
  {
    question: "What information should I include in my initial message?",
    answer: "The more detail, the better. Ideally, include which service you're interested in, your primary business challenge, any specific technology you're currently using, your desired timeline, and an estimated budget range.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
  },
  {
    question: "How do you handle emergency support for existing clients?",
    answer: "Existing managed service clients have access to an emergency escalation contact. Critical issues are acknowledged immediately and assigned to senior engineers according to your specific SLA agreement.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
  }
];

const FAQItem = ({ question, answer, image }: { question: string; answer: string; image: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${CLAY_CARD} mb-3 sm:mb-4 overflow-hidden rounded-[20px] sm:rounded-[32px]`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 sm:p-6 flex items-center justify-between text-left gap-4"
      >
        <span className="font-nunito font-bold text-sm sm:text-lg text-[#0D1B2A]">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-1.5 sm:p-2 rounded-full shrink-0 ${isOpen ? 'bg-[#1A7FD4] text-white shadow-[0_4px_10px_rgba(26,127,212,0.3)]' : 'bg-background text-[#1A7FD4] shadow-[2px_2px_5px_rgba(163,185,210,0.3),-2px_-2px_5px_rgba(255,255,255,0.75)]'} transition-colors duration-300`}
        >
          {isOpen ? <Minus className="w-4 h-4 sm:w-[18px] sm:h-[18px]" /> : <Plus className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="px-4 pb-4 sm:px-6 sm:pb-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
               <div className="w-24 sm:w-40 h-16 sm:h-28 rounded-xl bg-background shadow-[inset_2.5px_2.5px_5px_rgba(163,185,210,0.25),inset_-2.5px_-2.5px_5px_rgba(255,255,255,0.7)] flex items-center justify-center overflow-hidden shrink-0">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={image} 
                    alt={question} 
                    className="w-full h-full object-cover"
                  />
               </div>
               <p className="text-[#4A6080] font-inter text-xs sm:text-sm leading-relaxed flex-1">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactFAQ = () => {
  return (
    <section className="pb-6 sm:pb-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-background shadow-[3px_3px_8px_rgba(163,185,210,0.3),-3px_-3px_8px_rgba(255,255,255,0.75)] text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
          >
            COMMON QUESTIONS
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-nunito font-black text-[#0D1B2A]">Before You Reach Out</h2>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} image={faq.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
