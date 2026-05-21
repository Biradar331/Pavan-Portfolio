import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import SkillCategoryCard from './SkillCategoryCard';
import { skillCategories, softSkills } from '../data/portfolioData';

const coreStack = ['Python', 'React.js', 'AWS', 'MySQL'];

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="skills-section">
      <SectionHeader
        label="Skills"
        title="Technical stack"
        description="Categorized by domain for quick scanning — aligned with software engineering, cloud, and AI-assisted development roles."
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Core stack
        </span>
        {coreStack.map((tech) => (
          <span key={tech} className="skills-core-pill">
            {tech}
          </span>
        ))}
      </motion.div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={category.variant === 'detailed' ? 'sm:col-span-2 lg:col-span-3' : ''}
          >
            <SkillCategoryCard category={category} index={index} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="skills-soft-panel mt-10"
      >
        <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-teal-600 dark:text-teal-400">
          Soft skills
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span key={skill} className="skills-soft-tag">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
