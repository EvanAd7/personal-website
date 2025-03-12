// This will be replaced with actual data later
const skills = [
  { name: 'JavaScript', icon: '/images/skills/javascript.png' },
  { name: 'React', icon: '/images/skills/react.png' },
  { name: 'Next.js', icon: '/images/skills/nextjs.png' },
  { name: 'Node.js', icon: '/images/skills/nodejs.png' },
  { name: 'Python', icon: '/images/skills/python.png' },
  { name: 'TensorFlow', icon: '/images/skills/tensorflow.png' },
  { name: 'AWS', icon: '/images/skills/aws.png' },
  { name: 'Docker', icon: '/images/skills/docker.png' },
  { name: 'Git', icon: '/images/skills/git.png' },
  { name: 'TypeScript', icon: '/images/skills/typescript.png' },
  { name: 'MongoDB', icon: '/images/skills/mongodb.png' },
  { name: 'SQL', icon: '/images/skills/sql.png' },
];

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center p-4 mb-2">
            {/* Placeholder for skill icon */}
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">{skill.name}</span>
            </div>
          </div>
          <span className="text-gray-700 font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection; 