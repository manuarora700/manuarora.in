import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const variants = {
    hidden: { opacity: 0, y: "1vh" },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
    // transition: { staggerChildren: 0.5 },
    exit: { opacity: 0, y: "1vh" },
  };

  const itemA = {
    hidden: { opacity: 0, scale: 0.5, y: "1vh" },
    show: { opacity: 1, scale: 1, y: 0 },
  };
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
        <div className="flex md:w-3/4 flex-col mt-6">
          <p className="font-medium text-zinc-600 dark:text-zinc-500">
            🤘🏻{' '}Hi! I'm
          </p>

          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
            Buddhi Vikasitha
          </h1>

          <p className="text-zinc-600 dark:text-zinc-500">
            a <span className="font-bold dark:text-zinc-400 font-inter">cloud solutions enthusiast</span> who loves scalable and robust architecture.
          </p>

          <span className="mt-6 gap-4">
            <a className="text-white dark:bg-teal-600 bg-teal-600 rounded-full text-md bg-gray-50 px-4 py-2 mr-2 cursor-pointer"
              href={'https://buddhiv.medium.com'}
              target="_blank">
              Visit my Blog{' '}✍
            </a>

            <a className="border border-teal-700 text-gray-700 dark:text-teal-300 dark:bg-transparent rounded-full text-md bg-gray-50 px-4 py-2 cursor-pointer"
              href={'/cv/Buddhi_Vikasitha.pdf'}
              target="_blank">
              Download Resume{' '}📃
            </a>
          </span>
        </div>

        <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
          <div className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-white h-40 w-20">
            <BlurImage
              objectFit="cover"
              layout="fill"
              className="bg-gray-100 object-contain"
              src="/buddhi.png"
            />
          </div>
          <div className="z-0">
            <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 gap-x-2 gap-y-3 flex flex-row flex-wrap">
        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-2 py-1 cursor-pointer"
          href="https://www.linkedin.com/in/buddhiv"
          target="_blank">
          <div className="flex align-middle">
            <Image
              height={15}
              width={15}
              src={'/logos/linkedin.png'}
            />

            <span className="ml-1">
              linkedin.com/in/buddhiv
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-2 py-1 cursor-pointer">
          <div className="flex align-middle">
            <Image
              height={8}
              width={15}
              src={'/logos/gmail.png'}
            />

            <span className="ml-1">
              buddhi.vikasitha@gmail.com
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-2 py-1 cursor-pointer">
          <div className="flex align-middle">
            <div className="text-xs">
              📞{' '}
            </div>

            <span className="ml-1">
              +94 71 2489 789
            </span>
          </div>
        </a>

        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-2 py-1 cursor-pointer"
          href="https://github.com/buddhiv"
          target="_blank">
          <div className="flex align-middle">
            <Image
              height={15}
              width={15}
              src={'/logos/github.png'}
            />

            <span className="ml-1">
              github.com/buddhiv
            </span>
          </div>
        </a>
        <a className="dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-full text-sm border border-gray-200 px-2 py-1 cursor-pointer"
          href="https://gitlab.com/buddhiv"
          target="_blank">
          <div className="flex align-middle">
            <Image
              height={15}
              width={15}
              src={'/logos/gitlab.png'}
            />

            <span className="ml-1">
              gitlab.com/buddhiv
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;

export const Hyperlink = ({ link, text }) => {
  return (
    <a
      href={link}
      className="inline-block font-bold text-zinc-700 dark:text-zinc-200 transform hover:scale-105 transition duration-200"
      target="__blank"
    >
      {text}
    </a>
  );
};
