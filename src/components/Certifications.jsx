import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import CertificationCard from './CertificationCard';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  const completed = certifications.filter((c) => c.status === 'completed').length;
  const inProgress = certifications.filter((c) => c.status === 'in-progress').length;

  return (
    <SectionWrapper id="certifications" className="certifications-section">
      <SectionHeader
        label="Certifications"
        title="Credentials & learning"
        description="Industry certifications, cloud training, coursework, and research recognition — structured for quick recruiter verification."
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.06 }}
        className="mt-8 flex flex-wrap gap-3"
      >
        <span className="cert-summary-pill">
          <strong className="text-slate-900 dark:text-white">{certifications.length}</strong> credentials
        </span>
        <span className="cert-summary-pill">
          <strong className="text-emerald-600 dark:text-emerald-400">{completed}</strong> completed
        </span>
        {inProgress > 0 && (
          <span className="cert-summary-pill">
            <strong className="text-amber-600 dark:text-amber-400">{inProgress}</strong> in progress
          </span>
        )}
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
