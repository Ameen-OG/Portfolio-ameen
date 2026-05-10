// src/components/Testimonials.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiUsers } from 'react-icons/fi';

const testimonials = [
  { 
    name: 'Rishana', 
    role: 'MERN Stack Developer, Batchmate at UpCode', 
    text: 'Ameen is an amazing team player! We worked together on several projects at UpCode, and his problem-solving skills in React and Node.js are outstanding. He always helps others when they get stuck.', 
    rating: 5, 
    avatar: '/rishana.jpeg' 
  },
  { 
    name: 'Shahala', 
    role: 'Full Stack Developer, Batchmate at UpCode', 
    text: 'Working with Ameen on our final MERN project was a great experience. His code is clean, well-organized, and he has a deep understanding of MongoDB and Express.js. Highly recommended!', 
    rating: 5, 
    avatar: '/shahala.jpeg' 
  },
  { 
    name: 'Safa', 
    role: 'Web Developer, Batchmate at UpCode', 
    text: 'Ameen is not just skilled but also incredibly supportive. Whenever I faced challenges with authentication or API integration, he would explain things patiently. A true team player!', 
    rating: 5, 
    avatar: '/safa.png' 
  },
  { 
    name: 'UpCode Software Labs', 
    role: 'MERN Stack Training Institute, Kannur', 
    text: 'Ameen completed his MERN Stack certification with excellent performance. His dedication to learning and project execution was commendable throughout the program.', 
    rating: 5, 
    avatar: '/upcode.png' 
  }
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-50/40 to-purple-50/40 dark:from-gray-900/20 dark:to-gray-800/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">What My <span className="text-gradient">Batchmates Say</span></h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-12">Feedback from my MERN Stack journey at UpCode</p>
        </motion.div>
        
        <div className="relative flex items-center justify-center">
          <button 
            onClick={prev} 
            className="absolute left-0 z-10 p-2 rounded-full bg-white/50 dark:bg-gray-800 shadow-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
          >
            <FiChevronLeft />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -50 }} 
              className="glass-card p-8 rounded-2xl max-w-lg mx-auto"
            >
              {/* <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                  <FiUsers className="text-3xl text-indigo-500" />
                </div>
              </div> */}
              <img 
                src={testimonials[idx].avatar} 
                alt={testimonials[idx].name} 
                className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-500 object-cover" 
              />
              <p className="text-lg italic mt-4 text-gray-700 dark:text-gray-300">“{testimonials[idx].text}”</p>
              <div className="flex justify-center mt-3 text-yellow-400 gap-1">
                {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
              </div>
              <h4 className="font-bold mt-3 text-xl">{testimonials[idx].name}</h4>
              <span className="text-sm text-indigo-500 font-medium">{testimonials[idx].role}</span>
            </motion.div>
          </AnimatePresence>
          
          <button 
            onClick={next} 
            className="absolute right-0 p-2 rounded-full bg-white/50 dark:bg-gray-800 shadow-lg hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
          >
            <FiChevronRight />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === i ? 'w-6 bg-indigo-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;