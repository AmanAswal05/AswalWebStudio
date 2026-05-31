'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function FloatingContacts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3 pointer-events-auto">
      {/* Email Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="mailto:aman9lion@gmail.com"
        className="h-10 w-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-lg transition-colors group relative cursor-pointer"
        aria-label="Email Us"
      >
        <Mail className="h-4.5 w-4.5" />
        <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow whitespace-nowrap z-50">
          Email Us
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917304610459?text=Hi!%20I'm%20interested%20in%20a%20website%20or%20design%20quote%20from%20Aswal%20Web%20Studio."
        target="_blank"
        rel="noopener noreferrer"
        className="h-10 w-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-colors group relative cursor-pointer"
        aria-label="WhatsApp Chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12.031 2c-5.502 0-9.97 4.468-9.97 9.97 0 1.758.459 3.478 1.332 4.988L2.05 22l5.184-1.361a9.907 9.907 0 004.798 1.233H12.038c5.502 0 9.97-4.468 9.97-9.97a9.96 9.96 0 00-2.92-7.05 9.9 9.9 0 00-7.057-2.882zm0 1.5c4.686 0 8.47 3.784 8.47 8.47a8.423 8.423 0 01-2.482 5.986 8.37 8.37 0 01-5.988 2.482H12.025a8.4 8.4 0 01-4.083-1.05l-.293-.174-3.037.798.812-2.966-.19-.304a8.397 8.397 0 01-1.256-4.22c.002-4.686 3.787-8.47 8.472-8.47zm-3.664 3.518c-.13 0-.28.01-.424.03-.186.024-.395.074-.57.25-.262.261-.99 1.002-.99 2.443 0 1.442 1.05 2.836 1.198 3.038.148.2 2.057 3.25 5.02 4.437.893.357 1.488.489 2.012.56.76.103 1.455.08 2.003-.002.597-.09 1.764-.72 2.012-1.417.25-.696.25-1.293.175-1.417-.075-.125-.274-.199-.572-.349-.3-.15-1.764-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.3-.77 1.01-.945 1.21-.174.2-.348.224-.647.074-.3-.15-1.267-.47-2.413-1.492-.892-.796-1.496-1.78-1.67-2.08-.174-.3-.018-.462.13-.61.134-.134.3-.35.45-.523.148-.174.198-.3.298-.5.1-.2.05-.373-.025-.523-.075-.15-.67-1.624-.919-2.222-.24-.582-.486-.503-.67-.512z"/>
        </svg>
        <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow whitespace-nowrap z-50">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* Phone Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:+917304610459"
        className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-colors group relative cursor-pointer"
        aria-label="Call Us"
      >
        <Phone className="h-4.5 w-4.5" />
        <span className="absolute left-12 scale-0 group-hover:scale-100 transition-all duration-200 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow whitespace-nowrap z-50">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
