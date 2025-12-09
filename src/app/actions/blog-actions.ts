'use server';

import { getBlogs, saveBlogs, BlogPost } from '@/lib/blog-data';
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
  
  const blogs = await getBlogs();
  
  const newPost: BlogPost = {
    id: Date.now().toString(),
    title,
    slug: slugify(title),
    excerpt,
    content,
    date: new Date().toISOString().split('T')[0],
    author: 'Vakaalat Team',
    category
  };

  blogs.unshift(newPost);
  await saveBlogs(blogs);
  
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
  
  const blogs = await getBlogs();
  const index = blogs.findIndex(b => b.id === id);
  
  if (index !== -1) {
    blogs[index] = {
      ...blogs[index],
      title,
      category,
      excerpt,
      content,
    };
    await saveBlogs(blogs);
  }

  revalidatePath('/blogs');
  redirect('/admin');
}

export async function deleteBlog(id: string) {
  if (!(await isLoggedIn())) {
      throw new Error('Unauthorized');
  }

  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter(b => b.id !== id);
  await saveBlogs(filteredBlogs);
  
  revalidatePath('/blogs');
}
