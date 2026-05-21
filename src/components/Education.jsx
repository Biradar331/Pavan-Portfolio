import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import { education } from '../data/portfolioData';

export default function Education() {
  const { degree, puc, tenth } = education;

  return (
    <SectionWrapper id="education" className="bg-slate-100/50 dark:bg-slate-900/30">
      <SectionHeader
        label="Education"
        title="Academic background"
        description="Strong academic foundation with coursework aligned to software engineering roles."
      />

      <div className="mb-8 card border-l-4 border-l-blue-500">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{degree.title}</h3>
            <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">{degree.branch}</p>
            <p className="text-slate-600 dark:text-slate-400">{degree.college}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{degree.duration}</p>
            <p className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">CGPA: {degree.cgpa}</p>
            <p className="text-xs text-slate-500">Graduation: {degree.graduation}</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Relevant coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {degree.coursework.map((course) => (
              <span
                key={course}
                className="rounded-lg bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold text-slate-900 dark:text-white">12th / PUC</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{puc.board}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{puc.college}</p>
          <p className="mt-2 text-sm">
            Stream: <span className="font-medium">{puc.stream}</span> · {puc.year}
          </p>
          <p className="mt-1 font-bold text-blue-600">{puc.percentage}</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-slate-900 dark:text-white">10th (SSLC)</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tenth.board}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{tenth.school}</p>
          <p className="mt-2 text-sm">Year: {tenth.year}</p>
          <p className="mt-1 font-bold text-blue-600">{tenth.percentage}</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
