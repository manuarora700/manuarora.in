import React, { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import cards from "@/constants/boxshadows/cards";
import Footer from "@/components/Footer";
import { GenerateBoxShadow } from "@/components/BoxShadows/GenerateBoxShadow";
import { useTheme } from "next-themes";

export default function BoxShadows() {
  const [visible, setVisible] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => setMounted(true), []);
  const executeScroll = () => scrollRef.current.scrollIntoView();

  const onModalClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Metadata />
      <CustomNav
        setTheme={setTheme}
        theme={theme}
        mounted={mounted}
        onModalClick={onModalClick}
      />
      <div className="light flex flex-col justify-center items-start  mx-auto mb-16">
        <Header executeScroll={executeScroll} />
        {visible && <Modal onModalClick={onModalClick} />}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center w-full gap-y-20 mb-40">
          <>
            {cards.map((card, idx) => (
              <Card
                key={`${card.name} - ${idx}`}
                name={card.name}
                shadow={card.shadow}
                vanillaCSS={card.vanillaCSS}
                customCSS={card?.customCSS}
              />
            ))}
            <StaticCard
              shadow={`shadow-xl`}
              vanillaCSS={`box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);`}
              customCSS={`border shadow-xl bg-gradient-to-r from-red-500 to-pink-500 text-white`}
            />
          </>
        </div>
        <GenerateBoxShadow ref={scrollRef} />
        <div className="w-full lg:max-w-2xl  px-4 sm:mx-auto">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const StaticCard = ({ shadow, name, vanillaCSS, customCSS }) => {
  const classNames = (...classes) => classes.join(" ");
  return (
    <div
      className={classNames(
        "relative flex flex-col card-style-boxshadows group overflow-hidden",
        customCSS,
        shadow
      )}
    >
      <div className="text-center">
        Adding more, bookmark to stay updated, and maybe 👇🏻😇
        <a
          href="https://www.buymeacoffee.com/manuarora"
          className="flex items-center justify-center rounded-md overflow-hidden mt-2"
          target="_blank"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
            alt="Buy Me A Coffee"
            height="41"
            width="174"
            className="rounded-md"
          />
        </a>{" "}
      </div>
    </div>
  );
};
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

const Card = ({ shadow, name, vanillaCSS, customCSS }) => {
  const [copied, setCopied] = useState(false);
  const classNames = (...classes) => classes.join(" ");

  const copyTextValue = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className={classNames(
        "relative flex flex-col card-style-boxshadows group overflow-hidden",
        customCSS,
        shadow
      )}
    >
      <div
        className={`absolute w-full h-full transition-all flex items-center justify-center duration-100 bg-green-500 transform translate-y-full ${
          copied ? "translate-y-0" : ""
        }`}
      >
        <p className="text-white">Copied! 🎉</p>
      </div>
      <p className="group-hover:hidden text-center">{name}</p>
      <div className="absolute -top-8 bg-black text-white px-2 py-1 text-center rounded-md opacity-0 group-hover:opacity-100 transition duration-100 ease-linear">
        Click buttons to copy
      </div>

      <button
        onClick={() => {
          copyTextValue(shadow);
        }}
        className="px-4 py-2 rounded-md bg-white hidden group-hover:block border mb-4 hover:bg-gray-100  transition duration-300 text-xs"
      >
        Tailwind JIT
      </button>
      <button
        onClick={() => {
          copyTextValue(vanillaCSS);
        }}
        className="px-4 py-2 rounded-md bg-white hidden group-hover:block border mb-4 hover:bg-gray-100  transition duration-300 text-xs"
      >
        Vanilla CSS
      </button>
    </div>
  );
};

