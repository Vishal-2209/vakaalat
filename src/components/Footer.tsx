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
    <footer className="bg-subtle/50 pt-24 pb-12 px-6 border-t border-black/5 mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block mb-4">
              <img src="/logo.png" alt="Vakaalat Logo" className="h-20 w-auto object-contain" />
            </Link>
            <p className="text-foreground/60 leading-relaxed text-base">
              Simplifying legal services with intelligent technology and expert verification. A unified ecosystem for the modern advocate.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.vakaalat.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/60 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/vakaalat-one" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/60 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/vakaalat.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/60 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:support@vakaalat.in" className="w-10 h-10 rounded-full bg-white border border-black/5 flex items-center justify-center text-foreground/60 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-foreground/70">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-foreground/70">
              <li><Link href="/methodology" className="hover:text-accent transition-colors">Methodology</Link></li>
              <li><Link href="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
              <li><Link href="/news" className="hover:text-accent transition-colors">News</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-6 text-lg">Stay Updated</h3>
            <p className="text-foreground/60 mb-6 text-base">Subscribe to our newsletter for the latest legal tech updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                <input 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  suppressHydrationWarning
                  className="w-full bg-white border border-black/5 rounded-xl pl-12 pr-4 py-3.5 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all shadow-sm font-medium"
                />
              </div>
              <Button variant="accent" className="w-full h-11 rounded-xl font-medium shadow-lg shadow-accent/20" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : isSuccess ? <Check className="w-4 h-4" /> : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 text-center text-foreground/40 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Vakaalat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
