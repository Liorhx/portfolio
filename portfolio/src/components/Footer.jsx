import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="flex justify-center gap-12 text-4xl text-white">
        <a
          href="https://www.linkedin.com/in/rahul-yadav-a33972259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Rahul962160 "
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/RahulYadvanshii/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
