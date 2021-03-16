import Container from "@/components/Container";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Manu Arora
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer, writer, and creator. I work at{" "}
          <span className="font-bold">
            <span className="text-blue-500">m</span>roads
          </span>{" "}
          as a Software Engineer. You've discovered my piece on the internet
          –&nbsp;
          <Link href="/blog">
            <a className="text-blue-500 hover:underline">
              checkout my blog&nbsp;
            </a>
          </Link>
          while you're here. <br />I write about technology, learning and memes.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Why I started using NextJS in my workflow"
          summary="A case study on how I ditched traditional React and started using NextJS along with it's features such as Image optimization & Routing."
          slug="why-i-started-using-next-js"
        />
        <BlogPost
          title="How to design a minimal and beautiful website which actually converts"
          summary="Examining the tips and tricks used to make a website design a notch above the rest."
          slug="how-to-design-beautiful-websites"
        />
        <BlogPost
          title="Using real world projects to build better learning habits"
          summary="In this guide, you will learn how to take an idea and convert it into a real world application, while learning on the go."
          slug="real-world-app-development"
        />
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="PlaceholderTech"
          description="We build modern, blazing-fast web applications which helps your business grow and increase sales."
          href="https://placeholdertech.in/"
          icon="placeholdertech"
        />
        <ProjectCard
          title="Playground"
          description="An open-source playground to create HTML, CSS and Javascript components on the go."
          href="https://play.placeholdertech.in/"
          icon="play"
        />
        <ProjectCard
          title="Feedmeback"
          description="The easiest way to add comments or reviews to your static site. Built as part of React 2025."
          href="https://feedmeback-beta.vercel.app/"
          icon="fastfeedback"
        />

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
