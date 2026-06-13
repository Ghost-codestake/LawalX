import { useEffect, useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { cn } from "../../utils/helpers";

/**
 * Count-up number that animates once it scrolls into view.
 */
export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 1800,
  className,
  numberClassName,
}) {
  const [ref, inView] = useScrollAnimation({ threshold: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const rendered = value % 1 !== 0 ? display.toFixed(1) : Math.round(display);

  return (
    <div ref={ref} className={cn("", className)}>
      <div
        className={cn(
          "font-display text-4xl font-extrabold leading-none sm:text-5xl",
          numberClassName
        )}
      >
        {rendered}
        <span className="accent-text">{suffix}</span>
      </div>
      {label && (
        <div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {label}
        </div>
      )}
    </div>
  );
}
