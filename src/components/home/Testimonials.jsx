import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { getInitials, cn } from "../../utils/helpers";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

/**
 * Auto-advancing testimonial carousel with manual controls and dots.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Words from <span className="grad-text">our partners</span>
            </>
          }
          align="center"
          className="mb-12"
        />

        <div className="glass overflow-hidden rounded-3xl p-2">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="min-w-full p-8 sm:p-10">
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-brand-400 text-brand-400"
                    />
                  ))}
                </div>
                <p className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl font-display font-extrabold text-[#062322]"
                    style={{
                      background: `linear-gradient(150deg, ${t.gradient[0]}, ${t.gradient[1]})`,
                    }}
                  >
                    {getInitials(t.name)}
                  </span>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="mt-7 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:hover:text-brand-400"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === i ? "w-6 bg-brand-400" : "w-2 bg-brand-500/30"
                )}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:hover:text-brand-400"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </Container>
    </section>
  );
}
