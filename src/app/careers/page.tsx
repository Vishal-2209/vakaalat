'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight } from "lucide-react";

const jobs: {
  title: string;
  department: string;
  location: string;
  type: string;
  meta?: string;
}[] = [];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Careers at Vakaalat
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Shape the <span className="text-accent">Future of Law</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We are building the digital backbone for the Indian legal system. Join us in making justice more accessible and efficient.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center py-12 bg-white/5 rounded-3xl border border-white/10">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-white/40">
                <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Open Positions</h3>
            <p className="text-white/60 max-w-md mx-auto">
                We currently don't have any open roles, but we're always looking for talent. Check back soon!
            </p>
        </div>

        {/* Perks Section */}
        <div className="mt-32 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Join <span className="text-accent">Us?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    "Impact Real Lives", 
                    "Competitive Salary", 
                    "Health Insurance", 
                    "Learning Budget",
                    "Flexible Hours",
                    "Team Retreats",
                    "Latest Hardware",
                    "Open Culture"
                ].map((perk, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-medium hover:border-accent/50 transition-colors"
                    >
                        {perk}
                    </motion.div>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
