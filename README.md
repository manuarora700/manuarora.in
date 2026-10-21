# manuarora.in

My personal website and blog. Built with TanStack Start, Tailwind CSS v4, and MDX.

## Overview

- `app/routes/*` - File-based routes (server-rendered)
- `app/routes/blog.$slug.tsx` - Blog posts rendered from MDX in `data/blog`
- `app/routes/sponsor.tsx` - [Sponsor](https://manuarora.in/sponsor) page
- `components/*` - Reusable UI components

## Getting Started

```bash
git clone https://github.com/manuarora700/manuarora.in.git
cd manuarora.in
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000).

`npm run build` creates a server build in `.output`. Run it with `npm start`.

## Built With

- [TanStack Start](https://tanstack.com/start) (SSR) on [Vite](https://vite.dev) and [Nitro](https://nitro.build)
- [Tailwind CSS v4](https://tailwindcss.com)
- [MDX](https://mdxjs.com)
- [Motion](https://motion.dev) (Framer Motion)
- [Vercel](https://vercel.com)
