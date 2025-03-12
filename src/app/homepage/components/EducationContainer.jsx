import { GraduationCap } from 'lucide-react';
import { education } from '/data/education'

export default function EducationContainer() {
    return (
        <div className="w-full">
            <div className="bg-white rounded-xl shadow p-6 border border-gray-200 h-full">
                <div className="flex items-center gap-2 mb-6">
                    <GraduationCap className="w-5 h-5 text-gray-700" />
                    <h2 className="text-xl font-semibold text-gray-700">Education</h2>
                </div>

                <div className="flex space-x-4 items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                        <img
                            src={education.logo}
                            alt={`${education.school} logo`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-gray-700">
                            {education.school}
                        </h3>
                        <p className="text-gray-500">
                            {education.major} • {education.extra}
                        </p>
                        <p className="text-gray-500">{education.gradYear}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
