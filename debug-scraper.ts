
import * as cheerio from 'cheerio';
import fs from 'fs';
import Parser from 'rss-parser';

async function testScraper() {
    console.log("Fetching RSS feed...");
    const parser = new Parser();
    const feed = await parser.parseURL('https://legal.economictimes.indiatimes.com/rss/topstories');
    
    if (!feed.items || feed.items.length === 0) {
        console.error("No items found in feed");
        return;
    }

    const url = feed.items[0].link; 
    console.log(`Testing scraping on: ${url}`);
    
    if (!url) { console.error("No URL found"); return; }

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        const html = await response.text();
        fs.writeFileSync('debug-raw.html', html);
        console.log("Raw HTML saved to debug-raw.html");

        const $ = cheerio.load(html);

        // 1. Find container
        const containerSelectors = ['article', 'main', '.article-body', '.story-content', '.content', '#content', '.entry-content', '.artData', '.articleHeader'];
        let container = null;

        // Try to identify specific ET Legal structure if possible
        // ET often uses .artText or .article-section
        const specificSelectors = ['.artText', '.article_content', '.story_text'];
        
        for (const selector of [...specificSelectors, ...containerSelectors]) {
             const el = $(selector);
             if (el.length > 0) {
                 let best = el.first();
                 el.each((_, e) => {
                    if ($(e).text().length > best.text().length) best = $(e);
                 });
                 if (best.text().length > 500) {
                     console.log(`Found container: ${selector}`);
                     container = best;
                     break;
                 }
             }
        }
        
        if (!container && $('body').text().length > 500) {
             console.log("Fallback to body");
             container = $('body');
        }

        if (!container) {
            console.error("No container found");
            return;
        }

        console.log("Container children types:");
        container.children().each((i, el) => {
            if (i < 5) {
                 console.log(`- ${el.tagName} (class: ${$(el).attr('class')}) - Text len: ${$(el).text().length}`);
                 
                 // If it's the huge div, drill down
                 if ($(el).text().length > 1000) {
                     console.log("  >>> Drilling down into huge element:");
                     $(el).children().each((j, child) => {
                         if (j < 10) {
                             console.log(`    - ${child.tagName} (class: ${$(child).attr('class')}) - Text len: ${$(child).text().length}`);
                         }
                     });
                 }
            }
        });

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
            '.download-icon', '.breadcrumb'
        ];
        container.find(blacklist.join(', ')).remove();

        // Remove elements by text content (heuristic for "Subscribe", "Join community")
        container.find('h2, h3, h4').each((_, el) => {
            const text = $(el).text().toLowerCase();
            if (text.includes('comments') || text.includes('join the community') || text.includes('subscribe to')) {
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
                } catch (e) {}
            }
        });

        // 3. Unwrap Layout Tags (div, span, section)
        // Repeat a few times to handle nesting
        for (let i = 0; i < 5; i++) {
            container.find('div, span, section, article, a').each((_, el) => {
                // Keep href for A? Maybe not for scraping full text, user might want plain text.
                // Actually keep A but unwrap div/span.
                if (el.tagName === 'a') return; 
                 // Don't unwrap if it has attributes we want? No, we just want semantic tags.
                $(el).replaceWith($(el).contents());
            });
        }
        
        // 4. Final Allowlist Check (optional protection)
        // Since we unwrapped, we should theoretically have only p, h, ul, img left... and text nodes.
        // But let's just use the current container HTML.
        
        let cleanerContent = container.html() || "";


        fs.writeFileSync('debug-clean.html', cleanerContent || "NO CONTENT EXTRACTED");
        console.log("Clean HTML saved to debug-clean.html");

    } catch (error) {
        console.error("Error:", error);
    }
}

testScraper();
