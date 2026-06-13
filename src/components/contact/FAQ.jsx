import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "../../utils/constants";
import { cn } from "../../utils/helpers";

/**
 * Animated FAQ accordion. Single panel open at a time.
 */
export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3.5">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white/60 transition-colors dark:bg-ink-800/50",
              isOpen
                ? "border-brand-500/30"
                : "border-black/10 dark:border-white/10"
            )}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-bold sm:text-lg"
            >
              {faq.question}
              <Plus
                size={20}
                className={cn(
                  "flex-shrink-0 text-brand-500 transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
