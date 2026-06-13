import { motion } from "framer-motion";
import { VALUES } from "../../utils/constants";
import { staggerContainer, staggerItem } from "../../utils/animations";

/**
 * Company values grid with subtle numbered cards.
 */
export default function ValuesGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-6 sm:grid-cols-2"
    >
      {VALUES.map((value, i) => (
        <motion.div
          key={value.title}
          variants={staggerItem}
          className="glass rounded-2xl p-7"
        >
          <span className="font-mono text-sm accent-text">
            0{i + 1}
          </span>
          <h3 className="mt-3 text-xl">{value.title}</h3>
          <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
            {value.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
