import { delay } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { 
        opacity: 0, 
        y: 30, 
        filter: "blur(5px)" 
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export { container, item };