import { createFileRoute } from "@tanstack/react-router";
import MDXComponents from "@/components/mdx-components";
import { BlogArticleShell } from "@/components/blog/blog-article-shell";
import { MDXContent } from "@/lib/mdx-content";
import { getPost } from "@/lib/posts";
import { pageTitle, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => getPost({ data: params.slug }),
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { title, summary, image } = loaderData.frontMatter;
    const url = `${SITE_URL}/blog/${params.slug}`;
    const ogImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`
      : undefined;

    return {
      meta: [
        { title: pageTitle(title) },
        { name: "description", content: summary },
        { property: "og:title", content: title },
        { property: "og:description", content: summary },
        { property: "og:url", content: url },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
        { property: "og:type", content: "article" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: summary },
        ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { code, frontMatter } = Route.useLoaderData();
  return (
    <BlogArticleShell frontMatter={frontMatter}>
      <MDXContent code={code} components={MDXComponents} />
    </BlogArticleShell>
  );
}
