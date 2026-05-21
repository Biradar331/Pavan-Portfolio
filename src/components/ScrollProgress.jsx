import { memo } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

function ScrollProgress() {
  const progress = useScrollProgress();
  const spring = useSpring(progress, { stiffness: 140, damping: 30, mass: 0.15 });
  const width = useTransform(spring, (v) => `${v * 100}%`);

  return (
    <div className="scroll-progress-track" aria-hidden>
      <motion.div className="scroll-progress-bar" style={{ width }} />
    </div>
  );
}

export default memo(ScrollProgress);
