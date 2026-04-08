"use client";

import dynamic from "next/dynamic";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const BlogPostRenderer = dynamic(() => import("./BlogPostRenderer"), {
  ssr: false,
});

type BlogPostClientProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    publishedAt: string;
    summary?: string;
    readingTime?: { text: string };
  };
};

export default function BlogPostClient({
  mdxSource,
  frontMatter,
}: BlogPostClientProps) {
  return <BlogPostRenderer mdxSource={mdxSource} frontMatter={frontMatter} />;
}
