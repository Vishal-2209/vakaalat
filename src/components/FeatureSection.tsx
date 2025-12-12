'use client';

import { motion } from 'framer-motion';
import { Zap, Smartphone, ShieldCheck, Globe, Users, Briefcase } from 'lucide-react';

const features = [
{
    title: "Best Lawyer Management Software",
    description: "Designed for the messy and chaotic reality of Indian courts. Manage your entire practice from a single dashboard.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Law Firm Automation Tool",
    description: "Automate repetitive tasks and streamline your workflow. Reduce manual errors and focus on winning cases.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Advocate Case Tracking App",
    description: "Track hearing dates, orders, and case status updates automatically. Never miss a deadline again.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Legal Workflow Software",
    description: "A unified ecosystem for document management, client intake, and billing. No need for multiple apps.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Secure Client Data",
    description: "Bank-grade encryption for all your case files and client communications. Your data stays private.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Mobile-First for Advocates",
    description: "Access your cases on the go. Handles weak connectivity in court complexes seamlessly.",
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
