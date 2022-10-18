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
import CircleDivide from "@/components/CircleDivide";

import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [colors, setColors] = useState([]);
  const [open, setOpen] = useState(false);

  let tempInterval;

  const isFontReady = useIsFontReady();
  const { theme, setTheme } = useTheme();

  const play = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    // transition: { staggerChildren: 0.5 },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <Container
      title="Manu Arora - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start space-x-14  w-full mb-10">
          <div className="flex md:w-3/4 flex-col">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
              Manu Arora
            </h1>
            <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
              Building
              <LinkPreview
                className={
                  "inline-block px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
                }
                url="https://algochurn.com"
              >
                Algochurn
              </LinkPreview>
              other
              <span
                className="font-bold cursor-pointer"
                style={{ cursor: "🤩" }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                {" "}
                cool things
                <AnimatePresence>
                  {open && (
                    <motion.div
                      key="modal"
                      variants={variants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="z-20 p-4 rounded-xl bg-white dark:bg-zinc-700 shadow-2xl absolute inset-x-0  w-full min-h-96 divide-y dark:divide-zinc-600 divide-zinc-100 text-xs md:text-sm"
                    >
                      <motion.p variants={itemA} className="font-normal py-3">
                        Founder{" "}
                        <Hyperlink
                          text="@placeholdertech"
                          link="https://placeholdertech.in"
                        />{" "}
                        and{" "}
                        <Hyperlink
                          text="@aceternity"
                          link="https://aceternity.com"
                        />
                      </motion.p>
                      <motion.p variants={itemA} className="font-normal py-3">
                        Mentoring{" "}
                        <Hyperlink
                          text="@codementor"
                          link="https://codementor.io/@manuarora"
                        />{" "}
                        and{" "}
                        <Hyperlink
                          text="@mentorcruise"
                          link="https://mentorcruise.com/mentor/manuarora/"
                        />
                      </motion.p>
                      <motion.p variants={itemA} className="font-normal py-3">
                        Helping front-end developers{" "}
                        <Hyperlink
                          text="@algochurn"
                          link="https://algochurn.com"
                        />
                      </motion.p>
                      <motion.p variants={itemA} className="font-normal py-3">
                        Web templates and components{" "}
                        <Hyperlink
                          text="@tailwindmasterkit"
                          link="https://tailwindmasterkit.com"
                        />
                      </motion.p>
                      <motion.p variants={itemA} className="font-normal py-3">
                        Blogs{" "}
                        <Hyperlink
                          text="@freecodecamp"
                          link="https://www.freecodecamp.org/news/author/manu/"
                        />
                      </motion.p>
                      <motion.p variants={itemA} className="font-normal py-3">
                        Tech videos and snippets{" "}
                        <Hyperlink
                          text="@youtube"
                          link="https://www.youtube.com/channel/UC7MQDjVfjEPkHMe1lZGkDRA"
                        />
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-500">
              Senior Software Engineer building SaaS products and web apps. Find
              me on{" "}
              <a
                href="https://twitter.com/mannupaaji"
                className="font-bold group dark:text-zinc-400 font-inter relative inline-flex  overflow-hidden"
                target="__blank"
              >
                <div className="absolute bg-teal-500/50 dark:bg-teal-500/30 inset-0 translate-y-5 group-hover:translate-y-0 transition duration-100 ease-out"></div>
                <span className="relative">twitter</span>
              </a>{" "}
              for tech updates and memes.
            </p>
          </div>

          <a
            href="https://twitter.com/mannupaaji"
            className="md:flex hidden md:w-1/4 flex-col relative"
            target="__blank"
          >
            {/* <div className="absolute w-full h-full rounded-lg transform scale-110 shadow-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" /> */}
            <img
              src="avatar-new.png"
              className="rounded-lg max-w-[200px] z-0 transform rotate-3 shadow-xl shadow-black/20"
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
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">
            Tech Talks and Videos
          </h3>
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

export const Hyperlink = ({ link, text }) => {
  return (
    <a
      href={link}
      className="inline-block font-bold text-zinc-700 dark:text-zinc-200 transform hover:scale-105 transition duration-200"
      target="__blank"
    >
      {text}
    </a>
  );
};
