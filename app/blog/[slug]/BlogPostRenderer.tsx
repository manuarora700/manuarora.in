"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

import MDXComponents from "@/components/mdx-components";
import { BlogArticleShell } from "@/components/blog/blog-article-shell";

type BlogPostRendererProps = {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    title: string;
    publishedAt: string;
    summary?: string;
    readingTime?: { text: string };
  };
};

export default function BlogPostRenderer({
  mdxSource,
  frontMatter,
}: BlogPostRendererProps) {
  return (
    <BlogArticleShell frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogArticleShell>
  );
}
