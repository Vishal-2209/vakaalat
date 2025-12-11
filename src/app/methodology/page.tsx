'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Lock, Zap, ArrowRight, GitMerge, Layers, Boxes, XCircle, CheckCircle } from 'lucide-react';
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function MethodologyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 pb-20" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <motion.div 
            style={{ y }} 
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" 
        />
        
        <div className="container mx-auto relative z-10 text-center max-w-5xl">
          <motion.div
             initial="hidden"
             animate="visible"
             variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 text-accent font-bold text-sm mb-8 border border-accent/10">
              <Zap className="w-4 h-4 fill-current" />
              The Engine Room
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">Methodology</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium">
              We don't just build apps. We engineer operational flows that eliminate friction from the modern legal practice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Reality Check (Problem vs Solution) */}
      <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 bg-card rounded-[3rem] p-10 md:p-16 border border-black/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-transparent to-green-500" />
                  
                  {/* The Old Way */}
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="space-y-8"
                  >
                      <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-foreground/40 mb-8 flex items-center gap-4">
                          <XCircle className="w-8 h-8 text-red-400" />
                          The Old Way
                      </motion.h3>
                      <ul className="space-y-6">
                         {[
                             "Fragmented WhatsApp threads",
                             "Lost documents in email chains",
                             "Manual invoice tracking",
                             "Chaotic court dates tracking"
                         ].map((item, i) => (
                             <motion.li variants={fadeInUp} key={i} className="flex items-center gap-4 text-lg text-foreground/50 font-medium line-through decoration-red-400/30">
                                 <div className="w-2 h-2 rounded-full bg-red-400/50" />
                                 {item}
                             </motion.li>
                         ))}
                      </ul>
                  </motion.div>

                  {/* The Vakaalat Way */}
                   <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={staggerContainer}
                      className="space-y-8 md:border-l md:border-black/5 md:pl-12"
                    >
                      <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                          The Vakaalat Way
                      </motion.h3>
                      <ul className="space-y-6">
                         {[
                             "Centralized, Context-Aware Chat",
                             "Smart Document Vault & Search",
                             "Automated Billing & Reminders",
                             "Real-time Court Sync"
                         ].map((item, i) => (
                             <motion.li variants={fadeInUp} key={i} className="flex items-center gap-4 text-lg text-foreground font-bold">
                                 <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                                     <CheckCircle className="w-4 h-4" />
                                 </div>
                                 {item}
                             </motion.li>
                         ))}
                      </ul>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* The Visual Pipeline */}
      <section className="py-24 relative">
          <div className="container mx-auto px-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-center mb-24"
              >
                  The Digital Pipeline
              </motion.h2>
              
            {/* Connecting Line - Animated */}
            <motion.div 
                className="hidden lg:block absolute left-1/2 top-40 bottom-20 w-0.5 bg-accent/20 -z-10 origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <div className="space-y-32">
                {[
                    {
                        step: "01",
                        title: "Intake & Connection",
                        subtitle: "Law Connect",
                        description: "The journey begins with client intake. We've replaced the chaotic notes with a structured communication layer that automatically sorts and prioritizes incoming requests.",
                        icon: <Users className="w-8 h-8 text-white" />,
                        color: "bg-accent",
                        gradient: "from-violet-500 to-indigo-500"
                    },
                    {
                        step: "02",
                        title: "Management & Profile",
                        subtitle: "Law Profile",
                        description: "Data flows directly into the management layer. Cases are tracked, deadlines are automated, and successful outcomes automatically update your public reputation profile.",
                        icon: <Layers className="w-8 h-8 text-white" />,
                        color: "bg-yellow-400",
                        gradient: "from-orange-400 to-yellow-500"
                    },
                    {
                        step: "03",
                        title: "Execution & Drafting",
                        subtitle: "Law Draft",
                        description: "Finally, the system uses stored case data to auto-draft legal documents. No manual re-entry. What used to take 3 hours now takes 15 minutes.",
                        icon: <GitMerge className="w-8 h-8 text-white" />,
                        color: "bg-blue-500",
                        gradient: "from-blue-500 to-cyan-500"
                    }
                ].map((step, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                        className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 text-center lg:text-left">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-8xl font-black text-foreground/5 mb-4 leading-none"
                            >
                                {step.step}
                            </motion.div>
                            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white border border-black/5 shadow-sm`}>
                                <span className={`w-2 h-2 rounded-full ${step.color} animate-pulse`}></span>
                                {step.subtitle}
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{step.title}</h2>
                            <p className="text-xl text-foreground/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                {step.description}
                            </p>
                        </div>

                        <div className="relative w-full lg:w-1/2 flex justify-center group">
                            <motion.div 
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-br from-white to-subtle border border-black/5 shadow-2xl flex items-center justify-center relative z-10 p-12"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 rounded-[3rem]`} />
                                <motion.div 
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    className={`w-28 h-28 rounded-[2rem] bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl shadow-accent/20 transition-transform duration-500`}
                                >
                                    {step.icon}
                                </motion.div>
                                
                                {/* Decorators */}
                                <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-black/5" />
                                <div className="absolute bottom-12 left-12 w-3 h-3 rounded-full bg-black/5" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
          </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="py-24 border-t border-black/5 bg-foreground/5">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Unshakable Principles</h2>
                <p className="text-xl text-foreground/60 max-w-2xl mx-auto">The foundation upon which we build every line of code.</p>
            </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Boxes className="w-8 h-8 text-accent" />,
                title: "Modular Architecture",
                description: "Our tools work independently but perform better together. Start with one, expand to all."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "Zero-Friction Design",
                description: "We count clicks. If a task takes more than 3 user interactions, we send it back to the whiteboard."
              },
              {
                icon: <Lock className="w-8 h-8 text-accent" />,
                title: "Data Sovereignty",
                description: "Your client data stays yours. We use siloed database structures to ensure maximum privacy."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group p-10 bg-background rounded-[2.5rem] border border-black/5 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center border border-black/5 mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight relative z-10">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-lg relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
