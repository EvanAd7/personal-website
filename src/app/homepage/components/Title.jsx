import { motion } from "motion/react";
import { container } from "/data/animations";
import { useState, useEffect } from "react";

export default function Title() {
    const [isWaving, setIsWaving] = useState(false);

    useEffect(() => {
        setIsWaving(true);
        
        const firstWaveTimer = setTimeout(() => {
            setIsWaving(false);
            const secondWaveTimer = setTimeout(() => {
                setIsWaving(true);
                setTimeout(() => setIsWaving(false), 2000);
            }, 500);
            
            return () => clearTimeout(secondWaveTimer);
        }, 2000);
        
        return () => clearTimeout(firstWaveTimer);
    }, []);

    const handleWaveClick = () => {
        if (!isWaving) {
            setIsWaving(true);
            setTimeout(() => setIsWaving(false), 1000);
        }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
        >
            <h1 className="text-7xl font-bold text-center text-white mb-4 mt-10">
                Hi, I'm Evan{" "}
                <motion.span
                    animate={isWaving ? {
                        rotate: [0, 20, 0, 20, 0, 20, 0],
                    } : {}}
                    transition={{
                        duration: 1.5,
                        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
                        ease: "easeInOut",
                    }}
                    className="inline-block cursor-pointer"
                    onClick={handleWaveClick}
                >
                    👋
                </motion.span>
            </h1>
        </motion.div>
    );
}