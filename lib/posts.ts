import { createServerFn } from "@tanstack/react-start";
import { notFound } from "@tanstack/react-router";
import { getAllFilesFrontMatter, getFileBySlug } from "./mdx.server";

export const getPosts = createServerFn({ method: "GET" }).handler(() =>
  getAllFilesFrontMatter(),
);

export const getPost = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const post = await getFileBySlug(slug);
    if (!post) throw notFound();
    return post;
  });
