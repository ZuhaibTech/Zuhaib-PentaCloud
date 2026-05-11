"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

const CLAY_CARD = "bg-background rounded-[28px] shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,0.95)]";

const AppDevelopQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How long does it take to build an app?", 
      a: "An MVP app typically takes 6–8 weeks for a single platform. A full cross-platform app with backend takes 10–14 weeks. Enterprise apps with complex integrations take 16–24 weeks. We share a detailed milestone timeline in your project proposal.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400"
    },
    { 
      q: "Do you build for both iOS and Android?", 
      a: "Yes — we build for both simultaneously using React Native, which shares ~90% of the codebase between platforms. This means significantly lower cost and faster delivery than building two separate native apps.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
    },
    { 
      q: "Do you handle App Store submission?", 
      a: "Absolutely — App Store and Play Store submission is included in every project. We handle developer account setup, app screenshots, metadata writing, content ratings, and the review process.",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&q=80&w=400"
    },
    { 
      q: "Can you integrate my app with Salesforce?", 
      a: "Yes — as a certified Salesforce partner, we specialise in building mobile apps that connect directly to Salesforce. Whether it's a custom field service app, a client portal, or a sales enablement tool.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400"
    },
    { 
      q: "What support do you provide after launch?", 
      a: "Every app project includes 30-day post-launch support covering crash monitoring, bug fixes, and App Store update submissions. We then offer monthly maintenance retainers.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section className="py-24 bg-background px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <div className="bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.4),-4px_-4px_10px_rgba(255,255,255,0.8)] text-[#1A7FD4] font-nunito font-bold text-[11px] tracking-[2px] uppercase mb-4 w-fit mx-auto px-5 py-1.5 rounded-full">COMMON QUESTIONS</div>
          <h2 className="font-nunito font-extrabold text-[36px] text-[#0D1B2A]">
            App Development, <br/> Answered Honestly
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`transition-all duration-500 ${openIndex === i ? `${CLAY_CARD}` : 'bg-background hover:bg-background rounded-[32px] shadow-[4px_4px_10px_rgba(163,185,210,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)]'} overflow-hidden`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left p-6 group"
              >
                <span className={`font-nunito font-bold text-[17px] transition-colors ${openIndex === i ? 'text-[#1A7FD4]' : 'text-[#0D1B2A] group-hover:text-[#1A7FD4]'}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-background text-[#1A7FD4] shadow-[inset_2px_2px_5px_rgba(163,185,210,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.8)]' : 'bg-background text-[#1A7FD4] shadow-[2px_2px_5px_rgba(163,185,210,0.4),-2px_-2px_5px_rgba(255,255,255,0.8)]'}`}>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8">
                      <div className="h-px w-full bg-[#1A7FD4]/05 mb-6" />
                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Image Placeholder */}
                        <div className="w-full md:w-[260px] aspect-video md:aspect-[4/3] rounded-[20px] bg-[#EEF3FF] overflow-hidden shrink-0 shadow-inner">
                           <motion.img 
                             whileHover={{ scale: 1.1 }}
                             src={faq.image} 
                             alt={faq.q} 
                             className="w-full h-full object-cover"
                           />
                        </div>
                        
                        <div className="flex flex-col justify-center">
                          <p className="font-inter text-[15px] text-[#4A6080] leading-[1.8]">
                            {faq.a}
                          </p>
                          <button className="text-[#1A7FD4] font-nunito font-bold text-[14px] mt-6 flex items-center gap-2 hover:gap-3 transition-all group/btn w-fit">
                            View more <ArrowRight size={16} className="transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .skeleton {
          background: linear-gradient(90deg, #EEF3FF 25%, #E0F7FF 50%, #EEF3FF 75%);
          background-size: 200% 100%;
          animation: skeletonShimmer 2s infinite;
          border-radius: 4px;
        }
        @keyframes skeletonShimmer {
          0% { background-position: -200% 0 }
          100% { background-position: 200% 0 }
        }
      `}} />
    </section>
  );
};

export default AppDevelopQuestions;
