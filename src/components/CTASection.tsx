'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-bold mb-8"
        >
          Ready to <span className="text-accent">Modernize?</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          Join the future of legal tech tailored for Indian advocates. Simplify your workflow today.
        </motion.p>
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services">
             <Button variant="accent" size="lg" className="w-full sm:w-auto">Explore Services</Button>
          </Link>
          <Link href="/contact">
             <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Us</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
