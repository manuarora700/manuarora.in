import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { useIsFontReady } from "@/lib/useIsFontReady";

import { useTheme } from "next-themes";
import Talks from "@/components/Talks";
import Header from "@/components/Header";

export default function Home() {
  const [colors, setColors] = useState([]);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <Container
      title="Manu Arora - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <Header />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Recent Blogs
        </h3>
        <BlogPost
          title="Ace the Javascript Interview - Practical questions to help you clear your next interview"
          summary="Ace your next Javascript Interview - Practice these topics in depth with examples and code snippets."
          slug="ace-the-javascript-interview"
        />
        <BlogPost
          title="Free portfolio website template that gets you hired in 2021"
          summary="Build a modern, minimal portfolio website with Next.js and tailwindcss for developers that gets you hired for Full Stack Developer roles in 2021."
          slug="developer-portfolio-website"
        />
        <Link href="/blog">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See All Blogs
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="Moonbeam"
            description="Never write from scratch again. Kickstart your next great writing piece with Moonbeam. Your long-form writing AI assistant."
            href="https://gomoonbeam.com"
            icon="moonbeam"
            tags={[
              "Front-end",
              "GPT-3",
              "Next.js",
              "React",
              "TailwindCSS",
              "Chrome Extension",
            ]}
          />
          <ProjectCard
            title="Aceternity"
            description="Building modern applications that scale well and are easy to maintain. Cutting edge websites with a pinch of magic, and a lot of love."
            href="https://aceternity.com"
            icon="aceternity"
            tags={["Next.js", "React", "TailwindCSS", "Full-Stack"]}
          />
          <ProjectCard
            title="Algochurn"
            description="Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment."
            href="https://algochurn.com"
            icon="algochurn"
            tags={["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"]}
          />

          <ProjectCard
            title="Tailwind Master Kit"
            description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
            href="https://tailwindmasterkit.com/"
            icon="tailwindmasterkit"
            tags={["Tailwind", "Next.js", "Freemium"]}
          />
          <ProjectCard
            title="PlaceholderTech"
            description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
            href="https://placeholdertech.in/"
            icon="placeholdertech"
            tags={["Web Dev Agency", "Products", "Freemium"]}
          />
          <ProjectCard
            title="Feedmeback"
            description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
            href="https://feedmeback-beta.vercel.app/"
            icon="fastfeedback"
            tags={["Next.js", "Stripe", "TailwindCSS"]}
          />
        </div>
        <Link href="/projects">
          <a
            type="button"
            className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          >
            See More
            <svg
              className="h-4 w-4 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </Link>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectCard
            title="StyledNext"
            description="Professional, modern and beautiful templates built with Next.js and TailwindCSS"
            href="https://stylednext.com"
            icon="vscode"
            tags={["NextJS", "Tailwind", "Hackerearth"]}
          />

          <ProjectCard
            title="VSCode Resume"
            description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
            href="#"
            icon="vscode"
          />
          <ProjectCard
            title="More projects coming soon.."
            description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
            href="#"
            icon="more"
          />
        </div>
        <div className=" my-6 md:my-10">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">
            Tech Talks and Videos
          </h3>
          <Talks
            title={`Components Of A Great Portfolio Website`}
            description={`I talk about how to create a targeted website to land more job interviews and freelance clients with all the other things that matter. Hosted on codementor.`}
            company={`codementor.io`}
            image={`/talks/codementor.jpg`}
            url={`https://www.youtube.com/watch?v=viXpJ5Xwtfs`}
          />
          <Talks
            title={`Crafting The Perfect Portfolio Website For Developers`}
            description={` Talked about how to effectively utilise a portfolio website to
          put yourself in the best position to win.`}
            company={`roc8.careers`}
            image={`/talks/roc8.png`}
            url={`https://www.youtube.com/watch?v=yKVCl1jFkQQ`}
          />
          <Talks
            title={`How To Use Algochurn To Clear Technical Interviews With Ease.`}
            description={`Algochurn is a free resource that helps front-end developers practice machine coding questions. Here I talk about how to effectively make use of Algochurn.`}
            company={`Youtube`}
            image={`/talks/algochurn-youtube.png`}
            url={`https://www.youtube.com/watch?v=sZA-WrS39KI&t=19s`}
          />
          <Talks
            title={`How To Implement Debouncing In React.`}
            description={`Debouncing is a method of preventing a function from being invoked too often. In this video, I talk about how to create a custom debounce function from scratch.`}
            company={`Youtube`}
            image={`/talks/debouncing.png`}
            url={`https://www.youtube.com/watch?v=uncrKqVtgrc`}
          />
          <div className="flex w-full justify-center">
            <a
              type="button"
              href="https://www.youtube.com/channel/UC7MQDjVfjEPkHMe1lZGkDRA"
              target="__blank"
              className="flex items-center text-sm  mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 self-center "
            >
              See All Videos
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>

        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
