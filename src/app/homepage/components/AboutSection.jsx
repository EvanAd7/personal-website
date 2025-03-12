import { motion } from "motion/react";
import { container, item } from "/data/animations";

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="text-4xl font-bold text-center mb-10 text-gray-100"
      >
        About Me
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-lg text-gray-300 text-center leading-relaxed space-y-5"
      >
        <motion.p variants={item}>
          I'm a <span className="font-extrabold">software engineer</span> and <span className="font-extrabold">entrepreneur</span> with a passion for building products that are innovative, impactful, and user-friendly.
          I'm currently studying at the <span className="font-extrabold">University of Southern California</span> as a Presidential Scholar, pursuing a Bachelor's Degree in <span className="font-extrabold">Computer Science</span>.
        </motion.p>
        
        <motion.p variants={item}>
          Recently, I've been building a startup called Lattice, an AI-powered platform that streamlines the chemical R&D process. We've received $1,000 in seed funding so far,
          and are currently working with 4 biopharmaceutical companies to pilot the platform.
        </motion.p>
        
        <motion.p variants={item}>
          I'm also a researcher with deep interests in the field of <span className="font-extrabold">neuroscience</span>, <span className="font-extrabold">artificial intelligence</span>, <span className="font-extrabold">machine learning</span>, and <span className="font-extrabold">epigenetics</span>.
          In high school, I conducted research at UC San Diego and published an independent research paper.
          When I'm not working or studying, I enjoy surfing, hiking, and playing music.
        </motion.p>
      </motion.div>
    </div>
  );
} 