import { useTheme } from "next-themes";

import React, { useEffect, useRef, useState } from "react";

import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineCopy } from "react-icons/ai";

import toast, { Toaster } from "react-hot-toast";
import { palette } from "./tailwindColorPalette";
import { useOutsideClick } from "hooks/useOutsideClick";

import styles from "./styles.module.css";

export const GenerateBoxShadow = React.forwardRef((props, ref) => {
  let defaultBoxShadow = {
    id: new Date().getTime(),
    horizontalOffset: 0,
    verticalOffset: 20,
    blur: 20,
    spread: 10,
    color: "#00000024",
  };
  const [boxShadow, setBoxShadow] = useState([defaultBoxShadow]);
  const [activeShadow, setActiveShadow] = useState(null);
  const [modal, setModal] = useState(false);
  const boxRef = useRef();

  useOutsideClick(boxRef, () => setModal(false));

  const generateShadow = () => {
    let final = [];

    boxShadow.forEach((el) => {
      let temp =
        `${el.horizontalOffset}px ` +
        `${el.verticalOffset}px ` +
        `${el.blur}px ` +
        `${el.spread}px ` +
        `${el.color}`;

      temp = el.inset ? `inset ${temp}` : temp;
      final.push(temp);
    });
    return final.join(",");
  };

  const onChangeHandler = (action, data) => {
    switch (action) {
      case "horizontalOffset":
        findAndUpdateValue("horizontalOffset", data);
        break;
      case "verticalOffset":
        findAndUpdateValue("verticalOffset", data);
        break;
      case "blur":
        findAndUpdateValue("blur", data);
        break;
      case "spread":
        findAndUpdateValue("spread", data);
        break;
      case "inset":
        findAndUpdateValue("inset", data);
        break;
      case "color":
        findAndUpdateValue("color", data);
        break;
      case "delete":
        handleShadowDelete(data);
        break;
      case "color-button":
        // open modal
        setActiveShadow(data);
        setModal(true);
        break;
      case "color-select":
        handleColorSelect(data);
        break;
      default:
        break;
    }
  };

  const handleColorSelect = (selectedColor) => {
    //
    let data = {
      ...activeShadow,
      updatedValue: selectedColor,
    };
    findAndUpdateValue("color", data);
    setActiveShadow(null);
    setModal(false);
  };

  const handleShadowDelete = (shadowElement) => {
    let temp = boxShadow.filter((el) => el.id !== shadowElement.id);
    setBoxShadow(temp);
  };

  const addShadowLayer = () => {
    // box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    let temp = [...boxShadow];
    temp.push({
      ...defaultBoxShadow,
      id: new Date().getTime(),
      horizontalOffset: 0,
      verticalOffset: 3,
      blur: 8,
      spread: 0,
      color: "#00000024",
    });

    setBoxShadow([...temp]);
  };

  const findAndUpdateValue = (key, data) => {
    let target = boxShadow.map((el) => {
      if (el.id === data.id) {
        el[key] = data.updatedValue;
      }
      return el;
    });

    setBoxShadow(target);
  };

  const copyToClipboard = (text) => {
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
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(textArea);
    notify("Copied Successfully!");
  };

  const copyVanillaCSS = () => {
    let generatedShadow = `box-shadow: ${generateShadow()}`;
    copyToClipboard(generatedShadow);
  };

  const generateTailwindCSSJIT = () => {
    let probableOutput = `box-shadow: ${generateShadow()}`;

    if (probableOutput.includes("box-shadow:")) {
      probableOutput = probableOutput.split("box-shadow:")[1];
    }
    if (probableOutput.includes(";")) {
      probableOutput = probableOutput.split(";")[0];
    }

    let finalOutput = probableOutput.trim().split(" ").join("_");
    finalOutput = `shadow-[${finalOutput}]`;
    copyToClipboard(finalOutput);
  };

  const handleReset = () => {
    setBoxShadow([defaultBoxShadow]);
  };

  const notify = (message) => {
    toast(message || "Copied successfully!", {
      duration: 4000,
      position: "top-center",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };

  return (
    <div
      ref={ref}
      className="bg-gray-50 w-full px-4 lg:px-20  min-h-screen relative mb-20"
    >
      <Toaster />
      {modal && (
        <PaletteModal
          onChangeHandler={onChangeHandler}
          palette={palette}
          ref={boxRef}
        />
      )}
      <div className="pt-10 pb-20">
        <h2 className="font-bold text-xl md:text-3xl tracking-normal mb-4 text-black dark:text-black mx-auto mt-4 text-center ">
          Box Shadow Generator for{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            TailwindCSS
          </span>
        </h2>
        <h4 className="prose text-gray-700 font-light dark:text-gray-400  text-center mx-auto">
          A free tool that helps you generate box shadows for TailwindCSS (JIT)
          and Vanilla CSS with ease.
        </h4>
      </div>
      <div className="w-fullitems-center flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%]">
          <div class="relative flex  flex-col justify-center  py-6 sm:py-12">
            <div class="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div
              style={{
                boxShadow: generateShadow(),
              }}
              class="relative bg-white px-6 pt-10 pb-8  ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
            >
              <div class="mx-auto max-w-md">
                <img
                  src="/avatar-new.png"
                  alt="Manu Arora"
                  className="h-8 rounded-full"
                />
                <div class="divide-y divide-gray-300/50">
                  <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                    <p>
                      Add shadow to this box with the controls on the side
                      panel. This box mimics a card box that you might have on
                      your website.
                    </p>

                    <p>
                      Add shadow layers, change colors and play with the
                      controls.
                    </p>
                  </div>
                  <div class="pt-8 text-base font-semibold leading-7">
                    <p class="text-gray-900">Want beautiful shadows already?</p>
                    <p>
                      <button
                        onClick={() => window && window.scrollTo(0, 0)}
                        href="https://tailwindcss.com/docs"
                        class="text-sky-500 hover:text-sky-600"
                      >
                        Explore the presets
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full  w-full  lg:w-[40%] flex flex-col">
          <div className="flex flex-row justify-between flex-wrap mb-2 text-xs space-x-2 pb-4 px-2">
            <button
              onClick={addShadowLayer}
              className="text-white flex flex-row space-x-1 items-center font-light bg-zinc-500 px-2 py-1 rounded-md hover:bg-zinc-600"
            >
              <IoMdAdd className="stroke-[10px]" /> Add Shadow Layer
            </button>
            <div className="flex flex-row space-x-2">
              <button
                onClick={handleReset}
                className="text-black flex flex-row space-x-2 items-center font-light bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200"
              >
                <GrPowerReset className="stroke-[10px] mr-2" /> Reset
              </button>

              <button
                onClick={copyVanillaCSS}
                className="text-black flex flex-row space-x-2 items-center font-light bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200"
              >
                <AiOutlineCopy className="stroke-[10px] mr-2" /> Vanilla CSS
              </button>
              <button
                onClick={generateTailwindCSSJIT}
                className="text-black flex flex-row space-x-2 items-center font-light bg-slate-100 px-2 py-1 rounded-md hover:bg-slate-200"
              >
                <AiOutlineCopy className="stroke-[10px] mr-2" /> Tailwind JIT
              </button>
            </div>
          </div>
          <div className="text-black palette rounded-md px-2 h-[30rem] overflow-y-auto  space-y-4">
            {boxShadow.map((el, idx) => (
              <FormElement
                shadowElement={el}
                onChangeHandler={onChangeHandler}
                key={el.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const FormElement = ({ onChangeHandler, shadowElement }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg shadow-black/10 py-4 px-6">
      <button
        className="absolute right-2 top-2"
        onClick={() => onChangeHandler("delete", shadowElement)}
      >
        <MdOutlineCancel className="text-slate-500 hover:text-red-500" />
      </button>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`horizontalOffset-${shadowElement.id}`}
        >
          X
        </label>
        <input
          value={shadowElement.horizontalOffset}
          className="inline-block w-28 shadow rounded-md px-2 text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`horizontalOffset-${shadowElement.id}`}
          type="number"
          onChange={(e) =>
            onChangeHandler("horizontalOffset", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <p className="border border-slate-700 px-2 py-px rounded-md bg-slate-600 text-xs text-white">
          {shadowElement.horizontalOffset}px Horizontal Offset
        </p>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`verticalOffset-${shadowElement.id}`}
        >
          Y
        </label>
        <input
          value={shadowElement.verticalOffset}
          className="inline-block w-28 shadow rounded-md px-2 text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`verticalOffset-${shadowElement.id}`}
          type="number"
          onChange={(e) =>
            onChangeHandler("verticalOffset", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <p className="border border-slate-700 px-2 py-px rounded-md bg-slate-600 text-xs text-white">
          {shadowElement.verticalOffset}px Vertical Offset
        </p>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`blur-${shadowElement.id}`}
        >
          B
        </label>
        <input
          min="0"
          value={shadowElement.blur}
          className="inline-block w-28 shadow rounded-md px-2 text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`blur-${shadowElement.id}`}
          type="number"
          onChange={(e) =>
            onChangeHandler("blur", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <p className="border border-slate-700 px-2 py-px rounded-md bg-slate-600 text-xs text-white">
          {shadowElement.blur}px blur
        </p>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`spread-${shadowElement.id}`}
        >
          S
        </label>
        <input
          min="0"
          value={shadowElement.spread}
          className="inline-block w-28 shadow rounded-md px-2 text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`spread-${shadowElement.id}`}
          type="number"
          onChange={(e) =>
            onChangeHandler("spread", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <p className="border border-slate-700 px-2 py-px rounded-md bg-slate-600 text-xs text-white">
          {shadowElement.blur}px spread
        </p>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`color-${shadowElement.id}`}
        >
          C
        </label>
        <input
          value={shadowElement.color}
          className="inline-block w-28 shadow rounded-md px-2 uppercase text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`color-${shadowElement.id}`}
          type="text"
          onChange={(e) =>
            onChangeHandler("color", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <button
          onClick={() => onChangeHandler("color-button", shadowElement)}
          className="p-3 w-10 rounded-md"
          style={{ backgroundColor: shadowElement.color }}
        ></button>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <label
          className="border border-slate-700 px-2 py-0.5 text-xs rounded-md bg-slate-600 text-white"
          htmlFor={`color-${shadowElement.id}`}
        >
          C
        </label>
        <input
          value={shadowElement.color}
          className="inline-block w-28 shadow rounded-md px-2 uppercase text-sm text-zinc-600 border border-transparent focus:outline-none focus:border-blue-700"
          id={`color-${shadowElement.id}`}
          type="text"
          onChange={(e) =>
            onChangeHandler("color", {
              updatedValue: e.target.value,
              ...shadowElement,
            })
          }
        />
        <button
          onClick={() => onChangeHandler("color-button", shadowElement)}
          className="p-3 w-10 rounded-md"
          style={{ backgroundColor: shadowElement.color }}
        ></button>
      </div>
      <div className="flex flex-row space-x-2 mb-2">
        <div class={styles["checkbox-wrapper-1"]}>
          <input
            id={`inset-${shadowElement.id}`}
            class={styles.substituted}
            type="checkbox"
            aria-hidden="true"
            onChange={(e) =>
              onChangeHandler("inset", {
                updatedValue: e.target.checked,
                ...shadowElement,
              })
            }
          />
          <label className="text-base" htmlFor={`inset-${shadowElement.id}`}>
            Inset
          </label>
        </div>
        {/* 
        <input
          min="0"
          value={shadowElement.inset}
          className="accent-sky-500 px-4 py-4 inline-block"
          id={`inset-${shadowElement.id}`}
          type="checkbox"
          onChange={(e) =>
            onChangeHandler("inset", {
              updatedValue: e.target.checked,
              ...shadowElement,
            })
          }
        /> */}
      </div>
    </div>
  );
};

const PaletteModal = React.forwardRef((props, ref) => {
  const { onChangeHandler, palette } = props;

  return (
    <div className="h-full w-full absolute  z-20 inset-0  flex items-center justify-center bg-black/10">
      <div
        ref={ref}
        className="h-3/4 w-2/4 rounded-md  bg-white  overflow-y-auto p-4 shadow"
      >
        <h1 className="font-bold text-base text-center text-zinc-700 mb-4">
          Tailwind CSS Color Palette
        </h1>
        {palette.map((pal, idx) => (
          <div className=" mb-2" key={pal.paletteName}>
            <h4 className="font-bold text-zinc-700 mx-4">{pal.paletteName}</h4>

            <div className="flex flex-row flex-wrap">
              {pal.swatches.map((sw, idx) => (
                <div>
                  <button
                    onClick={() => onChangeHandler("color-select", sw.color)}
                    className="h-10 w-20 rounded-md mx-2 my-1"
                    style={{ backgroundColor: sw.color }}
                  ></button>
                  <p className="text-zinc-400 text-[0.60rem] mx-2 font-light">
                    <span className="font-normal text-zinc-600">{sw.name}</span>{" "}
                    - {sw.color}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
