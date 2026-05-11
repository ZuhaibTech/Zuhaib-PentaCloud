"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown, ArrowRight, Cloud, Settings, Database, Code, Smartphone, RefreshCw, GraduationCap, LayoutGrid } from "lucide-react";
 
 const getMobileIcon = (iconName: string | undefined) => {
   switch (iconName) {
     case "Salesforce": return <Cloud size={18} />;
     case "Zoho": return <Settings size={18} />;
     case "Cloud": return <Database size={18} />;
     case "Web": return <Code size={18} />;
     case "App": return <Smartphone size={18} />;
     case "Marketing": return <Globe size={18} />;
     case "Migration": return <RefreshCw size={18} />;
     case "Consulting": return <GraduationCap size={18} />;
     default: return <LayoutGrid size={18} />;
   }
 };
import Link from "next/link";
import Image from "next/image";
import { SwipeMaskNav } from "@/Animation/NavbarAnimation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Services", 
      href: "#", 
      hasDropdown: true,
      subItems: [
        { 
          name: "Salesforce Consulting", 
          href: "/services/salesforce",
          icon: "Salesforce",
          description: "Certified implementation and optimization."
        },
        { 
          name: "Zoho Service", 
          href: "/services/zoho",
          icon: "Zoho",
          description: "End-to-end Zoho suite automation."
        },
        { 
          name: "Cloud Solution", 
          href: "/services/cloud",
          icon: "Cloud",
          description: "Scalable infrastructure and migration."
        },
        { 
          name: "Web Development", 
          href: "/services/web",
          icon: "Web",
          description: "High-performance modern websites."
        },
        { 
          name: "App Development", 
          href: "/services/app",
          icon: "App",
          description: "Native iOS and Android applications."
        },
        { 
          name: "Digital Marketing", 
          href: "/services/digital-marketing",
          icon: "Marketing",
          description: "Data-driven growth and ROI focus."
        },
        { 
          name: "Data Migration", 
          href: "/services/data-migration",
          icon: "Migration",
          description: "Secure and zero-loss data transfers."
        },
        { 
          name: "Consulting And Training", 
          href: "/services/consulting",
          icon: "Consulting",
          description: "Expert guidance and team upskilling."
        },
      ]
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "pt-2 px-2 md:px-4" : "pt-0 px-0"}`}>
      <nav
        className={`w-full transition-all duration-500 relative ${
          isScrolled
            ? "max-w-[98%] xl:max-w-[98%] bg-background/90 backdrop-blur-xl shadow-[10px_10px_30px_rgba(163,185,210,0.5)] rounded-2xl py-3 px-6 md:px-8"
            : "max-w-full bg-transparent py-6 px-8 md:px-12"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/Logo/Pentacloud logo.png" 
              alt="Pentacloud Logo" 
              width={160} 
              height={40} 
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <SwipeMaskNav items={navLinks} />
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute left-0 right-0 bg-background border border-white/50 p-6 md:hidden shadow-2xl z-50 ${
                isScrolled ? "top-[calc(100%+1rem)] rounded-3xl" : "top-full border-b"
              }`}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    {link.hasDropdown ? (
                      <div className="flex flex-col gap-4">
                        <span className="text-lg font-black text-slate-400 uppercase tracking-widest text-[10px]">
                          {link.name}
                        </span>
                        <div className="grid grid-cols-1 gap-4">
                          {link.subItems?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-center gap-4 group"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                {getMobileIcon(sub.icon)}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[15px] font-bold text-slate-900">{sub.name}</span>
                                <span className="text-[11px] text-slate-500">{sub.description}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <hr className="border-slate-100" />
                <div className="flex flex-col gap-4">
                  <button className="bg-blue-600 text-white px-6 py-4 rounded-2xl text-center font-bold">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
