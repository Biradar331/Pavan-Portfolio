import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          aria-hidden={!show}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="page-loader-logo">
              PB<span className="text-blue-500">.</span>
            </div>
            <div className="page-loader-bar">
              <motion.span
                className="page-loader-bar-fill"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.65, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
