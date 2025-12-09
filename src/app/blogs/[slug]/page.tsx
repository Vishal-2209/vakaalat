import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/Button';
import { getBlogBySlug } from '@/lib/blog-data';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-background pt-32 pb-20">
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl mx-auto">
            <Link href="/blogs" className="inline-flex items-center text-white/50 hover:text-accent mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blogs
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-accent mb-6">
                <span className="bg-accent/10 px-3 py-1 rounded-full">{blog.category}</span>
                <span className="flex items-center gap-1 text-white/60"><Calendar className="w-4 h-4" /> {blog.date}</span>
                <span className="flex items-center gap-1 text-white/60"><User className="w-4 h-4" /> {blog.author}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
                {blog.title}
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
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share & Footer */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white/60 text-sm">
                    Share this article:
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black">
                        <Twitter className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black">
                        <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black">
                        <Facebook className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-10 h-10 p-0 rounded-full bg-white/5 hover:bg-accent hover:text-black">
                        <Share2 className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </article>
  );
}
