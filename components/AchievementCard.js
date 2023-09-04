import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import HoverPattern from "./Hover/HoverPattern";
import Image from "next/image";

const AchievementCard = ({ title, description, image, emoji }) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div className="group mb-4 hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
            onMouseMove={onMouseMove}
        >
            <HoverPattern mouseX={mouseX} mouseY={mouseY} />

            {/* <div className="flex flex-col items-start  dark:border-gray-800 rounded p-4 relative">
                how are you
            </div> */}

            <div className="relative h-full">
                <span className="absolute w-[40%] -bottom-px right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
                <span className="absolute w-px -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>

                <div className="  flex flex-col items-start  dark:border-gray-800 rounded p-4 relative">
                    <h4 className="text-lg font-bold tracking-tight text-gray-400 dark:text-gray-100">
                        {title}
                    </h4>
                    <p className="leading-7 text-gray-500 dark:text-gray-300">
                        {description}
                    </p>

                    {image ? <div className="mt-6">
                        <Image
                            height={54}
                            width={160}
                            src={image}
                        />
                    </div> : null}

                    {emoji ? <div className="mt-4 text-4xl">
                        {emoji}
                    </div> : null}
                </div>
            </div>
        </div>
    );
};

export default AchievementCard;