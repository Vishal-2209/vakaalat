'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';


export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm text-sm font-semibold mb-8">
            <span className="text-accent mr-2">●</span> New Era of Legal Tech
          </div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-extrabold tracking-tighter leading-[0.95] text-foreground mb-8 text-center mx-auto max-w-5xl"
          >
            Powering the <br/>
            <span className="text-accent">Modern Lawyer.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            A unified ecosystem to manage cases, clients, and courts. Built specifically for the Indian legal system.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
             <Button variant="default" size="lg" className="rounded-xl px-8 h-12 text-base bg-black text-white hover:bg-black/80 shadow-lg shadow-black/20">
                Get Started
             </Button>
             <Link href="/methodology">
                <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base border-black/10 bg-white hover:bg-gray-50 text-foreground">
                    View Methodology
                </Button>
             </Link>
          </motion.div>

        </div>
    </section>
  );
}
