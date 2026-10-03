// src/components/ExperienceTimeline.jsx
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const timeline = [
  {
    year: "2026",
    title: "Full-Stack Developer Program",
    company: "UpCode Software Labs, Kannur",
    type: "cert",
    desc: "Completed intensive full-stack training in MongoDB, Express.js, React.js, and Node.js. Built and deployed multiple production-ready projects including a CRM system, an AI-powered design feedback tool, and a healthcare management platform.",
  },
  {
    year: "2024 – 2026",
    title: "BCA — Bachelor of Computer Applications",
    company: "IGNOU (Indira Gandhi National Open University)",
    type: "edu",
    desc: "Studied core computer science fundamentals — programming, data structures, DBMS, and software engineering — alongside full-stack development training.",
  },
  {
    year: "2026 – Present",
    title: "Open to Full-Stack / Backend Roles",
    company: "Actively seeking opportunities",
    type: "work",
    desc: "Looking for full-stack or backend developer roles where I can contribute to production systems using the MERN stack and Python/Django. Open to remote and on-site positions. Immediate joiner.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            My training, education, and what I'm looking for next
          </p>
        </motion.div>

        <div className="relative border-l-4 border-indigo-500 ml-5 md:ml-10 mt-10 space-y-8">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              <div className="absolute -left-12 top-1 bg-indigo-500 p-2 rounded-full text-white shadow-lg">
                {item.type === "work" ? (
                  <FaBriefcase />
                ) : item.type === "edu" ? (
                  <FaGraduationCap />
                ) : (
                  <FaCertificate />
                )}
              </div>

              <div className="glass-card p-5 rounded-xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-indigo-500 font-semibold">
                    {item.year}
                  </span>
                  {item.type === "work" && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-green-500/15 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">
                      Open to work
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.company}
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;