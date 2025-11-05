import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-gray-700 shadow backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-indigo-600" /> Interactive • Minimal • Modern
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Portfolio experiences that move people
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg"
        >
          I craft fast, accessible interfaces with purposeful motion. Explore selected work and get in touch to collaborate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7, ease: 'easeOut' }}
          className="mt-6 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-0.5 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-white/90 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
