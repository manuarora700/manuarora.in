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
import * as AppConfig from "constants/app";
import Icons from "@/components/Icons";

export default function Home() {
  const [colors, setColors] = useState([]);

  const isFontReady = useIsFontReady();

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);
  return (
    <Container
      title={AppConfig.TITLE}
      description={AppConfig.DESCRIPTION}
      image="/avatar.jpg"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <RoughNotationGroup show={isFontReady}>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Hey, I’m{" "}
            <RainbowHighlight color={colors[0]}>
              <span className="dark:text-black">{AppConfig.NAME}</span>
            </RainbowHighlight>{" "}
          </h1>

          <h2 className="mt-4 mb-16 font-light leading-loose tracking-wide text-gray-600 dark:text-gray-400">
            I’m a developer, writer, and creator. I work at{" "}
            <a className="font-bold" href="https://glood.ai">
              Glood AI
            </a>{" "}
            as a{"   "}
            <RainbowHighlight color={colors[1]}>
              <span className="dark:text-black">Software Engineer.</span>
            </RainbowHighlight>{" "}
            You've discovered my place on the internet
            {/* –&nbsp; */}
            {/* <RoughNotation
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
                    Checkout my blog
                  </LinkPreview>
                </a>
              </Link>
            </RoughNotation>{" "}
            while you're here. <br />I write about technology, learning and{" "}
            <StaticLinkPreview url="https://brobible.com/wp-content/uploads/2017/08/thats-what-she-said.jpg?quality=90&w=650">
              memes.
            </StaticLinkPreview> */}
          </h2>
        </RoughNotationGroup>
        {/* <h3 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
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
        /> */}
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
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Projects
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
        <ProjectCard
          title="Medical Record Documentation System"
          description="An efficient way to digitize paper lab reports and navigate through the data"
          href="https://github.com/a3har/MRDS"
          Icon={Icons.Stethoscope}
          tags={["Python", "AWS", "Medicine"]}
        />

        <Link href="/projects">
          <a
            type="button"
            className="flex items-center px-4 py-2 mx-auto my-4 text-sm font-medium text-gray-900 rounded-md dark:text-gray-100"
          >
            See More
            <svg
              className="w-4 h-4 ml-1"
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
        <Timeline />
        <Contact />
      </div>
    </Container>
  );
}
