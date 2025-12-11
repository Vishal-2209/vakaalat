'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle, ArrowRight, MessageSquare } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    setStatus(result);

    if (result.success) {
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 pb-20">
      <Navbar />

       {/* Background Ambience */}
       <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info Side */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:sticky lg:top-40"
            >
                <div className="mb-12">
                     <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">Contact Us</div>
                     <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        Let's Start a <br/><span className="text-accent">Conversation</span>
                     </h1>
                     <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                        Whether you are a lawyer ready to upgrade your practice or a partner looking to collaborate, we are here.
                     </p>
                </div>

                <div className="grid gap-6">
                    {[
                        {
                            icon: <Mail className="w-6 h-6" />,
                            label: "Email Support",
                            value: "support@vakaalat.in",
                            action: "mailto:support@vakaalat.in",
                            bg: "bg-blue-500/10",
                            text: "text-blue-500"
                        },
                        {
                            icon: <Phone className="w-6 h-6" />,
                            label: "Call Us",
                            value: "+91 80005 16769",
                            action: "tel:+918000516769",
                            bg: "bg-green-500/10",
                            text: "text-green-500"
                        },
                        {
                            icon: <MapPin className="w-6 h-6" />,
                            label: "HQ Location",
                            value: "Maple County 1, Ahmedabad",
                            action: "https://maps.google.com",
                            bg: "bg-orange-500/10",
                            text: "text-orange-500"
                        }
                    ].map((item, i) => (
                         <a 
                            key={i}
                            href={item.action}
                            target={item.label === 'HQ Location' ? '_blank' : '_self'}
                            className="bg-card border border-black/5 p-6 rounded-3xl flex items-center gap-6 hover:border-accent/30 hover:shadow-lg transition-all group"
                         >
                            <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm text-foreground/40 font-bold uppercase tracking-wide mb-1 opacity-80">{item.label}</div>
                                <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{item.value}</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-subtle flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* Contact Form Side */}
            <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-white/80 backdrop-blur-md border border-white/20 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-2">Send us a Message</h3>
                    <p className="text-foreground/50 mb-10">We usually respond within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/70 ml-1">First Name</label>
                                <input name="firstName" required type="text" className="w-full bg-subtle border-transparent focus:bg-white border-2 focus:border-accent/20 rounded-2xl px-5 py-4 text-foreground outline-none transition-all font-medium" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/70 ml-1">Last Name</label>
                                <input name="lastName" type="text" className="w-full bg-subtle border-transparent focus:bg-white border-2 focus:border-accent/20 rounded-2xl px-5 py-4 text-foreground outline-none transition-all font-medium" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-foreground/70 ml-1">Email Address</label>
                            <input name="email" required type="email" className="w-full bg-subtle border-transparent focus:bg-white border-2 focus:border-accent/20 rounded-2xl px-5 py-4 text-foreground outline-none transition-all font-medium" placeholder="john@company.com" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-foreground/70 ml-1">Your Message</label>
                             <textarea name="message" required className="w-full bg-subtle border-transparent focus:bg-white border-2 focus:border-accent/20 rounded-2xl px-5 py-4 text-foreground outline-none transition-all font-medium h-40 resize-none" placeholder="Tell us how we can help..." />
                        </div>

                        {status && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-2xl flex items-center gap-3 text-sm font-medium ${status.success ? 'bg-green-500/10 text-green-600 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}
                          >
                            {status.success ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                            {status.message}
                          </motion.div>
                        )}
                        
                        <Button variant="accent" className="w-full py-5 text-lg rounded-xl shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-1 transition-all" disabled={isSubmitting}>
                          {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : 'Send Message'}
                        </Button>
                    </form>
                </div>
            </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
