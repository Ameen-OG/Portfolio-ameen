// src/components/Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  { 
    id: 1, 
    title: 'Full-Stack Sales CRM', 
    category: 'fullstack', 
    image: '/crm.png', 
    desc: 'Built a CRM system with lead management, role-based authentication, and sales pipeline tracking. Developed REST APIs, automated email workflows, and real-time analytics dashboards.', 
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux Toolkit', 'Tailwind CSS'], 
    github: '#', 
    demo: '#', 
    features: ['Lead Management', 'Role-based Auth', 'Sales Pipeline', 'Real-time Analytics'] 
  },
  { 
    id: 2, 
    title: 'Design Feedback Tool', 
    category: 'fullstack', 
    image: '/designFeedback.png', 
    desc: 'AI-powered design review platform with click-based annotation and Gemini Pro integration, reducing design revision cycles by 70% across 50+ users.', 
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Gemini AI'], 
    github: 'https://github.com/Ameen-OG/Design-Feedback-App', 
    demo: '#', 
    features: ['AI-powered feedback', 'Click-based annotation', 'Gemini Pro API', 'Design review'] 
  },
  { 
    id: 3, 
    title: 'E-Commerce Web Application', 
    category: 'fullstack', 
    image: '/ecommerce.png', 
    desc: 'Full-stack e-commerce platform with secure JWT authentication, CRUD operations, and integrated responsive frontend with backend REST APIs.', 
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'], 
    github: 'https://github.com/Ameen-OG/FullStack-ecommerce', 
    demo: '#', 
    features: ['JWT Authentication', 'CRUD Operations', 'REST APIs', 'Responsive Design'] 
  },
  { 
    id: 4, 
    title: 'Solar Storm Prediction & Analysis', 
    category: 'backend', 
    image: '/solarStorm.png', 
    desc: 'ML model to predict solar storm activity using historical data; performed preprocessing, training, and visualization, and developed a web interface to display results.', 
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'], 
    github: 'https://github.com/Ameen-OG/SolarStorm-Prediction-Analysis', 
    demo: '#', 
    features: ['ML Model', 'Data Preprocessing', 'Visualization', 'Web Interface'] 
  },
  { 
    id: 5, 
    title: 'Cowin Site Clone', 
    category: 'frontend', 
    image: '/cowin.png', 
    desc: 'Same design as the real Cowin site. Used Bootstrap and referenced by the real Cowin site for an authentic look.', 
    tech: ['Bootstrap', 'CSS'], 
    github: 'https://github.com/Ameen-OG/cowin-site-bootsrap.git', 
    demo: '#', 
    features: ['Responsive Design', 'Bootstrap Framework', 'Original UI Replication'] 
  },
  { 
    id: 6, 
    title: 'Role Based Backend Server', 
    category: 'backend', 
    image: '/Rolebased.png', 
    desc: 'Secure backend API with JWT authentication, role-based access control, and product management features.', 
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'], 
    github: 'https://github.com/Ameen-OG/Role-Based-Backend-Server.git', 
    demo: '#', 
    features: ['User signup & login', 'JWT authentication', 'Admin & customer roles', 'Protected admin routes', 'CRUD products API', 'Public product endpoints'] 
  }
];

const categories = ['All', 'frontend', 'backend', 'fullstack'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projectsData : projectsData.filter(p => p.category === active);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-50/70 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">A showcase of my full-stack development projects</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActive(cat)} 
              className={`px-5 py-2 rounded-full transition capitalize ${
                active === cat 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'bg-white/50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={active} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }} 
                className="glass-card rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition group-hover:scale-105 duration-300" 
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/6366f1/ffffff?text=' + project.title;
                    }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 line-clamp-2">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs text-gray-500">+{project.tech.length - 4} more</span>
                    )}
                  </div>
                  
                  <div className="flex gap-4 mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <a href={project.github} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1 transition">
                      <FiGithub /> Code
                    </a>
                    <a href={project.demo} className="text-gray-600 hover:text-indigo-600 flex items-center gap-1 transition">
                      <FiExternalLink /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;