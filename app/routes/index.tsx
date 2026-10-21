import { createFileRoute } from "@tanstack/react-router";
import Container from "@/components/container";
import { Header } from "@/components/header";
import { Reach } from "@/components/reach";
import { Work } from "@/components/work";
import { LatestVideos } from "@/components/latest-videos";
import { DottedSeparator } from "@/components/separator";
import { Companies } from "@/components/companies";
import { BlogList } from "@/components/blog/blog-list";
import { WorkWithMe } from "@/components/work-with-me";
import { getPosts } from "@/lib/posts";
import { getYouTube } from "@/lib/youtube";
import { CACHE_HEADERS, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [posts, youtube] = await Promise.all([getPosts(), getYouTube()]);
    return {
      youtube,
      posts: posts.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    };
  },
  headers: () => CACHE_HEADERS,
  head: () => ({
    meta: [
      { title: "Manu Arora" },
      {
        name: "description",
        content: "Founder, Creator, YouTuber, Shitposter, and a Learner.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Home,
});

function Home() {
  const { posts, youtube } = Route.useLoaderData();
  return (
    <Container>
      <Header />
      <DottedSeparator className="my-10" />
      <Reach youtube={youtube} />
      <DottedSeparator className="my-10" />
      <Work />
      <DottedSeparator className="my-10" />
      <LatestVideos videos={youtube.videos} featured={youtube.featured} />
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
