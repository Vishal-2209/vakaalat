'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
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
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
            >
                <div>
                     <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in <span className="text-accent">Touch</span></h1>
                     <p className="text-xl text-white/60">
                        Have questions about our suite? Want to partner with us? Reach out directly.
                     </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-white/40">Email Us</div>
                            <div className="text-lg font-medium">support@vakaalat.in</div>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-white/40">Call Us</div>
                            <div className="text-lg font-medium">+91 80005 16769</div>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm text-white/40">Visit Us</div>
                            <div className="text-lg font-medium">Maple County 1, Thaltej Shilaj Rd.<br/>Ahmedabad</div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-white/60">First Name</label>
                            <input name="firstName" required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="First Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-white/60">Last Name</label>
                            <input name="lastName" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-white/60">Email</label>
                        <input name="email" required type="email" suppressHydrationWarning className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                         <label className="text-sm text-white/60">Message</label>
                         <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors h-32 resize-none" placeholder="How can we help you?" />
                    </div>

                    {status && (
                      <div className={`p-4 rounded-xl flex items-center gap-2 text-sm ${status.success ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                        {status.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                        {status.message}
                      </div>
                    )}
                    
                    <Button variant="accent" className="w-full py-4 text-base" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Send Message'}
                    </Button>
                </form>
            </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
