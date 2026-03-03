// @ts-nocheck
import { getFiles, getFileBySlug } from "@/lib/mdx";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const posts = await getFiles("blog");
  return posts.map((p) => ({
    slug: p.replace(/\.mdx/, ""),
  }));
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;
  const post = await getFileBySlug("blog", slug);
  return <BlogPostClient mdxSource={post.mdxSource} frontMatter={post.frontMatter} />;
}
