import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { ShareButtons } from '@/components/ShareButtons';
import { getNewsBySlug } from '@/lib/news-data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function NewsPost({ params }: PageProps) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);

  if (!news) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl mx-auto">
            <Link href="/news" className="inline-flex items-center text-white/50 hover:text-accent mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-accent mb-6">
                <span className="bg-accent/10 px-3 py-1 rounded-full">{news.category}</span>
                <span className="flex items-center gap-1 text-white/60"><Calendar className="w-4 h-4" /> {news.date}</span>
                <span className="flex items-center gap-1 text-white/60"><User className="w-4 h-4" /> {news.author}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                {news.title}
            </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
            <div 
                className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-p:text-white/70 prose-strong:text-white
                    prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                    prose-li:text-white/70 prose-blockquote:border-l-accent prose-blockquote:bg-white/5 prose-blockquote:p-4 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* External Link Button */}
            {news.link && (
                <div className="mt-8">
                    <Link href={news.link} target="_blank" rel="noopener noreferrer">
                        <div className="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-black font-bold hover:bg-accent/90 transition-all">
                            Read Full Article on {news.author || 'Source'} <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>
                </div>
            )}

            {/* Share & Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/60 text-sm">
                    Share this article:
                </div>
                <ShareButtons title={news.title} />
            </div>
        </div>
      </div>
    </article>
  );
}
