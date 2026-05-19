"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SplashAnimation({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Premium cinematic timeline
    const timers = [
      setTimeout(() => setPhase(1), 200),  // Penta-Core draw
      setTimeout(() => setPhase(2), 1100), // Cinematic Text Reveal
      setTimeout(() => setPhase(3), 3200), // Zoom & Fade Exit
      setTimeout(() => onComplete(), 4000), // Finish
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!mounted) return null;

  const brand = "PENTACLOUD".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase === 3 ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] overflow-hidden"
    >
      {/* Ambient Light Ray */}
      <motion.div 
        initial={{ opacity: 0, rotate: -20, scaleY: 0 }}
        animate={phase >= 1 ? { opacity: 0.6, rotate: -20, scaleY: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute w-[120vw] h-[200px] bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none z-0"
        style={{ filter: "blur(60px)" }}
      />

      <div className="relative flex flex-col items-center z-10">
        
        {/* The Penta-Core */}
        <div className="relative w-28 h-28 mb-10 flex items-center justify-center">
          {/* Core Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 1 ? { scale: 1, opacity: 0.2 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-blue-500 rounded-full blur-2xl"
          />
          
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible relative z-10">
            <defs>
              <linearGradient id="pentaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" /> {/* blue-600 */}
                <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
              </linearGradient>
              <linearGradient id="pentaGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" /> {/* blue-400 */}
                <stop offset="100%" stopColor="#A5F3FC" /> {/* cyan-200 */}
              </linearGradient>
            </defs>

            <motion.g
              animate={phase === 3 ? { rotate: 45, scale: 4, opacity: 0 } : { rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              style={{ originX: "50px", originY: "50px" }}
            >
              {/* Outer Boundary */}
              <motion.polygon
                points="50,10 88.04,37.64 73.51,82.36 26.49,82.36 11.96,37.64"
                fill="none"
                stroke="url(#pentaGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0, rotate: -90, scale: 0.8 }}
                animate={phase >= 1 ? { pathLength: 1, opacity: 1, rotate: 0, scale: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: "50px", originY: "50px" }}
              />
              
              {/* Inner Inverted Core */}
              <motion.polygon
                points="50,10 88.04,37.64 73.51,82.36 26.49,82.36 11.96,37.64"
                fill="none"
                stroke="url(#pentaGradLight)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0, rotate: 90, scale: 0 }}
                animate={phase >= 1 ? { pathLength: 1, opacity: 0.8, rotate: 180, scale: 0.45 } : {}}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                style={{ originX: "50px", originY: "50px" }}
              />

              {/* Neural Mesh Connections */}
              {[
                { x1: 50, y1: 10, x2: 50, y2: 68 },
                { x1: 88.04, y1: 37.64, x2: 32.88, y2: 55.56 },
                { x1: 73.51, y1: 82.36, x2: 39.42, y2: 35.44 },
                { x1: 26.49, y1: 82.36, x2: 60.58, y2: 35.44 },
                { x1: 11.96, y1: 37.64, x2: 67.12, y2: 55.56 }
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                  stroke="url(#pentaGradLight)"
                  strokeWidth="0.75"
                  strokeDasharray="100"
                  initial={{ strokeDashoffset: 100, opacity: 0 }}
                  animate={phase >= 1 ? { strokeDashoffset: 0, opacity: 0.3 } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                />
              ))}

              {/* Central Processor Dot */}
              <motion.circle
                cx="50" cy="50" r="3"
                fill="#06B6D4"
                initial={{ scale: 0, opacity: 0 }}
                animate={phase >= 1 ? { scale: [0, 2, 1], opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 4px #06B6D4)" }}
              />
            </motion.g>
          </svg>
        </div>

        {/* Cinematic 3D Typography Reveal */}
        <div className="flex flex-col items-center">
          <div className="flex space-x-[0.1em] overflow-hidden" style={{ perspective: "1000px" }}>
            {brand.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "80%", opacity: 0, rotateX: -80 }}
                animate={phase >= 2 ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.05 * i, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                style={{ fontFamily: "var(--font-nunito), sans-serif", transformOrigin: "bottom" }}
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-[0.1em] md:tracking-[0.2em]"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-5 mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 10, letterSpacing: "0.2em" }}
            animate={phase >= 2 ? { opacity: 1, y: 0, letterSpacing: "0.6em" } : {}}
            transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
            className="text-slate-500 text-[10px] md:text-xs font-bold uppercase"
          >
            Consulting
          </motion.p>
        </div>
      </div>

    </motion.div>
  );
}
