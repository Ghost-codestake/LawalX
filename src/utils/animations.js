/**
 * Centralised Framer Motion variants.
 * Import these everywhere instead of re-declaring transitions.
 */

const EASE = [0.22, 0.7, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Container that staggers its children. */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Individual item used inside a staggerContainer. */
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Page-level transition used by route animations. */
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.3, ease: EASE } },
};

/** Common hover/tap presets for interactive elements. */
export const hoverLift = {
  whileHover: { y: -6, transition: { duration: 0.3, ease: EASE } },
  whileTap: { scale: 0.97 },
};

/** Slide-in panel (mobile menu). */
export const slidePanel = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring", stiffness: 260, damping: 30 } },
  exit: { x: "100%", transition: { duration: 0.3, ease: EASE } },
};
