import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer"; // Intersection Observer

const projects = [
  {
    name: "News-Monk",
    description:
      "NewsMonk is a smart news digest web app that delivers personalized news summaries.",
    link: "https://newss-app-4pp3.onrender.com",
    features: [
      "Email verification",
      "Authentication",
      "Personalized news feed",
    ],
  },
  {
    name: "Wanderlust",
    description:
      "Wanderlust is a full-stack web application designed to help users explore and manage travel destinations.",
    link: "https://majorprojectnpm.onrender.com/listings",
    features: ["User authentication", "Listing management", "Interactive maps"],
  },
  {
    name: "Spotify",
    description:
      "Your Spotify Clone is a frontend-only project built using HTML, CSS, and Bootstrap.",
    link: "https://spotify-oo9v.onrender.com",
    features: [" responsiveness"],
  },
];

const Projects = () => {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-gray-800 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300"
      initial={{ opacity: 0, x: -100 }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100,
      }}
      transition={{ duration: 1, delay: index * 0.3 }}
    >
      <h3 className="text-2xl font-semibold">{project.name}</h3>
      <p className="text-gray-300 mt-2">{project.description}</p>
      <p className="text-gray-300 mt-2">
        Features:
        <ul className="list-disc list-inside">
          {project.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          )) || <li>No features listed</li>}
        </ul>
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 transition"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default Projects;
