# Project notes

- Framework: TanStack Start (SSR) on Vite + Nitro. Source directory is `app/` (`app/routes`, `app/router.tsx`). `app/routeTree.gen.ts` is generated.
- Blog posts: MDX files in `data/blog`, compiled on the server in `lib/mdx.server.ts` and loaded through server functions in `lib/posts.ts`.
- YouTube stats and latest videos: `lib/youtube.server.ts` (server-only, cached 6h). Needs `YOUTUBE_API_KEY` (YouTube Data API v3); without it, it tries the RSS feed, then shows a link to the channel. Socials, X follower count and Aceternity UI numbers are in `lib/site.ts`.
- Commands:
  - `npm run dev` - dev server on http://localhost:3000
  - `npm run typecheck` - TypeScript check
  - `npm run build` - production build to `.output`
  - `npm start` - run the production build
- Verification: run `npm run typecheck` and `npm run build`. MDX components must render valid HTML nesting (no block elements inside `<p>`), or SSR hydration fails.
