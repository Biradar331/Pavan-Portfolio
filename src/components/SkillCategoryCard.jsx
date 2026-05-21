import { motion } from 'framer-motion';
import {
  FiCloud,
  FiCode,
  FiCpu,
  FiDatabase,
  FiLayout,
  FiServer,
  FiTool,
} from 'react-icons/fi';

const icons = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  cloud: FiCloud,
  database: FiDatabase,
  ai: FiCpu,
  tool: FiTool,
};

const accentStyles = {
  blue: {
    icon: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
    border: 'hover:border-blue-300/60 dark:hover:border-blue-500/30',
    tag: 'skill-tag-blue',
    glow: 'from-blue-500/8 to-transparent',
  },
  violet: {
    icon: 'bg-violet-500/10 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
    border: 'hover:border-violet-300/60 dark:hover:border-violet-500/30',
    tag: 'skill-tag-violet',
    glow: 'from-violet-500/8 to-transparent',
  },
  indigo: {
    icon: 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400',
    border: 'hover:border-indigo-300/60 dark:hover:border-indigo-500/30',
    tag: 'skill-tag-indigo',
    glow: 'from-indigo-500/8 to-transparent',
  },
  sky: {
    icon: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400',
    border: 'hover:border-sky-300/60 dark:hover:border-sky-500/30',
    tag: 'skill-tag-sky',
    glow: 'from-sky-500/8 to-transparent',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/15 dark:text-teal-400',
    border: 'hover:border-teal-300/60 dark:hover:border-teal-500/30',
    tag: 'skill-tag-teal',
    glow: 'from-teal-500/8 to-transparent',
  },
  purple: {
    icon: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400',
    border: 'hover:border-purple-300/60 dark:hover:border-purple-500/30',
    tag: 'skill-tag-purple',
    glow: 'from-purple-500/8 to-transparent',
  },
  slate: {
    icon: 'bg-slate-500/10 text-slate-600 dark:bg-slate-500/15 dark:text-slate-400',
    border: 'hover:border-slate-300/60 dark:hover:border-slate-500/30',
    tag: 'skill-tag-slate',
    glow: 'from-slate-500/8 to-transparent',
  },
};

export default function SkillCategoryCard({ category, index = 0 }) {
  const Icon = icons[category.icon] || FiCode;
  const accent = accentStyles[category.accent] || accentStyles.blue;
  const isDetailed = category.variant === 'detailed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-24px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`skill-category-card group h-full ${accent.border}`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent.glow} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
        aria-hidden
      />

      <div className="relative flex items-start gap-4">
        <div className={`skill-category-icon ${accent.icon}`}>
          <Icon size={22} strokeWidth={2} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            {category.title}
          </h3>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">
            {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
          </p>
        </div>
      </div>

      <div
        className={`relative mt-5 ${
          isDetailed ? 'grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-wrap gap-2'
        }`}
      >
        {isDetailed
          ? category.skills.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-slate-200/70 bg-slate-50/50 px-3.5 py-2.5 transition-colors group-hover:border-purple-200/60 dark:border-slate-700/60 dark:bg-slate-800/40 dark:group-hover:border-purple-500/20"
              >
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.name}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))
          : category.skills.map((skill) => (
              <span key={skill} className={`skill-tag ${accent.tag}`}>
                {skill}
              </span>
            ))}
      </div>
    </motion.div>
  );
}
