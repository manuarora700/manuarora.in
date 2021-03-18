import React from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";

export default function projects() {
  return (
    <Container
      title="Projects – Manu Arora"
      description="Projects that I've built from scratch, upcoming projects, learned from courses and projects that I'm proud of."
      image="/avatar.jpg"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve developed commercial projects as well as hobby projects. All
          projects are included (along with course related projects) here.
          –&nbsp;
          <Link href="/blog">
            <a className="text-blue-500 hover:underline">
              checkout my blog&nbsp;
            </a>
          </Link>
          while you're here. <br />I write about technology, learning and memes.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Full-Stack
        </h3>
        <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
          icon="placeholdertech"
          tags={["Freelancing", "React", "Node", "Firebase"]}
        />
        <ProjectCard
          title="Golden Bells Academy"
          description="✍🏻 An educational portal to watch educational videos, write and submit assignments, view results and more."
          href="https://goldenbellsacademy.com/"
          icon="gba"
          tags={["commercial", "NextJS", "Firebase"]}
        />
        <ProjectCard
          title="Playground"
          description="An open-source playground to create HTML, CSS and Javascript components on the go."
          href="https://play.placeholdertech.in/"
          icon="play"
          tags={["NextJS", "Tailwind", "Chakra", "MongoDB"]}
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
          icon="fastfeedback"
          tags={["NextJS", "Jamstack", "Firebase", "OAuth"]}
        />
        <ProjectCard
          title="Music Streaming Application"
          description="🎶 An Open-Source music streaming website (like spotify) with rich features like creating playlist, pause, play and user login/authentication."
          href="https://github.com/manuarora700/music-streaming-project"
          icon="music"
          tags={["PHP", "MySQL", "Spotify-UI", "Minimal"]}
        />
        <ProjectCard
          title="GitHub Lookup"
          description="A minimal application to search for GitHub users with user details using the GitHub API"
          href="https://github-lookup-new.netlify.app/"
          icon="github"
          tags={["React", "Front-end", "Custom-CSS"]}
        />

        <ProjectCard
          title="IPL Statistics"
          description="A bundled web application to get details and statistics of Every player, Team and detailed analysis of each match played in IPL"
          href="https://ipl-statistics.vercel.app/"
          icon="ipl"
          tags={["NextJS", "Vercel", "Dataset", "Real-world"]}
        />

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Upcoming Projects
        </h3>
        <ProjectCard
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
        />

        {/* 🎶 A music streaming website (like spotify) built using PHP, HTML/CSS, AJAX, JS, jQuery, JSON, mySQL and more. */}
        <Contact />
      </div>
    </Container>
  );
}
