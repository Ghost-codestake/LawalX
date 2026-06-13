import { motion } from "framer-motion";
import { pageTransition } from "../../utils/animations";

/**
 * Wraps a page so it animates in on mount. The persistent MainLayout
 * (navbar/footer/background) does not remount between routes, keeping
 * transitions fast and flicker-free.
 */
export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
    >
      {children}
    </motion.div>
  );
}
