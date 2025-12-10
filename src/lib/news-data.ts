import { promises as fs } from 'fs';
import path from 'path';
import Parser from 'rss-parser';

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  link?: string; // Optional external link
  isExternal?: boolean;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'news.json');

const RSS_FEEDS = [
    { url: 'https://legal.economictimes.indiatimes.com/rss/topstories', source: 'ET Legal' },
    { url: 'https://news.google.com/rss/search?q=India+Legal+News&hl=en-IN&gl=IN&ceid=IN:en', source: 'Google News' }
];

// Import libraries for content extraction
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';
import { unstable_cache } from 'next/cache';

// Internal fetching function
async function fetchNewsData(): Promise<NewsPost[]> {
  // ... (existing implementation)
    // 1. Fetch Local News
  let localNews: NewsPost[] = [];
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    localNews = JSON.parse(data);
  } catch (error) {
    console.warn("Failed to load local news", error);
  }

  // 2. Fetch External News (RSS)
  const parser = new Parser({
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
  });
  let externalNews: NewsPost[] = [];

  const feedPromises = RSS_FEEDS.map(async (feed) => {
      try {
          // console.log(`Fetching RSS from ${feed.url}...`); // Reduced logging
          const feedData = await parser.parseURL(feed.url);
          // console.log(`Fetched ${feedData.items.length} items from ${feed.source}`);
          return feedData.items.map(item => {
              // Create a consistent ID and Slug
              const slug = item.title 
                  ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') 
                  : `news-${Math.random().toString(36).substr(2, 9)}`;
              
              const date = item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

              return {
                  id: item.guid || item.link || slug,
                  title: item.title || 'No Title',
                  slug: slug,
                  excerpt: item.contentSnippet || item.content || '',
                  content: item.content || item.contentSnippet || '', // Use snippet as placeholder content
                  date: date,
                  author: feed.source, // Use source name as author
                  category: 'Legal News',
                  link: item.link,
                  isExternal: true
              } as NewsPost;
          });
      } catch (error) {
          console.error(`Failed to fetch RSS from ${feed.url}`, error);
          return [];
      }
  });

  const feedResults = await Promise.all(feedPromises);
  feedResults.forEach(items => externalNews.push(...items));

  // 3. Merge and Sort
  const allNews = [...localNews, ...externalNews];
  
  // Sort by date descending
  return allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Exported cached version
export const getNews = unstable_cache(
  async () => await fetchNewsData(),
  ['news-feed-data'],
  { revalidate: 3600, tags: ['news'] }
);

// Cached scraping function
const getScrapedContent = unstable_cache(
  async (url: string): Promise<{ content: string; excerpt: string } | null> => {
    return null; // TEMPORARILY DISABLED TO DEBUG 500 ERROR on Vercel
    /*
    try {
      // console.log(`Scraping content for: ${url}`);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        const html = await response.text();
        const dom = new JSDOM(html, { url });
        const reader = new Readability(dom.window.document);
        const article = reader.parse();
        
        if (article && article.content) {
          return { content: article.content, excerpt: article.excerpt };
        }
      }
    } catch (error) {
      console.warn(`Scraping failed for ${url}:`, error);
    }
    return null;
    */
  },
  ['scraped-news-content'],
  { revalidate: 86400, tags: ['news-content'] } // Cache for 24 hours
);

export async function getNewsBySlug(slug: string): Promise<NewsPost | undefined> {
  const newsList = await getNews();
  const newsItem = newsList.find((item) => item.slug === slug);

  if (!newsItem) return undefined;

  // Enhance with full content if it's an external link
  if (newsItem.isExternal && newsItem.link) {
      const scrapedData = await getScrapedContent(newsItem.link);
      if (scrapedData) {
          return {
              ...newsItem,
              content: scrapedData.content,
              excerpt: scrapedData.excerpt || newsItem.excerpt
          };
      }
  }

  return newsItem;
}

export async function saveNews(news: NewsPost[]) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(news, null, 2));
    } catch (error) {
        console.error("Failed to save news", error);
        throw new Error("Failed to save data");
    }
}
