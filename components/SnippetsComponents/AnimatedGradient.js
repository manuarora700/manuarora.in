import React from "react";

const AnimatedGradient = () => {
  return (
    <div class="flex h-40 w-full flex-row items-center justify-center rounded-md bg-gradient-to-r from-gray-100 to-gray-300 dark:from-slate-800 dark:to-slate-900">
      <button class="animate-border inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1">
        <span class="block rounded-md bg-slate-900 px-5 py-3 font-bold text-white">
          {" "}
          algochurn.com{" "}
        </span>
      </button>
    </div>
  );
};

export default AnimatedGradient;
