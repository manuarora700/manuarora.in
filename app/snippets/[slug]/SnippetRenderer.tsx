// @ts-nocheck
"use client";

import { MDXRemote } from "next-mdx-remote";

import SnippetLayout from "@/layouts/snippets";
import MDXComponents from "@/components/MDXComponents";

export default function SnippetRenderer({ mdxSource, frontMatter }) {
  return (
    <SnippetLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </SnippetLayout>
  );
}
