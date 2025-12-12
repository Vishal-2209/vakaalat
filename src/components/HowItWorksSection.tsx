'use client';

import { motion } from 'framer-motion';
import { MessageSquare, User, FileText, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "1. Law Connect",
    description: "Get matched with verified clients and let them book consultations directly. No back-and-forth."
  },
  {
    icon: <User className="w-8 h-8" />,
    title: "2. Law Profile",
    description: "Your digital headquarters. As your practice grows, manage cases and billing in one unified dashboard."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "3. Law Draft",
    description: "Scale up with AI. Automate your documentation and reduce drafting time by 80%."
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "4. Unified Success",
    description: "Experience a seamless, integrated practice where data flows between all your tools effortlessly."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background px-6 border-t border-foreground/5">
      <div className="container mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                The <span className="text-accent">Vakaalat</span> Workflow
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/60">
                From client intake to final decree, our suite covers every step of your legal journey.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative glass-card p-8 rounded-3xl group hover:-translate-y-1 transition-transform duration-300"
                >
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-6 mx-auto lg:mx-0 shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 text-center lg:text-left">{step.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed text-center lg:text-left">{step.description}</p>
                    
                    {/* Connector Line (Desktop Only) */}
                    {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-[4.5rem] -right-4 w-8 h-[2px] bg-gradient-to-r from-accent/30 to-transparent z-10" />
                    )}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
