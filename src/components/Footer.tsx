'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Send, MessageSquare, Phone, Mail, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call for newsletter subscription
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubscribed(true);
    setEmail('');
    
    // Auto reset subscription state after 5 seconds
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-border bg-card/30 transition-colors duration-200 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="relative h-7 w-7 overflow-hidden rounded-lg bg-slate-100/80 dark:bg-slate-800/40 p-0.5 flex items-center justify-center border border-slate-200/40 dark:border-slate-700/40 shadow-sm shadow-primary/5 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="AswalWebStudio Logo"
                  width={22}
                  height={22}
                  className="object-contain filter drop-shadow(0 2px 4px rgba(37, 99, 235, 0.15))"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">
                Aswal <span className="text-primary">Web Studio</span>
              </span>
            </Link>
            <p className="text-sm text-foreground/70">
              We design and engineer bespoke web solutions that accelerate business growth and deliver high-impact digital experiences.
            </p>
            <div className="flex flex-col space-y-2.5 pt-2 text-xs text-foreground/80 font-medium">
              <a href="tel:+917304610459" className="flex items-center hover:text-primary transition-colors">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +91 7304610459
              </a>
              <a href="mailto:aman9lion@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                aman9lion@gmail.com
              </a>
              <a href="https://wa.me/917304610459?text=Hi!%20I'm%20interested%20in%20a%20website%20quote%20from%20Aswal%20Web%20Studio." target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors text-primary font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 mr-2">
                  <path d="M12.031 2c-5.502 0-9.97 4.468-9.97 9.97 0 1.758.459 3.478 1.332 4.988L2.05 22l5.184-1.361a9.907 9.907 0 004.798 1.233H12.038c5.502 0 9.97-4.468 9.97-9.97a9.96 9.96 0 00-2.92-7.05 9.9 9.9 0 00-7.057-2.882zm0 1.5c4.686 0 8.47 3.784 8.47 8.47a8.423 8.423 0 01-2.482 5.986 8.37 8.37 0 01-5.988 2.482H12.025a8.4 8.4 0 01-4.083-1.05l-.293-.174-3.037.798.812-2.966-.19-.304a8.397 8.397 0 01-1.256-4.22c.002-4.686 3.787-8.47 8.472-8.47zm-3.664 3.518c-.13 0-.28.01-.424.03-.186.024-.395.074-.57.25-.262.261-.99 1.002-.99 2.443 0 1.442 1.05 2.836 1.198 3.038.148.2 2.057 3.25 5.02 4.437.893.357 1.488.489 2.012.56.76.103 1.455.08 2.003-.002.597-.09 1.764-.72 2.012-1.417.25-.696.25-1.293.175-1.417-.075-.125-.274-.199-.572-.349-.3-.15-1.764-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.3-.77 1.01-.945 1.21-.174.2-.348.224-.647.074-.3-.15-1.267-.47-2.413-1.492-.892-.796-1.496-1.78-1.67-2.08-.174-.3-.018-.462.13-.61.134-.134.3-.35.45-.523.148-.174.198-.3.298-.5.1-.2.05-.373-.025-.523-.075-.15-.67-1.624-.919-2.222-.24-.582-.486-.503-.67-.512z"/>
                </svg>
                WhatsApp Quick Chat
              </a>
              <a href="https://www.instagram.com/aswalwebstudio/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2 text-primary">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                @aswalwebstudio
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/design-services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Brochure Design
                </Link>
              </li>
              <li>
                <Link href="/design-services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Business Card Design
                </Link>
              </li>
              <li>
                <Link href="/design-services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Branding Combo Offer
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Agency</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscription */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Stay Updated</h3>
            <p className="text-sm text-foreground/70">
              Subscribe to our newsletter for free guides on scaling your digital business and design insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 mt-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-sm border border-border bg-background rounded-xl focus:outline-none focus:border-primary text-foreground"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-hover rounded-xl transition-all cursor-pointer disabled:opacity-50"
              >
                {loading ? '...' : <Send className="h-4 w-4" />}
              </button>
            </form>
            {subscribed && (
              <p className="flex items-center text-xs text-success mt-2 font-medium">
                <CheckCircle className="h-3 w-3 mr-1" />
                Thanks for subscribing!
              </p>
            )}
          </div>

        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/50">
            &copy; {new Date().getFullYear()} Aswal Web Studio. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs text-foreground/50 hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-foreground/50 hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
