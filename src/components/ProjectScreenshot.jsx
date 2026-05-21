import { memo, useState } from 'react';

const placeholders = {
  hmer: { icon: '∑', label: 'HMER · Deep Learning', gradient: 'from-blue-600/25 via-indigo-500/15 to-teal-500/20' },
  'meal-buddy': { icon: '🍔', label: 'Meal Buddy · Live App', gradient: 'from-orange-500/20 via-amber-500/10 to-blue-500/20' },
  'gesture-vehicle': { icon: '⚡', label: 'IoT · Research', gradient: 'from-teal-600/20 via-blue-600/15 to-slate-600/15' },
};

function ProjectScreenshot({ project, featured = false }) {
  const [hasImage, setHasImage] = useState(true);
  const src = `/images/projects/${project.imageFolder}/cover.jpg`;
  const placeholder = placeholders[project.id] || placeholders.hmer;

  return (
    <div
      className={`project-screenshot relative overflow-hidden bg-slate-100 dark:bg-slate-800/80 ${
        featured ? 'min-h-[220px] lg:min-h-full lg:h-full' : 'aspect-[16/10]'
      }`}
    >
      {hasImage ? (
        <>
          <img
            src={src}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            className="project-screenshot-img h-full w-full object-cover"
            onError={() => setHasImage(false)}
          />
          <div className="project-screenshot-overlay" aria-hidden />
          <div className="project-screenshot-shine" aria-hidden />
        </>
      ) : (
        <div
          className={`flex h-full min-h-[200px] flex-col items-center justify-center bg-gradient-to-br ${placeholder.gradient} p-8`}
        >
          <span className="text-5xl opacity-75" aria-hidden>
            {placeholder.icon}
          </span>
          <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-400">{placeholder.label}</p>
          <p className="mt-2 max-w-[200px] text-center text-xs text-slate-500">
            Add screenshot: public/images/projects/{project.imageFolder}/cover.jpg
          </p>
        </div>
      )}
    </div>
  );
}

export default memo(ProjectScreenshot);
