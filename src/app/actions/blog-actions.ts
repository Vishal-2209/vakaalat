'use server';

import { supabaseAdmin } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { isLoggedIn } from './auth';

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w-]+/g, '')  // Remove all non-word chars
    .replace(/--+/g, '-');    // Replace multiple - with single -
}

export async function createBlog(formData: FormData) {
  if (!(await isLoggedIn())) {
    throw new Error('Unauthorized');
  }

  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const slug = slugify(title);
  
  const newPost = {
    title,
    slug,
    excerpt,
    content,
    date: new Date().toISOString().split('T')[0],
    author: 'Vakaalat Team',
    category
  };

  const { error } = await supabaseAdmin.from('blogs').insert([newPost]);

  if (error) {
    console.error('Error creating blog:', error);
    throw new Error('Failed to create blog');
  }
  
  revalidatePath('/blogs');
  redirect('/admin');
}

export async function updateBlog(formData: FormData) {
  if (!(await isLoggedIn())) {
     throw new Error('Unauthorized');
  }

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  
  // We keep the original slug to avoid breaking URLs (or we could update it if requested)
  const updateData = {
      title,
      category,
      excerpt,
      content,
  };

  const { error } = await supabaseAdmin
    .from('blogs')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('Error updating blog:', error);
    throw new Error('Failed to update blog');
  }

  revalidatePath('/blogs');
  redirect('/admin');
}

export async function deleteBlog(id: string) {
  if (!(await isLoggedIn())) {
      throw new Error('Unauthorized');
  }

  const { error } = await supabaseAdmin
    .from('blogs')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog:', error);
    throw new Error('Failed to delete blog');
  }
  
  revalidatePath('/blogs');
}
