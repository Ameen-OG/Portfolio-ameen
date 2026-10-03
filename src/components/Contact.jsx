// src/components/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiLoader,
  FiAlertCircle,
} from 'react-icons/fi';

const FORM_ENDPOINT = 'https://formspree.io/f/xkjgdnak'; // ✅ your Formspree form

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'ameennk1110@gmail.com',
    href: 'mailto:ameennk1110@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 97313 27026',
    href: 'tel:+919731327026',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Kannur, Kerala, India',
    href: 'https://maps.google.com/?q=Kannur,Kerala',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Please enter a valid email';
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Formspree submission failed');

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50/70 dark:bg-gray-900/40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Open to full-stack and backend roles, freelance projects, and collaborations.
            I usually reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Let's build something together</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Whether you have a job opportunity, a project idea, or just want to say hi —
              my inbox is always open.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      {item.label}
                    </p>
                    <p className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for full-stack roles
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl space-y-4"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                placeholder="Full name"
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border transition outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                  errors.name
                    ? 'border-red-500'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                placeholder="Email address"
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border transition outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                placeholder="Tell me about your idea or opportunity..."
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800 border transition outline-none focus:ring-2 focus:ring-indigo-500/40 resize-none ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Honeypot — hidden from humans, catches bots */}
            <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: 'none' }}
              onChange={(e) => setForm({ ...form, _gotcha: e.target.value })}
            />

            {/* Submit button — state-aware */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition shadow-lg ${
                status === 'sending'
                  ? 'bg-indigo-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-500'
                  : status === 'error'
                  ? 'bg-red-500'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {status === 'sending' && (
                <>
                  <FiLoader className="animate-spin" /> Sending...
                </>
              )}
              {status === 'success' && (
                <>
                  <FiCheckCircle /> Message Sent!
                </>
              )}
              {status === 'error' && (
                <>
                  <FiAlertCircle /> Failed — Try Again
                </>
              )}
              {status === 'idle' && (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            <p className="text-xs text-center text-gray-500 mt-2">
              Or email me directly at{' '}
              <a
                href="mailto:ameennk1110@gmail.com"
                className="text-indigo-500 hover:underline"
              >
                ameennk1110@gmail.com
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;