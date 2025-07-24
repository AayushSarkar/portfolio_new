"use client";

export default function Modal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4 animate-fadeIn">
      <div className="bg-[#1e293b] rounded-2xl max-w-xl w-full p-6 md:p-8 relative text-white shadow-2xl border border-cyan-500/20">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-5 text-xl text-gray-400 hover:text-white transition-colors duration-200"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          {project.title}
        </h2>

        {/* Short Description */}
        <p className="mb-5 text-gray-300 text-base leading-relaxed">
          {project.shortDesc}
        </p>

        {/* Detailed List */}
        <ul className="list-disc list-inside space-y-2 text-sm text-gray-200 pl-2">
          {project.details.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Links */}
        {/* <div className="mt-6 flex gap-6 text-sm">
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400 underline underline-offset-4 transition duration-200"
            >
              🔗 Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 underline underline-offset-4 transition duration-200"
            >
              🐙 GitHub Repo
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
}
