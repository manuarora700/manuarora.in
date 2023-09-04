import { motion, useMotionTemplate } from "framer-motion";

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
    let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                style={style}
            ></motion.div>
        </div>
    );
}

export default HoverPattern;