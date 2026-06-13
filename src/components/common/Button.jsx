import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/helpers";

const VARIANTS = {
  primary:
    "bg-brand-400 text-ink-950 shadow-glow hover:shadow-glow-lg hover:brightness-105",
  ghost:
    "border border-brand-500/40 text-ink-900 hover:border-brand-400 hover:bg-paper-200 dark:text-paper-100 dark:hover:bg-ink-800",
  outline:
    "border border-black/15 text-ink-900 hover:border-brand-400 dark:border-white/15 dark:text-paper-100",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-3.5 text-base",
};

/**
 * Reusable button. Renders as a router <Link> when `to` is set, an <a> when
 * `href` is set, otherwise a <button>. Hover-lift / press feedback is done in
 * CSS (no framer-motion HOC), so refs forward cleanly to the DOM element.
 */
const Button = forwardRef(function Button(
  { variant = "primary", size = "md", to, href, className, children, ...rest },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-sans font-semibold",
    "transition-[transform,box-shadow,background,color,filter] duration-300",
    "hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});

export default Button;