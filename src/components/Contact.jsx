import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s connect</h2>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Prefer email or socials? Reach out anytime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-3 ring-1 ring-white/10 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Mail className="size-4 text-orange-300" />
            <span className="text-sm">you@example.com</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-3 ring-1 ring-white/10 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Github className="size-4" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900/60 px-4 py-3 ring-1 ring-white/10 hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Linkedin className="size-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
