// @ts-nocheck
"use client";

import dynamic from "next/dynamic";

const BlogPostRenderer = dynamic(() => import("./BlogPostRenderer"), {
  ssr: false,
});

export default function BlogPostClient({ mdxSource, frontMatter }) {
  return <BlogPostRenderer mdxSource={mdxSource} frontMatter={frontMatter} />;
}
