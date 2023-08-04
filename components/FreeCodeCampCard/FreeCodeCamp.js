import React from "react";
import Contact from "@/components/Contact";
import ProjectFCC from "./Project";

export default function FreeCodeCamp({ showDesc = true }) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-20">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
        Free Code Camp
      </h1>
      {showDesc && (
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve been writing articles for{" "}
          <a href="https://www.freecodecamp.org/news/author/manu/">
            freeCodeCamp
          </a>{" "}
          where I generally write about projects and technical learnings. Some
          of the articles that I wrote are down below.
        </h2>
      )}
      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-10 w-full">
        <ProjectFCC
          link="https://www.freecodecamp.org/news/prepare-for-react-technical-interviews/"
          title="How to Prepare for React Interviews – Front-End Technical Interview Guide"
          image="freecodecamp/react-interview.png"
          date="Sept 8, 2022"
        />
        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/"
          title="How to Build a Code Editor with React that Compiles and Executes in 40+ Languages"
          image="freecodecamp/codeeditor.png"
          date="May 25, 2022"
        />

        <ProjectFCC
          link="https://www.freecodecamp.org/news/integrate-a-payment-gateway-in-next-js-and-react-with-razorpay-and-tailwindcss/"
          title="How to Set Up a Payment Gateway in Next.js and React with Razorpay and TailwindCSS"
          image="freecodecamp/payments.png"
          date="Dec 22, 2021"
        />
        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/"
          title="Send emails with your contact form with SendGrid and Next.js"
          image="freecodecamp/sendgrid.png"
          date="October 21, 2021"
        />

        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-create-beautiful-box-shadows-in-html-and-css/"
          title="Create Beautiful box shadows with HTML, CSS and TailwindCSS"
          image="freecodecamp/boxshadows.png"
          date="January 3, 2022"
        />
        <ProjectFCC
          link="https://www.freecodecamp.org/news/how-to-build-a-portfolio-site-with-nextjs-tailwindcss/"
          title="Build a developers portfolio website with Next.js and TailwindCSS"
          image="freecodecamp/portfolio.png"
          date="September 21, 2021"
        />
      </div>
    </div>
  );
}
