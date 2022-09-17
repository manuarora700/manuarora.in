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
import { LinkPreview } from "@/components/LinkPreview";
import { StaticLinkPreview } from "@/components/StaticLinkPreview";
import { useTheme } from "next-themes";
import Talks from "@/components/Talks";

export default function Home() {
  const [colors, setColors] = useState([]);
  // const [tempInterval, setTempInterval] = useState(null);

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
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex md:w-3/4 flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Hey, I’m Manu Arora
            </h1>

            <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
              🖥 I’m a developer, writer, and a creator. <br />
              🗒 I work at{" "}
              <span className="font-bold">
                <span className="text-blue-500">m</span>roads
              </span>{" "}
              as a{" "}
              <span className="dark:text-white font-bold">
                Senior Software Engineer.{" "}
              </span>{" "}
              <br />
              🔨 Building{" "}
              <LinkPreview url="https://algochurn.com">
                <span className="text-black dark:text-white">Algochurn </span>
              </LinkPreview>
              //{" "}
              <LinkPreview url="https://tailwindmasterkit.com">
                <span className="text-black dark:text-white">
                  Tailwind Master Kit <br />
                </span>
              </LinkPreview>
              🧑🏻‍🏫 Mentoring folks at{" "}
              <LinkPreview url="https://www.codementor.io/@manuarorawork?refer=badge">
                <span className="text-black dark:text-white">Codementor</span>
              </LinkPreview>{" "}
              //{" "}
              <LinkPreview url="https://mentorcruise.com/mentor/manuarora">
                <span className="text-black dark:text-white">
                  MentorCruise <br />
                </span>
              </LinkPreview>
              💯 Embracing Entrepreneurship at{" "}
              <LinkPreview url="https://www.placeholdertech.in">
                <span className="text-black dark:text-white">
                  PlaceholderTech <br />
                </span>
              </LinkPreview>
              🐥 I{" "}
              <a
                className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600"
                target="__blank"
              >
                <LinkPreview url="https://twitter.com/mannupaaji">
                  <span className=" text-blue-500 dark:text-blue-500">
                    Tweet
                  </span>
                </LinkPreview>
              </a>{" "}
              about technology, learning and{" "}
              <StaticLinkPreview url="https://manuarora.in/radhey-bhaiya.jpeg">
                <span
                  onMouseEnter={play}
                  onMouseLeave={play}
                  className="text-black dark:text-white"
                >
                  memes.
                </span>
              </StaticLinkPreview>
            </h2>
          </div>

          <a
            href="https://twitter.com/mannupaaji"
            className="md:flex hidden md:w-1/4 flex-col relative"
            target="__blank"
          >
            <div className="absolute w-full h-full rounded-full transform scale-110 shadow-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" />
            <img
              src="avatar-new.png"
              className="rounded-full max-w-[200px]  z-0"
            />
          </a>
        </div>
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
        <ProjectCard
          title="Tailwind Master Kit"
          description="Beautiful, Handcrafted, ready-to-use components and templates for your next Tailwind web app project."
          href="https://tailwindmasterkit.com/"
          icon="tailwindmasterkit"
          tags={["Tailwind", "Next.js", "Freemium"]}
        />

        <ProjectCard
          title="Algochurn"
          description="Practice the most popular algorithmic questions and Front-end interview questions with an interactive IDE and learning environment."
          href="https://algochurn.com"
          icon="algochurn"
          tags={["Next.js", "React", "TailwindCSS", "Monaco", "Algorithms"]}
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
        <div className=" my-6 md:my-10">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
            Tech Talks
          </h3>
          <Talks
            title={`Crafting the perfect portfolio website for developers`}
            description={` Talked about how to effectively utilise a portfolio website to
          put yourself in the best position to win.`}
            company={`roc8.careers`}
            image={`/talks/roc8.png`}
            url={`https://www.youtube.com/watch?v=yKVCl1jFkQQ`}
          />
        </div>

        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
