// @ts-nocheck
import Link from "next/link";

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
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-500 hover:text-gray-600 transition">
            Home
          </Link>
          <Link href="/blog" className="text-gray-500 hover:text-gray-600 transition">
            Blog
          </Link>
          <Link href="/projects" className="text-gray-500 hover:text-gray-600 transition">
            
              Projects
            
          </Link>
          <Link href="/links" className="text-gray-500 hover:text-gray-600 transition">
            
              Links
            
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
          <Link
            href="/freelance"
            className="text-gray-500 hover:text-gray-600 transition">
            
              Freelancing
            
          </Link>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
            YouTube
          </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/snippets" className="text-gray-500 hover:text-gray-600 transition">
            
              Snippets
            
          </Link>
          <Link
            href="/resources"
            className="text-gray-500 hover:text-gray-600 transition">
            
              Resources
            
          </Link>
          <Link href="/demos" className="text-gray-500 hover:text-gray-600 transition">
            
              Live Demos
            
          </Link>
          <Link
            href="/freecodecamp"
            className="text-gray-500 hover:text-gray-600 transition">
            
              freeCodeCamp
            
          </Link>
          <Link
            href="/boxshadows"
            className="text-gray-500 hover:text-gray-600 transition">
            
              Box Shadows
            
          </Link>
          <Link
            href="/design-inspiration"
            className="text-gray-500 hover:text-gray-600 transition">
            
              Design Inspiration
            
          </Link>
        </div>
      </div>
      <p className="flex flex-row text-gray-400 items-center">
        Find me on
        <a href="https://twitter.com" target="__blank">
          {/* <img src="/logos/tailwind.svg" className="h-6 w-6 mx-1" /> */}
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 mx-1">
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </a>{" "}
        and{" "}
        <a href="https://www.peerlist.io/manuarora" target="__blank">
          <img src="/peerlist.png" className="h-5 w-5 mx-1" />
        </a>
      </p>
      <p className="flex flex-row text-gray-400 items-center mt-2">
        Portfolio inspired by{" "}
        <a href="https://leerob.io" className="ml-1" target="__blank">
          Lee Rob
        </a>
      </p>
    </footer>
  );
}
