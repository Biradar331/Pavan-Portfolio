import { personal } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p>
          Built with React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
