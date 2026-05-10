// src/components/AnimatedBackground.jsx
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-5 pointer-events-none">
      <motion.div animate={{ x: ['0%', '100%', '0%'], y: ['0%', '50%', '0%'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }} className="absolute top-20 left-10 w-96 h-96 rounded-full bg-indigo-500/20 dark:bg-indigo-500/10 blur-3xl" />
      <motion.div animate={{ x: ['0%', '-50%', '0%'], y: ['0%', '30%', '0%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/20 dark:bg-purple-500/10 blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;