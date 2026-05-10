// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = 'Name required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.message) errs.message = 'Message empty';
    if (Object.keys(errs).length) setErrors(errs);
    else alert('Message sent! (demo)');
  };
  return (
    <section id="contact" className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}><h2 className="text-4xl font-bold mb-4">Let’s <span className="text-gradient">Connect</span></h2><p className="text-gray-600 dark:text-gray-300 mb-6">Got a project? Let’s build something amazing.</p><div className="space-y-4"><div className="flex items-center gap-4"><FiMail className="text-indigo-500 text-xl"/> ameennk1110@gmail.com</div><div className="flex items-center gap-4"><FiPhone className="text-indigo-500 text-xl"/> +91 9731327026</div><div className="flex items-center gap-4"><FiMapPin className="text-indigo-500 text-xl"/> Kannur, Kerala</div></div></motion.div>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="glass-card p-6 rounded-2xl space-y-4"><input name="name" placeholder="Full name" onChange={handleChange} className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border" />{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}<input name="email" placeholder="Email address" onChange={handleChange} className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border" />{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}<textarea name="message" rows="4" placeholder="Tell me about your idea..." onChange={handleChange} className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border"></textarea>{errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}<button type="submit" className="bg-indigo-600 text-white flex items-center gap-2 px-6 py-3 rounded-full w-full justify-center"><FiSend /> Send Message</button></motion.form>
      </div>
    </section>
  );
};

export default Contact;