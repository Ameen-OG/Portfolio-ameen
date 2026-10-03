// src/components/About.jsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} viewport={{ once: true }}>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a <strong>Full-Stack Developer</strong> based in Kannur, Kerala, with
              hands-on experience building and deploying production web applications across
              the <strong>MERN stack</strong> and <strong>Python / Django</strong>. I've
              completed intensive full-stack training at UpCode Software Labs and shipped
              multiple end-to-end projects — from REST API design and database modeling to
              responsive React UIs and Dockerized deployment. I'm now actively seeking a
              full-stack or backend role where I can contribute to real production systems.
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <FaCertificate className="text-indigo-500 text-2xl" />
              <div>
                <h4 className="font-bold">Full-Stack Developer Program</h4>
                <p className="text-gray-500">UpCode Software Labs, Kannur | Completed 2026</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <FaGraduationCap className="text-indigo-500 text-2xl" />
              <div>
                <h4 className="font-bold">BCA (Bachelor of Computer Applications)</h4>
                <p className="text-gray-500">IGNOU | 2024 – 2026</p>
              </div>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <FaLaptopCode className="text-indigo-500 text-2xl" />
              <div>
                <h4 className="font-bold">Open To</h4>
                <p className="text-gray-500">
                  Full-stack / Backend roles · Remote &amp; on-site · Immediate joiner
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} className="glass-card p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Personal Summary</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I focus on writing maintainable, well-documented code and staying current with
              modern tooling. I've built and deployed multiple full-stack products — including
              a healthcare platform with AI-powered insights, a role-based CRM, and an
              AI-powered design feedback tool. I'm comfortable owning features from database
              schema to UI, and I learn quickly by building. Currently looking for a team
              where I can grow and ship real products.
            </p>
            <a
              href="/Ameen_NK_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;