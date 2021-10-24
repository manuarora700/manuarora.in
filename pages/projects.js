import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { NAME } from "constants/app";
import Icons from "@/components/Icons";

export default function projects() {
  return (
    <Container
      title={`Projects – ${NAME}`}
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of."
      image="/avatar.jpg"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <h2 className="mb-16 prose text-gray-600 dark:text-gray-400">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here.
        </h2>
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Full-Stack
        </h3>

        <ProjectCard
          title="Checkout Upsells & Promotions - Dashboard"
          description="One Click Native Checkout Promotions Builder to increase AoV"
          href="https://apps.shopify.com/checkout-upsell-promotions"
          Icon={Icons.Glood}
          tags={["Tailwind", "React", "Shopify"]}
        />
        <ProjectCard
          title="GRE Ninja"
          description="Learn important GRE words easily on GREninja app with flashcards, contextual image and podcasts."
          href="https://play.google.com/store/apps/details?id=com.GREninja.GRE.vocabulary"
          Icon={Icons.GreNinja}
          tags={["Angular", "Firebase", "Merriam-Webster"]}
        />

        <a
          href="https://github.com/a3har"
          className="flex flex-row items-center justify-center px-4 py-2 mx-auto text-gray-800 border rounded-md dark:text-gray-300"
        >
          See all at{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="ml-2"
              fill="currentColor"
              stroke="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </span>
        </a>

        {/* <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Upcoming Projects
        </h3> */}
        {/* <ProjectCard
          title="Algochurn"
          description="Your last moment friend before a Technical Interview round. Practice the most popular Data Structures & Algorithms"
          href="#"
          icon="algochurn"
          tags={["NextJS", "Tailwind", "MongoDB", "NodeJS"]}
        />
        <ProjectCard
          title="VSCode Resume"
          description="A VSCode themed resume for all the web developers out there. A UI which looks exactly like a React file-system based VSCode window with create and update operations."
          href="#"
          icon="vscode"
          tags={["NextJS", "Tailwind", "Hackerearth"]}
        />
        <ProjectCard
          title="More projects coming soon.."
          description="I get ideas all day 🙄, All of them are updated here as soon as I start working on them."
          href="#"
          icon="more"
        /> */}

        {/* 🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more. */}
        <Contact />
      </div>
    </Container>
  );
}
