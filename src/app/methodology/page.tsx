'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Lock, Zap } from 'lucide-react';

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
              Our Methodology
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight">
              A Unified Ecosystem <br />
              <span className="text-white/40">Not Just Another App.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
              We don't just digitize old habits; we engineer new efficiencies. Our methodology is built on three core pillars designed specifically for the Indian legal context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Lawyer-Centric Design",
                description: "We build for the chaotic reality of courts and clerks, not for an idealized western law firm. Our tools work where you work—offline, on mobile, and on the go."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Practical Efficiency",
                description: "Lawyers hate friction. We strip away over-engineered features to focus on speed. If it doesn't save you time in 3 clicks, we don't build it."
              },
              {
                icon: <Lock className="w-8 h-8 text-accent" />,
                title: "Data Sovereignty",
                description: "Your client data is your most valuable asset. We employ military-grade encryption and ensure strict data isolation so your practice remains confidential."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Integration Section */}
      <section className="py-24 bg-white/5 px-6">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Seamless Integration</h2>
                    <div className="space-y-8">
                        {/* Integration Point 1 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex-shrink-0 flex items-center justify-center text-accent font-bold text-lg">1</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Law Connect</h3>
                                <p className="text-white/60">Handle client intake and communication. Data flows automatically into your case workspace.</p>
                            </div>
                        </div>
                        {/* Integration Point 2 */}
                        <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-white/40 font-bold text-lg border border-dashed border-white/20">2</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white/50">Law Profile (Coming Soon)</h3>
                                <p className="text-white/40">Your case history and performance metrics update your digital profile automatically, attracting better clients.</p>
                            </div>
                        </div>
                         {/* Integration Point 3 */}
                         <div className="flex gap-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-white/40 font-bold text-lg border border-dashed border-white/20">3</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white/50">Law Draft (Ideation)</h3>
                                <p className="text-white/40">AI-powered drafting will pull details directly from your case files, eliminating manual data entry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square rounded-3xl bg-black border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group">
                        <img src="/images/core.png" alt="Vakaalat Core" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="text-center relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-2">The Vakaalat Core</h4>
                            <p className="text-white/50 text-sm">Centralized Data & Logic Layer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
