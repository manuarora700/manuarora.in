import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { LinkPreview } from "@/components/LinkPreview";
import { BlurImage } from "./BlurImage";
import HoverPattern from "./Hover/HoverPattern";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <AchievementCard
                title={'Linux Certified'}
                description={'Developing Secure Software (LFD121)'}
                image={'/Linux_Foundation_logo.png'}
            />
            <AchievementCard
                title={'6 Years of Experience'}
                description={'Experience in leading a variety of cross-functional teams'}
                emoji={'👨‍💻'}
            />
        </div>
    );
};

export default Achievements;