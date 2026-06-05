"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Globe2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const locations = [
  {
    label: "India Office",
    address: "Jagan Arcade, 4th Floor, 1st Main Road, Anandnagar, RT Nagar, Bengaluru, 560032, Karnataka, India",
    phone: "+971 545 132 807",
    iconColor: "text-[#1A7FD4]"
  },
  {
    label: "UAE Presence",
    address: "Office No. 84, Owner Adel Mohammed Ali, Al Quoz 1, Al Quoz 1, Dubai, 0000, Dubai",
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
    <section className="py-4 sm:py-8 px-0 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((loc, idx) => (
            <motion.div
              key={loc.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${CLAY_CARD} p-5 sm:p-6 flex flex-col items-start hover:-translate-y-1 transition-transform duration-500 rounded-[24px] sm:rounded-[28px]`}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-background shadow-[inset_1.5px_1.5px_4px_rgba(163,185,210,0.25),inset_-1.5px_-1.5px_4px_rgba(255,255,255,0.7)] flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                <Globe2 className={`${loc.iconColor} w-4.5 h-4.5 sm:w-5 sm:h-5`} />
              </div>
              
              <h4 className="font-nunito font-black text-sm sm:text-[17px] text-[#0D1B2A] mb-2 sm:mb-3">
                {loc.label}
              </h4>

              <div className="space-y-1.5 sm:space-y-2.5 mb-4 sm:mb-5 flex-grow">
                <div className="flex gap-2.5">
                  <MapPin size={13} className="text-[#4A6080] shrink-0 mt-0.5" />
                  <p className="font-inter text-[#4A6080] text-[11px] sm:text-[13px] leading-relaxed">
                    {loc.address}
                  </p>
                </div>
                
                <div className="flex gap-2.5 items-center">
                  <Phone size={13} className="text-[#4A6080] shrink-0" />
                  <span className="font-nunito font-bold text-[#0D1B2A] text-[11px] sm:text-[13px]">
                    {loc.phone}
                  </span>
                </div>
              </div>

              <div className="w-full pt-3 sm:pt-4 border-t border-[#1A7FD4]/5 flex items-center justify-between">
                <span className="text-[8px] sm:text-[9px] font-nunito font-black tracking-widest text-[#1A7FD4] uppercase">
                  ACTIVE NOW
                </span>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#34C98A] animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactLocations;
