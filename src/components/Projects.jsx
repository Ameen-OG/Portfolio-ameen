// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  { id: 1, title: 'Cowin Site', category: 'frontend', image: '/cowin.png', desc: 'Same design the real cowin site', tech: ['Boostrap' ,'CSS'], github: '#', demo: '#', features: ['Live charts', 'Dark mode'] },
  { id: 2, title: 'Role Based Backend Server', category: 'backend', image: '/Rolebased.png', tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'], github: '#', demo: '#', features: [ 'User signup & login', 'JWT authentication','Admin & customer roles','Protected admin routes','CRUD products API','Public product endpoints' ] },
  { id: 3, title: 'E-commerce', category: 'fullstack', image: '/ecommerce.png', desc: 'Full-stack eCommerce application with authentication, product management, cart, and order features.', tech: ['React.js', 'tailwind', 'PostgreSQL'], github: '#', demo: '#', features: ['Realtime updates', 'Drag & drop'] },
  { id: 4, title: 'Portfolio 3.0', category: 'frontend', image: 'https://picsum.photos/id/20/400/300', desc: 'Modern portfolio with glassmorphism', tech: ['React', 'Framer', 'Tailwind'], github: '#', demo: '#', features: ['Smooth transitions'] }
];

const categories = ['All', 'frontend', 'backend', 'fullstack'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projectsData : projectsData.filter(p => p.category === active);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50/70 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} className={`px-5 py-2 rounded-full transition capitalize ${active === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white/50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'}`}>{cat}</button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(project => (
              <motion.div whileHover={{ y: -10 }} className="glass-card rounded-2xl overflow-hidden group" key={project.id}>
                <div className="relative overflow-hidden h-48"><img src={project.image} alt={project.title} className="w-full h-full object-cover transition group-hover:scale-105 duration-300" /></div>
                <div className="p-5"><h3 className="text-2xl font-bold">{project.title}</h3><p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{project.desc}</p><div className="flex flex-wrap gap-2 mt-3">{project.tech.map(t => <span key={t} className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full">{t}</span>)}</div><div className="flex gap-4 mt-4"><a href={project.github} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"> <FiGithub /> Code</a><a href={project.demo} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1"><FiExternalLink /> Demo</a></div></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;