const Header = ({ executeScroll }) => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center w-full">
      <a
        href="https://www.producthunt.com/posts/tailwind-box-shadows?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-tailwind-box-shadows"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=325075&theme=dark&period=daily"
          alt="Tailwind Box Shadows - Curated list of box shadows for your cards to stand out | Product Hunt"
          // style="width: 250px; height: 54px;"
          className="h-12 w-auto mt-20 mb-0"
        />
      </a>
      <h1 className="font-bold text-xl md:text-3xl tracking-normal mb-4 text-black dark:text-white mx-auto mt-4">
        Box Shadows for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          TailwindCSS
        </span>
      </h1>
      <h2 className="prose text-gray-700 font-light dark:text-gray-400  text-center mx-auto">
        A curated list of box shadows for TailwindCSS. Available in JIT 🚀 and
        vanilla CSS.
      </h2>
      <p className="prose text-gray-700 font-light dark:text-gray-400  text-center mx-auto">
        <span className="bg-gray-800 border border-gray-100 rounded-md px-1 py-1">
          🖱
        </span>{" "}
        click to copy styles & press{" "}
        <span className="bg-gray-50 rounded-md border border-gray-100 px-2 py-1">
          ⌘+D
        </span>{" "}
        to bookmark this page.
      </p>{" "}
      <div className="w-full items-center max-w-sm mx-auto flex flex-row space-x-2 text-xs text-gray-500 font-light dark:text-gray-400 my-10">
        <div className="h-px w-full bg-slate-200 dark:bg-slate-700"></div>
        <p>or</p>
        <div className="h-px w-full bg-slate-200 dark:bg-slate-700"></div>
      </div>
      <button
        onClick={executeScroll}
        className="bg-black/90 px-4 py-2 rounded-md"
      >
        <div class=" animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">
          Tailwind Box Shadow Generator
        </div>
      </button>
    </div>
  );
};

const CustomNav = ({ onModalClick, setTheme, theme, mounted }) => {
  return (
    <nav className="w-full h-16 bg-white dark:bg-zinc-700 dark:border-0 border-b border-t border-gray-100 px-4 md:px-20 flex flex-row justify-between items-center">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <a>
            <Image
              src="/logo.png"
              className="h-full w-full rounded-md"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-row items-center">
        {" "}
        <a
          href="https://github.com/manuarora700/manuarora.in/blob/master/pages/boxshadows.js"
          target="__blank"
          className="text-gray-400 underline hidden sm:block text-sm font-normal mr-4"
        >
          Code? Here.
        </a>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="group rounded-full mr-4 bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-900/90 dark:ring-teal-500/50 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-teal-500"
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
        <button
          onClick={onModalClick}
          className="text-white hidden sm:block border border-gray-700 bg-black text-sm font-normal rounded-md px-2 py-2 mr-4"
        >
          Custom CSS to JIT 🚀
        </button>
        <a
          href="https://www.producthunt.com/posts/tailwind-box-shadows?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwind-box-shadows"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=325075&theme=dark"
            alt="Tailwind Box Shadows - Curated list of box shadows for your cards to stand out | Product Hunt"
            className="h-10 w-auto"
          />
        </a>
      </div>
    </nav>
  );
};

