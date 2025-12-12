import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { getNews } from '@/lib/news-data';
import { NewsImage } from '@/components/NewsImage';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal News & Updates | Vakaalat',
  description: 'Stay informed with the latest legal news, judiciary announcements, and regulatory updates from India and around the world.',
};

export default async function NewsPage() {
  const news = await getNews();
  const featuredNews = news[0];
  const regularNews = news.slice(1);

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 overflow-hidden">
       {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20">
            Legal News
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Vakaalat <span className="text-accent">News</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
             Timely updates on legal developments, judiciary announcements, and regulatory changes.
          </p>
        </div>

         {/* Featured Article */}
        {featuredNews && (
            <div className="mb-20">
                <Link href={`/news/${featuredNews.slug}`} className="group block">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center bg-card rounded-[2.5rem] p-8 md:p-12 border border-black/5 hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-accent/5">
                        <div className="aspect-video md:aspect-[4/3] bg-subtle rounded-3xl overflow-hidden relative">
                             {/* Placeholder pattern (Always rendered as background) */}
                             <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-accent/5">
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/10 font-bold text-9xl select-none">N</div>
                             </div>

                             {featuredNews.image && (
                                 <NewsImage 
                                     src={featuredNews.image} 
                                     alt={featuredNews.title} 
                                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                                 />
                             )}
                             
                             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-20 pointer-events-none" />
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm font-medium text-foreground/60">
                                <span className="bg-yellow-500/10 text-yellow-600 px-3 py-1 rounded-full">{featuredNews.category}</span>
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {featuredNews.date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 3 min read</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                                {featuredNews.title}
                            </h2>
                            <p className="text-xl text-foreground/60 leading-relaxed line-clamp-3">
                                {featuredNews.excerpt}
                            </p>
                            <div className="flex items-center gap-3 pt-4">
                                <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-600 font-bold">
                                    <User className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{featuredNews.author}</div>
                                    <div className="text-sm text-foreground/40">Legal Correspondent</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )}

        {/* Regular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <Link key={item.id} href={`/news/${item.slug}`} className="group h-full">
                <article className="flex flex-col h-full bg-card border border-black/5 rounded-[2rem] p-8 hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                     <div className="mb-6 aspect-video bg-subtle rounded-2xl overflow-hidden relative">
                         {/* Placeholder background */}
                         <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
                         
                         {item.image && (
                             <NewsImage 
                                 src={item.image} 
                                 alt={item.title} 
                                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 z-10"
                             />
                         )}
                         
                         <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-foreground border border-black/5 z-20 transition-opacity">
                            {item.category}
                         </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-medium text-foreground/40 mb-4">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                        <span>•</span>
                        <span>{item.author}</span>
                    </div>
                
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors leading-tight">
                        {item.title}
                    </h2>
                    
                    <p className="text-foreground/60 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {item.excerpt}
                    </p>
                    
                    <div className="pt-6 border-t border-black/5 flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                        Read Story <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                </article>
            </Link>
          ))}
        </div>
        
      </div>
    </main>
  );
}
