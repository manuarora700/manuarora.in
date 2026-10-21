import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(
          `User-Agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
          { headers: { "Content-Type": "text/plain" } },
        ),
    },
  },
});
