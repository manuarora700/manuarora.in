import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";

import * as Social from "constants/social";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-600"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <NowPlaying />
      <hr className="w-full mb-8 border-gray-200 border-1 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-600">Home</a>
          </Link>
          {/* <Link href="/blog">
            <a className="text-gray-500 transition hover:text-gray-600">Blog</a>
          </Link> */}
          <Link href="/dashboard">
            <a className="text-gray-500 transition hover:text-gray-600">
              Dashboard
            </a>
          </Link>
          {/* <Link href="/projects">
            <a className="text-gray-500 transition hover:text-gray-600">
              Projects
            </a>
          </Link>  */}
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href={Social.GITHUB_URL}>GitHub</ExternalLink>
          <ExternalLink href={Social.LINKEDIN_URL}>LinkedIn</ExternalLink>
          <ExternalLink href={Social.TWITTER_URL}>Twitter</ExternalLink>
          <ExternalLink href={Social.INSTAGRAM_URL}>Instagram</ExternalLink>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          {/*<Link href="/snippets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Snippets
            </a>
          </Link>*/}
          <Link href="/tweets">
            <a className="text-gray-500 transition hover:text-gray-600">
              Tweets
            </a>
          </Link>
          {/*<Link href="/resources">
            <a className="text-gray-500 transition hover:text-gray-600">
              Resources
            </a>
          </Link>
          <Link href="/demos">
            <a className="text-gray-500 transition hover:text-gray-600">
              Live Demos
            </a>
          </Link>*/}
        </div>
      </div>
      <p className="flex flex-row text-gray-400">
        Built with{" "}
        <a href="https://nextjs.org" target="__blank">
          <img src="/logos/nextjs.svg" className="w-6 h-6 mx-1" />
        </a>{" "}
        <a href="https://tailwindcss.com" target="__blank">
          <img src="/logos/tailwind.svg" className="w-6 h-6 mx-1" />
        </a>{" "}
        and{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="__blank">
          &nbsp; 💛
        </a>
      </p>
    </footer>
  );
}
