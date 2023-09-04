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
    <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8">
      {/* <NowPlaying /> */}
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <p className="flex flex-row text-gray-400">
        &copy; {new Date().getFullYear()}, Buddhi Vikasitha
      </p>
    </footer>
  );
}
