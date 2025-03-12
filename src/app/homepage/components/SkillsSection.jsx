import { motion } from "motion/react";
import { container, item } from "/data/animations";
import { skills } from "/data/skills";

const SkillsSection = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid grid-cols-8 gap-8"
      id="skills"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center"
          variants={item}
          custom={index}
        >
          <div
            className="w-20 h-20 bg-gray-950 shadow-2xl flex items-center justify-center mb-2 hover:scale-110 transition-all duration-300 cursor-pointer"
            onClick={() => window.open(skill.link, '_blank')}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full rounded-lg object-contain"
            />
          </div>
          <span className="text-gray-300 font-medium">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsSection; 