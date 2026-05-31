'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { Menu, X, Sun, Moon, Terminal, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Web Services' },
  { href: '/design-services', label: 'Design Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2.5 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-slate-100/80 dark:bg-slate-800/40 p-1 flex items-center justify-center border border-slate-200/40 dark:border-slate-700/40 shadow-sm shadow-primary/5 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="AswalWebStudio Logo"
              width={28}
              height={28}
              className="object-contain filter drop-shadow(0 2px 4px rgba(37, 99, 235, 0.15))"
            />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Aswal<span className="text-primary">WebStudio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-7">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs lg:text-sm font-medium transition-colors duration-200 py-1 hover:text-primary ${
                  isActive ? 'text-primary font-semibold' : 'text-foreground/80'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                     layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-1.5 lg:space-x-3">
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/aswalwebstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 lg:p-2 rounded-xl border border-border hover:bg-card text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Instagram Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 lg:h-5 lg:w-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 lg:p-2 rounded-xl border border-border hover:bg-card text-foreground/80 hover:text-foreground transition-all duration-200 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="h-4 w-4 lg:h-5 lg:w-5" />
            ) : theme === 'dark' ? (
              <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-slate-700" />
            )}
          </button>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917304610459?text=Hi!%20I'm%20interested%20in%20a%20website%20quote%20from%20Aswal%20Web%20Studio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-2.5 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-600/15 hover:shadow-emerald-600/25 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5 h-3.5 w-3.5 lg:h-4 lg:w-4">
              <path d="M12.031 2c-5.502 0-9.97 4.468-9.97 9.97 0 1.758.459 3.478 1.332 4.988L2.05 22l5.184-1.361a9.907 9.907 0 004.798 1.233H12.038c5.502 0 9.97-4.468 9.97-9.97a9.96 9.96 0 00-2.92-7.05 9.9 9.9 0 00-7.057-2.882zm0 1.5c4.686 0 8.47 3.784 8.47 8.47a8.423 8.423 0 01-2.482 5.986 8.37 8.37 0 01-5.988 2.482H12.025a8.4 8.4 0 01-4.083-1.05l-.293-.174-3.037.798.812-2.966-.19-.304a8.397 8.397 0 01-1.256-4.22c.002-4.686 3.787-8.47 8.472-8.47zm-3.664 3.518c-.13 0-.28.01-.424.03-.186.024-.395.074-.57.25-.262.261-.99 1.002-.99 2.443 0 1.442 1.05 2.836 1.198 3.038.148.2 2.057 3.25 5.02 4.437.893.357 1.488.489 2.012.56.76.103 1.455.08 2.003-.002.597-.09 1.764-.72 2.012-1.417.25-.696.25-1.293.175-1.417-.075-.125-.274-.199-.572-.349-.3-.15-1.764-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.3-.77 1.01-.945 1.21-.174.2-.348.224-.647.074-.3-.15-1.267-.47-2.413-1.492-.892-.796-1.496-1.78-1.67-2.08-.174-.3-.018-.462.13-.61.134-.134.3-.35.45-.523.148-.174.198-.3.298-.5.1-.2.05-.373-.025-.523-.075-.15-.67-1.624-.919-2.222-.24-.582-.486-.503-.67-.512z"/>
            </svg>
            WhatsApp
          </a>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-2.5 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200 shadow-lg shadow-accent/15 hover:shadow-accent/25 group"
          >
            Contact Us
            <ArrowRight className="ml-1.5 h-3.5 w-3.5 lg:h-4 lg:w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile controls (theme + instagram + hamburger) */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Mobile Instagram Link */}
          <a
            href="https://www.instagram.com/aswalwebstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl border border-border bg-card/50 text-foreground/80"
            aria-label="Instagram Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border border-border bg-card/50 text-foreground/80 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {!mounted ? (
              <div className="h-5 w-5" />
            ) : theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-border bg-card/50 text-foreground/80 hover:text-foreground"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg"
          >
            <div className="space-y-1 px-4 py-6">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-foreground/80 hover:bg-card hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border mt-4 px-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/917304610459?text=Hi!%20I'm%20interested%20in%20a%20website%20quote%20from%20Aswal%20Web%20Studio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md shadow-emerald-600/15"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-2 h-5 w-5">
                    <path d="M12.031 2c-5.502 0-9.97 4.468-9.97 9.97 0 1.758.459 3.478 1.332 4.988L2.05 22l5.184-1.361a9.907 9.907 0 004.798 1.233H12.038c5.502 0 9.97-4.468 9.97-9.97a9.96 9.96 0 00-2.92-7.05 9.9 9.9 0 00-7.057-2.882zm0 1.5c4.686 0 8.47 3.784 8.47 8.47a8.423 8.423 0 01-2.482 5.986 8.37 8.37 0 01-5.988 2.482H12.025a8.4 8.4 0 01-4.083-1.05l-.293-.174-3.037.798.812-2.966-.19-.304a8.397 8.397 0 01-1.256-4.22c.002-4.686 3.787-8.47 8.472-8.47zm-3.664 3.518c-.13 0-.28.01-.424.03-.186.024-.395.074-.57.25-.262.261-.99 1.002-.99 2.443 0 1.442 1.05 2.836 1.198 3.038.148.2 2.057 3.25 5.02 4.437.893.357 1.488.489 2.012.56.76.103 1.455.08 2.003-.002.597-.09 1.764-.72 2.012-1.417.25-.696.25-1.293.175-1.417-.075-.125-.274-.199-.572-.349-.3-.15-1.764-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.3-.77 1.01-.945 1.21-.174.2-.348.224-.647.074-.3-.15-1.267-.47-2.413-1.492-.892-.796-1.496-1.78-1.67-2.08-.174-.3-.018-.462.13-.61.134-.134.3-.35.45-.523.148-.174.198-.3.298-.5.1-.2.05-.373-.025-.523-.075-.15-.67-1.624-.919-2.222-.24-.582-.486-.503-.67-.512z"/>
                  </svg>
                  WhatsApp Chat
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all shadow-md shadow-accent/15"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
