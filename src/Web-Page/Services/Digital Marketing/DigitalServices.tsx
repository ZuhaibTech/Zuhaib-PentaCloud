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
    body: "We manage high-performance Google Ads and Bing Ads campaigns — keyword research, ad copy, landing page alignment, bid strategy, and conversion tracking — ensuring every rupee of ad spend generates maximum leads.",
    included: ["Google Ads Campaign Setup", "Keyword Research & Bidding", "Ad Copywriting & A/B Testing", "Landing Page Recommendations", "Conversion Tracking Setup", "Remarketing Campaigns", "Weekly Performance Reports", "Monthly Budget Optimisation"],
    metric: "Avg 65% reduction in cost per lead"
  },
  {
    icon: <Share2 className="text-[#8B5CF6]" />,
    title: "Social Media Management",
    body: "We manage your brand's presence across LinkedIn, Instagram, Facebook, and X — creating content calendars, designing posts, writing captions, scheduling, and community management. Every post serves a strategic purpose.",
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
    body: "Email remains the highest ROI digital channel — averaging $42 return per $1 spent. We design email campaigns, build automated nurture sequences, segment your lists, and A/B test subject lines to improve conversions.",
    included: ["Email Template Design", "Campaign Copywriting", "List Segmentation & Cleaning", "Automated Nurture Sequences", "A/B Testing (Subject + Content)", "Deliverability Optimisation", "Unsubscribe Management", "Monthly Performance Report"],
    platforms: "Mailchimp · HubSpot · Zoho Campaigns · Klaviyo",
    metric: "Avg 42% open rate vs industry avg of 21%"
  },
  {
    icon: <Megaphone className="text-[#34C98A]" />,
    title: "Paid Social Advertising",
    body: "We run performance-driven paid campaigns across Meta (Facebook + Instagram), LinkedIn, and YouTube — audience research, creative strategy, ad design, copywriting, and pixel setup. We focus on qualified lead generation.",
    included: ["Meta Ads (FB + Instagram)", "LinkedIn Lead Gen Campaigns", "YouTube Video Ads", "Audience Research & Targeting", "Creative Strategy & Design", "Pixel & Conversion API Setup", "Lookalike Audience Building", "Monthly ROI Reporting"],
    metric: "Avg 4.2x ROAS across paid campaigns"
  }
];

const DigitalServices = () => {
  return (
    <section className="mb-32">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 bg-blue-50 text-[#1A7FD4] rounded-full text-[10px] font-black uppercase tracking-[3px] mb-6"
        >
          WHAT WE OFFER
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-nunito font-black text-[#0D1B2A] mb-6">
          Complete Digital Marketing <br/> <span className="text-[#1A7FD4]">Service Suite</span>
        </h2>
        <p className="text-[#4A6080] max-w-2xl mx-auto font-inter text-lg">
          Every channel. Every tactic. All under one roof — strategically aligned to grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`${CLAY_CARD} p-8 group hover:-translate-y-2 transition-all duration-500 flex flex-col h-full`}
          >
            <div className="w-14 h-14 rounded-2xl bg-[#E8F0F8] shadow-inner flex items-center justify-center mb-6 border border-white/50 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-2xl font-nunito font-black text-[#0D1B2A] mb-4">{service.title}</h3>
            <p className="text-[#4A6080] font-inter text-sm leading-relaxed mb-6 flex-grow">{service.body}</p>
            
            <div className="mb-6">
              <p className="text-[#0D1B2A] font-black text-[10px] uppercase tracking-widest mb-3">What's Included:</p>
              <ul className="grid grid-cols-1 gap-2">
                {service.included.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#4A6080]">
                    <CheckCircle2 size={12} className="text-[#34C98A]" /> {item}
                  </li>
                ))}
                {service.included.length > 4 && <li className="text-[10px] text-[#1A7FD4] font-bold ml-5">+ {service.included.length - 4} More</li>}
              </ul>
            </div>

            {service.platforms && (
              <div className="mb-6 p-3 bg-background shadow-inner rounded-xl border border-white/50">
                <p className="text-[10px] font-black text-[#1A7FD4] uppercase mb-1">Platforms:</p>
                <p className="text-[11px] font-bold text-[#0D1B2A]">{service.platforms}</p>
              </div>
            )}

            <div className="mt-auto pt-6 border-t border-blue-50">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-[#34C98A]/10 text-[#34C98A] rounded-full text-[10px] font-black uppercase tracking-wider">
                  Result Metric
                </div>
                <p className="text-xs font-bold text-[#0D1B2A]">{service.metric}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;
