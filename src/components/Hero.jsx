import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays - non-blocking */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950/80"
      />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 shadow-lg backdrop-blur"
          >
            <Sparkles className="size-3.5 text-orange-300" />
            <span className="tracking-wide">Fintech • Travel • Interactive</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-4 text-4xl sm:text-6xl font-bold leading-tight tracking-tight"
          >
            Modern products with motion, clarity, and feel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl"
          >
            I craft immersive web experiences—fast, accessible, and delightful. Hover, explore, and see the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 ring-1 ring-white/10 transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              View Projects
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-slate-900/60 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Get in Touch
            </a>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="hidden sm:flex items-center gap-2 text-xs text-slate-300/90 ml-2"
            >
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>Performance-first • A11y • PWA-ready</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
