import React from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60%_80%_at_70%_10%,#1b2443_0%,#0a0f1f_50%,#060912_100%)] text-slate-100 antialiased">
      {/* Skip to content for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-md focus:bg-slate-900/90 focus:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to content
      </a>

      {/* Page sections */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-tight">Your Name</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main" className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="opacity-80">
            Crafted with React, Tailwind, Framer Motion, and Spline.
          </p>
        </div>
      </footer>
    </div>
  );
}
