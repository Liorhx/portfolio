import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaBootstrap,
  FaComments,
} from "react-icons/fa";
import { SiRedux, SiRedis, SiReactquery } from "react-icons/si";

import { SiMongodb, SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress size={50} className="text-gray-600" />,
  },
  { name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
  { name: "Redux", icon: <SiRedux size={50} className="text-purple-500" /> },
  { name: "Redis", icon: <SiRedis size={50} className="text-red-500" /> },
  {
    name: "React Query",
    icon: <SiReactquery size={50} className="text-pink-500" />,
  },
  { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-600" /> },

  { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-400" /> },

  { name: "GitHub", icon: <FaGithub size={50} className="text-gray-400" /> },

  { name: "MySQL", icon: <SiMysql size={50} className="text-blue-600" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={50} className="text-info" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} className="text-teal-400" />,
  },
  { name: "Java", icon: <span className="text-orange-600">Java</span> },
  { name: "C Language", icon: <span className="text-green-500">C</span> },

  {
    name: "Communication Skills",
    icon: <FaComments size={50} className="text-gray-400" />,
  },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 bg-white-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg flex flex-col items-center transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
