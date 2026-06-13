import { useState } from "react";
import { cn } from "../../utils/helpers";

/**
 * Renders an <img> with object-fit cover. If `src` is missing or fails to
 * load, it falls back to the project's brand gradient so the layout always
 * looks intentional — handy while real images are still being added.
 *
 * Drop images in `public/projects/<id>/...` and reference them as
 * "/projects/<id>/cover.jpg" in the data.
 */
export default function ImageWithFallback({
  src,
  alt = "",
  gradient,
  className,
  imgClassName,
}) {
  const [ok, setOk] = useState(Boolean(src));

  const style = gradient
    ? { background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})` }
    : undefined;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-paper-200 dark:bg-ink-800",
        className
      )}
      style={style}
    >
      {src && ok && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}