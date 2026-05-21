import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

const featuredProject = projects.find((p) => p.featured) || projects[0];
const otherProjects = projects.filter((p) => p.id !== featuredProject.id);

export default function Projects() {
  const withDemo = projects.filter((p) => p.liveDemo).length;
  const withCode = projects.filter((p) => p.github).length;

  return (
    <SectionWrapper id="projects" className="projects-section" divider={false}>
      <div className="section-stack">
        <SectionHeader
          label="Projects"
          title="Proof of engineering work"
          description="Prioritized for recruiter review — live demos, code, and technical impact across ML, full-stack, and systems."
        />

        <div className="flex flex-wrap gap-3">
          <span className="projects-stat-pill">
            <strong>{projects.length}</strong> projects
          </span>
          <span className="projects-stat-pill">
            <strong>{withCode}</strong> with GitHub
          </span>
          <span className="projects-stat-pill">
            <strong>{withDemo}</strong> live demo
          </span>
        </div>

        <div className="space-y-8">
          <ProjectCard project={featuredProject} featured index={0} />
          <div className="grid gap-8 lg:grid-cols-2">
            {otherProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
