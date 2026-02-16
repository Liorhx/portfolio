import React from "react";
import resumeFile from "../assets/itsme.pdf";
import { useInView } from "react-intersection-observer"; // Intersection Observer
import { motion } from "framer-motion"; // For animation

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Rahul_Yadav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={ref} className="py-12  text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Here is a brief overview of my professional journey, skills, and
          accomplishments.
        </motion.p>
        <motion.button
          onClick={handleDownload}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Download Resume
        </motion.button>
      </div>
    </section>
  );
};

export default Resume;
