import { NavLink } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { cn } from "../../utils/helpers";
import Logo from "./Logo";
import Button from "../common/Button";

/**
 * Slide-in mobile navigation.
 *
 * Implemented as a pure CSS drawer (no AnimatePresence) so it can never get
 * "stuck open": when `open` is false the panel is translated off-screen, the
 * backdrop fades out, and the whole overlay is set to pointer-events-none so
 * it neither shows nor blocks clicks.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Panel */}
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col gap-8 border-l border-black/10 bg-paper-50 p-7 shadow-2xl transition-transform duration-300 ease-out dark:border-white/10 dark:bg-ink-900",
          open ? "translate-x-0" : "translate-x-full"
        )}
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

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
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
          ))}
        </nav>

        <Button to="/contact" onClick={onClose} className="mt-auto w-full">
          Start a project <ArrowRight size={16} />
        </Button>
      </aside>
    </div>
  );
}