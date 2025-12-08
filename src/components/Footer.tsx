'use client';

import Link from 'next/link';
import { Button } from './Button';
import { Linkedin, Instagram, Globe, Mail, Loader2, Check } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append('firstName', 'Newsletter');
    formData.append('lastName', 'Subscriber');
    formData.append('subject', 'Newsletter');
    
    await submitContactForm(formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
    (event.target as HTMLFormElement).reset();
  }

  return (
    <footer className="bg-background border-t border-white/5 pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white block">
              Vakaalat<span className="text-accent">.</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Simplifying legal services with intelligent technology and expert verification.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.vakaalat.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/vakaalatone/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/vakaalatofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:support@vakaalat.in" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-accent hover:text-black transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Resources</h3>
            <ul className="space-y-4 text-white/60">
              <li><Link href="/methodology" className="hover:text-accent transition-colors">Methodology</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-white/60 mb-6">Subscribe to our newsletter for the latest legal tech updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  suppressHydrationWarning
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <Button variant="accent" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : isSuccess ? <Check className="w-4 h-4" /> : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Vakaalat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
