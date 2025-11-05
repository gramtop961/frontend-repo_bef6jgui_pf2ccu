import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Holograph ID',
    description: 'A digital identity dashboard with real-time charts, 3D interactions, and secure auth.',
    tags: ['React', 'Spline', 'Framer Motion', 'Vercel'],
    gradient: 'from-cyan-500/25 via-indigo-500/25 to-fuchsia-500/25',
  },
  {
    title: 'Nova Commerce',
    description: 'Headless e-commerce with performant UX, accessibility, and clean component system.',
    tags: ['TypeScript', 'Tailwind', 'SSR', 'Analytics'],
    gradient: 'from-emerald-500/25 via-cyan-500/25 to-indigo-500/25',
  },
  {
    title: 'Orion Docs',
    description: 'Beautiful documentation platform with search, dark mode, and MDX authoring.',
    tags: ['MDX', 'Design System', 'Search', 'DX'],
    gradient: 'from-violet-500/25 via-indigo-500/25 to-cyan-500/25',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-slate-400 max-w-2xl">
            A selection of work that balances product value with craft. More available on request.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={{ hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.995 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur shadow-xl"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />

              <div className="relative p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <div className="flex items-center gap-2 text-slate-300">
                    <a
                      href="#"
                      aria-label="Open project"
                      className="inline-flex size-9 items-center justify-center rounded-md bg-slate-950/60 ring-1 ring-white/10 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <Globe className="size-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="View source"
                      className="inline-flex size-9 items-center justify-center rounded-md bg-slate-950/60 ring-1 ring-white/10 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <Github className="size-4" />
                    </a>
                  </div>
                </div>
                <p className="mt-2 text-slate-300/90">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-slate-950/60 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center text-sm font-medium text-orange-300">
                  Explore case study
                  <ArrowUpRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
