'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { TeamSection } from "@/components/TeamSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-32"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Our Story</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Elevating Legal <span className="text-accent">Practice</span></h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed font-light">
            Vakaalat was born from a need to modernize the Indian legal ecosystem. We empower lawyers with tools to manage their practice without dependency or delays.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
            >
                <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
                <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                    <p>
                        To build a unified digital ecosystem that empowers lawyers with reliable, efficient, and practical technological tools.
                    </p>
                    <p>
                        We enable them to manage cases, clients, documents, communication, and workflow without dependency, delays, or outdated systems. Vakaalat delivers solutions that are simple, scalable, and built for the realities of the Indian legal industry.
                    </p>
                </div>
            </motion.div>
             <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
            >
                <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                     <img src="/images/mission.png" alt="Vakaalat Mission" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                     <span className="relative z-10 text-white font-medium text-lg">Building the Future of Law</span>
                </div>
            </motion.div>
        </div>



        {/* Core Values */}
        <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Our Core <span className="text-accent">Values</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Lawyer-First",
                        description: "Every feature we build is designed to solve real problems faced by Indian practitioners daily."
                    },
                    {
                        title: "Simplicity",
                        description: "We believe technology should be a tool, not a burden. No complex learning curves."
                    },
                    {
                        title: "Integrity & Trust",
                        description: "We uphold the highest standards of data security and confidentiality."
                    }
                ].map((value, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all hover:-translate-y-1"
                    >
                        <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                        <p className="text-white/60 leading-relaxed">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        
        <TeamSection />

      </div>

      <Footer />
    </main>
  );
}
