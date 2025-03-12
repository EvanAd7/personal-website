import { GraduationCap } from 'lucide-react';
import { education } from '/data/education';
import { motion } from "motion/react";
import { container, item } from "/data/animations";

export default function EducationContainer() {
    return (
        <motion.div 
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.2 }}
            className="w-full"
        >
            <div className="bg-gray-900 rounded-xl shadow-2xl p-6 border border-gray-800 h-full">
                <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-gray-300" />
                    <h2 className="text-xl font-semibold text-gray-200">Education</h2>
                </div>

                <motion.div 
                    className="flex space-x-4 items-center"
                    variants={item}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div
                        className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-800 border border-gray-700 hover:scale-110 transition-all duration-300 cursor-pointer"
                        onClick={() => window.open(education.link, '_blank')}
                    >
                        <img
                            src={education.logo}
                            alt={`${education.school} logo`}
                            className="w-full h-full bg-white object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-200">
                            {education.school}
                        </h3>
                        <p className="text-gray-300">
                            {education.major} • {education.extra}
                        </p>
                        <p className="text-gray-400">{education.gradYear}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
