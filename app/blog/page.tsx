import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog - Manu Arora",
  description:
    "Notes on software, design engineering, freelancing, and things I learn while building.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">My thoughts on things</Subheading>
        <p className="text-foreground pt-4 text-base">
          I occasionally write here and talk about things that I want to share on
          my personal space.
        </p>

        <BlogIndex posts={posts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
