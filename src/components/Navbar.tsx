'use client';

import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-4 left-4 right-4 md:left-8 md:right-8 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 rounded-2xl",
          scrolled ? "glass shadow-sm" : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/logo.png" alt="Vakaalat Logo" className="h-20 w-auto object-contain" />
        </Link>
        
        {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-8 py-2.5 rounded-full border border-white/40 shadow-sm">
            <Link href="/services" className="text-[15px] font-medium text-foreground/80 hover:text-accent transition-colors">Services</Link>
            <Link href="/methodology" className="text-[15px] font-medium text-foreground/80 hover:text-accent transition-colors">Methodology</Link>
            <Link href="/about" className="text-[15px] font-medium text-foreground/80 hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="text-[15px] font-medium text-foreground/80 hover:text-accent transition-colors">Contact</Link>
          </div>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden lg:inline-flex">
              <Button variant="default" className="rounded-full bg-foreground text-white hover:bg-foreground/90 px-6 h-11 text-[15px] font-medium shadow-lg shadow-black/5 hover:transform hover:scale-105 transition-all duration-300">Get Started</Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <Button 
              variant="ghost" 
              size="sm" 
              className="lg:hidden z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "Close" : "Menu"}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 text-xl font-medium"
          >
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/careers" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
              <Link href="/methodology" onClick={() => setMobileMenuOpen(false)}>Methodology</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="accent" className="mt-4 w-full">Get Started</Button>
              </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
