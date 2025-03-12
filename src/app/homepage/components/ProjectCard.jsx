export default function Project({title, description, image, technologies, link}) {
    return (
        <div
            onClick={() => link && window.open(link, "_blank")}
            className="mx-auto rounded-xl overflow-hidden shadow-lg bg-white 
                   transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-2 hover:shadow-xl border border-gray-200"
        >
            <div className="h-56 w-full">
                <img
                    src={image}
                    alt={description}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="p-6">
                <p className="text-gray-800 font-semibold text-xl mb-2">{title}</p>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}