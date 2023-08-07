import { useState } from "react";

import Container from "@/components/Container";
import BlogPost from "@/components/BlogPost";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import FreeCodeCamp from "@/components/FreeCodeCampCard/FreeCodeCamp";

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

// Ghost CMS Way
// async function getPosts() {
//   const res = await fetch(
//     `${process.env.BLOG_URL}/ghost/api/v3/content/posts/?key=${process.env.CONTENT_API_KEY}&fields=title,slug,custom_excerpt,reading_time,published_at`
//   ).then((res) => res.json());

//   const frontMatter = res.posts;

//   return frontMatter;
// }

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container
      title="Blog – Manu Arora"
      description="Thoughts on the Software Development, Programming, Tech, Freelancing, Open Source and Memes"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {`I've been programming for almost 6 years now. Throughout this year, I've worked with various technologies. I'm here to share just that.
            
            Use the search below to filter by title.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-zinc-800 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="Top 5 courses and resources to learn Next JS in 2021"
              summary="Get the top 5 resources to learn Next JS in 2021 and take your React skills to the next level."
              slug="top-5-nextjs-resources"
            />
            <BlogPost
              title="How I built a blogging platform like Medium with Next.js"
              summary="Insights and structure of devmedium, A blogging platform built with Next.js with features like custom usernames, create blogs and various optimization techniques"
              slug="blogging-platform-nextjs"
            />
            {/* <BlogPost
              title="How to design a minimal and beautiful website which actually converts"
              summary="Examining the tips and tricks used to make a website design a notch above the rest."
              slug="css-with-react"
            />
            <BlogPost
              title="Using real world projects to build better learning habits"
              summary="In this guide, you will learn how to take an idea and convert it into a real world application, while learning on the go."
              slug="css-with-react"
            /> */}
          </>
        )}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}

        <FreeCodeCamp showDesc={false} />
      </div>
    </Container>
  );
}
