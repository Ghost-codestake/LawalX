import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";
import Container from "./Container";

/**
 * Standard hero header for inner pages: eyebrow, title and subtitle,
 * with a consistent top offset to clear the fixed navbar.
 */
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pb-10 pt-36 sm:pt-40">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {eyebrow && (
            <motion.span
              variants={staggerItem}
              className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] accent-text"
            >
              <span className="h-px w-6 bg-brand-400" />
              {eyebrow}
            </motion.span>
          )}
          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-[1.04] sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-neutral-500 dark:text-neutral-400"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
