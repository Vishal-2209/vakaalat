'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Terms of <span className="text-accent">Service</span></h1>
        
        <div className="space-y-8 text-white/70 leading-relaxed text-lg">
          <p>Last Updated: December 2025</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Vakaalat website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Use of Services</h2>
            <p>
              Vakaalat provides a suite of legal technology tools (Law Connect, Law Profile, Law Draft). You agree to use these services only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be a qualified legal professional or an authorized staff member to use certain features.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You must not use the services to transmit any malicious code or content.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Vakaalat and its licensors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. Limitation of Liability</h2>
            <p>
              In no event shall Vakaalat, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <a href="mailto:support@vakaalat.in" className="text-accent underline">support@vakaalat.in</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
