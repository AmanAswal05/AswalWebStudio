'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Award, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Show a gentle prompt notification bubble after 5 seconds
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Prefill the contact page with this requirement description and navigate there
    router.push(`/contact?desc=${encodeURIComponent(message)}`);
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 sm:w-96 rounded-2xl shadow-2xl glass-panel overflow-hidden border border-border mb-4 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary px-4 py-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-success ring-2 ring-primary animate-pulse" />
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100/80 dark:bg-slate-800/40 p-1 flex items-center justify-center border border-slate-200/40 dark:border-slate-700/40 shadow-sm shadow-primary/5">
                    <Image
                      src="/logo.png"
                      alt="AswalWebStudio Logo"
                      width={28}
                      height={28}
                      className="object-contain filter drop-shadow(0 2px 4px rgba(37, 99, 235, 0.15))"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">AswalWebStudio</h4>
                  <p className="text-xs text-white/80 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" /> Typically replies instantly
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-4 max-h-64 overflow-y-auto space-y-4 bg-card/10">
              <div className="flex items-start space-x-2">
                <div className="bg-card px-3 py-2.5 rounded-2xl text-sm border border-border text-foreground max-w-[85%] rounded-tl-none">
                  Hello! 👋 We craft high-converting websites and modern custom web applications. How can we help you today?
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="bg-card px-3 py-2.5 rounded-2xl text-sm border border-border text-foreground max-w-[85%] rounded-tl-none flex flex-col space-y-2">
                  <span>🚀 Looking for a quote? You can start by typing a quick brief of your project below:</span>
                  <a
                    href="https://wa.me/917304610459?text=Hi!%20I'm%20interested%20in%20a%20website%20quote%20from%20Aswal%20Web%20Studio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors text-center shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5 h-3.5 w-3.5">
                      <path d="M12.031 2c-5.502 0-9.97 4.468-9.97 9.97 0 1.758.459 3.478 1.332 4.988L2.05 22l5.184-1.361a9.907 9.907 0 004.798 1.233H12.038c5.502 0 9.97-4.468 9.97-9.97a9.96 9.96 0 00-2.92-7.05 9.9 9.9 0 00-7.057-2.882zm0 1.5c4.686 0 8.47 3.784 8.47 8.47a8.423 8.423 0 01-2.482 5.986 8.37 8.37 0 01-5.988 2.482H12.025a8.4 8.4 0 01-4.083-1.05l-.293-.174-3.037.798.812-2.966-.19-.304a8.397 8.397 0 01-1.256-4.22c.002-4.686 3.787-8.47 8.472-8.47zm-3.664 3.518c-.13 0-.28.01-.424.03-.186.024-.395.074-.57.25-.262.261-.99 1.002-.99 2.443 0 1.442 1.05 2.836 1.198 3.038.148.2 2.057 3.25 5.02 4.437.893.357 1.488.489 2.012.56.76.103 1.455.08 2.003-.002.597-.09 1.764-.72 2.012-1.417.25-.696.25-1.293.175-1.417-.075-.125-.274-.199-.572-.349-.3-.15-1.764-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.3-.77 1.01-.945 1.21-.174.2-.348.224-.647.074-.3-.15-1.267-.47-2.413-1.492-.892-.796-1.496-1.78-1.67-2.08-.174-.3-.018-.462.13-.61.134-.134.3-.35.45-.523.148-.174.198-.3.298-.5.1-.2.05-.373-.025-.523-.075-.15-.67-1.624-.919-2.222-.24-.582-.486-.503-.67-.512z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} className="p-3 border-t border-border bg-card/50 flex items-center gap-2">
              <input
                type="text"
                placeholder="Type your brief & get a quote..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm bg-background border border-border px-3 py-2 rounded-xl focus:outline-none focus:border-primary text-foreground"
              />
              <button
                type="submit"
                className="p-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Prompt Notification */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 max-w-xs bg-card border border-border p-3.5 rounded-2xl shadow-xl flex items-start space-x-3 relative"
          >
            <button 
              onClick={() => setShowNotification(false)}
              className="absolute top-2 right-2 text-foreground/40 hover:text-foreground/70"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="bg-primary text-white rounded-full p-2 mt-0.5 shadow-md shadow-primary/20">
              <Award className="h-4 w-4" />
            </div>
            <div>
              <h5 className="font-semibold text-xs text-foreground">Need a website?</h5>
              <p className="text-xs text-foreground/75 mt-0.5 leading-tight">
                Click here to get a custom quote and design brief in 2 minutes!
              </p>
              <button 
                onClick={() => {
                  setIsOpen(true);
                  setShowNotification(false);
                }}
                className="text-xs text-primary font-bold hover:underline mt-1.5 block cursor-pointer"
              >
                Let's talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20 cursor-pointer relative hover:bg-primary-hover transition-colors"
        aria-label="Toggle Live Chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!isOpen && showNotification && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border border-white text-[9px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}
      </motion.button>
      
    </div>
  );
}
