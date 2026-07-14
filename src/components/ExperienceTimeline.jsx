// src/components/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const timeline = [
  {
    year: "2023 - 2026",
    title: "BCA (Bachelor of Computer Applications)",
    company: "IGNOU (Indira Gandhi National Open University)",
    type: "edu",
    desc: "Studied Computer Applications, covering programming, databases, and software engineering.",
  },
  {
    year: "2025 to 2026 - Present",
    title: "MERN Stack Development",
    company: "UpCode Software Labs, Kannur",
    type: "work",
    desc: "Completed intensive training in MongoDB, Express.js, React.js, and Node.js. Built multiple full-stack projects.",
  },
  {
    year: "2026",
    title: "Full Stack Web Development",
    company: "UpCode Software Labs",
    type: "cert",
    desc: "Completed certification with hands-on projects including e-commerce, social media apps, and portfolio websites.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Journey & <span className="text-gradient">Milestones</span>
        </h2>
        <div className="relative border-l-4 border-indigo-500 ml-5 md:ml-10 mt-10 space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute -left-12 top-1 bg-indigo-500 p-2 rounded-full text-white">
                {item.type === "work" ? (
                  <FaBriefcase />
                ) : item.type === "edu" ? (
                  <FaGraduationCap />
                ) : (
                  <FaCertificate />
                )}
              </div>
              <div className="glass-card p-5 rounded-xl">
                <span className="text-indigo-500 font-semibold">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.company}
                </p>
                <p className="mt-2">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
