
import { Metadata } from 'next';
import { Geist, Geist_Mono } from "next/font/google";

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
    { name: 'Background', var: 'var(--background)', hex: '#fdfcfd', desc: 'Slightly warmer white for premium feel' },
    { name: 'Foreground', var: 'var(--foreground)', hex: '#0f172a', desc: 'Deep slate instead of pure black' },
    { name: 'Accent', var: 'var(--accent)', hex: '#7f3aed', desc: 'Primary brand purple' },
    { name: 'Muted', var: 'var(--muted)', hex: '#64748b', desc: 'Secondary text and borders' },
    { name: 'Card', var: 'var(--card)', hex: '#ffffff', desc: 'Component background' },
    { name: 'Subtle', var: 'var(--subtle)', hex: '#f8fafc', desc: 'Secondary background' },
  ];

  const typography = [
    { role: 'Headline', class: 'text-5xl md:text-7xl font-bold tracking-tight', sample: 'Powering the Modern Lawyer' },
    { role: 'Subheading', class: 'text-2xl md:text-3xl font-bold', sample: 'Streamline your practice.' },
    { role: 'Body', class: 'text-base leading-relaxed text-foreground/80', sample: 'Vakaalat provides a comprehensive suite of tools designed to simplify legal case management.' },
    { role: 'Label', class: 'text-sm font-medium text-foreground/60 uppercase tracking-wider', sample: 'Legal Tech' },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl font-bold mb-4">Brand Guidelines</h1>
          <p className="text-xl text-foreground/60">Strictly private. Do not share publicly.</p>
        </div>

        {/* Logo Section */}
        <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 border-b border-black/5 pb-4">Logomark</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-subtle p-16 rounded-[2.5rem] flex items-center justify-center border border-black/5">
                     <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20">
                           <span className="text-white font-bold text-3xl">V</span>
                        </div>
                        <span className="text-4xl font-bold tracking-tight">Vakaalat</span>
                    </div>
                </div>
                <div className="bg-foreground p-16 rounded-[2.5rem] flex items-center justify-center">
                     <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-accent">
                           <span className="font-bold text-3xl">V</span>
                        </div>
                        <span className="text-4xl font-bold tracking-tight text-white">Vakaalat</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Color Palette */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 border-b border-black/5 pb-4">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <div key={color.name} className="bg-card p-6 rounded-3xl border border-black/5 shadow-sm">
                <div 
                    className="h-32 w-full rounded-2xl mb-6 shadow-inner" 
                    style={{ backgroundColor: color.hex }}
                />
                <h3 className="text-xl font-bold mb-1">{color.name}</h3>
                <div className="font-mono text-sm text-foreground/40 mb-2">{color.hex}</div>
                <p className="text-sm text-foreground/60">{color.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
           <h2 className="text-3xl font-bold mb-10 border-b border-black/5 pb-4">Typography</h2>
           <div className="bg-card p-12 rounded-[2.5rem] border border-black/5 space-y-12">
                {typography.map((type) => (
                    <div key={type.role} className="grid md:grid-cols-3 gap-8 items-center border-b border-black/5 pb-8 last:border-0 last:pb-0">
                        <div className="md:col-span-1">
                            <span className="text-sm font-mono text-accent bg-accent/5 px-2 py-1 rounded-md">{type.role}</span>
                        </div>
                        <div className="md:col-span-2">
                             <div className={type.class}>{type.sample}</div>
                        </div>
                    </div>
                ))}
           </div>
        </section>

        {/* UI Elements */}
        <section>
            <h2 className="text-3xl font-bold mb-10 border-b border-black/5 pb-4">UI Components</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <h3 className="text-xl font-medium text-foreground/60">Buttons</h3>
                     <div className="flex flex-wrap gap-4">
                         <button className="bg-foreground text-background px-8 py-4 rounded-xl font-bold hover:bg-black/90 transition-all">Primary Button</button>
                         <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg shadow-accent/25">Accent Button</button>
                         <button className="bg-white border border-black/10 text-foreground px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">Secondary Button</button>
                     </div>
                </div>

                <div className="space-y-8">
                    <h3 className="text-xl font-medium text-foreground/60">Cards</h3>
                    <div className="bg-card border border-black/5 p-8 rounded-3xl shadow-lg shadow-black/5">
                        <h4 className="text-2xl font-bold mb-2">Card Title</h4>
                        <p className="text-foreground/60">This is a standard card component with the default shadow and border radius.</p>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </main>
  );
}
