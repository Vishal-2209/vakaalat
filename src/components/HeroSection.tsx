'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';


export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-x-hidden min-h-[90vh] flex flex-col justify-center">
        
        {/* Ambient Background Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 shadow-sm backdrop-blur-md text-sm font-semibold mb-8 text-foreground/80 hover:bg-white/80 transition-colors cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            New Era of Legal Tech
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.95] text-foreground mb-8 text-center mx-auto max-w-6xl relative"
          >
            Powering the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet-600 pb-2">Modern Lawyer.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            A unified ecosystem to manage cases, clients, and courts. <br className="hidden md:block"/>Built specifically for the Indian legal system.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
             <Link href="/contact">
                 <Button variant="default" size="lg" className="rounded-full px-10 h-14 text-base bg-foreground text-white hover:bg-foreground/90 shadow-xl shadow-accent/10 hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300">
                    Get Started
                 </Button>
             </Link>
             <Link href="/methodology">
                <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-base border-black/5 bg-white/50 backdrop-blur-sm hover:bg-white text-foreground shadow-sm hover:shadow-md transition-all duration-300">
                    View Methodology
                </Button>
             </Link>
          </motion.div>

        </div>
    </section>
  );
}
