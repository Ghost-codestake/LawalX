import { cn } from "../../utils/helpers";

/**
 * Centered, max-width content wrapper with responsive horizontal padding.
 */
export default function Container({ as: Tag = "div", className, children, ...rest }) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)} {...rest}>
      {children}
    </Tag>
  );
}
