import { supabase } from './supabase';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  return data as BlogPost[];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    // console.error('Error fetching blog by slug:', error);
    return undefined;
  }

  return data as BlogPost;
}

// saveBlogs is deprecated/removed as we use direct DB actions now
