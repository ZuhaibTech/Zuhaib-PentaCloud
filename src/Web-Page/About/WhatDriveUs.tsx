"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Zap, Users, Award } from "lucide-react";

const WhatDriveUs = () => {
  return (
    <section className="relative w-full py-24 bg-[#E8F0F8] overflow-hidden">
      {/* Soft Ambient Blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A7FD4] rounded-full filter blur-[120px] opacity-[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#29C6E0] rounded-full filter blur-[120px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-6 py-2 bg-[#E8F0F8] rounded-full shadow-[6px_6px_12px_rgba(163,185,210,0.6),-6px_-6px_12px_rgba(255,255,255,0.9)] text-[#1A7FD4] text-xs font-bold tracking-widest uppercase mb-6"
          >
            WHAT DRIVES US
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-nunito font-extrabold text-[42px] md:text-[52px] leading-tight text-[#0D1B2A]"
          >
            Our Mission, Vision & <span className="text-[#1A7FD4]">Core Values</span>
          </motion.h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          
          {/* Mission */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-[#E8F0F8] rounded-[40px] p-10 shadow-[12px_12px_24px_rgba(163,185,210,0.6),-12px_-12px_24px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)] group relative overflow-hidden h-full transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1A7FD4] to-transparent" />
            <div className="w-16 h-16 rounded-[24px] bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-[#1A7FD4] flex items-center justify-center mb-8 group-hover:rotate-[15deg] transition-all duration-500 group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)]">
              <Target size={32} />
            </div>
            <div className="font-nunito font-black text-[12px] tracking-[3px] text-[#1A7FD4] mb-3 uppercase">OUR MISSION</div>
            <h3 className="font-nunito font-black text-[26px] text-[#0D1B2A] mb-4 group-hover:text-[#1A7FD4] transition-colors">Driving Digital Excellence</h3>
            <p className="font-inter text-[15px] text-[#4A6080] leading-[1.9]">
              To empower businesses with cutting-edge Salesforce, Cloud, and AI solutions — delivering measurable transformation that scales with ambition and drives sustainable growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-[#E8F0F8] rounded-[40px] p-10 shadow-[12px_12px_24px_rgba(163,185,210,0.6),-12px_-12px_24px_rgba(255,255,255,0.95)] hover:shadow-[20px_20px_40px_rgba(163,185,210,0.7),-20px_-20px_40px_rgba(255,255,255,1)] group relative overflow-hidden h-full transition-all duration-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#29C6E0] to-transparent" />
            <div className="w-16 h-16 rounded-[24px] bg-[#E8F0F8] shadow-[inset_4px_4px_8px_rgba(163,185,210,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] text-[#29C6E0] flex items-center justify-center mb-8 group-hover:rotate-[-15deg] transition-all duration-500 group-hover:shadow-[4px_4px_12px_rgba(163,185,210,0.5),-4px_-4px_12px_rgba(255,255,255,0.9)]">
              <Eye size={32} />
            </div>
            <div className="font-nunito font-black text-[12px] tracking-[3px] text-[#29C6E0] mb-3 uppercase">OUR VISION</div>
            <h3 className="font-nunito font-black text-[26px] text-[#0D1B2A] mb-4 group-hover:text-[#29C6E0] transition-colors">Technology for Every Business</h3>
            <p className="font-inter text-[15px] text-[#4A6080] leading-[1.9]">
              To be the most trusted technology partner in Asia — making enterprise-grade Salesforce and Cloud solutions accessible to businesses of every size.
            </p>
          </motion.div>
        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Shield size={26}/>, color: '#34C98A', title: 'Integrity', text: 'We operate with radical transparency, keeping promises to every client, every time.' },
            { icon: <Zap size={26}/>, color: '#F59E0B', title: 'Innovation', text: 'We challenge conventions and embrace AI to deliver future-ready solutions today.' },
            { icon: <Users size={26}/>, color: '#8B5CF6', title: 'Client First', text: 'Every decision we make is guided by what creates maximum value for our clients.' },
            { icon: <Award size={26}/>, color: '#EC4899', title: 'Excellence', text: 'With 16+ certifications, we hold ourselves to the highest technical mastery.' },
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="bg-[#E8F0F8] rounded-[32px] p-8 shadow-[8px_8px_16px_rgba(163,185,210,0.6),-8px_-8px_16px_rgba(255,255,255,0.9)] hover:shadow-[16px_16px_32px_rgba(163,185,210,0.5),-16px_-16px_32px_rgba(255,255,255,1)] group transition-all duration-500"
            >
              <div 
                className="w-14 h-14 rounded-[20px] bg-[#E8F0F8] shadow-[inset_3px_3px_6px_rgba(163,185,210,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-[3px_3px_10px_rgba(163,185,210,0.3)] group-hover:rotate-[15deg]"
                style={{ color: val.color }}
              >
                {val.icon}
              </div>
              <h4 className="font-nunito font-black text-xl text-[#0D1B2A] mb-3 group-hover:text-[#1A7FD4] transition-colors">{val.title}</h4>
              <p className="font-inter text-[14px] text-[#4A6080] leading-[1.7]">{val.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatDriveUs;
