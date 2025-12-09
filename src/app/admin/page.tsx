import { isLoggedIn } from "@/app/actions/auth";
import { getBlogs } from "@/lib/blog-data";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Plus, Edit, Trash2 } from "lucide-react";
import { deleteBlog } from "@/app/actions/blog-actions";

export default async function AdminDashboard() {
  const authorized = await isLoggedIn();
  if (!authorized) {
    redirect('/admin/login');
  }

  const blogs = await getBlogs();

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Blogs</h1>
        <Link href="/admin/editor">
            <Button variant="accent">
                <Plus className="w-4 h-4 mr-2" /> New Post
            </Button>
        </Link>
      </div>

      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 font-semibold text-white/70">Title</th>
                    <th className="p-4 font-semibold text-white/70">Category</th>
                    <th className="p-4 font-semibold text-white/70">Date</th>
                    <th className="p-4 font-semibold text-white/70 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map((blog) => (
                    <tr key={blog.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 font-medium">{blog.title}</td>
                        <td className="p-4 text-white/60">{blog.category}</td>
                        <td className="p-4 text-white/60">{blog.date}</td>
                        <td className="p-4 flex items-center justify-end gap-2">
                             <Link href={`/admin/editor?id=${blog.id}`}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <Edit className="w-4 h-4" />
                                </Button>
                            </Link>
                            <form action={async () => {
                                'use server';
                                await deleteBlog(blog.id);
                            }}>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:text-red-500 hover:bg-red-500/10">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </form>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
        {blogs.length === 0 && (
            <div className="p-12 text-center text-white/40">
                No blog posts found. Create one to get started.
            </div>
        )}
      </div>
    </div>
  );
}
