import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { getFileBySlug } from "@/lib/mdx";
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@/components/MDXComponents";
import BlogLayout from "@/layouts/blog";
import PageLayout from "@/layouts/page";

export default function Experience({ mdxSource }) {
  // console.log(props);

  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return (
    <Container
      title="Experience – Manu Arora"
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of."
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Experience & Education
        </h1>
        {/* <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I take responsibilities in an agile, cross-functional team environment to deliver high-wuality applications.
          My knowledge and experience of 5+ years are recognized for their positive organizational impact.
          Currently, I am pursuing an opportunity to utilize my technical and non-technical skills more effectively while contributing my best to the new team.
        </h2> */}

        <PageLayout>{content}</PageLayout>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const post = await getFileBySlug("experience");

  return { props: post };
}

