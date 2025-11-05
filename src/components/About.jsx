import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const list = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <User className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 leading-relaxed text-gray-700"
          >
            <p>
              I am a frontend-focused developer who merges performance, accessibility, and motion design to create
              clean, enjoyable experiences.
            </p>
            <p className="mt-4">
              I specialize in React, TypeScript, modern CSS, and design systems. I collaborate closely with design and
              product to ship impactful work.
            </p>
          </motion.div>

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-2 text-sm text-gray-700"
          >
            {['Accessibility-first mindset', 'Performance optimization', 'Design systems & components', 'Motion & micro-interactions'].map(
              (t) => (
                <motion.li
                  key={t}
                  variants={item}
                  className="rounded-md bg-gray-50 px-4 py-2"
                >
                  {t}
                </motion.li>
              )
            )}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default About;
