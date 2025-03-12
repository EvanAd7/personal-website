export default function Project({title, description, image, technologies, link}) {
    return (
        <div 
            className="w-full min-w-96 rounded-xl overflow-hidden bg-gray-900 cursor-pointer hover:-translate-y-4 transition-all duration-300"
            onClick={() => window.open(link, '_blank')}
        >
            <div className="h-56 w-full">
                <img
                    src={image}
                    alt={description}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <p className="text-gray-200 font-semibold text-xl mb-2">{title}</p>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-950 text-blue-200 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}