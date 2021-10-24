import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import ViewCounter from "@/components/ViewCounter";
import Contact from "@/components/Contact";
import Link from "next/link";
import { NAME } from "constants/app";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} – ${NAME}`}
      description={frontMatter.summary}
      image={`https://manuarora.in${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <Link href="/blog">
          <a>
            <svg
              className="w-8 h-8 text-gray-500 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </Link>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 mb-8 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt={`${NAME}`}
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {frontMatter.by}
              {`${NAME} / `}
              {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="w-full mx-auto mt-8">
          <Contact />
        </div>
        {/* <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Discuss on Twitter"}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Edit on GitHub"}
          </a>
        </div> */}
      </article>
    </Container>
  );
}
