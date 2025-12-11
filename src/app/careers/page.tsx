import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Briefcase, ArrowRight, MapPin, Clock } from "lucide-react";
import { getCareers } from "@/lib/career-data";

export const metadata = {
    title: 'Careers',
    description: 'Join the Vakaalat team and shape the future of legal tech in India.',
};

export default async function CareersPage() {
  const careers = await getCareers();

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-32">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        {/* Header - No Client Motion for simplicity in Server Component, or add Client Wrapper if needed */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Careers at Vakaalat
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Shape the <span className="text-accent">Future of Law</span></h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            We are building the digital backbone for the Indian legal system. Join us in making justice more accessible and efficient.
          </p>
        </div>

        {careers.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center py-20 bg-card rounded-[2rem] border border-black/5 shadow-sm">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-subtle text-foreground/40">
                    <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">No Open Positions</h3>
                <p className="text-foreground/60 max-w-md mx-auto text-lg">
                    We currently don't have any open roles, but we're always looking for talent. Check back soon!
                </p>
            </div>
        ) : (
            <div className="max-w-4xl mx-auto space-y-8">
                {careers.map((career) => (
                    <div key={career.id} className="p-10 bg-card border border-black/5 rounded-[2rem] hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5 group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                            <div>
                                <h3 className="text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors tracking-tight">{career.title}</h3>
                                <div className="flex items-center gap-6 text-sm font-medium text-foreground/60">
                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-subtle"><MapPin className="w-4 h-4" /> {career.location}</span>
                                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-subtle"><Clock className="w-4 h-4" /> {career.type}</span>
                                </div>
                            </div>
                            <a 
                                href={`mailto:Careers@vakaalat.in?subject=Application for ${career.title}&body=Hello Vakaalat Team,%0D%0A%0D%0AI am writing to apply for the position of ${career.title}. Please find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]`}
                                className="inline-block flex-shrink-0"
                            >
                                <Button variant="accent" size="lg" className="rounded-xl">
                                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                        
                        <div className="text-foreground/70 mb-8 text-lg leading-relaxed">
                            {career.description}
                        </div>

                        {career.requirements && (
                            <div className="bg-subtle p-8 rounded-2xl border border-black/5">
                                <h4 className="text-xs font-bold text-foreground/40 mb-4 uppercase tracking-widest">Requirements</h4>
                                <div 
                                    className="prose prose-lg max-w-none prose-li:text-foreground/70 prose-p:text-foreground/70"
                                    dangerouslySetInnerHTML={{ __html: career.requirements }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )}

        {/* Perks Section */}
        <div className="mt-32 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground tracking-tight">Why Join <span className="text-accent">Us?</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    "Impact Real Lives", 
                    "Competitive Salary", 
                    "Health Insurance", 
                    "Learning Budget",
                    "Flexible Hours",
                    "Team Retreats",
                    "Latest Hardware",
                    "Open Culture"
                ].map((perk, i) => (
                    <div 
                        key={i}
                        className="p-6 bg-card border border-black/5 rounded-2xl text-center text-sm font-bold hover:border-accent/50 transition-colors text-foreground shadow-sm hover:shadow-md hover:-translate-y-1 transform duration-300"
                    >
                        {perk}
                    </div>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
