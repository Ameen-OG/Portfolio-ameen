// src/components/Services.jsx
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiZap, FiServer } from 'react-icons/fi';

const services = [
  { icon: <FiCode />, title: 'Web Development', desc: 'Responsive, high-performance websites & SPAs' },
  { icon: <FiLayout />, title: 'UI/UX Design', desc: 'Intuitive interfaces with Figma & prototyping' },
  { icon: <FiServer />, title: 'API Integration', desc: 'RESTful & GraphQL API development' },
  { icon: <FiZap />, title: 'Full-Stack Solutions', desc: 'End-to-end applications with modern stacks' }
];

const Services = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-gray-900/20 dark:to-gray-800/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">What I <span className="text-gradient">Offer</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {services.map((s, i) => (
            <motion.div whileHover={{ scale: 1.03 }} key={i} className="glass-card p-7 rounded-2xl text-center hover:shadow-2xl transition"><div className="text-5xl text-indigo-500 mx-auto mb-4">{s.icon}</div><h3 className="text-2xl font-semibold">{s.title}</h3><p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;