import { motion } from "motion/react";
import { item } from "/data/animations";

export default function Headline() {
  return (
    <motion.h2
      variants={item}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
      className="text-4xl text-center text-gray-200 mb-12 relative z-10"
    >
      Software engineer, AI researcher, and entrepreneur
    </motion.h2>
  );
}
