"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Globe2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const locations = [
  {
    label: "India Office",
    address: "Jagan Arcade, 4th Floor, 1st Main Road, Anandnagar, RT Nagar, Bengaluru — 560032, Karnataka, India",
    phone: "+971 545 132 807",
    iconColor: "text-[#1A7FD4]"
  },
  {
    label: "UAE Presence",
    address: "Across Dubai, Abu Dhabi & UAE",
    phone: "+971 545 132 807",
    iconColor: "text-[#34C98A]"
  },
  {
    label: "Qatar Presence",
    address: "Strategic presence across Doha & Qatar",
    phone: "+971 545 132 807",
    iconColor: "text-[#F59E0B]"
  }
];

const ContactLocations = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${CLAY_CARD} p-8 flex flex-col items-start hover:-translate-y-2 transition-transform duration-500`}
            >
              <div className="w-12 h-12 rounded-2xl bg-background shadow-[inset_2px_2px_5px_rgba(163,185,210,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.8)] flex items-center justify-center mb-6 shrink-0">
                <Globe2 className={loc.iconColor} size={24} />
              </div>
              
              <h4 className="font-nunito font-black text-xl text-[#0D1B2A] mb-4">
                {loc.label}
              </h4>

              <div className="space-y-4 mb-6 flex-grow">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[#4A6080] shrink-0 mt-1" />
                  <p className="font-inter text-[#4A6080] text-sm leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                
                <div className="flex gap-3 items-center">
                  <Phone size={16} className="text-[#4A6080] shrink-0" />
                  <span className="font-nunito font-bold text-[#0D1B2A] text-sm">
                    {loc.phone}
                  </span>
                </div>
              </div>

              <div className="w-full pt-6 border-t border-[#1A7FD4]/5 flex items-center justify-between">
                <span className="text-[10px] font-nunito font-black tracking-widest text-[#1A7FD4] uppercase">
                  ACTIVE NOW
                </span>
                <div className="w-2 h-2 rounded-full bg-[#34C98A] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;
