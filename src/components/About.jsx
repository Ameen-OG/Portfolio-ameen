// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-12"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I’m a passionate full-stack developer with 6 month of experience at Upcode Software Labs building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs. Currently focused on React ecosystem, Node.js, and cloud architecture.
            </p>
         

<div className="mt-8 flex gap-4 items-center">
  <FaGraduationCap className="text-indigo-500 text-2xl" /> 
  <div>
    <h4 className="font-bold">MERN Stack Certification</h4>
    <p className="text-gray-500">UpCode Software Labs, Kannur | 2024</p>
  </div>
</div>

<div className="flex gap-4 items-center mt-4">
  <FaGraduationCap className="text-indigo-500 text-2xl" /> 
  <div>
    <h4 className="font-bold">BCA (Bachelor of Computer Applications)</h4>
    <p className="text-gray-500">IGNOU | Final Year (2024-2026)</p>
  </div>
</div>

<div className="flex gap-4 items-center mt-4">
  <FaLaptopCode className="text-indigo-500 text-2xl" /> 
  <div>
    <h4 className="font-bold">Career Goal</h4>
    <p className="text-gray-500">To become a full-stack developer and build scalable web solutions</p>
  </div>
</div>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} className="glass-card p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Personal Summary</h3>
            <p className="text-gray-600 dark:text-gray-300">Based in Kannur, I’m constantly exploring new tech, contributing to open source, and sharing knowledge through workshops. I believe in writing clean code that lasts.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;