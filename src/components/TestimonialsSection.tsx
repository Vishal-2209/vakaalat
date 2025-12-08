'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Adv. Rajesh Sharma",
    role: "High Court, Delhi",
    content: "Vakaalat has completely streamlined how I manage my client communications. No more scattered WhatsApp messages. It's professional and secure.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    role: "Legal Associate",
    content: "The Law Connect features are a lifesaver. Scheduling appointments and sending automated updates to clients saves me hours every week.",
    rating: 5
  },
  {
    name: "Amitabh Verma",
    role: "Senior Counsel",
    content: "Finally, a platform that understands the Indian legal ecosystem. Data sovereignty and localized features make it the only choice for my firm.",
    rating: 5
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background px-6 border-t border-white/5">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Trusted by <span className="text-accent">Advocates</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <div className="font-bold">{t.name}</div>
                <div className="text-sm text-white/40">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
