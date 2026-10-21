import { createFileRoute } from "@tanstack/react-router";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex } from "@/components/blog/blog-index";
import { getPosts } from "@/lib/posts";
import { pageTitle, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/")({
  loader: () => getPosts(),
  head: () => ({
    meta: [
      { title: pageTitle("Blog - Manu Arora") },
      {
        name: "description",
        content:
          "Notes on software, design engineering, freelancing, and things I learn while building.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = Route.useLoaderData();

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">My thoughts on things</Subheading>
        <p className="text-foreground pt-4 text-base">
          I occasionally write here and talk about things that I want to share
          on my personal space.
        </p>

        <BlogIndex posts={posts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
