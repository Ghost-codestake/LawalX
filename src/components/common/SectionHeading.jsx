import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "../../utils/animations";
import { cn } from "../../utils/helpers";

/**
 * Standard section header: eyebrow label, title and optional subtitle.
 * Animates in on scroll.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}) {
  const centered = align === "center";
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn(
        "max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.span
          variants={staggerItem}
          className={cn(
            "mb-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] accent-text",
            centered && "justify-center"
          )}
        >
          <span className="h-px w-6 bg-brand-400" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl leading-[1.05] sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={staggerItem}
          className="mt-5 text-base font-light leading-relaxed text-neutral-500 dark:text-neutral-400"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
