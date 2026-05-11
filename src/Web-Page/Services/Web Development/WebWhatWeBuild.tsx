"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Building2, ShoppingCart, Target, LayoutDashboard, Code2, ArrowRight } from "lucide-react";

// --- Custom Counter Component ---
const Counter = ({ from, to, duration = 2.5 }: { from: number, to: number | string, duration?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  const numericTo = typeof to === 'string' ? parseFloat(to.replace(/[^0-9.]/g, '')) : to;

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, numericTo, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            const displayValue = Math.round(value);
            nodeRef.current.textContent = typeof to === 'string' ? to.replace(/[0-9.]+/, displayValue.toString()) : displayValue.toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, numericTo, duration, inView, to]);

  return <span ref={nodeRef}>{from}</span>;
};

const WebWhatWeBuild = () => {
  const services = [
    {
      title: "Corporate & Business Websites",
      desc: "Professional, conversion-focused corporate websites that establish your brand authority and turn visitors into qualified leads. Built with performance-first architecture, SEO foundations, and CMS integration.",
      icon: Building2,
      color: "white",
      bg: "linear-gradient(135deg, #0D1B2A, #1A7FD4)",
      tags: ["Next.js", "CMS Integration", "SEO Ready", "Lead Generation"],
      isWide: true,
      visual: "browser"
    },
    {
      title: "eCommerce Websites",
      desc: "High-converting online stores with seamless payment gateways, inventory management, and personalised shopping experiences.",
      icon: ShoppingCart,
      color: "#F59E0B",
      bg: "#E8F0F8",
      tags: ["Shopify", "WooCommerce", "Payment Gateway"],
      visual: "product"
    },
    {
      title: "Landing Pages & Funnels",
      desc: "High-converting landing pages engineered for your campaigns — A/B test-ready and built around your conversion goals.",
      icon: Target,
      color: "#34C98A",
      bg: "#E8F0F8",
      tags: ["Conversion Optimised", "A/B Ready"],
      visual: "funnel"
    },
    {
      title: "Web Portals & Dashboards",
      desc: "Complex client portals, admin dashboards, and internal tools — built with real-time data and role-based access control.",
      icon: LayoutDashboard,
      color: "#8B5CF6",
      bg: "#E8F0F8",
      tags: ["RBAC", "Real-time Data", "Custom Dashboard"],
      visual: "dashboard"
    },
    {
      title: "Custom Web Applications",
      desc: "Bespoke web applications built from scratch for your unique business logic — scalable architecture and API-first design.",
      icon: Code2,
      color: "#29C6E0",
      bg: "#E8F0F8",
      tags: ["React", "Node.js", "API First", "Cloud Native"],
      visual: "code"
    }
  ];

  return (
    <section className="py-24 bg-[#E8F0F8] relative overflow-hidden px-6">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A7FD4 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-xs font-bold tracking-widest uppercase mb-6"
          >
            WHAT WE BUILD
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-nunito font-extrabold text-[42px] md:text-[52px] text-[#0D1B2A] leading-tight mb-4"
          >
            Every Type of Web <span className="text-[#1A7FD4]">Experience, Built Right</span>
          </motion.h2>
          <p className="font-inter text-[#4A6080] max-w-[620px] text-[16px] leading-relaxed">
            From marketing websites to complex enterprise portals — we build web experiences that convert visitors into customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              whileHover={{ y: -12, scale: 1.02 }}
              className={`rounded-[32px] p-8 group relative overflow-hidden transition-all duration-500 ${service.isWide ? 'md:col-span-2 bg-[#0D1B2A] shadow-[15px_15px_30px_rgba(13,27,42,0.3)] hover:shadow-[25px_25px_50px_rgba(13,27,42,0.4)]' : 'bg-[#E8F0F8] shadow-[10px_10px_20px_rgba(163,185,210,0.6),-10px_-10px_20px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)]'}`}
              style={service.isWide ? { background: service.bg } : {}}
            >
              {service.isWide && (
                 <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
              )}

              <div 
                className={`w-[60px] h-[60px] flex items-center justify-center mb-8 rounded-[20px] transition-all duration-500 group-hover:rotate-[15deg] ${service.isWide ? 'bg-white/10 text-white border border-white/20' : 'bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)]'}`}
                style={!service.isWide ? { color: service.color } : {}}
              >
                <service.icon size={28} />
              </div>

              <h3 className={`font-nunito font-black text-[24px] mb-4 transition-colors group-hover:text-[#1A7FD4] ${service.isWide ? 'text-white group-hover:text-white' : 'text-[#0D1B2A]'}`}>{service.title}</h3>
              <p className={`font-inter text-[14px] leading-[1.8] mb-8 ${service.isWide ? 'text-white/70' : 'text-[#4A6080]'}`}>
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                {service.tags.map((tag, j) => (
                  <span key={j} className={`font-nunito font-bold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-wider group-hover:scale-105 transition-transform ${service.isWide ? 'bg-white/10 text-white border border-white/10' : 'bg-[#E8F0F8] text-[#1A7FD4] shadow-[3px_3px_6px_rgba(163,185,210,0.4),-3px_-3px_6px_rgba(255,255,255,0.85)]'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Mini Visuals */}
              <div className={`h-24 pt-6 border-t ${service.isWide ? 'border-white/10' : 'border-[#1A7FD4]/08'}`}>
                {service.visual === "browser" && (
                   <div className="w-full h-full bg-black/20 rounded-xl overflow-hidden border border-white/10 p-3 space-y-3 backdrop-blur-sm flex flex-col">
                      <div className="flex gap-1.5 mb-1">
                        {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />)}
                      </div>
                      <div className="flex items-center justify-between mb-1">
                         <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Premium Business Solutions</div>
                         <div className="w-10 h-1 bg-white/10 rounded-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 flex-grow">
                         {[
                           { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=200", label: "Global" },
                           { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200", label: "Strategy" },
                           { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200", label: "ROI" }
                         ].map((item, idx) => (
                           <div key={idx} className="relative rounded-lg overflow-hidden border border-white/05 group/item">
                              <img src={item.url} alt={item.label} className="w-full h-full object-cover opacity-50 group-hover/item:opacity-80 transition-opacity" />
                              <div className="absolute bottom-1 left-1 bg-black/40 backdrop-blur-md px-1.5 py-0.5 rounded text-[6px] font-black text-white uppercase tracking-tighter">
                                 {item.label}
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                )}
                {service.visual === "product" && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F0F8] shadow-[4px_4px_8px_rgba(163,185,210,0.4)] flex items-center justify-center text-amber-500 group-hover:rotate-12 transition-transform">
                       <ShoppingCart size={24} />
                    </div>
                    <div className="flex-1 space-y-2">
                       <div className="h-2 w-full bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full" />
                       <motion.div 
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-8 w-28 bg-[#1A7FD4] rounded-full text-[11px] text-white flex items-center justify-center font-bold shadow-lg"
                       >
                          Add to Cart
                       </motion.div>
                    </div>
                  </div>
                )}
                {service.visual === "funnel" && (
                   <div className="flex flex-col items-center gap-1.5 w-full max-w-[140px] mx-auto group-hover:translate-y-[-5px] transition-transform">
                      <div className="w-full h-4 bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-[#34C98A]" />
                      </div>
                      <div className="w-3/4 h-4 bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ delay: 0.2 }} className="h-full bg-[#34C98A]" />
                      </div>
                      <div className="w-1/2 h-4 bg-[#E8F0F8] shadow-[inset_2px_2px_4px_rgba(163,185,210,0.3)] rounded-full overflow-hidden flex items-center justify-center">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ delay: 0.4 }} className="h-full bg-[#34C98A] flex items-center justify-center">
                            <span className="text-[8px] text-white font-black uppercase tracking-tighter">Win!</span>
                         </motion.div>
                      </div>
                   </div>
                )}
                {service.visual === "dashboard" && (
                   <div className="grid grid-cols-3 gap-3 h-full group-hover:scale-105 transition-transform">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="bg-[#E8F0F8] shadow-[3px_3px_6px_rgba(163,185,210,0.4)] rounded-xl p-2 flex flex-col justify-between">
                           <div className="h-1 w-2/3 bg-[#8B5CF6]/20 rounded" />
                           <div className="text-[14px] font-black text-[#8B5CF6]">
                             <Counter from={0} to={82 + i * 4} duration={1.5} />%
                           </div>
                        </div>
                      ))}
                   </div>
                )}
                {service.visual === "code" && (
                   <div className="w-full h-full bg-[#0D1B2A] rounded-xl p-4 font-mono text-[11px] text-[#29C6E0] overflow-hidden relative border border-white/05 shadow-2xl group-hover:border-[#1A7FD4]/30 transition-colors">
                      <div className="animate-pulse flex items-center gap-2 mb-1">
                         <div className="w-2 h-2 rounded-full bg-red-500" />
                         <div className="w-2 h-2 rounded-full bg-yellow-500" />
                         <div className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <div className="text-white/40">{"// Rendering custom app..."}</div>
                      <div className="text-cyan-400">{"<App data={realtime} />"}</div>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Websites Delivered", value: "50+" },
              { label: "Avg Load Time", value: "< 1.5s" },
              { label: "Google PageSpeed Score", value: "98+" },
              { label: "Mobile Responsive", value: "100%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#E8F0F8] rounded-[24px] p-6 shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_24px_rgba(163,185,210,0.5)] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="text-[36px] font-nunito font-black text-[#1A7FD4] leading-none mb-2 group-hover:scale-110 transition-transform">
                  <Counter from={0} to={stat.value} />
                </div>
                <div className="text-[12px] font-inter text-[#4A6080] font-bold uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WebWhatWeBuild;
