import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiExternalLink,
  FiGithub,
  FiChevronDown,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';
import ProjectScreenshot from './ProjectScreenshot';

function ProjectCard({ project, featured = false, index = 0 }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`project-card group ${featured ? 'project-card-featured' : ''}`}
    >
      <div
        className={
          featured
            ? 'grid overflow-hidden lg:grid-cols-[1.08fr_0.92fr]'
            : 'flex flex-col overflow-hidden'
        }
      >
        <div className={featured ? 'relative min-h-[220px] lg:min-h-[340px]' : 'relative'}>
          <ProjectScreenshot project={project} featured={featured} />
          <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
            <span className="project-category-badge">{project.category}</span>
            {project.liveDemo && <span className="project-live-badge">Live</span>}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
          <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
            {project.title}
          </h3>

          {project.note && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <FiZap size={12} />
              {project.note}
            </p>
          )}

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.summary}
          </p>

          {project.impact?.length > 0 && (
            <div className="project-impact-box mt-5">
              <p className="mb-2.5 flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-blue-600 dark:text-blue-400">
                <FiTrendingUp size={12} />
                Impact & complexity
              </p>
              <ul className="space-y-2">
                {project.impact.map((line) => (
                  <li key={line} className="project-impact-line">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5">
            <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-slate-500">
              Tech stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-actions mt-6">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn project-btn-github"
              >
                <FiGithub size={16} />
                View Code
              </a>
            ) : (
              <span className="project-btn project-btn-disabled">
                <FiGithub size={16} />
                Code N/A
              </span>
            )}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="project-btn project-btn-demo"
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            ) : null}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="project-btn project-btn-ghost"
              aria-expanded={expanded}
            >
              {expanded ? 'Less' : 'Details'}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="inline-flex">
                <FiChevronDown size={16} />
              </motion.span>
            </button>
          </div>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="details"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="border-t border-slate-200/80 pt-6 dark:border-slate-700/80">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="project-detail-panel">
                      <h4 className="project-detail-title project-detail-title-blue">Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((f) => (
                          <li key={f} className="project-detail-li">
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="project-detail-panel">
                      <h4 className="project-detail-title project-detail-title-teal">Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((c) => (
                          <li key={c} className="project-detail-li">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export default memo(ProjectCard);
