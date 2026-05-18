"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ContactInfoForm from "./ContactInfoForm";
import ContactQuickOptions from "./ContactQuickOptions";
import ContactFAQ from "./ContactFAQ";

const Contact = () => {
  return (
    <main className="bg-background min-h-screen relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[150px] -z-10" />
      <div className="absolute top-[20%] -left-40 w-[600px] h-[600px] bg-indigo-100/20 rounded-full blur-[120px] -z-10" />

      <ContactInfoForm />
      <ContactQuickOptions />
      <ContactFAQ />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/971545132807?text=Hi%20Pentacloud!%20I%20found%20you%20online%20and%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl group transition-all"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
        <div className="absolute right-20 bg-[#0D1B2A] text-white px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/10 hidden sm:block">
           Chat with us on WhatsApp
        </div>
      </motion.a>
    </main>
  );
};

export default Contact;
