import type { Metadata } from "next";
import { getFiles, getFileBySlug } from "@/lib/mdx";
import BlogPostClient from "./BlogPostClient";

const siteUrl = "https://manuarora.in";

type PostFrontMatter = {
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
  readingTime?: { text: string };
};

export async function generateStaticParams() {
  const posts = await getFiles("blog");
  return posts.map((p) => ({
    slug: p.replace(/\.mdx/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getFileBySlug("blog", slug);
  const { title, summary, image } = post.frontMatter as unknown as PostFrontMatter;

  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : undefined;

  return {
    title,
    description: summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description: summary,
      type: "article",
      url: `${siteUrl}/blog/${slug}`,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getFileBySlug("blog", slug);
  return (
    <BlogPostClient
      mdxSource={post.mdxSource}
      frontMatter={post.frontMatter as unknown as PostFrontMatter}
    />
  );
}
