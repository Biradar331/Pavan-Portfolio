import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '', divider = true }) {
  return (
    <section
      id={id}
      className={`section-block relative scroll-mt-20 sm:scroll-mt-24 ${className}`}
    >
      {divider && <div className="section-divider" aria-hidden />}
      <motion.div
        className="section-container relative w-full max-w-full"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
