"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative w-full py-6 px-4 md:px-6 lg:px-8 mb-10">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
        viewport={{ once: true }}
        className="relative w-full max-w-6xl mx-auto rounded-[32px] p-8 md:p-12 lg:px-20 py-8 md:py-10 overflow-hidden shadow-2xl"
        style={{ background: 'linear-gradient(135deg, #1A7FD4 0%, #0D5FA3 60%, #29C6E0 100%)' }}
      >
        {/* Animated Background FX */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[250px] h-[250px] bg-white/10 rounded-full filter blur-[60px] pointer-events-none" 
        />
        <motion.div 
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-[#29C6E0]/20 rounded-full filter blur-[40px] pointer-events-none" 
        />

        {/* Shimmer sweep effect */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column: Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white/60 font-['Nunito'] font-bold text-sm tracking-[4px] mb-4 uppercase"
            >
              PENTACLOUD
            </motion.div>

            <h2 className="font-['Nunito'] font-extrabold text-3xl md:text-4xl text-white leading-tight mb-4">
              <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.8 }}>
                Ready to Transform Your Business?
              </motion.div>
            </h2>

            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-['Inter'] text-sm md:text-base text-white/80 max-w-lg leading-relaxed mb-6 lg:mb-0"
            >
              Join 50+ companies that trust Pentacloud to drive their digital transformation journey. Let's build something extraordinary.
            </motion.p>
          </div>

          {/* Right Column: Actions */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row lg:flex-col gap-4"
            >
              <button className="bg-white text-[#1A7FD4] font-['Nunito'] font-bold text-[15px] px-8 py-3.5 rounded-full shadow-lg hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
                Start Your Journey →
              </button>
              <button className="bg-transparent border-2 border-white/40 text-white font-['Nunito'] font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
                Explore Services
              </button>
            </motion.div>

            {/* Contact Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="text-center lg:text-right"
            >
              <span className="block font-['Inter'] text-[12px] text-white/50 mb-1">Or reach us at</span>
              <span className="font-['Nunito'] font-semibold text-[13px] text-white/90">+971 545 132 807</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
