'use client';

import Link from 'next/link';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <Link href="/" className="text-2xl font-bold tracking-tighter text-white z-50 relative">
        Vakaalat<span className="text-accent">.</span>
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
        <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
        <Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link>
        <Link href="/about" className="hover:text-white transition-colors">About</Link>
        <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/services">
            <Button variant="accent" className="hidden md:inline-flex">Get Started</Button>
        </Link>
        
        {/* Mobile Menu Toggle */}
        <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
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
            <Button variant="accent" className="mt-4">Shop Now</Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
