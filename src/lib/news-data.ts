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
  image?: string; // New field for card image
  link?: string;
  isExternal?: boolean;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'news.json');

const RSS_FEEDS = [
    { url: 'https://legal.economictimes.indiatimes.com/rss/topstories', source: 'ET Legal' },
    { url: 'https://news.google.com/rss/search?q=India+Legal+News&hl=en-IN&gl=IN&ceid=IN:en', source: 'Google News' }
];

// Import libraries for content extraction
import * as cheerio from 'cheerio';
import { unstable_cache } from 'next/cache';

// Helper to fetch OG Image (cached)
const getOgImage = unstable_cache(
    async (url: string): Promise<string | null> => {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s fast timeout
            
            const response = await fetch(url, {
                headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (!response.ok) return null;
            
            // Read first 15kb which usually contains meta tags
            // Note: response.text() reads whole body, we can't easily partial read with fetch in Node env without streams
            // For simplicity and Vercel compatibility, just read text but maybe limit if possible. 
            // In Node 18+ fetch, we can just read.
            const html = await response.text();
            
            // Simple regex for speed, avoid full parser for just one tag
            const ogMatch = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i) || 
                            html.match(/<meta[^>]+name="twitter:image"[^>]+content="([^"]+)"/i);
            
            return ogMatch ? ogMatch[1] : null;
        } catch (e) {
            return null;
        }
    },
    ['og-image-cache'],
    { revalidate: 86400, tags: ['og-image'] }
);

