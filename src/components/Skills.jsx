import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Layers, Palette, Database, Cloud, Sparkles, GitBranch, Terminal } from 'lucide-react';

const skills = [
  {
    title: 'Frontend Engineering',
    icon: Code,
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    gradient: 'from-cyan-500/20 to-indigo-500/20',
  },
  {
    title: 'Architecture & DX',
    icon: Layers,
    items: ['Component Systems', 'Design Tokens', 'Storybook', 'Testing'],
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'Performance',
    icon: Cpu,
    items: ['A11y', 'Lighthouse 95+', 'Bundle Strategy', 'SSR/SSG'],
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'Back of the Frontend',
    icon: Database,
    items: ['API Design', 'Auth', 'GraphQL/REST', 'Caching'],
    gradient: 'from-amber-500/20 to-rose-500/20',
  },
  {
    title: 'Cloud & Tools',
    icon: Cloud,
    items: ['Vercel', 'CI/CD', 'Analytics', 'Sentry'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Craft & Motion',
    icon: Palette,
    items: ['Micro-interactions', '3D/Spline', 'Design Systems', 'Prototyping'],
    gradient: 'from-cyan-500/20 to-emerald-500/20',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Skills & Capabilities</h2>
            <p className="mt-2 text-slate-400 max-w-2xl">
              A balanced blend of product sense, interaction design, and strong engineering fundamentals.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-cyan-300/90">
            <Sparkles className="size-4" />
            <span>Always learning</span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              variants={{ hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur p-5 shadow-lg overflow-hidden`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
              <div className="relative flex items-start gap-3">
                <div className="shrink-0 rounded-md bg-slate-950/60 p-2 ring-1 ring-white/10">
                  <s.icon className="size-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-medium leading-tight">{s.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-md bg-slate-950/60 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10 group-hover:bg-slate-900/70 transition-colors"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 backdrop-blur">
            <GitBranch className="size-3.5 text-emerald-300" />
            Git-first workflow
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 backdrop-blur">
            <Terminal className="size-3.5 text-cyan-300" />
            DX-focused
          </div>
        </div>
      </div>
    </section>
  );
}
