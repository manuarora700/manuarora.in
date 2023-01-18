import clsx from "clsx";
import { useState } from "react";

import styles from "./MeteorEffect.module.css";

function MeteorEffect() {
  return (
    <section class="antialiased h-[40rem] rounded-xl w-full flex items-center justify-center bg-slate-900">
      <div className=" h-3/4 md:h-1/2 w-3/4  relative max-w-sm">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-2 w-2 text-gray-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4">
            Meteors because they're cool
          </h1>

          <p className="font-normal text-base text-gray-300 mb-4">
            I don't know what to write so I'll just paste something cool here.
            One more sentence because lorem ipsum is just unacceptable. Won't
            ChatGPT the shit out of this.
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={10} />
        </div>
      </div>
    </section>
  );
}

export const Meteors = ({ number }) => {
  return [...new Array(number || 20).fill(true)].map((el, idx) => (
    <span
      key={idx}
      class={clsx(
        "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
        styles.meteor
      )}
      style={{
        // top: Math.floor(Math.random() * (0 - -400) + -400) + 'px',
        top: 0,
        left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
        animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
        animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
      }}
    ></span>
  ));
};

export default MeteorEffect;
