import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Book, Gavel, FileText } from "lucide-react"; // Icons for visual richness

export default function TermsPage() {
  const tableOfContents = [
    { id: "agreement", title: "Agreement to Terms" },
    { id: "services", title: "Use of Services" },
    { id: "ip", title: "Intellectual Property" },
    { id: "liability", title: "Liability" },
    { id: "contact", title: "Contact Us" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32 pb-20">
      <Navbar />

       {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
                Legal Documentation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">Terms of <span className="text-accent">Service</span></h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                The rules of the road. Please read these terms carefully before using Vakaalat's suite of tools.
            </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            
            {/* Sidebar Navigation */}
            <div className="hidden lg:block col-span-3">
                <div className="sticky top-32 p-6 bg-card border border-black/5 rounded-3xl shadow-sm">
                    <h3 className="font-bold text-foreground mb-4 px-2">Contents</h3>
                    <ul className="space-y-1">
                        {tableOfContents.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="block px-4 py-2 rounded-lg text-sm text-foreground/60 hover:text-accent hover:bg-accent/5 transition-colors">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 pt-8 border-t border-black/5 px-2">
                        <div className="text-xs text-foreground/40 font-medium mb-2">Last Updated</div>
                        <div className="text-sm font-bold text-foreground">December 11, 2025</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-9">
                <div className="bg-card border border-black/5 rounded-[2.5rem] p-8 md:p-16 shadow-sm">
                    <article className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent prose-img:rounded-3xl max-w-none">
                        
                        <section id="agreement" className="mb-16 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                    <Book className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">1. Agreement to Terms</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                By accessing or using the Vakaalat website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services.
                                This agreement constitutes a binding legal contract between you and Vakaalat.
                            </p>
                        </section>

                        <section id="services" className="mb-16 scroll-mt-32">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Gavel className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">2. Use of Services</h2>
                            </div>
                            <p className="text-foreground/70 mb-6">
                                Vakaalat provides a suite of legal technology tools (Law Connect, Law Profile, Law Draft). You agree to use these services only for lawful purposes and in accordance with these Terms.
                            </p>
                            <div className="space-y-4 not-prose">
                                <div className="p-4 bg-subtle rounded-xl border border-black/5 flex gap-3 text-sm text-foreground/80">
                                     <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                     You must be a qualified legal professional or an authorized staff member to use certain features.
                                </div>
                                <div className="p-4 bg-subtle rounded-xl border border-black/5 flex gap-3 text-sm text-foreground/80">
                                     <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                     You are responsible for maintaining the confidentiality of your account credentials.
                                </div>
                                <div className="p-4 bg-subtle rounded-xl border border-black/5 flex gap-3 text-sm text-foreground/80">
                                     <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                     You must not use the services to transmit any malicious code or content.
                                </div>
                            </div>
                        </section>

                        <section id="ip" className="mb-16 scroll-mt-32">
                             <h2 className="text-3xl font-bold mb-6 text-foreground">3. Intellectual Property</h2>
                             <p className="text-foreground/70">
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Vakaalat and its licensors.
                                The Vakaalat name, logo, and product names (Law Connect, etc.) are trademarks of Vakaalat.
                             </p>
                        </section>

                        <section id="liability" className="mb-16 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">4. Limitation of Liability</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10">
                                In no event shall Vakaalat, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>
                        </section>

                        <section id="contact" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">5. Contact Us</h2>
                            <p className="text-foreground/70">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <a href="mailto:support@vakaalat.in" className="inline-block mt-4 text-xl font-bold text-accent hover:underline">
                                support@vakaalat.in
                            </a>
                        </section>

                    </article>
                </div>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
