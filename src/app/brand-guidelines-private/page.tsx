
import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { Share2, Facebook, Twitter, Linkedin, Check, ArrowRight, Play, Calendar, User, Mail, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brand Guidelines | Vakaalat',
  description: 'Internal brand guidelines for Vakaalat.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function BrandGuidelinesPage() {
  const colors = [
    { name: 'Background', var: 'var(--background)', hex: '#fdfcfd', desc: 'Main page background. Slightly warmer white.' },
    { name: 'Foreground', var: 'var(--foreground)', hex: '#0f172a', desc: 'Primary text color. Deep slate.' },
    { name: 'Accent', var: 'var(--accent)', hex: '#7f3aed', desc: 'Brand identity color. Primary purple.' },
    { name: 'Muted', var: 'var(--muted)', hex: '#64748b', desc: 'Secondary text, borders, and subtle elements.' },
    { name: 'Card', var: 'var(--card)', hex: '#ffffff', desc: 'Component and container background.' },
    { name: 'Subtle', var: 'var(--subtle)', hex: '#f8fafc', desc: 'Secondary background for contrast sections.' },
  ];

  const typographyScale = [
    { name: 'Display', class: 'text-7xl font-bold tracking-tighter', size: '72px / 4.5rem', weight: '700 (Bold)' },
    { name: 'H1', class: 'text-5xl font-bold tracking-tight', size: '48px / 3rem', weight: '700 (Bold)' },
    { name: 'H2', class: 'text-3xl font-bold', size: '30px / 1.875rem', weight: '700 (Bold)' },
    { name: 'H3', class: 'text-2xl font-bold', size: '24px / 1.5rem', weight: '700 (Bold)' },
    { name: 'Body Large', class: 'text-xl leading-relaxed', size: '20px / 1.25rem', weight: '400 (Regular)' },
    { name: 'Body Base', class: 'text-base leading-relaxed', size: '16px / 1rem', weight: '400 (Regular)' },
    { name: 'Small', class: 'text-sm font-medium', size: '14px / 0.875rem', weight: '500 (Medium)' },
    { name: 'Tiny', class: 'text-xs font-bold uppercase tracking-wider', size: '12px / 0.75rem', weight: '700 (Bold)' },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl space-y-32">
        
        {/* Header */}
        <div className="border-b border-black/5 pb-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Brand Guidelines</h1>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"/>
            Private & Confidential
          </div>
          <p className="mt-6 text-xl text-foreground/60 max-w-2xl leading-relaxed">
            This document serves as the single source of truth for the Vakaalat brand identity system. 
            Strict usage adherence ensures consistency across all digital touchpoints.
          </p>
        </div>

        {/* Brand Identity / Logos */}
        <section id="identity" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-black/5 flex items-center gap-4">
                01. Brand Identity <span className="text-sm font-normal text-foreground/40 mt-1">Logo & Marks</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Primary Logo */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-foreground/80">Primary Wordmark</h3>
                    <div className="bg-subtle p-16 rounded-[2.5rem] flex items-center justify-center border border-black/5 min-h-[300px]">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="Vakaalat Logo" className="h-24 w-auto object-contain" />
                            <span className="text-5xl font-extrabold tracking-tighter text-foreground flex items-center gap-1">
                                Vakaalat<span className="text-accent">.</span>
                            </span>
                        </div>
                    </div>
                    <p className="text-sm text-foreground/60">
                        Used for main headers, navigation, and primary branding. The layout consists of the logomark followed by the wordmark "Vakaalat". 
                        The period <span className="text-accent font-bold">.</span> is always rendered in Accent Purple.
                    </p>
                </div>

                {/* Dark Mode / Inverted */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-foreground/80">Dark / Inverted</h3>
                    <div className="bg-foreground p-16 rounded-[2.5rem] flex items-center justify-center min-h-[300px]">
                        <div className="flex items-center gap-3">
                            {/* In a real scenario, we'd use a white version of logo.png. Assuming CSS filter for now or just standard */}
                            <img src="/logo.png" alt="Vakaalat Logo" className="h-24 w-auto object-contain brightness-0 invert" />
                            <span className="text-5xl font-extrabold tracking-tighter text-white flex items-center gap-1">
                                Vakaalat<span className="text-accent">.</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Favicon / Icon */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-foreground/80">Logomark (Icon)</h3>
                     <div className="bg-card p-16 rounded-[2.5rem] flex items-center justify-center border border-black/5 min-h-[300px]">
                        <img src="/icon.png" alt="Vakaalat Icon" className="h-32 w-32 object-contain" />
                    </div>
                    <p className="text-sm text-foreground/60">
                        The standalone "V" mark. Used for favicons, app icons, and social media avatars.
                    </p>
                </div>

                 <div className="space-y-6">
                    <h3 className="text-lg font-bold text-foreground/80">Construction</h3>
                     <div className="bg-white p-16 rounded-[2.5rem] flex items-center justify-center border border-black/5 border-dashed min-h-[300px] relative overflow-hidden">
                        {/* Grid lines simulation */}
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                             {[...Array(36)].map((_, i) => <div key={i} className="border border-accent/20"></div>)}
                        </div>
                        <div className="flex items-center gap-3 z-10 scale-125">
                            <img src="/logo.png" alt="Vakaalat Logo" className="h-16 w-auto object-contain" />
                            <span className="text-4xl font-extrabold tracking-tighter text-foreground flex items-center gap-1">
                                Vakaalat<span className="text-accent">.</span>
                            </span>
                        </div>
                    </div>
                     <p className="text-sm text-foreground/60">
                        Maintain clear space equal to the height of the "V" icon around the entire logo composition.
                    </p>
                </div>

            </div>
        </section>

        {/* Typography */}
        <section id="typography" className="scroll-mt-32">
           <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-black/5 flex items-center gap-4">
                02. Typography <span className="text-sm font-normal text-foreground/40 mt-1">Geist Sans & Mono</span>
           </h2>
           <div className="grid lg:grid-cols-3 gap-12">
               
               {/* Font Family Info */}
               <div className="col-span-1 space-y-8">
                   <div className="p-8 bg-subtle rounded-3xl border border-black/5">
                       <h3 className="text-2xl font-bold mb-2">Geist Sans</h3>
                       <p className="font-mono text-xs text-foreground/40 mb-6">var(--font-geist-sans)</p>
                       <p className="text-4xl leading-tight font-normal mb-4">Aa Bb Cc Dd Ee Ff Gg Hh</p>
                       <p className="text-sm text-foreground/60">Primary typeface for all headers, body text, and UI elements. Modern, geometric, and highly legible.</p>
                   </div>
                   <div className="p-8 bg-subtle rounded-3xl border border-black/5 font-mono">
                       <h3 className="text-2xl font-bold mb-2">Geist Mono</h3>
                       <p className="font-sans text-xs text-foreground/40 mb-6">var(--font-geist-mono)</p>
                       <p className="text-3xl leading-tight font-normal mb-4">0123456789 {} [] ()</p>
                       <p className="text-sm text-foreground/60 font-sans">Used for code snippets, data readouts, and tabular figures.</p>
                   </div>
               </div>

               {/* Type Scale */}
               <div className="col-span-2 space-y-0 border border-black/5 rounded-3xl overflow-hidden bg-white">
                    <div className="grid grid-cols-12 bg-subtle/50 p-4 border-b border-black/5 text-xs font-bold uppercase tracking-wider text-foreground/40">
                        <div className="col-span-3">Role</div>
                        <div className="col-span-6">Sample</div>
                        <div className="col-span-3 text-right">Specs</div>
                    </div>
                    {typographyScale.map((type) => (
                        <div key={type.name} className="grid grid-cols-12 items-center p-6 border-b border-black/5 last:border-0 hover:bg-subtle/30 transition-colors">
                            <div className="col-span-3">
                                <span className="text-sm font-medium text-foreground/60">{type.name}</span>
                            </div>
                            <div className="col-span-6">
                                <span className={type.class}>The quick brown fox</span>
                            </div>
                            <div className="col-span-3 text-right space-y-1">
                                <div className="text-xs font-mono text-foreground/40">{type.size}</div>
                                <div className="text-xs font-mono text-foreground/40">{type.weight}</div>
                            </div>
                        </div>
                    ))}
               </div>
           </div>
        </section>

        {/* Color Palette */}
        <section id="colors" className="scroll-mt-32">
          <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-black/5 flex items-center gap-4">
               03. Color Palette <span className="text-sm font-normal text-foreground/40 mt-1">Variables & Hex</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <div key={color.name} className="group bg-card p-6 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-6">
                     <div 
                        className="h-24 w-24 rounded-2xl shadow-inner ring-1 ring-black/5" 
                        style={{ backgroundColor: color.hex }}
                    />
                     <div className="text-right">
                         <span className="block text-2xl font-bold">{color.name}</span>
                         <span className="text-xs font-mono text-foreground/40 uppercase">Variable</span>
                     </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-black/5">
                    <div className="flex justify-between items-center font-mono text-sm">
                        <span className="text-foreground/40">HEX</span>
                        <span className="bg-subtle px-2 py-1 rounded text-foreground select-all">{color.hex}</span>
                    </div>
                    <div className="flex justify-between items-center font-mono text-sm">
                        <span className="text-foreground/40">CSS</span>
                        <span className="bg-subtle px-2 py-1 rounded text-foreground select-all">{color.var}</span>
                    </div>
                </div>
                <p className="mt-4 text-sm text-foreground/60 leading-relaxed border-t border-black/5 pt-4">
                    {color.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* UI Library Mockups */}
        <section id="ui-library" className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-10 pb-4 border-b border-black/5 flex items-center gap-4">
               04. UI Library <span className="text-sm font-normal text-foreground/40 mt-1">Components & Mockups</span>
            </h2>

            <div className="space-y-16">
                
                {/* Buttons */}
                <div className="p-10 rounded-[2.5rem] border border-black/5 bg-subtle/30">
                     <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                        <Play className="w-5 h-5 text-accent fill-accent" /> Buttons
                     </h3>
                     <div className="flex flex-wrap items-center gap-6 mb-12">
                         <Button variant="default">Default</Button>
                         <Button variant="accent">Accent</Button>
                         <Button variant="secondary">Secondary</Button>
                         <Button variant="outline">Outline</Button>
                         <Button variant="ghost">Ghost</Button>
                     </div>
                     <div className="flex flex-wrap items-center gap-6">
                         <Button size="lg" variant="accent">Large Button</Button>
                         <Button size="md" variant="accent">Medium Button</Button>
                         <Button size="sm" variant="accent">Small</Button>
                     </div>
                </div>

                {/* Cards & Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                         <h3 className="text-xl font-bold flex items-center gap-2">
                            <span className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center text-[10px] font-bold text-accent">Aa</span>
                            Content Cards
                         </h3>
                         
                         {/* News/Feature Card Mockup */}
                         <div className="group block bg-card rounded-[2rem] p-8 border border-black/5 hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5">
                             <div className="flex items-center gap-3 text-xs font-medium text-foreground/40 mb-4">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Dec 12, 2025</span>
                                <span>•</span>
                                <span>Legal Tech</span>
                            </div>
                            <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                Transforming Legal Practice
                            </h4>
                            <p className="text-foreground/60 text-base leading-relaxed mb-6">
                                How AI and automation are reshaping the future of advocacy in India and beyond.
                            </p>
                            <div className="flex items-center text-accent font-medium text-sm">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>

                        {/* Interactive Card */}
                         <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                     <User className="w-6 h-6" />
                                 </div>
                                 <div>
                                     <div className="font-bold text-foreground">Active Case</div>
                                     <div className="text-sm text-foreground/40">Updated 2m ago</div>
                                 </div>
                             </div>
                             <Button size="sm" variant="outline">View Details</Button>
                         </div>
                    </div>

                    {/* Forms & Inputs */}
                    <div className="space-y-8">
                         <h3 className="text-xl font-bold flex items-center gap-2">
                             <span className="w-5 h-5 rounded border border-foreground/30"></span> Changes
                         </h3>
                         
                         <div className="bg-card p-8 rounded-[2rem] border border-black/5 space-y-6">
                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-foreground/70">Email Address</label>
                                 <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                                    <input 
                                      type="email" 
                                      placeholder="name@company.com" 
                                      className="w-full bg-white border border-black/10 rounded-xl pl-12 pr-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/10 transition-all"
                                      readOnly
                                    />
                                 </div>
                             </div>

                             <div className="space-y-2">
                                 <label className="text-sm font-medium text-foreground/70">Website URL</label>
                                 <div className="relative">
                                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
                                    <input 
                                      type="text" 
                                      placeholder="https://vakaalat.in" 
                                      className="w-full bg-white border border-accent rounded-xl pl-12 pr-4 py-3 text-foreground focus:outline-none ring-4 ring-accent/10 transition-all"
                                      readOnly
                                      value="https://vakaalat.in"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                                        Valid
                                    </div>
                                 </div>
                             </div>

                             <Button className="w-full h-12 text-base shadow-lg shadow-accent/20" variant="accent">
                                 Subscribe to Updates
                             </Button>
                         </div>
                    </div>
                </div>

            </div>
        </section>

      </div>
    </main>
  );
}
