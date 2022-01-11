import Container from "@/components/Container";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

import { LIGHT_COLORS } from "@/lib/constants";

import { shuffleArray } from "@/lib/shuffleArray";
import { useEffect, useState } from "react";
import { RainbowHighlight } from "@/ui/RainbowHighlight";

import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useIsFontReady } from "@/lib/useIsFontReady";
import { LinkPreview } from "@/components/LinkPreview";
import { StaticLinkPreview } from "@/components/StaticLinkPreview";

export default function Home() {
  const [colors, setColors] = useState([]);

  const isFontReady = useIsFontReady();

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title="Manu Arora - Developer, Writer, Creator"
      description="Full-Stack developer, JavaScript enthusiast, Freelancer, Tech Blogger and a Learner. I love building products and web apps that impact millions of lives."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex md:w-3/4 flex-col">
            <RoughNotationGroup show={isFontReady}>
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hey, I’m{" "}
                <RainbowHighlight color={colors[0]}>
                  <span className="dark:text-black">Manu Arora</span>
                </RainbowHighlight>{" "}
              </h1>

              <h2 className="text-gray-600 dark:text-gray-400 mb-16 mt-4 font-light tracking-wide leading-normal">
                I’m a developer, writer, and creator. I work at{" "}
                <span className="font-bold">
                  <span className="text-blue-500">m</span>roads
                </span>{" "}
                as a{" "}
                <span className="dark:text-white font-bold">
                  Software Engineer.{" "}
                </span>
                You've discovered my piece on the internet.
                <br /> Building{" "}
                <LinkPreview url="https://tailwindmasterkit.com">
                  <span className="text-black dark:text-white">
                    Tailwind Master Kit{" "}
                  </span>
                </LinkPreview>
                and{" "}
                <LinkPreview url="https://manuarora.in/boxshadows">
                  <span className="text-black dark:text-white">
                    Tailwind Box Shadows <br /> <br />
                  </span>
                </LinkPreview>
                <RoughNotation
                  type="underline"
                  multiline={true}
                  animationDuration={1500}
                  animationDelay={1700}
                  strokeWidth={2}
                  iterations={3}
                  padding={5}
                  color={colors[3]}
                >
                  <Link
                    href="/blog"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                  >
                    <a className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none dark:text-gray-300 dark:hover:text-gray-600">
                      <LinkPreview url="https://manuarora.in/blog">
                        <span className="text-black dark:text-white">
                          Checkout my blog
                        </span>
                      </LinkPreview>
                    </a>
                  </Link>
                </RoughNotation>{" "}
                while you're here. <br />I write about technology, learning and{" "}
                <StaticLinkPreview url="https://manuarora.in/radhey-bhaiya.jpeg">
                  <span className="text-black dark:text-white">memes.</span>
                </StaticLinkPreview>
              </h2>
            </RoughNotationGroup>
          </div>

          <div className="md:flex hidden md:w-1/4 flex-col">
            <img
              src="avatar-new.png"
              className="rounded-full max-w-[200px] shadow-xl shadow-cyan-500/50"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
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
          title="Covid Rescue"
          description="Get Real-time verified leads on Oxygen, Beds, Remdesivir and more with location and resource filtering"
          href="https://covidrescue.co.in/"
          icon="covidrescue"
          tags={["Open Source", "Next.js", "Twitter"]}
        />
        <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
          icon="placeholdertech"
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
          icon="fastfeedback"
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
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="#"
          icon="algochurn"
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
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
