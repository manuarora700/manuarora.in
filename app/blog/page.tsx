import Container from "@/components/Container";
import { Subheading } from "@/components/new-components/subheading";
import { DottedSeparator } from "@/components/new-components/separator";
import {
  BlogIndex,
  type BlogIndexPost,
} from "@/components/new-components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export const metadata = {
  title: "Blog – Manu Arora",
  description:
    "Notes on software, design engineering, freelancing, and things I learn while building.",
};

export default async function BlogPage() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">My thoughts on things</Subheading>
        <p className="text-foreground pt-4 text-base">
          I occasionaly write here and talk about things that I want to share on
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
