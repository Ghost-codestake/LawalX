import { motion } from "framer-motion";
import { staggerContainer, fadeRight } from "../../utils/animations";

/**
 * Reusable vertical timeline. Each item: { label, title, description }.
 * `label` is shown inside the node (a number for process steps, a year
 * for the company timeline).
 */
export default function Timeline({ items = [] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative max-w-3xl"
    >
      {/* Connecting line */}
      <span className="absolute bottom-3 left-8 top-3 w-px bg-gradient-to-b from-brand-400 to-transparent" />

      {items.map((item, i) => (
        <motion.div
          key={item.title + i}
          variants={fadeRight}
          className="group relative mb-6 flex items-start gap-6 last:mb-0"
        >
          <div className="relative z-10 grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl border border-brand-500/30 bg-paper-50 font-display text-lg font-extrabold accent-text transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow dark:bg-ink-850">
            {item.label}
          </div>
          <div className="glass flex-1 rounded-2xl px-6 py-5">
            <h3 className="text-lg">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
