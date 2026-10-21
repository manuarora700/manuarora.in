import { createFileRoute } from "@tanstack/react-router";
import { getAllFilesFrontMatter } from "@/lib/mdx.server";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls: { loc: string; lastmod?: string }[] = [
          { loc: `${SITE_URL}/` },
          { loc: `${SITE_URL}/blog` },
          { loc: `${SITE_URL}/sponsor` },
          ...getAllFilesFrontMatter().map((post) => ({
            loc: `${SITE_URL}/blog/${post.slug}`,
            lastmod: post.publishedAt,
          })),
        ];
        const body = urls
          .map(
            ({ loc, lastmod }) =>
              `<url>\n<loc>${loc}</loc>${lastmod ? `\n<lastmod>${lastmod}</lastmod>` : ""}\n</url>`,
          )
          .join("\n");

        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
          { headers: { "Content-Type": "application/xml" } },
        );
      },
    },
  },
});
