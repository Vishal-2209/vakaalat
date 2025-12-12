'use client';

import { motion } from 'framer-motion';
import { Zap, Smartphone, ShieldCheck, Globe, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

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
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Intro */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-3xl mx-auto"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet-600">Run Your Practice.</span></h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
                Vakaalat replaces fragmented tools with a single, powerful operating system designed for the future of Indian law.
            </p>
        </motion.div>

        {/* Feature Highlights (Replacing Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-2 md:col-span-1 glass-card rounded-[2rem] p-8 flex flex-col justify-center items-center text-center group hover:border-black/10 transition-colors"
             >
                 <ShieldCheck className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                 <div className="text-lg font-bold text-foreground mb-1">Automated Updates</div>
                 <div className="text-sm text-foreground/60 font-medium">Keep Clients Informed</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card rounded-[2rem] p-8 flex flex-col justify-center items-center text-center group hover:border-black/10 transition-colors"
             >
                 <Globe className="w-10 h-10 text-foreground mb-4 group-hover:scale-110 transition-transform duration-300" />
                 <div className="text-lg font-bold text-foreground mb-1">Real-Time Sync</div>
                 <div className="text-sm text-foreground/60 font-medium">Access Anywhere</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-[2rem] p-8 flex flex-col justify-center items-center text-center group hover:border-black/10 transition-colors"
             >
                 <Zap className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                 <div className="text-lg font-bold text-foreground mb-1">Instant Search</div>
                 <div className="text-sm text-foreground/60 font-medium">Find Files Fast</div>
             </motion.div>
             <Link href="/contact" className="contents">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="col-span-2 md:col-span-1 bg-foreground text-white rounded-[2rem] p-8 flex flex-col justify-center items-center text-center shadow-xl shadow-black/10 group cursor-pointer overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-xl font-bold mb-3 relative z-10">Request Access</div>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform relative z-10">
                        <span className="text-lg">→</span>
                    </div>
                </motion.div>
             </Link>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[400px]">
          {/* Card 1: Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 glass-card rounded-[2.5rem] p-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
          >
             <div className="relative z-10 max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-foreground text-white flex items-center justify-center mb-6 shadow-xl shadow-black/10">
                    <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Lawyer-Client Matching</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">Stop chasing leads. Our intelligent engine matches you with clients who need your expertise, allowing them to book consultations directly.</p>
             </div>
             
             {/* Visual: Consultation Request Card */}
             <div className="hidden md:block absolute right-0 bottom-0 w-[45%] h-[85%] bg-subtle rounded-tl-[3rem] border-t border-l border-white/50 translate-y-8 translate-x-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 shadow-inner z-0">
                <div className="w-full h-full p-8 font-sans">
                    <div className="w-full bg-white rounded-3xl shadow-lg border border-black/5 p-6 relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-white bg-accent px-2 py-1 rounded-full shadow-md shadow-accent/20">NEW REQUEST</div>
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">Consultation</div>
                        <div className="text-lg font-bold text-gray-900 mb-4">Property Dispute</div>
                        
                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex flex-col items-center justify-center border border-orange-200">
                                <span className="text-[10px] font-bold leading-none">NOV</span>
                                <span className="text-base font-bold leading-none">14</span>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-900">10:00 AM</div>
                                <div className="text-[10px] text-gray-500">Video Call</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                             <button className="py-2.5 bg-foreground text-white rounded-xl text-xs font-bold hover:bg-black/80 transition-colors">Accept</button>
                             <button className="py-2.5 bg-white border border-gray-200 text-foreground rounded-xl text-xs font-bold hover:bg-gray-50 transition-colors">Reschedule</button>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

           {/* Medium Card: Offline Mode */}
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
             transition={{ delay: 0.5 }}
            className="p-10 rounded-[2.5rem] bg-accent text-white flex flex-col justify-between group overflow-hidden relative shadow-xl shadow-accent/20 hover:-translate-y-1 transition-transform duration-500"
          >
             {/* Abstract background shape */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />

             <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                     <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                        <Smartphone className="w-8 h-8 text-white" />
                     </div>
                     <div className="flex gap-1.5 pt-2">
                         <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                         <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                     </div>
                 </div>
                 <h3 className="text-2xl font-bold mb-3">Offline-First</h3>
                 <p className="text-white/80 text-[15px] leading-relaxed">No signal in court basement? No problem. We sync when you reconnect.</p>
             </div>
             
             <div className="mt-8 bg-black/20 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                 <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center border-2 border-white/20 shadow-lg shadow-green-500/20">
                         <div className="w-3 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1" />
                     </div>
                     <div className="text-xs font-medium">
                         <div className="opacity-60 text-white">Status</div>
                         <div className="text-white">Syncing Changes...</div>
                     </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
