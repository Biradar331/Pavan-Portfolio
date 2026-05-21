import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import ExperienceTimelineItem from './ExperienceTimelineItem';
import { internships } from '../data/portfolioData';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="experience-section">
      <SectionHeader
        label="Experience"
        title="Internship timeline"
        description="Hands-on industry exposure in cloud and full-stack development — with measurable outcomes for recruiter review."
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-4 py-2 text-sm text-slate-600 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400"
      >
        <span className="font-semibold text-slate-900 dark:text-white">{internships.length}</span>
        internships completed
      </motion.div>

      <ol className="experience-timeline relative mt-10 w-full max-w-3xl sm:mt-12">
        {internships.map((job, index) => (
          <ExperienceTimelineItem
            key={job.id}
            job={job}
            index={index}
            isLast={index === internships.length - 1}
          />
        ))}
      </ol>
    </SectionWrapper>
  );
}
