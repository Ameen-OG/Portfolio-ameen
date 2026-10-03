// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: name + tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ameen N K
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Full-Stack Developer · MERN &amp; Django
            </p>
          </div>

          {/* Center: quick nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            <a href="#about" className="hover:text-indigo-500 transition">About</a>
            <a href="#skills" className="hover:text-indigo-500 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
            <a href="#experience" className="hover:text-indigo-500 transition">Experience</a>
            <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
          </nav>

          {/* Right: socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Ameen-OG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ameen-nk-58a625382/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:ameennk1110@gmail.com"
              aria-label="Email"
              className="text-xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {year} Ameen N K. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with React, Tailwind &amp; Framer Motion
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="text-xs text-gray-500 hover:text-indigo-500 flex items-center gap-1 transition"
          >
            Back to top <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;