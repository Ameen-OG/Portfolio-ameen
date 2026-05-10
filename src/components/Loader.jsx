// src/components/Loader.jsx
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"></motion.div>
    </motion.div>
  );
};

export default Loader;