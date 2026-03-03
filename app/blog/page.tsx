// @ts-nocheck
import { getAllFilesFrontMatter } from "@/lib/mdx";
import BlogClient from "./BlogClient";

export default async function BlogPage() {
  const posts = await getAllFilesFrontMatter("blog");
  return <BlogClient posts={posts} />;
}
