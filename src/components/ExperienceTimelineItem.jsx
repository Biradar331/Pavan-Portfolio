import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';

export default function ExperienceTimelineItem({ job, index = 0, isLast = false }) {
  return (
    <motion.li
      className="experience-timeline-item"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vertical connector */}
      {!isLast && <span className="experience-timeline-connector" aria-hidden />}

      {/* Timeline dot */}
      <div className="experience-timeline-dot" aria-hidden>
        <FiBriefcase size={14} className="text-white" strokeWidth={2.5} />
      </div>

      {/* Card */}
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="experience-card group"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="experience-type-badge">{job.type}</span>
              <span className="experience-focus-badge">{job.focus}</span>
            </div>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
              {job.role}
            </h3>
            <p className="mt-1 text-base font-semibold text-blue-600 dark:text-blue-400">
              {job.company}
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
              <FiMapPin size={14} className="shrink-0" />
              {job.location}
            </p>
          </div>
          <time className="experience-duration-badge shrink-0" dateTime={job.period}>
            {job.duration}
          </time>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {job.description}
        </p>

        {job.skills?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {job.skills.map((skill) => (
              <span key={skill} className="experience-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-5 dark:border-slate-700/80">
          {job.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" aria-hidden />
              {highlight}
            </li>
          ))}
        </ul>
      </motion.article>
    </motion.li>
  );
}
