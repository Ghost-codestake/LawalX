import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { slidePanel, staggerContainer, staggerItem } from "../../utils/animations";
import { cn } from "../../utils/helpers";
import Logo from "./Logo";
import Button from "../common/Button";

/**
 * Full-height slide-in navigation with a blurred backdrop.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink-950/40 backdrop-blur-sm lg:hidden"
          />

          {/* Panel */}
          <motion.aside
            variants={slidePanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[70] flex w-[82%] max-w-sm flex-col gap-8 border-l border-black/10 bg-paper-50 p-7 dark:border-white/10 dark:bg-ink-900 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Logo onClick={onClose} />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 dark:border-white/10"
              >
                <X size={18} />
              </button>
            </div>

            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => (
                <motion.div key={link.path} variants={staggerItem}>
                  <NavLink
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-xl px-4 py-3 font-display text-2xl font-bold transition-colors",
                        isActive
                          ? "accent-text"
                          : "text-ink-900 hover:accent-text dark:text-paper-100"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            <Button to="/contact" onClick={onClose} className="mt-auto w-full">
              Start a project <ArrowRight size={16} />
            </Button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
