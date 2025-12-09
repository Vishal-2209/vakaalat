import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { getBlogs } from '@/lib/blog-data';

// Re-implementing this page as Server Component by default, 
// but using client wrapper for animations to mix server data fetching with client interactions.
// Or simpler: Keep it Server Component and pass data to a Client Component.

export default async function BlogsPage() {
  const blogs = await getBlogs();

  // Categories helper
  const categories = ["All", ...Array.from(new Set(blogs.map(b => b.category)))];

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Vakaalat <span className="text-accent">Insights</span>
          </h1>
          <p className="text-xl text-white/60">
            Latest updates, industry trends, and technology guides for the modern Indian advocate.
          </p>
        </div>

        {/* Categories - Static for now in Server Component */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <div key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-accent text-black' : 'bg-white/5 text-white/60'}`}>
              {cat}
            </div>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id}
              className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-white/40 mb-4">
                  <span className="bg-white/10 px-2 py-1 rounded text-accent">{blog.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>
                
                <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-white/50">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <User className="w-3 h-3" />
                    </div>
                    {blog.author}
                  </div>
                  
                  <Link href={`/blogs/${blog.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </main>
  );
}
