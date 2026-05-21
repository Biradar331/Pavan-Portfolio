import { useState } from 'react';
import { motion } from 'framer-motion';
import { personal } from '../data/portfolioData';

export default function ProfileImage({ className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      className={`relative mx-auto w-full min-w-0 max-w-[min(100%,300px)] sm:max-w-[320px] lg:max-w-[360px] ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient glow — soft, not flashy */}
      <div
        className="hero-profile-glow absolute left-1/2 top-[42%] h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        aria-hidden
      />

      {/* Floating frame */}
      <motion.div
        className="relative"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="absolute -inset-[2px] rounded-[1.9rem] bg-gradient-to-br from-blue-500/80 via-teal-400/60 to-blue-600/80 opacity-70"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.25)] ring-1 ring-slate-200/90 dark:bg-slate-800 dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:ring-slate-600/50 sm:rounded-[2rem]">
          <div className="aspect-[4/5] w-full">
            {!error ? (
              <img
                src={personal.photoPath}
                alt={`${personal.name} — Software Engineer`}
                width={400}
                height={500}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                className={`profile-portrait h-full w-full transition-opacity duration-700 ${
                  loaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-slate-100 p-6 text-center dark:bg-slate-800">
                <span className="text-4xl font-bold text-blue-500">PB</span>
                <p className="text-xs text-slate-500">Add photo to public/images/profile.jpg</p>
              </div>
            )}
            {!loaded && !error && (
              <div className="absolute inset-0 animate-pulse bg-slate-200/80 dark:bg-slate-700/80" aria-hidden />
            )}
          </div>

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent dark:from-slate-950/35"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5"
            aria-hidden
          />
        </div>

        {/* Corner accents */}
        <span className="absolute -left-1 -top-1 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-blue-500/40" aria-hidden />
        <span className="absolute -bottom-1 -right-1 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-teal-400/40" aria-hidden />
      </motion.div>

      {/* Status badge */}
      <motion.div
        className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 sm:-bottom-5"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-xs font-medium tracking-wide text-slate-700 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md dark:border-slate-600/80 dark:bg-slate-900/90 dark:text-slate-200">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available · June 2026
        </span>
      </motion.div>
    </motion.div>
  );
}
