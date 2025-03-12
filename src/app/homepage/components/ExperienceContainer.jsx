import { experiences } from '/data/experiences'
import { Briefcase } from 'lucide-react';

const ExperienceItem = ({ experience }) => {
    return (
        <div className="flex space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-700">
                    {experience.position}
                </h3>
                <div className="text-gray-500">
                    <p>{experience.company}</p>
                    <p className="text-gray-500">{experience.duration}</p>
                </div>
            </div>
        </div>
    );
};

export default function ExperienceContainer() {
    return (
        <div className="w-full">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200 h-full">
                <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-gray-700" />
                    <h2 className="text-xl font-semibold text-gray-700">Experience</h2>
                </div>

                <div>
                    {experiences.map((experience, index) => (
                        <ExperienceItem key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}
