'use client';

import { motion } from 'framer-motion';
import { User, Users, Building2, ArrowRight, Briefcase } from 'lucide-react';
import Link from 'next/link';

const segments = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Independent Advocates",
    description: "For the solo practitioner managing multiple courts. Organize your dates, clients, and chaos in one app.",
    link: "/services"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Law Firms & Chambers",
    description: "Collaborate with your juniors and partners. Assign cases, track tasks, and manage billing centrally.",
    link: "/services"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Legal Consultants",
    description: "Manage advisory retainers and one-off consultations with ease. Streamline your practice.",
    link: "/services"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background px-6 border-t border-foreground/5">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for <span className="text-accent">Every Scale.</span></h2>
            <p className="max-w-2xl mx-auto text-foreground/60 text-lg">
                Whether you are arguing your first case or managing a Tier-1 firm, Vakaalat adapts to your workflow.
            </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {segments.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {s.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{s.title}</h3>
              <p className="text-foreground/60 mb-8 leading-relaxed font-medium flex-grow">{s.description}</p>
              
              <Link href={s.link} className="flex items-center gap-2 text-foreground font-bold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
