"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Cloud,
  Settings,
  Database,
  Code,
  Smartphone,
  Globe,
  RefreshCw,
  GraduationCap
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTA from "@/Web-Page/Landing/CTA";

const socialLinks = [
  {
    name: "Twitter",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  },
  {
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: "Github",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    )
  },
  {
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const Footer = () => {
  return (
    <div className="relative">
      {/* CTA Section - Light Theme Area */}
      <section className="bg-background pt-4 sm:pt-6 pb-1 relative z-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <CTA />
        </div>
      </section>

      {/* Dark Footer Section */}
      <footer className="relative bg-[#020617] pt-8 pb-4 overflow-hidden">
        {/* Animated Background Grid & Orbs */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" 
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          
          {/* Animated Links Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 mb-8 sm:mb-10"
          >
            {/* Brand Info */}
            <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-4 sm:gap-6">
              <Image 
                src="/Logo/Pentacloud logo.png" 
                alt="Pentacloud Logo" 
                width={150} 
                height={38} 
                className="h-8 sm:h-10 w-auto object-contain brightness-0 invert"
              />
              <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm">
                Architecting the future of business with cutting-edge cloud infrastructure, automation, and enterprise integrations.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a key={social.name} href="#" className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 overflow-hidden group">
                    <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Explore Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2 lg:col-start-6 flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-0">
              <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-wide mb-1 sm:mb-2">Explore</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { name: 'About', href: '/about' },
                  { name: 'Blogs', href: '/blogs' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-all duration-300 inline-flex items-center group">
                      <ArrowRight className="w-3.5 h-3.5 mr-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:mr-2 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                      <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-0">
              <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-wide mb-1 sm:mb-2">Services</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { name: 'Salesforce Consulting', href: '/services/salesforce' },
                  { name: 'Zoho Service', href: '/services/zoho' },
                  { name: 'Cloud Solution', href: '/services/cloud' },
                  { name: 'Web Development', href: '/services/web' },
                  { name: 'App Development', href: '/services/app' },
                  { name: 'Digital Marketing', href: '/services/digital-marketing' },
                  { name: 'Data Migration', href: '/services/data-migration' },
                  { name: 'Consulting And Training', href: '/services/consulting' }
                ].map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-slate-400 hover:text-indigo-400 transition-all duration-300 inline-flex items-center group">
                      <ArrowRight className="w-3.5 h-3.5 mr-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:mr-2 group-hover:translate-x-0 transition-all duration-300 text-indigo-400" />
                      <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-0">
              <h4 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-wide mb-1 sm:mb-2">Contact</h4>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-0.5 sm:mt-1 group-hover:text-white transition-colors">
                    123 Innovation Drive<br />San Francisco, CA 94105
                  </span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <span className="text-slate-400 text-xs sm:text-sm group-hover:text-white transition-colors">
                    +1 (800) 123-4567
                  </span>
                </li>
                <li className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-slate-400 text-xs sm:text-sm group-hover:text-white transition-colors">
                    hello@pentacloud.io
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <div className="relative border-t border-white/10 pt-4 flex flex-col items-center">
            <p className="text-slate-500 text-xs sm:text-sm text-center">
              © {new Date().getFullYear()} Pentacloud Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
