"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Share2, FileText, Mail, Megaphone, CheckCircle2 } from "lucide-react";
import { CLAY_CARD } from "./Constants";

const servicesData = [
  {
    icon: <Search className="text-[#1A7FD4]" />,
    title: "Search Engine Optimisation",
    body: "We build sustainable organic search visibility that compounds over time. Our SEO service covers full technical audits, on-page optimisation, content strategy, link building, Core Web Vitals improvement, and local SEO.",
    included: ["Technical SEO Audit", "Keyword Research & Mapping", "On-Page Optimisation", "Content Gap Analysis", "Link Building & Outreach", "Local SEO (Google Business)", "Monthly Ranking Reports", "Core Web Vitals Optimisation"],
    metric: "Avg 180% increase in organic traffic in 6 months"
  },
  {
    icon: <TrendingUp className="text-[#29C6E0]" />,
    title: "Search Engine Marketing (PPC)",
    body: "We manage high-performance Google Ads and Bing Ads campaigns, keyword research, ad copy, landing page alignment, bid strategy, and conversion tracking, ensuring every rupee of ad spend generates maximum leads.",
    included: ["Google Ads Campaign Setup", "Keyword Research & Bidding", "Ad Copywriting & A/B Testing", "Landing Page Recommendations", "Conversion Tracking Setup", "Remarketing Campaigns", "Weekly Performance Reports", "Monthly Budget Optimisation"],
    metric: "Avg 65% reduction in cost per lead"
  },
  {
    icon: <Share2 className="text-[#8B5CF6]" />,
    title: "Social Media Management",
    body: "We manage your brand's presence across LinkedIn, Instagram, Facebook, and X, creating content calendars, designing posts, writing captions, scheduling, and community management. Every post serves a strategic purpose.",
    included: ["Content Calendar Planning", "Graphic Design for Posts", "Caption Copywriting", "Hashtag Research & Strategy", "Scheduling & Publishing", "Community Management", "Story & Reel Creation", "Monthly Analytics Report"],
    platforms: "LinkedIn · Instagram · Facebook · X (Twitter)",
    metric: "Avg 220% increase in social engagement"
  },
  {
    icon: <FileText className="text-[#F59E0B]" />,
    title: "Content Marketing",
    body: "Content is the foundation of every successful digital strategy. We create SEO-optimised blogs, whitepapers, case studies, email newsletters, LinkedIn articles, and website copy that educates your audience and builds authority.",
    included: ["Blog Writing (SEO optimised)", "Website Copywriting", "Case Study Creation", "Whitepaper & eBook Writing", "LinkedIn Article Writing", "Email Newsletter Content", "Product Descriptions", "Brand Tone of Voice Guide"],
    metric: "Avg 3x increase in time-on-site from content"
  },
  {
    icon: <Mail className="text-[#EC4899]" />,
    title: "Email Marketing & Automation",
    body: "Email remains the highest ROI digital channel, averaging $42 return per $1 spent. We design email campaigns, build automated nurture sequences, segment your lists, and A/B test subject lines to improve conversions.",
    included: ["Email Template Design", "Campaign Copywriting", "List Segmentation & Cleaning", "Automated Nurture Sequences", "A/B Testing (Subject + Content)", "Deliverability Optimisation", "Unsubscribe Management", "Monthly Performance Report"],
    platforms: "Mailchimp · HubSpot · Zoho Campaigns · Klaviyo",
    metric: "Avg 42% open rate vs industry avg of 21%"
  },
  {
    icon: <Megaphone className="text-[#34C98A]" />,
    title: "Paid Social Advertising",
    body: "We run performance-driven paid campaigns across Meta (Facebook + Instagram), LinkedIn, and YouTube, audience research, creative strategy, ad design, copywriting, and pixel setup. We focus on qualified lead generation.",
    included: ["Meta Ads (FB + Instagram)", "LinkedIn Lead Gen Campaigns", "YouTube Video Ads", "Audience Research & Targeting", "Creative Strategy & Design", "Pixel & Conversion API Setup", "Lookalike Audience Building", "Monthly ROI Reporting"],
    metric: "Avg 4.2x ROAS across paid campaigns"
  }
];

const DigitalServices = () => {
  return (
    <section className="mb-12 sm:mb-24 md:mb-32">
      <div className="text-center mb-10 sm:mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-[#1A7FD4] rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] mb-4 sm:mb-6"
        >
          WHAT WE OFFER
        </motion.div>
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-4 sm:mb-6 leading-tight">
          Complete Digital Marketing <br/> <span className="text-[#1A7FD4]">Service Suite</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-xs sm:text-base md:text-lg leading-relaxed px-2">
          Every channel. Every tactic. All under one roof, strategically aligned to grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`${CLAY_CARD} p-5 sm:p-8 group hover:-translate-y-1.5 transition-all duration-500 flex flex-col h-full rounded-[20px] sm:rounded-[32px] overflow-hidden`}
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#E8F0F8] shadow-inner flex items-center justify-center mb-4 sm:mb-6 border border-white/50 group-hover:scale-110 transition-transform shrink-0">
              {React.cloneElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
            </div>
            <h3 className="text-lg sm:text-2xl font-nunito font-black text-[#0D1B2A] mb-2 sm:mb-4">{service.title}</h3>
            <p className="text-[#4A6080] font-inter text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow">{service.body}</p>
            
            <div className="mb-4 sm:mb-6">
              <p className="text-[#0D1B2A] font-black text-[9px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-3">What's Included:</p>
              <ul className="grid grid-cols-1 gap-1.5 sm:gap-2">
                {service.included.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs text-[#4A6080]">
                    <CheckCircle2 size={11} className="text-[#34C98A] shrink-0" /> <span className="truncate">{item}</span>
                  </li>
                ))}
                {service.included.length > 4 && <li className="text-[9px] sm:text-[10px] text-[#1A7FD4] font-bold ml-5">+ {service.included.length - 4} More</li>}
              </ul>
            </div>

            {service.platforms && (
              <div className="mb-4 sm:mb-6 p-2.5 bg-background shadow-inner rounded-lg sm:rounded-xl border border-white/50">
                <p className="text-[9px] sm:text-[10px] font-black text-[#1A7FD4] uppercase mb-0.5">Platforms:</p>
                <p className="text-[10px] sm:text-[11px] font-bold text-[#0D1B2A]">{service.platforms}</p>
              </div>
            )}

            <div className="mt-auto pt-4 sm:pt-6 border-t border-blue-50">
              <div className="flex items-center gap-3">
                <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#34C98A]/10 text-[#34C98A] rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-wider shrink-0">
                  Result Metric
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#0D1B2A] truncate">{service.metric}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;
