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
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden pt-24">
      <Navbar />

      <div className="container mx-auto px-6 py-12">
        {/* Header - No Client Motion for simplicity in Server Component, or add Client Wrapper if needed */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Careers at Vakaalat
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Shape the <span className="text-accent">Future of Law</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            We are building the digital backbone for the Indian legal system. Join us in making justice more accessible and efficient.
          </p>
        </div>

        {careers.length === 0 ? (
            <div className="max-w-4xl mx-auto text-center py-12 bg-white/5 rounded-3xl border border-white/10">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 text-white/40">
                    <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No Open Positions</h3>
                <p className="text-white/60 max-w-md mx-auto">
                    We currently don't have any open roles, but we're always looking for talent. Check back soon!
                </p>
            </div>
        ) : (
            <div className="max-w-4xl mx-auto space-y-6">
                {careers.map((career) => (
                    <div key={career.id} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/50 transition-all group">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{career.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-white/60">
                                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {career.location}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {career.type}</span>
                                </div>
                            </div>
                            <a 
                                href={`mailto:Careers@vakaalat.in?subject=Application for ${career.title}&body=Hello Vakaalat Team,%0D%0A%0D%0AI am writing to apply for the position of ${career.title}. Please find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]`}
                                className="inline-block"
                            >
                                <Button variant="accent">
                                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                        
                        <div className="text-white/70 mb-6 text-sm leading-relaxed">
                            {career.description}
                        </div>

                        {career.requirements && (
                            <div className="bg-black/20 p-6 rounded-xl border border-white/5">
                                <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wider">Requirements</h4>
                                <div 
                                    className="prose prose-invert prose-sm max-w-none prose-li:text-white/60 prose-p:text-white/60"
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
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">Why Join <span className="text-accent">Us?</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        className="p-4 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-medium hover:border-accent/50 transition-colors text-white/80"
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
