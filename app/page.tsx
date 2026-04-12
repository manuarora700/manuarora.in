import type { Metadata } from "next";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { Work } from "@/components/work";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { BlogList } from "@/components/blog/blog-list";
import { WorkWithMe } from "@/components/work-with-me";

type HomeBlogPost = {
  slug: string;
  publishedAt: string;
  title: string;
};

export const metadata: Metadata = {
  title: "Manu Arora",
  description: "Founder, Creator, YouTuber, Shitposter, and a Learner.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const posts = ((await getAllFilesFrontMatter("blog")) as HomeBlogPost[]).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <Companies />
      <DottedSeparator className="my-10" />
      <WorkWithMe />
      <DottedSeparator className="my-10" />
      <BlogList posts={posts} />
      <DottedSeparator className="my-10" />
    </Container>
  );
}
