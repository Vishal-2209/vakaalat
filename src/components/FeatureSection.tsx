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
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Intro */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center max-w-3xl mx-auto"
        >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Everything you need to <br/> <span className="text-accent">Run Your Practice.</span></h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
                Vakaalat replaces your fragmented tools with a single, powerful operating system designed for the future of Indian law.
            </p>
        </motion.div>

        {/* Stats Row (Small Cards) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="col-span-2 md:col-span-1 bg-white rounded-[1.5rem] p-6 border border-black/5 flex flex-col justify-center items-center text-center shadow-sm"
             >
                 <div className="text-4xl font-bold text-foreground mb-1">500+</div>
                 <div className="text-sm text-foreground/60 font-medium">Lawyers Onboarded</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[1.5rem] p-6 border border-black/5 flex flex-col justify-center items-center text-center shadow-sm"
             >
                 <div className="text-4xl font-bold text-accent mb-1">98%</div>
                 <div className="text-sm text-foreground/60 font-medium">Time Saved</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-[1.5rem] p-6 border border-black/5 flex flex-col justify-center items-center text-center shadow-sm"
             >
                 <div className="text-4xl font-bold text-foreground mb-1">24/7</div>
                 <div className="text-sm text-foreground/60 font-medium">Support</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="col-span-2 md:col-span-1 bg-black text-white rounded-[1.5rem] p-6 flex flex-col justify-center items-center text-center shadow-lg shadow-black/20"
             >
                 <div className="text-xl font-bold mb-2">Join Today</div>
                 <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-lg">→</span>
                 </div>
             </motion.div>
        </div>

        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {/* Card 1: Large Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-black/5 relative overflow-hidden group shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
          >
             <div className="relative z-10 max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6 shadow-xl shadow-black/20">
                    <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Lawyer-Centric Design</h3>
                <p className="text-foreground/60 text-lg leading-relaxed">Built for the messy reality of Indian courts. Tracks "Next Dates" effectively.</p>
             </div>
             
             {/* Visual: Case Card */}
             <div className="hidden md:block absolute right-0 bottom-0 w-[45%] h-[85%] bg-subtle rounded-tl-[3rem] border-t border-l border-black/5 translate-y-8 translate-x-8 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500 shadow-inner z-0">
                <div className="w-full h-full p-8 font-sans">
                    <div className="w-full bg-white rounded-3xl shadow-lg border border-black/5 p-6 relative">
                        <div className="absolute top-4 right-4 text-[10px] font-bold text-white bg-green-500 px-2 py-1 rounded-full">ACTIVE</div>
                        <div className="text-xs text-gray-400 font-bold uppercase mb-1">Case No. 45/2024</div>
                        <div className="text-lg font-bold text-gray-900 mb-4">Mehta vs. State</div>
                        
                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex flex-col items-center justify-center border border-orange-200">
                                <span className="text-[10px] font-bold leading-none">NOV</span>
                                <span className="text-base font-bold leading-none">14</span>
                            </div>
                            <div>
                                <div className="text-xs font-bold text-gray-900">Next Hearing</div>
                                <div className="text-[10px] text-gray-500">High Court, Hall 4</div>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-black text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors">View Case Details</button>
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
            className="p-10 rounded-[2.5rem] bg-accent text-white hover:bg-accent/90 transition-all flex flex-col justify-between group overflow-hidden relative shadow-lg shadow-accent/20"
          >
             <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                     <Smartphone className="w-12 h-12 opacity-80 group-hover:scale-110 transition-transform" />
                     <div className="flex gap-1">
                         <div className="w-1.5 h-3 bg-white/20 rounded-full" />
                         <div className="w-1.5 h-4 bg-white/40 rounded-full" />
                         <div className="w-1.5 h-5 bg-white rounded-full animate-pulse" />
                     </div>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Offline-First</h3>
                 <p className="text-white/80 text-sm leading-relaxed">No signal in court basement? No problem. We sync when you reconnect.</p>
             </div>
             
             <div className="mt-8 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                 <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center border-2 border-white/20">
                         <div className="w-3 h-2 border-b-2 border-r-2 border-white rotate-45 mb-1" />
                     </div>
                     <div className="text-xs font-medium">
                         <div className="opacity-60">Status</div>
                         <div>Syncing Changes...</div>
                     </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
