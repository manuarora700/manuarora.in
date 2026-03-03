// @ts-nocheck
import { getFiles, getFileBySlug } from "@/lib/mdx";
import SnippetClient from "./SnippetClient";

export async function generateStaticParams() {
  const snippets = await getFiles("snippets");
  return snippets.map((s) => ({
    slug: s.replace(/\.mdx/, ""),
  }));
}

export default async function SnippetSlugPage({ params }) {
  const { slug } = await params;
  const snippet = await getFileBySlug("snippets", slug);
  return (
    <SnippetClient
      mdxSource={snippet.mdxSource}
      frontMatter={snippet.frontMatter}
    />
  );
}
