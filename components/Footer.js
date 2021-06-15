import Link from "next/link";
import NowPlaying from "@/components/NowPlaying";

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <NowPlaying />
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
          <Link href="/dashboard">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Dashboard
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Projects
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/manuarora700">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://linkedin.com/in/manuarora28">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/mannupaaji">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://instagram.com/maninthere">
            Instagram
          </ExternalLink>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Snippets
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
          <Link href="/resources">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Resources
            </a>
          </Link>
          <Link href="/demos">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Live Demos
            </a>
          </Link>
        </div>
      </div>
      <p className="flex flex-row text-gray-400">
        Built with{" "}
        <a href="https://nextjs.org">
          <img src="/logos/nextjs.svg" className="h-6 w-6 mx-1" />
        </a>{" "}
        and
        <a href="https://tailwindcss.com">
          <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" />
        </a>
      </p>
    </footer>
  );
}
