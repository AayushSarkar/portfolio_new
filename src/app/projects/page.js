"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiVite,
  SiJsonwebtokens,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";
import Modal from "@/app/components/Modal";

const projects = [
  {
    title: "Binkeyit – Blinkit Clone",
    shortDesc: "Full-stack e-commerce platform inspired by Blinkit.",
    stack: [SiReact, SiRedux, SiJavascript, SiNodedotjs, SiExpress, SiMongodb],
    github: "https://github.com/AayushSarkar/Binkeyit",
    live: "#",
    year: 2024,
    details: [
      "Created a full-stack e-commerce platform enabling users to browse, search, add to cart, and purchase products.",
      "Integrated an admin dashboard for managing products, categories, orders, and user roles.",
    ],
  },
  {
    title: "BookStore App",
    shortDesc: "BookStore web app with auth and backend.",
    stack: [
      SiReact,
      SiTailwindcss,
      SiVite,
      SiNodedotjs,
      SiExpress,
      SiMongodb,
      SiJsonwebtokens,
    ],
    github: "https://github.com/AayushSarkar/BookStore",
    live: "#",
    year: 2024,
    details: [
      "Developed a full-stack BookStore application with JWT-based user authentication and RESTful APIs.",
      "Designed frontend with Tailwind CSS, state management via Context API, and Vite for fast development.",
    ],
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="px-6 py-32 bg-black text-white" id="projects">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-16 tracking-wide">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelected(project)}
            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-3xl border border-gray-700 p-8 min-h-[320px] flex flex-col justify-between shadow-md hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
          >
            {/* Title & Year */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 italic">{project.year}</p>
            </div>

            {/* Short Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {project.shortDesc}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-4 text-2xl text-cyan-400 mb-6">
              {project.stack.map((Icon, i) => (
                <Icon key={i} className="hover:text-cyan-300 transition duration-200" />
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-6 text-sm mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-2"
                >
                  🌐 Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
