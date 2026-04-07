"use client";
import Link from "next/link";
import React from "react";
import { Subheading } from "../subheading";

export const BlogList = ({ posts }) => {
  return (
    <section className="flex flex-col gap-4">
      <Subheading>Writing</Subheading>
      {posts.slice(0, 3).map((post, index) => (
        <Link
          href={`/blog/${post.slug}`}
          key={index}
          className="group flex items-center justify-between gap-20 transition duration-200"
        >
          <span className="text-foreground truncate group-hover:text-black">
            {post.title}
          </span>
          <span className="text-foreground/50 shrink-0 font-mono text-xs font-light group-hover:text-black">
            {(() => {
              const date = new Date(post.publishedAt);
              const day = String(date.getDate()).padStart(2, "0");
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const year = date.getFullYear();
              return `${day}-${month}-${year}`;
            })()}
          </span>
        </Link>
      ))}
    </section>
  );
};
