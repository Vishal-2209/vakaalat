'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-2 text-white">
            Vakaalat<span className="text-accent">.</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-white/80 tracking-wide mb-8">
            Powering the Modern Lawyer.
          </p>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg text-white/50 mb-10 leading-relaxed"
        >
          Manage cases, clients, documents, and hearings in one platform. Secure digital workspace for advocates, law firms, and legal professionals.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services">
            <Button variant="accent" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">Explore Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">Contact Us</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
