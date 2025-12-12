import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link"; // Fix: Use Next.js Link
import { Shield, Lock, Eye, FileText } from "lucide-react"; // Icons for visual richness

export default function PrivacyPage() {
  const tableOfContents = [
    { id: "intro", title: "Introduction" },
    { id: "collection", title: "Data Collection" },
    { id: "usage", title: "How We Use Data" },
    { id: "security", title: "Security Measures" },
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">Privacy <span className="text-accent">Policy</span></h1>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                Transparency is at the core of our ethics. Here is how we handle your data with the care it deals.
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
                        
                        <section id="intro" className="mb-16 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">1. Introduction</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                Welcome to Vakaalat. We respect your privacy and are committed to protecting your personal data. 
                                This privacy policy explains how we look after your personal data when you visit our website or use our services 
                                (Law Connect, Law Profile, Law Draft). By using our services, you trust us with your information, and we take that responsibility seriously.
                            </p>
                        </section>

                        <section id="collection" className="mb-16 scroll-mt-32">
                             <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Eye className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">2. Data We Collect</h2>
                            </div>
                            <p className="text-foreground/70 mb-6">
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4 not-prose">
                                <div className="p-6 bg-subtle rounded-2xl border border-black/5">
                                    <h4 className="font-bold text-foreground mb-2">Identity Data</h4>
                                    <p className="text-sm text-foreground/60">First name, last name, username, or similar identifiers required for account creation.</p>
                                </div>
                                <div className="p-6 bg-subtle rounded-2xl border border-black/5">
                                    <h4 className="font-bold text-foreground mb-2">Contact Data</h4>
                                    <p className="text-sm text-foreground/60">Email address, telephone numbers, and billing address for invoicing.</p>
                                </div>
                                <div className="p-6 bg-subtle rounded-2xl border border-black/5">
                                    <h4 className="font-bold text-foreground mb-2">Technical Data</h4>
                                    <p className="text-sm text-foreground/60">IP address, browser type, time zone setting, operating system, and platform.</p>
                                </div>
                                <div className="p-6 bg-subtle rounded-2xl border border-black/5">
                                    <h4 className="font-bold text-foreground mb-2">Usage Data</h4>
                                    <p className="text-sm text-foreground/60">Information about how you use our website, products, and services.</p>
                                </div>
                            </div>
                        </section>

                        <section id="usage" className="mb-16 scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">3. How We Use Your Data</h2>
                            <p className="text-foreground/70 mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="bg-subtle p-8 rounded-3xl border border-black/5 space-y-2 list-none m-0 pl-0">
                                <li className="flex gap-3 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>To register you as a new customer or partner layout.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>To provide and maintain the Vakaalat software services.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>To manage our relationship with you, including notifying you about changes.</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                                    <span>To improve our website, products/services, marketing or customer relationships.</span>
                                </li>
                            </ul>
                        </section>

                        <section id="security" className="mb-16 scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-bold m-0 text-foreground">4. Data Security</h2>
                            </div>
                            <p className="text-foreground/70 leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. 
                                <strong>Data sovereignty</strong> is a core pillar of our methodology; we ensure your client data remains secure and confidential. We limit access to your personal data to those employees, agents, contractors who have a business need to know.
                            </p>
                            <div className="mt-6 p-6 bg-accent/5 border border-accent/10 rounded-2xl flex items-start gap-4 not-prose">
                                <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-accent mb-1">Bank-Grade Encryption</h4>
                                    <p className="text-sm text-foreground/60">All data is encrypted in transit and at rest using industry-standard AES-256 protocols.</p>
                                </div>

                            </div>
                        </section>

                        <section id="contact" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">5. Contact Us</h2>
                            <p className="text-foreground/70">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
