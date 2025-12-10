
import { getNewsBySlug } from './src/lib/news-data';

(async () => {
    const slug = process.argv[2]; 
    if (!slug) {
        console.log("Please provide a slug.");
        // Try to fetch all news first to get a slug
        console.log("Fetching news list to find a slug...");
        const news = await import('./src/lib/news-data').then(m => m.getNews());
        const externalArgs = news.filter(n => n.isExternal);
        if (externalArgs.length > 0) {
            console.log(`Found ${externalArgs.length} external items. Testing first one: ${externalArgs[0].slug}`);
            testSlug(externalArgs[0].slug);
        } else {
            console.log("No external news found to test.");
        }
    } else {
        testSlug(slug);
    }
})();

async function testSlug(slug: string) {
    console.time("getNewsBySlug");
    try {
        const item = await getNewsBySlug(slug);
        console.timeEnd("getNewsBySlug");
        if (item) {
            console.log("Success! Title:", item.title);
            console.log("Content Length:", item.content.length);
        } else {
            console.log("Item not found.");
        }
    } catch (error) {
        console.timeEnd("getNewsBySlug");
        console.error("Error:", error);
    }
}
