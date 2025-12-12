'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { TeamSection } from "@/components/TeamSection";
import { Heart, Target, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 pb-20">
      <Navbar />

       {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Story Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-32"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Our Story</div>
          <h1 className="text-6xl md:text-9xl font-bold mb-12 tracking-tighter">
            We are <span className="text-accent">Vakaalat</span>.
          </h1>
          <p className="text-2xl md:text-4xl text-foreground font-medium leading-relaxed font-heading max-w-4xl mx-auto">
            Born from the chaos of Indian courts. <br/>
            Engineered for the clarity of modern practice.
          </p>
        </motion.div>

        {/* Mission Statement (Manifesto Style) */}
        <div className="bg-foreground text-background rounded-[3rem] p-12 md:p-24 mb-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]" />
             <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">The Mission</h2>
                    <div className="space-y-6 text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                        <p>
                            We saw a gap. While the rest of the world digitized, legal professionals in India were still stuck with paperwork, fragmented WhatsApp chats, and disconnected systems.
                        </p>
                        <p>
                            Vakaalat is our answer. A unified digital ecosystem that respects the complexity of Indian law while providing the simplicity of modern tech.
                        </p>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                         <div className="text-5xl font-bold text-accent mb-2">3+</div>
                         <div className="text-white/60">Core Products</div>
                     </div>
                     <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm mt-8">
                         <div className="text-5xl font-bold text-accent mb-2">100%</div>
                         <div className="text-white/60">Data Privacy</div>
                     </div>
                 </div>
             </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 tracking-tight">Our Core <span className="text-accent">DNA</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Target className="w-8 h-8 text-white" />,
                        color: "bg-red-500",
                        title: "Lawyer-Obsessed",
                        description: "We don't build features. We solve problems. If it doesn't help a lawyer save time, it doesn't exist."
                    },
                    {
                        icon: <Sparkles className="w-8 h-8 text-black" />,
                        color: "bg-yellow-400",
                        title: "Radical Simplicity",
                        description: "Complexity is easy. Simple is hard. We strive for the elegance of a single click."
                    },
                    {
                        icon: <Heart className="w-8 h-8 text-white" />,
                        color: "bg-accent",
                        title: "Trust Above All",
                        description: "We are custodians of your reputation. Security and ethics are not features; they are our foundation."
                    }
                ].map((value, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card p-10 rounded-[2.5rem] border border-black/5 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2 group"
                    >
                        <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                            {value.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4 tracking-tight">{value.title}</h3>
                        <p className="text-foreground/60 leading-relaxed text-lg">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Our Reach / Impact */}
        <div className="mb-32 glass-card p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
             <div className="relative z-10">
                 <h2 className="text-3xl md:text-5xl font-bold mb-12">Building for <span className="text-accent">Bharat</span></h2>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                     <div>
                         <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">25+</div>
                         <div className="text-foreground/50 font-medium">High Courts</div>
                     </div>
                     <div>
                         <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">600+</div>
                         <div className="text-foreground/50 font-medium">District Courts</div>
                     </div>
                     <div>
                         <div className="text-4xl md:text-6xl font-bold text-foreground mb-2">12</div>
                         <div className="text-foreground/50 font-medium">Languages</div>
                     </div>
                     <div>
                         <div className="text-4xl md:text-6xl font-bold text-accent mb-2">1M+</div>
                         <div className="text-foreground/50 font-medium">Judgments</div>
                     </div>
                 </div>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-accent/5 to-transparent rounded-full blur-3xl -z-0 pointer-events-none" />
        </div>

        {/* Why Vakaalat Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Vakaalat?</h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
                The legal profession is built on precedent, but it shouldn't be trapped by it. 
                We believe that technology shouldn't just digitize old habits—it should unlock new possibilities. 
                Vakaalat is our commitment to giving Indian advocates the superpowers they deserve.
            </p>
        </div>
        
        {/* <TeamSection /> - Hidden per user request */}

      </div>

      <Footer />
    </main>
  );
}
