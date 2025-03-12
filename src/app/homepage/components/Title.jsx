import { motion } from "motion/react";

export default function Title() {
    return (
        <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-4 mt-20">
            Hi, I'm Evan{" "}
            <motion.span
                animate={{
                    rotate: [0, 20, 0, 20, 0, 20, 0],
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
                    ease: "easeInOut",
                    delay: 0.5,
                }}
                className="inline-block"
            >
                👋
            </motion.span>
        </h1>
    );
}