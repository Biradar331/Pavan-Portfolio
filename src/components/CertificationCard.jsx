import { motion } from 'framer-motion';
import { FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi';
import CertificationLogo from './CertificationLogo';

const statusConfig = {
  completed: {
    label: 'Completed',
    icon: FiCheckCircle,
    className: 'cert-status-completed',
  },
  'in-progress': {
    label: 'In progress',
    icon: FiClock,
    className: 'cert-status-progress',
  },
};

export default function CertificationCard({ cert, index = 0 }) {
  const status = statusConfig[cert.status] || statusConfig.completed;
  const StatusIcon = status.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-32px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="cert-card-wrapper group"
    >
      <div className="cert-card-glow" aria-hidden />
      <div className="cert-card">
        <div className="flex items-start justify-between gap-4">
          <CertificationLogo logo={cert.logo} />
          <span className={`cert-status-badge ${status.className}`}>
            <StatusIcon size={12} />
            {status.label}
          </span>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-600 dark:text-blue-400">
            {cert.issuer}
          </p>
          <h3 className="mt-1.5 text-lg font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {cert.title}
          </h3>
          {cert.provider && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-500">{cert.provider}</p>
          )}
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
          <FiCalendar size={13} className="shrink-0 text-slate-400" />
          <time>{cert.issueDate}</time>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {cert.description}
        </p>

        {cert.credentialId && (
          <p className="mt-3 font-mono text-[0.6875rem] text-slate-400 dark:text-slate-500">
            ID: {cert.credentialId}
          </p>
        )}

        {cert.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200/70 pt-4 dark:border-slate-700/70">
            {cert.tags.map((tag) => (
              <span key={tag} className="cert-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
