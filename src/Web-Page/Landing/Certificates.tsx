"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certificates = [
  { 
    id: 1, 
    title: "Salesforce Certified Administrator", 
    issuer: "Salesforce", 
    image: "/Certificates/Administrator.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 2, 
    title: "Salesforce Certified Advanced Administrator", 
    issuer: "Salesforce", 
    image: "/Certificates/Advance Adminsitrator.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 3, 
    title: "Salesforce Certified Agentforce Specialist I", 
    issuer: "Salesforce", 
    image: "/Certificates/Agentforce Specialist 1.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 4, 
    title: "Salesforce Certified Agentforce Specialist II", 
    issuer: "Salesforce", 
    image: "/Certificates/Agentforce Specialist 2.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 5, 
    title: "Salesforce Certified Agentforce Specialist III", 
    issuer: "Salesforce", 
    image: "/Certificates/Agentforce Specialist 3.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 6, 
    title: "Salesforce Certified B2C Commerce Developer", 
    issuer: "Salesforce", 
    image: "/Certificates/B2C Commerce Developer.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 7, 
    title: "Salesforce Certified B2C Solution Architect", 
    issuer: "Salesforce", 
    image: "/Certificates/B2C Solution Architect.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 8, 
    title: "Salesforce Certified Business Analyst I", 
    issuer: "Salesforce", 
    image: "/Certificates/Business Analyst 1.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 9, 
    title: "Salesforce Certified Business Analyst II", 
    issuer: "Salesforce", 
    image: "/Certificates/Business Analyst 2.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 10, 
    title: "Salesforce Certified CPQ Specialist", 
    issuer: "Salesforce", 
    image: "/Certificates/CPQ Specialist.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 11, 
    title: "Salesforce Certified Experience Cloud Consultant", 
    issuer: "Salesforce", 
    image: "/Certificates/Experience Cloud Consultant.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 12, 
    title: "Salesforce Certified Industries CPQ Developer", 
    issuer: "Salesforce", 
    image: "/Certificates/Industries CPQ Developer.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 13, 
    title: "Salesforce Certified Associate (L1)", 
    issuer: "Salesforce", 
    image: "/Certificates/L1 Certified Associate.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 14, 
    title: "Salesforce Certified Specialist (L1)", 
    issuer: "Salesforce", 
    image: "/Certificates/L1 Certified Specialist.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 15, 
    title: "Salesforce Certified Professional", 
    issuer: "Salesforce", 
    image: "/Certificates/Logo for Salesforce Certified Professional (10).webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 16, 
    title: "Salesforce Certified Marketing Cloud Developer", 
    issuer: "Salesforce", 
    image: "/Certificates/Maketing Cloud Developer.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 17, 
    title: "Salesforce Certified Marketing Cloud Account Engagement Consultant", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Account Engagement Consultant.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 18, 
    title: "Salesforce Certified Marketing Cloud Account Engagement Specialist", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Account Engagement Specialist.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 19, 
    title: "Salesforce Certified Marketing Cloud Administrator", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Administrator.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 20, 
    title: "Salesforce Certified Marketing Cloud Administrator (Alt)", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Adminstrator.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 21, 
    title: "Salesforce Certified Marketing Cloud Consultant I", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Consultant 1.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 22, 
    title: "Salesforce Certified Marketing Cloud Consultant II", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Consultant 2.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 23, 
    title: "Salesforce Certified Marketing Cloud Developer (Alt)", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Developer.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 24, 
    title: "Salesforce Certified Marketing Cloud Email Specialist", 
    issuer: "Salesforce", 
    image: "/Certificates/Marketing Cloud Email Specialist.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 25, 
    title: "Salesforce Certified Platform App Builder", 
    issuer: "Salesforce", 
    image: "/Certificates/Platform App Builder.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 26, 
    title: "Salesforce Certified Sales Representative", 
    issuer: "Salesforce", 
    image: "/Certificates/Sales Representative.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 27, 
    title: "Slack Certified Administrator", 
    issuer: "Slack", 
    image: "/Certificates/Slack Administrator.webp", 
    color: "from-sky-500/20" 
  },
  { 
    id: 28, 
    title: "Salesforce Certified JavaScript Developer I", 
    issuer: "Salesforce", 
    image: "/Certificates/javaScript Developer 1.webp", 
    color: "from-sky-500/20" 
  }
];

const Certificates = () => {
  // Duplicate the list for seamless infinite scroll
  const scrollingList = [...certificates, ...certificates];

  return (
    <section className="bg-background py-6 sm:py-12 md:py-18 overflow-hidden border-t border-slate-200 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F0F8] to-transparent pointer-events-none" />
      
      <div className="px-6 md:px-12 mb-4 md:mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[9px] md:text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-1">
            World-Class Expertise
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            Our Certified Capabilities
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden w-full">
        {/* Left and Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#E8F0F8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#E8F0F8] to-transparent z-10" />

        <div className="flex gap-3 sm:gap-6 py-2 sm:py-4 animate-scrollCerts">
          {scrollingList.map((cert, index) => (
            <div
              key={`${cert.id}-${index}`}
              className="flex-shrink-0 w-40 sm:w-52 md:w-64 p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-background border-2 border-white/50 shadow-[4px_4px_8px_rgba(163,185,210,0.3),-4px_-4px_8px_rgba(255,255,255,0.95)] hover:shadow-[10px_10px_20px_rgba(163,185,210,0.5),-10px_-10px_20px_rgba(255,255,255,1)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Uniform Blue Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-20">
                <div className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl md:rounded-2xl bg-[#f8fafc] border border-white shadow-[2px_2px_4px_#e2e8f0,-2px_-2px_4px_#ffffff,inset_0.5px_0.5px_1px_#ffffff,inset_-0.5px_-0.5px_1px_#e2e8f0] flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-1 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-[9px] sm:text-[10px] md:text-xs font-bold text-black mb-1 group-hover:text-blue-700 transition-colors line-clamp-3 h-[38px] sm:h-[42px] md:h-[50px] flex items-start pt-0.5 leading-tight">
                  {cert.title}
                </h4>
                <p className="text-[8px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                  {cert.issuer}
                </p>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 p-1.5 sm:p-2.5 opacity-20">
                <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollCerts {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollCerts {
          animation: scrollCerts 85s linear infinite;
        }
        .animate-scrollCerts:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Certificates;

