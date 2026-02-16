import React, { useState } from "react";
import certificateThumb1 from "../assets/myCertificateThumb.jpg";
import certificateThumb2 from "../assets/React_Certificate.jpg";
import certificateFile1 from "../assets/myCertificate.pdf";
import certificateFile2 from "../assets/React_Certificate.pdf";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showViewer, setShowViewer] = useState(false);
  const [showViewer2, setShowViewer2] = useState(false);

  return (
    <section ref={ref} className="py-12  text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Certifications
        </motion.h2>

        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Here is a snapshot of my MERN Stack Full Stack Developer
          certification, showcasing hands-on skills and real-world project
          experience. Click to have a look !!.
        </motion.p>

        <motion.div
          className="flex justify-evenly flex-wrap gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img
            src={certificateThumb2}
            alt="React Certificate"
            onClick={() => setShowViewer2(true)}
            className="w-40 md:w-60 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
          />
          <img
            src={certificateThumb1}
            alt="MERN Certificate"
            onClick={() => setShowViewer(true)}
            className="w-40 md:w-60 cursor-pointer rounded-lg shadow-lg hover:scale-105 transition"
          />
        </motion.div>

        {showViewer && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full relative">
              <button
                onClick={() => setShowViewer(false)}
                className="absolute cursor-pointer top-2 right-2 text-red-600 text-xl font-bold"
              >
                ✕
              </button>
              <iframe
                src={certificateFile1}
                title="Certificate PDF"
                className="w-full h-[500px] rounded-b-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
        {showViewer2 && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full relative">
              <button
                onClick={() => setShowViewer2(false)}
                className="absolute cursor-pointer top-2 right-2 text-red-600 text-xl font-bold"
              >
                ✕
              </button>
              <iframe
                src={certificateFile2}
                title="Certificate PDF"
                className="w-full h-[500px] rounded-b-lg"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
