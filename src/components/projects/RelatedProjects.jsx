import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";
import { useWindowSize } from "../../hooks/useWindowSize";
import { cn } from "../../utils/helpers";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "./ProjectCard";

const AUTOPLAY_MS = 3500;

/**
 * "Get insights on our other projects" — an auto-playing carousel that shows
 * 3 cards at once on desktop (2 on tablet, 1 on mobile). Advances one card at
 * a time, loops back to the start, and pauses on hover. Arrows + dots give
 * manual control.
 */
export default function RelatedProjects({ currentId }) {
  const others = projects.filter((p) => p.id !== currentId);

  const { width } = useWindowSize();
  const perView = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
  const maxIndex = Math.max(0, others.length - perView);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep the index valid when the viewport (perView) changes.
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  // Autoplay.
  useEffect(() => {
    if (paused || others.length <= perView) return undefined;
    const id = setInterval(
      () => setIndex((i) => (i >= maxIndex ? 0 : i + 1)),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused, perView, maxIndex, others.length]);

  if (others.length === 0) return null;

  const navBtn =
    "grid h-11 w-11 place-items-center rounded-xl border border-black/10 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:hover:text-brand-400";

  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="More work"
            title={
              <>
                Get insights on our{" "}
                <span className="grad-text">other projects</span>
              </>
            }
          />
          <div className="hidden gap-2.5 sm:flex">
            <button onClick={prev} aria-label="Previous" className={navBtn}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Next" className={navBtn}>
              <ChevronRight size={18} />
            </button>
          </div>
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
            {others.map((project) => (
              <div
                key={project.id}
                className="shrink-0 px-3"
                style={{ flexBasis: `${100 / perView}%`, maxWidth: `${100 / perView}%` }}
              >
                <ProjectCard project={project} />
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
      </Container>
    </section>
  );
}