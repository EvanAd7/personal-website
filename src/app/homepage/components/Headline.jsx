import { motion } from "motion/react";

export default function Headline() {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-2xl md:text-3xl text-center text-white mb-12"
    >
      Software engineer, AI researcher, and entrepreneur
    </motion.h2>
  );
}
