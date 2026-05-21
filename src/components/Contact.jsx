import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { personal, profiles } from '../data/portfolioData';

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="contact-section">
      <SectionHeader
        label="Contact"
        title="Let's connect"
        description="Open to internship and full-time Software Engineer opportunities. Based in Bengaluru — flexible on relocation and work mode."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="contact-card mx-auto mt-10 max-w-2xl"
      >
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Graduating <strong className="text-slate-900 dark:text-white">June 2026</strong> ·
          Available for <strong className="text-slate-900 dark:text-white">campus & off-campus</strong>{' '}
          drives
        </p>

        <a href={`mailto:${personal.email}`} className="contact-email mt-6">
          <FiMail size={20} />
          {personal.email}
        </a>

        <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
          <FiMapPin size={15} />
          {personal.location} · {personal.relocation}
        </p>
        <p className="mt-1 text-center text-xs text-slate-500">{personal.workModes}</p>

        <div className="contact-cta-row mt-8">
          <a href={personal.resumePath} download className="hero-btn-primary flex-1 sm:flex-none">
            <FiDownload size={18} />
            Download Resume
          </a>
          <a
            href={profiles.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hero-btn-secondary flex-1 sm:flex-none"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-700/80">
          <a href={profiles.github} target="_blank" rel="noreferrer" className="contact-social" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={profiles.leetcode} target="_blank" rel="noreferrer" className="contact-social" aria-label="LeetCode">
            <SiLeetcode size={18} />
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