const Metadata = () => {
  const router = useRouter();
  return (
    <Head>
      <title>{`Box Shadows - Beautiful box shadows for TailwindCSS`}</title>
      <meta name="robots" content="follow, index" />
      <meta
        content={`A curated list of box shadows for TailwindCSS. Available in classes, JIT
        and vanilla CSS. Click to copy styles and paste it in your HTML div section to apply box shadows instantly.`}
        name="description"
      />
      <meta
        property="og:url"
        content={`https://manuarora.in${router.asPath}`}
      />
      <link rel="canonical" href={`https://manuarora.in${router.asPath}`} />
      <meta property="og:type" content={`website`} />
      <meta property="og:site_name" content="Manu Arora" />
      <meta
        property="og:description"
        content={`A curated list of box shadows for TailwindCSS. Available in classes, JIT
        and vanilla CSS. Click to copy styles and paste it in your HTML div section to apply box shadows instantly.`}
      />
      <meta
        property="og:title"
        content={`Box Shadows - Beautiful box shadows for TailwindCSS`}
      />
      {/* FIXME: Add Image */}
      <meta
        property="og:image"
        content={`https://manuarora.in/boxshadows.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mannupaaji" />
      <meta
        name="twitter:title"
        content={`Box Shadows - Beautiful box shadows for TailwindCSS`}
      />
      <meta
        name="twitter:description"
        content={`A curated list of box shadows for TailwindCSS. Available in classes, JIT
        and vanilla CSS. Click to copy styles and paste it in your HTML div section to apply box shadows instantly.`}
      />
      {/* FIXME: Add Image */}

      <meta
        name="twitter:image"
        content={`https://manuarora.in/boxshadows.png`}
      />
    </Head>
  );
};

const Modal = ({ onModalClick }) => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [configOutput, setConfigOutput] = useState("");

  const jitOutput = () => {
    let probableOutput = text;

    if (probableOutput.includes("box-shadow:")) {
      probableOutput = probableOutput.split("box-shadow:")[1];
    }
    if (probableOutput.includes(";")) {
      probableOutput = probableOutput.split(";")[0];
    }
    console.log("probableOutput", probableOutput);

    let finalOutput = probableOutput.trim().split(" ").join("_");
    finalOutput = `shadow-[${finalOutput}]`;
    setOutput(finalOutput);
  };

  const configOutputFunction = () => {
    let probableOutput = text;

    if (probableOutput.includes("box-shadow:")) {
      probableOutput = probableOutput.split("box-shadow:")[1];
    }
    if (probableOutput.includes(";")) {
      probableOutput = probableOutput.split(";")[0];
    }

    setConfigOutput(probableOutput.trim());
  };

  const onClick = () => {
    jitOutput();
    configOutputFunction();
  };

  return (
    <div className="absolute inset-0 bg-black h-full w-full flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-10">
      <button
        className="absolute top-2 right-2 px-4 py-2 rounded-md bg-black text-white cursor-pointer"
        onClick={onModalClick}
      >
        Close
      </button>
      <div className="py-10 flex flex-col items-center justify-start w-1/2  h-[600px] max-h-[600px] overflow-y-scroll rounded-md bg-white relative z-10 px-4">
        <div className="flex flex-col items-start w-full mx-4">
          <textarea
            style={{ whiteSpace: "pre-wrap" }}
            type="text"
            rows="5"
            value={text}
            className="text-white font-thin w-full px-2 ring-2 ring-black rounded-md bg-gray-900 mb-4"
            onChange={(e) => setText(e.target.value)}
            autoCorrect={false}
            spellCheck={false}
            placeholder={`Enter vanilla css box shadow code...`}
          />

          <button
            onClick={onClick}
            className="bg-gray-700 border border-black text-gray-50 text-sm font-mono rounded-md px-4 py-2 mb-8"
          >
            Generate class
          </button>
        </div>
        {output && (
          <>
            <div className="flex flex-col items-start w-full mb-4">
              <p className="text-black font-semibold justify-start mb-2">
                Just in Time 🚀
              </p>
              <div className="bg-black rounded-md px-2 pb-10 pt-2 text-gray-400 font-mono  text-sm  w-full flex-wrap overflow-x-scroll">
                {/* {output} */}

                <pre className="font-light">
                  {`<div className="${output}">
      <p>Code goes here...</p>
</div>`}
                </pre>
              </div>
            </div>
            <div className="flex flex-col items-start w-full  mb-4">
              <p className="text-black font-semibold justify-start mb-2">
                Config File 🚀
              </p>
              <div className="bg-black rounded-md px-2 pb-10 pt-2 text-gray-400 font-mono  text-sm  w-full flex-wrap overflow-x-scroll">
                {/* {output} */}

                <pre className="font-light">
                  {`module.exports = {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '${configOutput}',
      }
    },
  },
  plugins: [],
}`}
                </pre>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
