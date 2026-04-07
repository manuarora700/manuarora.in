import Container from "@/components/Container";
import { Header } from "@/components/new-components/header";
import { Work } from "@/components/new-components/work";
import { DottedSeparator } from "@/components/new-components/separator";
import { Companies } from "@/components/new-components/companies";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { BlogList } from "@/components/new-components/blog/blog-list";
import { WorkWithMe } from "@/components/new-components/work-with-me";

type HomeBlogPost = {
  slug: string;
  publishedAt: string;
  title: string;
};

export default async function Home() {
  const posts = ((await getAllFilesFrontMatter("blog")) as HomeBlogPost[]).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <Container>
      <Header />

      <DottedSeparator className="my-8" />
      <Work />
      <DottedSeparator className="my-8" />
      <Companies />
      <DottedSeparator className="my-8" />
      <WorkWithMe />
      <DottedSeparator className="my-8" />
      <BlogList posts={posts} />
      <DottedSeparator className="my-8" />
    </Container>
  );
}
