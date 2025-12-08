'use client';

import { motion } from 'framer-motion';
import { Zap, Smartphone, ShieldCheck, Globe, Users, Briefcase } from 'lucide-react';

const features = [
  {
    title: "Built for Indian Lawyers",
    description: "Designed for the messy and chaotic reality of Indian courts, clerks, and clients. Not a generic western clone.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Practical, Not Over-Engineered",
    description: "Streamlined for speed and minimal learning curve. Tools that work every day without friction.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Reduces Dependency",
    description: "Makes you independent of clerks and manual systems. Go digital, stay in control.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Unified Ecosystem",
    description: "Solves the entire workflow end-to-end in one place. No need for multiple apps.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Strong Security",
    description: "Encrypted storage and controlled access with stricter compliance than most generic SaaS tools.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Offline-Friendly Design",
    description: "Handles weak connectivity common in courts without breaking your workflow.",
    icon: <Smartphone className="w-6 h-6" />
  }
];

export function FeatureSection() {
  return (
    <section className="py-24 bg-background px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-accent">Vakaalat?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/60">
                Focusing on what actually differentiates us in the legal tech space.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/[0.07] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-accent">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
