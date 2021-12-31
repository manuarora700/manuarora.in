import React, { useState } from "react";
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

import cards from "@/constants/boxshadows/cards";
import Footer from "@/components/Footer";

export default function BoxShadows() {
  const [visible, setVisible] = useState(false);

  const onModalClick = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Metadata />
      <CustomNav onModalClick={onModalClick} />
      <div className="light flex flex-col justify-center items-start  mx-auto mb-16">
        <Header />
        {visible && <Modal onModalClick={onModalClick} />}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center w-full gap-y-20 mb-40">
          {cards.map((card, idx) => (
            <Card
              key={`${card.name} - ${idx}`}
              name={card.name}
              shadow={card.shadow}
              vanillaCSS={card.vanillaCSS}
            />
          ))}
        </div>

        <div className="w-full lg:max-w-2xl mx-4 sm:mx-auto">
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

const Card = ({ shadow, name, vanillaCSS }) => {
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
      <p className="group-hover:hidden">{name}</p>
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

const Header = () => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-xl md:text-3xl tracking-normal mb-4 text-black dark:text-white mx-auto mt-10">
        Box Shadows for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          TailwindCSS
        </span>
      </h1>
      <h2 className="prose text-gray-700 font-light dark:text-gray-400  text-center mx-auto">
        A curated list of box shadows for TailwindCSS. Available in JIT 🚀 and
        vanilla CSS.
      </h2>
      <p className="prose text-gray-700 font-light dark:text-gray-400 mb-20 text-center mx-auto">
        <span className="bg-gray-800 border border-gray-100 rounded-md px-1 py-1">
          🖱
        </span>{" "}
        click to copy styles & press{" "}
        <span className="bg-gray-50 rounded-md border border-gray-100 px-2 py-1">
          ⌘+D
        </span>{" "}
        to bookmark this page.
      </p>{" "}
    </div>
  );
};

const CustomNav = ({ onModalClick }) => {
  return (
    <nav className="w-full h-16 bg-white border-b border-t border-gray-100 px-4 md:px-20 flex flex-row justify-between items-center">
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
      <div>
        <button
          onClick={onModalClick}
          className="text-white invisible md:visible border border-gray-700 bg-black text-sm font-normal rounded-md px-2 py-2 mr-4"
        >
          Custom CSS to JIT 🚀
        </button>
        <button className="text-[#EA532A] font-bold border border-[#EA532A] rounded-md px-2 py-2">
          Upvote on ProductHunt
        </button>
      </div>
    </nav>
  );
};

const Metadata = () => {
  const router = useRouter();
  return (
    <Head>
      <title>{`Box Shadows - Custom box shadows for TailwindCSS`}</title>
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
        content={`Box Shadows - Custom box shadows for TailwindCSS`}
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
        content={`Box Shadows - Custom box shadows for TailwindCSS`}
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
