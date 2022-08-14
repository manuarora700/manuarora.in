import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function NavLinks() {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  let links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Privacy",
      link: "#privacy",
    },
    {
      name: "Terms",
      link: "#terms",
    },
  ];

  return (
    <div className="mt-20 flex space-x-4 justify-center">
      {links.map((navLink, index) => (
        <Link
          key={navLink.name}
          href={navLink.link}
         
        >
          <a 
           onMouseEnter={() => setHoveredIndex(index)}
           onMouseLeave={() => setHoveredIndex(null)}
           className="relative  rounded-xl px-3 py-2 text-sm text-gray-700 transition-all delay-150 hover:text-gray-900"
          >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-gray-100"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}</AnimatePresence>

            <span className="relative z-10">{navLink.name}</span>
            </a>
        </Link>
      ))}
    </div>
  );
}
