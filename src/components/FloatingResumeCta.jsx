import { memo } from 'react';
import { FiDownload } from 'react-icons/fi';
import { personal } from '../data/portfolioData';

function FloatingResumeCta() {
  return (
    <a
      href={personal.resumePath}
      download
      className="floating-resume-cta md:hidden"
      aria-label="Download resume"
    >
      <FiDownload size={20} />
      <span>Resume</span>
    </a>
  );
}

export default memo(FloatingResumeCta);
