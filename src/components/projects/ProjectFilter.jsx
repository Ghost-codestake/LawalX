import { motion } from "framer-motion";
import { cn } from "../../utils/helpers";

/**
 * Category filter pills with an animated active indicator.
 */
export default function ProjectFilter({ categories, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={cn(
              "relative rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-brand-400 text-ink-950"
                : "border-black/10 text-neutral-500 hover:border-brand-400 hover:text-ink-900 dark:border-white/10 dark:hover:text-paper-100"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 -z-10 rounded-xl bg-brand-400"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {cat}
          </button>
        );
      })}
    </div>
  );
}