// Internal fetching function
async function fetchNewsData(): Promise<NewsPost[]> {
  // ... (existing implementation)
    // 1. Fetch local news... (keep existing)
  let localNews: NewsPost[] = [];
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    localNews = JSON.parse(data);
  } catch (error) {
    console.warn("Failed to load local news", error);
  }

  // 2. Fetch External News (RSS)
  const parser = new Parser({
      customFields: {
          item: [
            ['media:content', 'mediaContent'],
            ['media:thumbnail', 'mediaThumbnail'],
            ['enclosure', 'enclosure'],
            ['image', 'rssImage'],
            ['content:encoded', 'contentEncoded']
          ]
      },
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
  });
  let externalNews: NewsPost[] = [];

  const feedPromises = RSS_FEEDS.map(async (feed) => {
      try {
          const feedData = await parser.parseURL(feed.url);
          
          // Process items in parallel to fetch OG images if needed
          const itemPromises = feedData.items.map(async (item) => {
              // Create a consistent ID and Slug
              const slug = item.title 
                  ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') 
                  : `news-${Math.random().toString(36).substr(2, 9)}`;
              
              const date = item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

              // Try to find an image
              let imageUrl = '';
              
              // 1. Check Media Content / Thumbnail (common in RSS)
              if (item.mediaContent && item.mediaContent['$'] && item.mediaContent['$'].url) {
                  imageUrl = item.mediaContent['$'].url;
              } else if (item.mediaThumbnail && item.mediaThumbnail['$'] && item.mediaThumbnail['$'].url) {
                  imageUrl = item.mediaThumbnail['$'].url;
              } else if (item.enclosure && item.enclosure.url && item.enclosure.type?.startsWith('image')) {
                 imageUrl = item.enclosure.url;
              } else if (item.rssImage) { 
                 imageUrl = item.rssImage;
              }
              
              // 2. Extract from Content using Cheerio (handles unescaping)
              if (!imageUrl && (item.content || item.contentEncoded)) {
                  const content = item.contentEncoded || item.content;
                  const $ = cheerio.load(content);
                  const img = $('img').first();
                  if (img.length > 0) {
                      imageUrl = img.attr('src') || '';
                  }
              }

              // 3. Fallback: Fetch OG Image from the link (Limit to top items or all? Cache handles it)
              // Only do this if we really don't have an image
              if (!imageUrl && item.link) {
                  // Wait for it? Yes, we need it for this render
                  imageUrl = await getOgImage(item.link) || '';
              }

              return {
                  id: item.guid || item.link || slug,
                  title: item.title || 'No Title',
                  slug: slug,
                  excerpt: item.contentSnippet || item.content || '',
                  content: item.content || item.contentSnippet || '', 
                  date: date,
                  author: feed.source, 
                  category: 'Legal News',
                  image: imageUrl,
                  link: item.link,
                  isExternal: true
              } as NewsPost;
          });

          return await Promise.all(itemPromises);

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
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout

      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        const html = await response.text();
        const $ = cheerio.load(html);

        // 1. Find the best container
        const containerSelectors = ['article', 'main', '.article-body', '.story-content', '.content', '#content', '.entry-content'];
        let container = null;

        for (const selector of containerSelectors) {
             const el = $(selector);
             if (el.length > 0) {
                 // heuristic: assume the one with most text is the body
                 let best = el.first();
                 el.each((_, e) => {
                    if ($(e).text().length > best.text().length) best = $(e);
                 });
                 if (best.text().length > 500) {
                     container = best;
                     break;
                 }
             }
        }
        
        // Fallback to body if nothing specific found but body has content
        if (!container && $('body').text().length > 500) {
             container = $('body');
        }

        if (!container) return null;

        // 1.5 Super Blacklist
        const blacklist = [
            'script', 'style', 'nav', 'header', 'footer', 'iframe', 'form', 
            '.ad', '.advertisement', 
            '.social-share', '.share-icon', '.share-wrapper',
            '.related-articles', '.related-stories', '.read-also', '.also-read', 
            '#comments', '.comments', '.comment-section', '.comment-heading', '.comment-policy',
            '.report-error', '.correction', 
            '.author-bio', '.author-info', '.name-author',
            '.subscription-widget', '.promoted-content',
            '.article-publish-date', '.news-tags-article',
            '.download-icon', '.breadcrumb', '.hide'
        ];
        container.find(blacklist.join(', ')).remove();

        // Remove elements by text content (heuristic for "Subscribe", "Updated On")
        container.find('h2, h3, h4, ul, div').each((_, el) => {
            const text = $(el).text().toLowerCase();
            if (text.includes('comments') || text.includes('join the community') || text.includes('subscribe to') || text.includes('updated on')) {
                $(el).remove();
            }
        });

        // 2. Fix Images
        container.find('img').each((_, el) => {
            const $img = $(el);
            const src = $img.attr('data-src') || $img.attr('data-url') || $img.attr('data-original') || $img.attr('src');
            
            if (src) {
                try {
                    const absoluteUrl = new URL(src, url).toString();
                    $img.attr('src', absoluteUrl);
                    $img.attr('referrerpolicy', 'no-referrer');
                    $img.removeAttr('loading');
                    $img.removeAttr('srcset');
                    
                     if (($img.attr('width') && parseInt($img.attr('width')!) < 20) || 
                        ($img.attr('height') && parseInt($img.attr('height')!) < 20)) {
                         $img.remove();
                    }
                } catch (e) { $img.remove(); }
            } else {
                $img.remove();
            }
        });

        // 3. Unwrap Layout Tags (div, span, section)
        // Repeat a few times to handle nesting
        for (let i = 0; i < 5; i++) {
            container.find('div, span, section, article, a').each((_, el) => {
                // Keep href for A links? Let's unwrap A too if it doesn't look like a real link in text.
                // For now, let's keep A tags as they might be important.
                if (el.tagName === 'a') return; 
                $(el).replaceWith($(el).contents());
            });
        }
        
        // 4. Final Cleanup of empty tags
        // After unwrapping, we might have empty p tags or h tags
        container.find('p, h2, h3, h4, h5, h6, ul, ol, li').each((_, el) => {
            if ($(el).text().trim().length === 0 && $(el).find('img').length === 0) {
                $(el).remove();
            }
        });

        let cleanerContent = container.html() || "";

        if (!cleanerContent) return null;

        // Create excerpt from the clean content
        const cleanText = cheerio.load(cleanerContent).text().substring(0, 160).trim() + '...';

        return { content: cleanerContent, excerpt: cleanText };
      }
    } catch (error) {
       // console.warn(`Scraping failed for ${url}:`, error);
    }
    return null;
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
