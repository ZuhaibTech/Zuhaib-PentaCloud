"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroPartnersOrbit = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const partners = [
    { name: "Salesforce", logo: "/Partners/Salesforceb.svg", pos: "top" },
    { name: "Xero", logo: "/Partners/XeroPartner.svg", pos: "right" },
    { name: "Zoho", logo: "/Partners/ZohoPartner.svg", pos: "bottom" },
    { name: "Meta", logo: "/Partners/MetaPartner.svg", pos: "left" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
      className="hidden lg:flex relative w-[480px] h-[480px] items-center justify-center"
    >
      {/* Orbit Ring (Invisible guide ring with border) */}
      <div className="absolute w-[380px] h-[380px] rounded-full border-[1.5px] border-blue-500/15 z-0" />

      {/* Glow Trail */}
      <div
        className={`absolute w-[380px] h-[380px] rounded-full z-[1] animate-orbit ${isPaused ? "paused" : ""}`}
        style={{
          background: "conic-gradient(from 0deg, rgba(26,127,212,0.0), rgba(26,127,212,0.12) 60deg, rgba(26,127,212,0.0) 120deg)",
        }}
      />

      {/* Rotating Wrapper */}
      <div
        className={`absolute w-[380px] h-[380px] rounded-full z-10 animate-orbit ${isPaused ? "paused" : ""}`}
      >
        {/* 4 Tiny Dots at 45deg intervals */}
        {[45, 135, 225, 315].map((angle) => (
          <div
            key={angle}
            className="absolute w-1.5 h-1.5 bg-blue-500/25 rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${angle}deg) translate(190px) rotate(-${angle}deg) translate(-50%, -50%)`,
            }}
          />
        ))}

        {/* 4 Partner Badges */}
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="absolute"
            style={{
              top: partner.pos === "top" ? "-42px" : partner.pos === "bottom" ? "auto" : "50%",
              bottom: partner.pos === "bottom" ? "-42px" : "auto",
              left: partner.pos === "left" ? "-42px" : partner.pos === "right" ? "auto" : "50%",
              right: partner.pos === "right" ? "-42px" : "auto",
              transform: partner.pos === "top" || partner.pos === "bottom" ? "translateX(-50%)" : "translateY(-50%)",
            }}
          >
            <motion.div
              className={`animate-counter ${isPaused ? "paused" : ""}`}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredBadge(partner.name);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredBadge(null);
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="relative w-[84px] h-[84px] bg-white rounded-full border-2 border-blue-500/12 shadow-[8px_8px_20px_rgba(26,127,212,0.2),-4px_-4px_12px_rgba(255,255,255,0.95)] flex items-center justify-center p-3 cursor-pointer transition-shadow hover:shadow-[12px_12px_28px_rgba(26,127,212,0.25)]">
                <div className="relative w-14 h-14">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Tooltip */}
                <AnimatePresence>
                  {hoveredBadge === partner.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#0D1B2A] text-white text-[12px] font-inter px-3 py-1 rounded-lg whitespace-nowrap z-50 shadow-lg"
                    >
                      {partner.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Center Logo */}
      <div className="relative w-[110px] h-[110px] flex items-center justify-center z-10">
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(26,127,212,0.3)",
              "0 0 0 16px rgba(26,127,212,0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />
        <div className="w-[90px] h-[90px] bg-white rounded-full p-4 shadow-[8px_8px_24px_rgba(26,127,212,0.20),-4px_-4px_12px_rgba(255,255,255,0.95)] flex items-center justify-center overflow-hidden">
          <div className="relative w-16 h-16">
            <Image
              src="/Logo/Penta Logo.png"
              alt="Pentacloud Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbitRotate 20s linear infinite;
        }
        .animate-counter {
          animation: counterRotate 20s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}} />
    </motion.div>
  );
};

export default HeroPartnersOrbit;
