// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';

// Custom typewriter effect (no external library needed)
const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return <span className="text-gradient">{words[index].substring(0, subIndex)}</span>;
};

const Hero = () => {
  const roles = ['FullStack Developer', 'MERN Stack', 'React Expert'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }} 
          className="flex-1 text-center lg:text-left"
        >
          <span className="text-indigo-500 font-semibold tracking-wide">👋 Hello, I'm</span>
          <h1 className="text-5xl md:text-7xl font-extrabold mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ameen nk
          </h1>
          <div className="text-2xl md:text-3xl font-medium mt-4 h-16">
            <Typewriter words={roles} />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-lg mx-auto lg:mx-0 text-lg">
            MERN Stack graduate from UpCode Software Labs, Kannur. Currently pursuing BCA (Final Year) at IGNOU.
  Passionate about building modern web applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-8">
            <a href="#projects" className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold flex items-center gap-2 hover:bg-indigo-700 transition shadow-lg">
              View Work <FiArrowRight />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition">
              Contact Me
            </a>
          </div>
          <div className="flex gap-5 justify-center lg:justify-start mt-8">
            <a href="https://github.com/Ameen-OG" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ameen-nk-58a625382/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
              <FiLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
              <FiTwitter />
            </a>
            <a href="mailto:ameennk1110@gmail.com" className="text-2xl text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition">
              <FiMail />
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.7 }} 
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-800 dark:bg-gray-900 flex items-center justify-center overflow-hidden">
              <img 
                src="/public/ameen.jpeg" 
                alt="profile" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;