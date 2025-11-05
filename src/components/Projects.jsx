import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive Product Showcase',
    description:
      'High-performance marketing site with 3D hero, scroll animations, and accessible components.',
    tags: ['React', 'Framer Motion', 'Spline'],
    link: '#',
  },
  {
    title: 'Design System & Component Library',
    description:
      'Scalable UI kit with tokens, theming, and documentation. Shipped across multiple apps.',
    tags: ['TypeScript', 'Tailwind', 'Storybook'],
    link: '#',
  },
  {
    title: 'Real-time Dashboard',
    description:
      'Live analytics with streaming data, charts, and comprehensive keyboard navigation.',
    tags: ['React', 'WebSockets', 'A11y'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center gap-3">
          <Star className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Selected Projects</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj) => (
            <motion.a
              key={proj.title}
              href={proj.link}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              whileFocus={{ y: -4 }}
              className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm outline-none transition will-change-transform hover:shadow-md focus:ring-2 focus:ring-indigo-500"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                {proj.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{proj.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
