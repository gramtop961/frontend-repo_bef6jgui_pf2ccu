import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Skip link for accessibility */}
      <a href="#projects" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded bg-indigo-600 px-3 py-2 text-white">Skip to projects</a>

      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Your Name. Built with React, Tailwind, Framer Motion, and Spline.
        </p>
      </footer>
    </div>
  );
}

export default App;
