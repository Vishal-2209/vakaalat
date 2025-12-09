'use client';

import { Button } from "@/components/Button";
import { createBlog, updateBlog } from "@/app/actions/blog-actions";
import { BlogPost } from "@/lib/blog-data";

interface EditorFormProps {
    blog?: BlogPost;
    isEditing: boolean;
}

export function EditorForm({ blog, isEditing }: EditorFormProps) {
  return (
    <form action={isEditing ? updateBlog : createBlog} className="space-y-6">
        {isEditing && blog && <input type="hidden" name="id" value={blog.id} />}
        
        <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">Title</label>
            <input 
                name="title" 
                defaultValue={blog?.title} 
                required 
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none"
            />
        </div>

        <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Category</label>
                <select 
                    name="category" 
                    defaultValue={blog?.category || 'Technology'}
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none [&>option]:bg-neutral-900"
                >
                    <option value="Technology">Technology</option>
                    <option value="Practice Management">Practice Management</option>
                    <option value="Client Relations">Client Relations</option>
                    <option value="Security">Security</option>
                    <option value="Industry Trends">Industry Trends</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-white/70">Excerpt (Short Description)</label>
                <input 
                    name="excerpt" 
                    defaultValue={blog?.excerpt} 
                    required 
                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none"
                />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">Content (HTML Supported)</label>
            <textarea 
                name="content" 
                defaultValue={blog?.content} 
                required 
                rows={15}
                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:border-accent outline-none font-mono text-sm leading-relaxed"
                placeholder="<p>Write your blog content here...</p>"
            />
             <p className="text-xs text-white/40">You can use basic HTML tags for formatting.</p>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
            <Button variant="outline" type="button" onClick={() => window.history.back()}>Cancel</Button>
            <Button variant="accent" type="submit">{isEditing ? 'Update Post' : 'Publish Post'}</Button>
        </div>
      </form>
  );
}
