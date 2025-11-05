import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Mail className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <label className="block text-sm font-medium text-gray-700">
              Name
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400"
                placeholder="Jane Doe"
                aria-label="Your name"
                required
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-gray-700">
              Email
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400"
                placeholder="jane@example.com"
                aria-label="Your email"
                required
              />
            </label>
            <label className="mt-4 block text-sm font-medium text-gray-700">
              Message
              <textarea
                className="mt-1 h-28 w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-400"
                placeholder="How can I help?"
                aria-label="Your message"
                required
              />
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4 text-gray-700"
          >
            <p>
              Prefer email? Reach me directly at
              <a href="mailto:hello@example.com" className="ml-1 font-medium text-indigo-600 underline">
                hello@example.com
              </a>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com"
                className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
