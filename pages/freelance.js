import Container from "@/components/Container";
import { FreelanceCard } from "@/components/FreelanceCard";
import ResourcesCard from "@/components/ResourcesCard";
import { links } from "@/constants/links";
import Link from "next/link";

export default function Freelance() {
  return (
    <Container
      title="Freelancing – Manu Arora"
      description="Freelance projects and SaaS application that I've developed."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Freelancing
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10 hidden md:block">
          I love building products and web apps for humans. 👑 <br />
          Most of my projects come from my website. However, I'm also a Top
          Rated Freelancer on{" "}
          <a
            className="font-bold text-[#15A800]"
            href="https://www.upwork.com/freelancers/~0185da6b935f149e8c"
          >
            Upwork
          </a>{" "}
          and Teach coding to people on{" "}
          <a
            href="https://www.codementor.io/@manuarorawork"
            className="text-[#009FC6] font-bold"
          >
            Codementor
          </a>
          .
        </p>
        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h2>

        <FreelanceCard
          href={`https://app.pings.co`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "useGravity",
            "Vercel",
          ]}
          title="Pings AI"
          image={`/freelance/pings.png`}
          descriptions={[
            "Created the CRM for generating dynamic reports related to drones.",
            "Used the legendary useGravity SaaS boilerplate to kickstart the project.",
          ]}
        />
        <FreelanceCard
          href={`https://cremedigital.com`}
          image={`/freelance/creme.png`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "Workers",
            "Cloudflare",
          ]}
          title="Creme Digital"
          descriptions={[
            "Complete website for a leading digital marketing agency in Malaysia.",
            "Integrated and created a complete cloudflare worker for sending transactional emails from scratch",
          ]}
        />
        <FreelanceCard
          href={`https://invoker.lol`}
          image={`/freelance/invoker.png`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "Vanta",
            "Firebase",
            "Firestore",
          ]}
          title="Invoker Labs"
          descriptions={[
            "Created a website with a custom CMS for creating and updating data.",
            "Dynamic sections to create, read, update and delete data from the admin panel",
            "Secure Login and Authentication system.",
          ]}
        />
        <a
          href="https://www.upwork.com/freelancers/~0185da6b935f149e8c"
          target="__blank"
          className="text-gray-500 dark:text-gray-300  rounded-md flex flex-row space-x-2 items-center mb-10"
        >
          <p>See all of my freelance projects</p>
          <svg
            className="h-8 w-8 dark:text-white text-gray-500 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </a>

        <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 mt-6 text-black dark:text-white">
          Featured SaaS Applications
        </h2>

        <FreelanceCard
          href={`https://tailwindmasterkit.com`}
          techStack={["Next.js", "TailwindCSS", "React", "MongoDB", "Vercel"]}
          title="Tailwind Master Kit"
          image={`/freelance/tmk.png`}
          descriptions={[
            " Professinal, handcrafted TailwindCSS components for your Next Web Application.",
            " Accomodates 150+ production ready components ready to be embedded.",
          ]}
        />
        <FreelanceCard
          href={`https://algochurn.com`}
          image={`/freelance/algochurn.png`}
          techStack={[
            "Next.js",
            "TailwindCSS",
            "React",
            "Postgres",
            "Digital Ocean",
          ]}
          title="Algochurn"
          descriptions={[
            "Practice your skills the way they are meant to be practiced - in a real interview setting.",
            " Algochurn provides the most popular Data Structures, Algorithms and Front-end technical questions asked in a Technical Interview Round",
          ]}
        />

        <Link href="/projects">
          <a className="text-gray-500 dark:text-gray-300  rounded-md flex flex-row space-x-2 items-center mb-10">
            <p>See all of my Projects</p>
            <svg
              className="h-8 w-8 dark:text-white text-gray-500 transform rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
