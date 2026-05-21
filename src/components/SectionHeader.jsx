import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, description, className = '' }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`section-header ${className}`}
    >
      {label && <p className="section-title">{label}</p>}
      {title && <h2 className="section-heading">{title}</h2>}
      {description && (
        <p className="section-description">{description}</p>
      )}
    </motion.header>
  );
}
