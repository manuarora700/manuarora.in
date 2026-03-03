// @ts-nocheck
"use client";

import { MDXRemote } from "next-mdx-remote";

import BlogLayout from "@/layouts/blog";
import MDXComponents from "@/components/MDXComponents";

export default function BlogPostRenderer({ mdxSource, frontMatter }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </BlogLayout>
  );
}
