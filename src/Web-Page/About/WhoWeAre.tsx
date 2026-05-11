"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Zap, TrendingUp } from "lucide-react";

const WhoWeAre = () => {
  const [cards, setCards] = useState([0, 1, 2]); // Indices of the cards in order

  const handleDragEnd = (event: any, info: any) => {
    // If swiped significantly (more than 100px in any direction)
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      setCards((prev) => {
        const newCards = [...prev];
        const swipedCard = newCards.shift()!;
        newCards.push(swipedCard);
        return newCards;
      });
    }
  };

  const cardContent = [
    // Card 1 (Blue - Front)
    <div key="front" className="w-full h-full flex flex-col justify-between p-10 bg-gradient-to-br from-[#1A7FD4] to-[#0D5FA3] rounded-[40px] shadow-[20px_20px_40px_rgba(26,127,212,0.3)] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
      <div className="font-nunito font-black italic text-[32px] leading-tight mt-6 relative z-10">
        "Journey Towards Success"
      </div>
      <div className="text-white/40 font-nunito font-black text-4xl relative z-10 tracking-[5px]">
        PC²
      </div>
    </div>,
    // Card 2 (Light - Middle)
    <div key="middle" className="w-full h-full flex flex-col justify-center gap-6 p-10 bg-[#E8F0F8] rounded-[40px] shadow-[10px_10px_20px_rgba(163,185,210,0.4),-10px_-10px_20px_rgba(255,255,255,0.9)] border border-white/50">
      <div className="font-nunito font-black text-xl text-[#0D1B2A]">Founded in Bengaluru 🏙</div>
      <div className="font-nunito font-black text-xl text-[#0D1B2A]">Serving globally 🌍</div>
      <div className="flex gap-4 mt-6">
        {[Globe, Zap, TrendingUp].map((Icon, i) => (
          <div key={i} className="w-14 h-14 rounded-2xl bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.3)] flex items-center justify-center text-[#1A7FD4]">
            <Icon size={28} />
          </div>
        ))}
      </div>
    </div>,
    // Card 3 (Penta - Back)
    <div key="back" className="w-full h-full flex items-center justify-center p-10 bg-[#EEF3FF] rounded-[40px] shadow-[10px_10px_20px_rgba(163,185,210,0.4),-10px_-10px_20px_rgba(255,255,255,0.9)] border border-white/20">
      <div className="text-4xl font-nunito font-black text-[#1A7FD4]/20 uppercase tracking-[10px] text-center">
        PENTACLOUD<br/>CONSULTING
      </div>
    </div>
  ];

  return (
    <section className="relative w-full py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A7FD4] rounded-full filter blur-[120px] opacity-[0.05] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#29C6E0] rounded-full filter blur-[120px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-background shadow-[4px_4px_10px_rgba(163,185,210,0.2),-4px_-4px_10px_rgba(255,255,255,0.8)] border border-white/40 text-[#1A7FD4] text-xs font-bold tracking-[3px] uppercase mb-8 inline-block rounded-full"
          >
            WHO WE ARE
          </motion.div>
          
          <h2 className="font-nunito font-extrabold text-[42px] md:text-[52px] text-[#0D1B2A] leading-[1.1] mb-8">
            Redefining Technology<br/>
            <span className="text-[#1A7FD4]">With Human Touch</span>
          </h2>

          <div className="space-y-6 font-inter text-[17px] text-[#4A6080] leading-[1.8] mb-10 max-w-xl">
            <p>
              Pentacloud Consulting is a Bengaluru-based technology consulting firm dedicated to driving digital transformation through AI-powered solutions and a human-centric approach.
            </p>
            <p>
              As a certified Salesforce and Zoho partner with 16+ industry certifications, we deliver end-to-end services that empower businesses across Healthcare, Retail, Finance, and Enterprise sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {['🤝 Human-Centric', '⚡ AI-Powered', '🛡 Certified Experts'].map((pill, i) => (
              <div key={i} className="bg-background text-[#1A7FD4] font-nunito font-black text-[11px] rounded-full px-5 py-3 shadow-[4px_4px_12px_rgba(163,185,210,0.4),-4px_-4px_12px_rgba(255,255,255,0.8)] border border-white/50 uppercase tracking-wider">
                {pill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Swipable Card Stack */}
        <div className="relative h-[500px] flex items-center justify-center mt-10 lg:mt-0 perspective-1000">
          <AnimatePresence>
            {cards.map((cardIndex, i) => {
              const isFront = i === 0;
              const isMiddle = i === 1;
              const isBack = i === 2;

              return (
                <motion.div
                  key={cardIndex}
                  drag={isFront}
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  onDragEnd={handleDragEnd}
                  initial={{ 
                    scale: 0.8, 
                    opacity: 0, 
                    y: 20 
                  }}
                  animate={{ 
                    scale: isFront ? 1 : isMiddle ? 0.9 : 0.8,
                    opacity: isFront ? 1 : isMiddle ? 0.7 : 0.4,
                    x: isFront ? 0 : isMiddle ? 20 : 40,
                    y: isFront ? 0 : isMiddle ? -15 : -30,
                    rotate: isFront ? 0 : isMiddle ? 3 : 6,
                    zIndex: cards.length - i,
                  }}
                  exit={{ 
                    x: 300, 
                    opacity: 0, 
                    scale: 0.5,
                    rotate: 45,
                    transition: { duration: 0.4 } 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }}
                  style={{ 
                    cursor: isFront ? "grab" : "default",
                    touchAction: "none"
                  }}
                  className="absolute w-[300px] md:w-[360px] h-[400px] md:h-[440px] origin-center"
                >
                  {cardContent[cardIndex]}
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Swipe Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute -bottom-10 text-[#1A7FD4]/40 font-nunito font-bold text-[11px] tracking-widest uppercase flex items-center gap-2"
          >
            ← Swipe Card to Change →
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default WhoWeAre;
