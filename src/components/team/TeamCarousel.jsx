import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { cn } from "../../utils/helpers";
import TeamCard from "./TeamCard";

const AUTOPLAY_MS = 3500;

/**
 * Auto-playing team carousel — 3 cards on desktop, 2 on tablet, 1 on mobile.
 * Advances one card at a time, loops, and pauses on hover. Arrows + dots give
 * manual control. (Same behaviour as the projects carousel.)
 */
export default function TeamCarousel({ members = [], showSkills = false }) {
  const { width } = useWindowSize();
  const perView = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, members.length - perView);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    if (paused || members.length <= perView) return undefined;
    const id = setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, perView, maxIndex, members.length]);

  if (members.length === 0) return null;

  const navBtn =
    "grid h-11 w-11 place-items-center rounded-xl border border-black/10 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:hover:text-brand-400";

  return (
    <div>
      <div className="mb-8 flex justify-end gap-2.5">
        <button onClick={prev} aria-label="Previous" className={navBtn}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={next} aria-label="Next" className={navBtn}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Viewport */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {members.map((member) => (
            <div
              key={member.id}
              className="shrink-0 px-3"
              style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
            >
              <TeamCard member={member} showSkills={showSkills} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="mt-7 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === i ? "w-6 bg-brand-400" : "w-2 bg-brand-500/30"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}