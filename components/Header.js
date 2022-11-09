import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";

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
    <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14  w-full mb-10">
      <div className="flex md:w-3/4 flex-col mt-6">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
          Manu Arora
        </h1>

        <div className="relative leading-7 items-center flex-wrap text-zinc-700 dark:text-zinc-400 mb-5">
          Building
          <LinkPreview
            className={
              "inline-block px-1 font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-300 dark:to-zinc-100"
            }
            url="https://algochurn.com"
          >
            Algochurn
          </LinkPreview>
          other
          <span
            className="font-bold cursor-pointer text-zinc-800 dark:text-zinc-200"
            style={{ cursor: "🤩" }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {" "}
            cool things
            <AnimatePresence>
              {open && (
                <motion.div
                  key="modal"
                  variants={variants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="z-20  p-4 rounded-xl bg-white dark:bg-zinc-800 shadow-2xl absolute inset-x-0  w-full min-h-96 text-xs md:text-sm"
                >
                  <div className="bg-grid-slate-50 dark:bg-grid-zinc-700/30 absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Founder{" "}
                    <Hyperlink
                      text="@placeholdertech"
                      link="https://placeholdertech.in"
                    />{" "}
                    and{" "}
                    <Hyperlink
                      text="@aceternity"
                      link="https://aceternity.com"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Mentoring{" "}
                    <Hyperlink
                      text="@codementor"
                      link="https://codementor.io/@manuarora"
                    />{" "}
                    and{" "}
                    <Hyperlink
                      text="@mentorcruise"
                      link="https://mentorcruise.com/mentor/manuarora/"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Helping front-end developers{" "}
                    <Hyperlink text="@algochurn" link="https://algochurn.com" />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Web templates and components{" "}
                    <Hyperlink
                      text="@tailwindmasterkit"
                      link="https://tailwindmasterkit.com"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Cool TailwindCSS Box Shadows{" "}
                    <Hyperlink
                      text="@boxshadows"
                      link="https://www.manuarora.in/boxshadows"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Blogs{" "}
                    <Hyperlink
                      text="@freecodecamp"
                      link="https://www.freecodecamp.org/news/author/manu/"
                    />
                  </motion.p>
                  <motion.p variants={itemA} className="font-normal py-3">
                    Tech videos and snippets{" "}
                    <Hyperlink
                      text="@youtube"
                      link="https://www.youtube.com/@manuarora"
                    />
                  </motion.p>

                  <div className="absolute inset-x-0 -bottom-px h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]">
                    <div className=" w-full flex-none blur-[1px] h-px [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-500">
          Senior Software Engineer building SaaS products and web apps. Find me
          on{" "}
          <a
            href="https://twitter.com/mannupaaji"
            className="font-bold group dark:text-zinc-400 font-inter relative inline-flex  overflow-hidden"
            target="__blank"
          >
            {isMounted && (
              <div className="absolute bg-teal-500/50 dark:bg-teal-500/30 inset-0 translate-y-5 group-hover:translate-y-0 transition duration-100 ease-out"></div>
            )}
            <span className="relative">twitter</span>
          </a>{" "}
          for tech updates and memes.
        </p>
      </div>

      <div className=" relative flex-shrink-1 p-4 md:p-4 md:order-last order-first">
        <a
          href="https://twitter.com/mannupaaji"
          target="__blank"
          className="block relative z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5"
        >
          <img className="h-auto w-[50px] md:w-[150px]" src="avatar-new.png" />
        </a>
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
