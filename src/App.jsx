import React from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_70%_10%,#0b0e17_0%,#0a0f1f_55%,#060912_100%)] text-slate-100 antialiased">
      {/* Skip to content for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-slate-900/90 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to content
      </a>

      {/* Sticky header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="size-2 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-tight">Your Name</span>
          </motion.div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            {[
              { href: '#skills', label: 'Skills' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" className="relative">
        <Hero />
        <Skills />
        <Projects />
      </main>

      {/* Contact shifted into footer */}
      <footer className="mt-16 border-t border-white/10">
        <Contact />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="opacity-80">Crafted with React, Tailwind, Framer Motion, and Spline.</p>
        </div>
      </footer>
    </div>
  );
}
