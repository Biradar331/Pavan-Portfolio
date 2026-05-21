import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { achievements, profiles } from '../data/portfolioData';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" className="achievements-section">
      <SectionHeader
        label="Achievements"
        title="Additional highlights"
        description="Coding practice, research recognition, and public profiles that support technical credibility."
      />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -3 }}
            className="achievement-card"
          >
            <FiAward className="shrink-0 text-blue-500" size={18} />
            <span className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item}</span>
          </motion.li>
        ))}
      </ul>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="profiles-card mt-8"
      >
        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">Verify online</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            { label: 'LeetCode', href: profiles.leetcode },
            { label: 'GitHub', href: profiles.github },
            { label: 'LinkedIn', href: profiles.linkedin },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="profile-link-btn">
              {label}
              <FiExternalLink size={14} />
            </a>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
