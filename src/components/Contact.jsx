import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-slate-400 max-w-2xl">
            Whether you have a specific project or just want to chat ideas, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-2 rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur shadow-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-md bg-slate-950/60 px-3 py-2 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-500"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md bg-slate-950/60 px-3 py-2 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-md bg-slate-950/60 px-3 py-2 text-sm text-white ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-500"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 ring-1 ring-white/10 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Send message
              </button>
            </div>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur shadow-xl"
          >
            <div className="space-y-4 text-sm text-slate-300">
              <p>
                Prefer email or social? I usually respond within 24 hours. Let’s find a time that works for you.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:you@example.com"
                  className="inline-flex items-center gap-2 rounded-md bg-slate-950/60 px-3 py-2 ring-1 ring-white/10 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Mail className="size-4 text-cyan-300" />
                  you@example.com
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-slate-950/60 px-3 py-2 ring-1 ring-white/10 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-slate-950/60 px-3 py-2 ring-1 ring-white/10 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
