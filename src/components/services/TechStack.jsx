import { motion } from "framer-motion";
import { TECH_STACK } from "../../utils/constants";
import { staggerContainer, staggerItem } from "../../utils/animations";

/**
 * Grid of hoverable technology badges.
 */
export default function TechStack() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {TECH_STACK.map((tech) => (
        <motion.div
          key={tech.name}
          variants={staggerItem}
          whileHover={{ y: -5 }}
          className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white/70 px-5 py-4 transition-colors hover:border-brand-400 hover:shadow-glow dark:border-white/10 dark:bg-ink-800/60"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-paper-200 font-mono text-sm font-semibold text-brand-600 dark:bg-ink-700 dark:text-brand-400">
            {tech.short}
          </span>
          <span className="text-[15px] font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
