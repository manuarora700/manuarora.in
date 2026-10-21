import { compile } from "@mdx-js/mdx";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remove } from "unist-util-remove";
import { SKIP, visit } from "unist-util-visit";

export type PostFrontMatter = {
  slug: string;
  title: string;
  publishedAt: string;
  summary?: string;
  image?: string;
};

export type Post = {
  code: string;
  frontMatter: PostFrontMatter & {
    wordCount: number;
    readingTime: { text: string };
  };
};

const sources = import.meta.glob<string>("../data/blog/*.mdx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const files = Object.entries(sources).map(([file, source]) => ({
  slug: file
    .split("/")
    .pop()!
    .replace(/\.mdx$/, ""),
  source,
}));

const removeImportsExports = () => (tree) => remove(tree, "mdxjsEsm");

const removeJavaScriptExpressions = () => (tree) => {
  visit(tree, (node: any, index, parent: any) => {
    if (
      node.type === "mdxFlowExpression" ||
      node.type === "mdxTextExpression"
    ) {
      if (parent && typeof index === "number") {
        parent.children.splice(index, 1);
        return [SKIP, index];
      }
    }
    if (
      (node.type === "mdxJsxFlowElement" ||
        node.type === "mdxJsxTextElement") &&
      node.attributes
    ) {
      node.attributes = node.attributes.filter((attr) =>
        attr.type === "mdxJsxAttribute"
          ? attr.value === null ||
            typeof attr.value === "string" ||
            attr.value?.type !== "mdxJsxAttributeValueExpression"
          : attr.type !== "mdxJsxExpressionAttribute",
      );
    }
  });
};

const compileMdx = async (source: string) =>
  String(
    await compile(source, {
      outputFormat: "function-body",
      development: false,
      remarkPlugins: [removeImportsExports, removeJavaScriptExpressions],
    }),
  );

export function getAllFilesFrontMatter(): PostFrontMatter[] {
  return files
    .map(({ slug, source }) => ({
      ...(matter(source).data as Omit<PostFrontMatter, "slug">),
      slug,
    }))
    .reverse();
}

const cache = new Map<string, Promise<Post>>();

async function loadPost(slug: string, source: string): Promise<Post> {
  const { data, content } = matter(source);
  const normalizedContent = content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<\/HighlightBox>\s+([^\n])/g, "</HighlightBox>\n\n$1");

  let code: string;
  try {
    code = await compileMdx(normalizedContent);
  } catch {
    code = await compileMdx(
      "This article has legacy MDX syntax that needs migration.",
    );
  }

  return {
    code,
    frontMatter: {
      wordCount: normalizedContent.split(/\s+/gu).length,
      readingTime: { text: readingTime(normalizedContent).text },
      ...(data as Omit<PostFrontMatter, "slug">),
      slug,
    },
  };
}

export function getFileBySlug(slug: string): Promise<Post> | null {
  const file = files.find((f) => f.slug === slug);
  if (!file) return null;
  if (!cache.has(slug)) cache.set(slug, loadPost(slug, file.source));
  return cache.get(slug)!;
}
