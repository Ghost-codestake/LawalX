import { useEffect, useRef, useState } from "react";

/**
 * Observe an element and report when it scrolls into view.
 * Designed to drive Framer Motion `animate` props and count-up effects.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.15]
 * @param {boolean} [options.once=true] Stop observing after first reveal.
 * @returns {[React.RefObject, boolean]} [ref, isInView]
 */
export function useScrollAnimation({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, isInView];
}

export default useScrollAnimation;
