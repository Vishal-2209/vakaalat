import { promises as fs } from 'fs';
import path from 'path';

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

const DATA_FILE = path.join(process.cwd(), 'data', 'blogs.json');

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export async function saveBlogs(blogs: BlogPost[]) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(blogs, null, 2));
    } catch (error) {
        console.error("Failed to save blogs", error);
        throw new Error("Failed to save data");
    }
}
