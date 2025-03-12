import { experiences } from '/data/experiences'
import { Briefcase } from 'lucide-react';
import { motion } from "motion/react";
import { container, item } from "/data/animations";

const ExperienceItem = ({ experience, index }) => {
    return (
        <motion.div 
            className="flex space-x-4 mb-6"
            variants={item}
            custom={index}
        >
            <div
                className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-white border border-gray-700 hover:scale-110 transition-all duration-300 cursor-pointer"
                onClick={() => window.open(experience.link, '_blank')}
            >
                <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-200">
                    {experience.position}
                </h3>
                <div>
                    <p className="text-gray-300">{experience.company}</p>
                    <p className="text-gray-400">{experience.duration}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function ExperienceContainer() {
    return (
        <motion.div 
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full"
        >
            <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800 h-full">
                <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-gray-300" />
                    <h2 className="text-xl font-semibold text-gray-200">Experience</h2>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} index={index} />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
