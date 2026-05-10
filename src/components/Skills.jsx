// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiFigma, SiGraphql, SiDocker, SiJavascript } from 'react-icons/si';

// Update the skills array:

const skills = [
  { name: 'MongoDB', icon: SiMongodb, level: 85 },
  { name: 'Express.js', icon: SiNodedotjs, level: 88 },
  { name: 'React.js', icon: SiReact, level: 90 },
  { name: 'Node.js', icon: SiNodedotjs, level: 87 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
  { name: 'JavaScript/ES6', icon: SiJavascript, level: 88 },
  { name: 'REST APIs', icon: SiGraphql, level: 82 },
  { name: 'Git & GitHub', icon: SiReact, level: 86 }, // You can change icon
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technical <span className="text-gradient">Expertise</span></h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-12"></div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div key={skill.name} whileHover={{ y: -8 }} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} className="glass-card p-5 rounded-2xl text-center">
              <skill.icon className="text-5xl mx-auto text-indigo-500 mb-3" />
              <h3 className="font-bold text-xl">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-3">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-indigo-600 h-2.5 rounded-full"></motion.div>
              </div>
              <span className="text-sm mt-2 text-gray-500">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;