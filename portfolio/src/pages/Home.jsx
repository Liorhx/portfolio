import React from "react";
import { Container, Typography, Box, Avatar } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import profilePic from "../assets/mypic.jpg";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Certifications from "../components/Certifications";

const Home = () => {
  const { ref: avatarRef, inView: avatarInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: typewriterRef, inView: typewriterInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-300 via-gray-600 to-cyan-300 text-white">
      <Container className="text-center p-6">
        <Box className="flex flex-col items-center">
          <Avatar
            alt="Rahul Yadav"
            src={profilePic}
            sx={{
              width: 120, // Set the size (in pixels)
              height: 120, // Set the size (in pixels)
              mb: 4,
              boxShadow: 3,
              transition: "all 1s ease",
              transform: avatarInView ? "translateY(0)" : "translateY(-20px)",
              opacity: avatarInView ? 1 : 0,
            }}
            ref={avatarRef}
          />

          <Typography
            variant="h3"
            className={`text-4xl font-bold transform transition-all duration-1000 ${
              typewriterInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
            ref={typewriterRef}
          >
            Rahul Yadav
          </Typography>
          <Typography
            variant="h5"
            className="text-xl text-white-300 mt-2 font-semibold"
          >
            <Typewriter
              words={[
                "Certified Full Stack Developer",
                "Certified MERN Stack Developer",
                "Tech Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </Typography>
          <Typography
            variant="body1"
            className="mt-4 text-lg text-white-400 max-w-2xl"
          >
            Welcome to my portfolio! I'm a passionate developer with experience
            in building web applications using the MERN stack. Here, you'll find
            more about my projects, skills, and experience. Feel free to explore
            and reach out!
          </Typography>
        </Box>
      </Container>

      {/* Components */}
      <div className="mt-8 w-full">
        <Projects />
        <Skills />
        <Resume />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
