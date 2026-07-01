// src/App.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
  <html lang="en" />
  <title>Muhammed Ameen</title>
  <meta name="description" content="MERN Stack developer graduate from UpCode Software Labs, Kannur. BCA final year student at IGNOU. Building modern web applications." />
</Helmet>
      <AnimatePresence mode="wait">
        {loading ? <Loader key="loader" /> : 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <ScrollProgress />
            <Cursor />
            <AnimatedBackground />
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <ExperienceTimeline />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
}

export default App;