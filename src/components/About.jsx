import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import {
  aboutFocusAreas,
  aboutHighlights,
  aboutSummary,
  bio,
  careerObjective,
} from '../data/portfolioData';

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <SectionWrapper id="about" className="about-section">
      <SectionHeader
        label="About"
        title="Engineering profile"
        description={aboutSummary}
      />

      {/* Recruiter quick-scan metrics */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
      >
        {aboutHighlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
            className="about-highlight-card"
          >
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-900 dark:text-slate-100">
              {item.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Main bio — concise paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="about-bio-card"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
            Professional summary
          </h3>
          <div className="mt-5 space-y-4">
            {bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-[0.9375rem] leading-[1.75] text-slate-600 dark:text-slate-400"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-200/80 pt-6 dark:border-slate-700/80">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              Technical focus
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {aboutFocusAreas.map((area) => (
                <li key={area} className="about-focus-item">
                  <FiCheckCircle size={14} className="shrink-0 text-teal-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Career goal — short & direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18, ease }}
          className="about-objective-card"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400">
            <FiTarget size={20} />
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">Career objective</h3>
          <p className="mt-4 text-sm leading-[1.7] text-slate-600 dark:text-slate-400">
            {careerObjective}
          </p>

          <div className="mt-8 rounded-xl border border-blue-200/50 bg-blue-50/50 p-4 dark:border-blue-900/40 dark:bg-blue-500/5">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              Open to roles
            </p>
            <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
              Software Engineer · Frontend Developer · Full Stack Developer · GET / Analyst
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Internship + full-time · Bengaluru · Relocation OK · On-site / hybrid / remote
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
