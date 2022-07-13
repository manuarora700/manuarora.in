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
        <div className="flex flex-row justify-center w-full mb-8">
          <Icons.NotionAvatar className="w-56 " />
        </div>
        <RoughNotationGroup show={isFontReady}>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            <span className="pr-3">Hey, I’m</span>
            <RainbowHighlight color={colors[0]}>
              <span className="dark:text-black">{AppConfig.NAME}</span>
            </RainbowHighlight>{" "}
          </h1>

          <h2 className="mt-4 mb-16 font-light leading-loose tracking-wide text-gray-600 dark:text-gray-400">
            <span className="pr-1">I’m a developer and builder. I work at</span>
            <a className="pr-1 font-bold" href="https://glood.ai">
              Glood AI
            </a>
            <span className="pr-2">as a</span>
            <RainbowHighlight color={colors[1]}>
              <span className="-ml-1 dark:text-black">
                Senior Software Engineer.
              </span>
            </RainbowHighlight>
            <span className="pl-1">
              You've discovered my place on the internet
            </span>
          </h2>
        </RoughNotationGroup>
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
