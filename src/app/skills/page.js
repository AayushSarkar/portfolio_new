"use client";

import { Tooltip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaJava, FaCode, FaTools, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  {
    category: "Languages",
    icon: <FaCode className="text-[#22d3ee] mr-2" />,
    items: [
      { name: "Java", level: "Intermediate", icon: <FaJava /> },
      { name: "C++", level: "Intermediate", icon: <SiCplusplus /> },
      { name: "JavaScript", level: "Intermediate", icon: <SiJavascript /> },
      { name: "Python", level: "Intermediate", icon: <SiPython /> },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaDatabase className="text-[#22d3ee] mr-2" />,
    items: [
      { name: "React", level: "Advanced", icon: <SiReact /> },
      { name: "Next.js", level: "Intermediate", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", level: "Advanced", icon: <SiTailwindcss /> },
      { name: "Node.js", level: "Intermediate", icon: <SiNodedotjs /> },
      { name: "MongoDB", level: "Intermediate", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools",
    icon: <FaTools className="text-[#22d3ee] mr-2" />,
    items: [
      { name: "Git", level: "Advanced", icon: <SiGit /> },
      { name: "VS Code", level: "Advanced", icon: <VscCode /> },
      { name: "Figma", level: "Intermediate", icon: <SiFigma /> },
      { name: "Postman", level: "Intermediate", icon: <SiPostman /> },
    ],
  },
];

// Soft fade and slide animation from left, no pushing
const cardVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: (i) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] px-6 pt-28 pb-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#22d3ee] tracking-wide">
        My Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(({ category, icon, items }, i) => (
          <motion.div
            key={category}
            className="w-full sm:w-[300px] bg-[#1e293b] rounded-2xl p-6 shadow-md border border-[#22d3ee] hover:shadow-[0_0_20px_#38bdf8] transition duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
          >
            <h2 className="text-2xl font-semibold mb-5 text-[#22d3ee] flex items-center">
              {icon}
              {category}
            </h2>

            <ul className="space-y-4">
              {items.map(({ name, level, icon: skillIcon }) => (
                <li key={name} className="flex items-center space-x-3">
                  <Tooltip
                    content={level}
                    placement="right"
                    className="bg-[#1e293b] text-sm text-white border border-[#22d3ee]"
                  >
                    <span className="text-xl text-[#22d3ee]">{skillIcon}</span>
                  </Tooltip>
                 <Tooltip
  content={level}
  placement="right"
  className="bg-[#1e293b] text-sm text-white border border-[#22d3ee] px-2 py-1"
>

                    <span className="hover:text-[#38bdf8] transition cursor-help">
                      {name}
                    </span>
                  </Tooltip>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
