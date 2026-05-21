import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { applyingFor, education, personal, profiles } from '../data/portfolioData';
import ProfileImage from './ProfileImage';

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const recruiterHighlights = [
  { label: 'CGPA', value: education.degree.cgpa },
  { label: 'Graduation', value: 'June 2026' },
  { label: 'LeetCode', value: '50+ problems' },
  { label: 'Location', value: 'Bengaluru' },
];

const techPills = personal.subtitle.split('·').map((s) => s.trim());

const socialLinks = [
  { href: profiles.github, label: 'GitHub', icon: FiGithub },
  { href: profiles.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  { href: profiles.leetcode, label: 'LeetCode', icon: SiLeetcode },
  { href: `mailto:${personal.email}`, label: 'Email', icon: FiMail },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative flex min-h-[100dvh] min-h-screen items-center overflow-x-clip pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-mesh absolute inset-0 opacity-[0.4] dark:opacity-[0.25]" />
        <div className="hero-orb hero-orb-blue absolute" />
        <div className="hero-orb hero-orb-teal absolute" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/60 to-transparent dark:via-slate-700/60" />
      </div>

      <div className="section-container relative w-full">
        <div className="grid w-full min-w-0 items-center gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20 xl:gap-24">
          {/* Copy — recruiter-first */}
          <motion.div
            className="order-2 mx-auto max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/[0.06] px-4 py-1.5 text-[0.8125rem] font-medium tracking-wide text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                Software Engineer · Open to hire
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="hero-title mt-6 break-words text-[clamp(2rem,8vw,2.5rem)] font-bold tracking-[-0.03em] text-slate-900 dark:text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            >
              {personal.name.split(' ')[0]}{' '}
              <span className="gradient-text">{personal.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-xl font-medium tracking-tight text-slate-700 dark:text-slate-200 sm:text-2xl"
            >
              {personal.title}
            </motion.p>

            <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
              {techPills.map((tech) => (
                <span key={tech} className="hero-tech-pill">
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-6 max-w-lg text-base leading-[1.75] text-slate-600 dark:text-slate-400 sm:text-[1.0625rem] lg:mx-0"
            >
              Final-year <span className="font-medium text-slate-800 dark:text-slate-200">ETE</span> student
              at BIT Bengaluru building web apps, cloud systems, and ML projects.{' '}
              <span className="text-slate-500 dark:text-slate-500">{applyingFor}</span>
            </motion.p>

            {/* Recruiter scan row */}
            <motion.div
              variants={item}
              className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
            >
              {recruiterHighlights.map(({ label, value }) => (
                <div key={label} className="hero-stat-card">
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-500">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs — resume first for recruiters */}
            <motion.div
              variants={item}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <a href={personal.resumePath} download className="hero-btn-primary group">
                <FiDownload size={18} className="transition group-hover:scale-105" />
                Download Resume
              </a>
              <a href="#projects" className="hero-btn-secondary group">
                View Projects
                <FiArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="hero-social-link group"
                >
                  <Icon size={17} className="text-slate-500 transition group-hover:text-blue-500 dark:text-slate-400 dark:group-hover:text-teal-400" />
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile */}
          <motion.div
            className="order-1 flex w-full min-w-0 justify-center px-2 sm:px-0 lg:order-2 lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <ProfileImage className="lg:mr-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
