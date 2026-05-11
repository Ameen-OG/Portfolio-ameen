// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Ameen NK. Built with{" "}
          <FiHeart className="inline text-red-500" /> & MERN Stack
        </p>
        <div className="flex gap-5 text-gray-500">
             <a href="https://github.com/Ameen-OG" target="_blank" rel="noopener noreferrer" className="text-1xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
                        <FiGithub />
                      </a>
          <a href="https://www.linkedin.com/in/ameen-nk-58a625382/" target="_blank" rel="noopener noreferrer" className="text-1xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
                       <FiLinkedin />
                     </a>
          <FiTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
