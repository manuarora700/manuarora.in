// @ts-nocheck
import { getAllFilesFrontMatter } from "@/lib/mdx";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Manu Arora",
    site_url: "https://manuarora.in",
    feed_url: "https://manuarora.in/feed.xml",
  });

  const posts = await getAllFilesFrontMatter("blog");
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  filteredBlogPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://manuarora.in/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
