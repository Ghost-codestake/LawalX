import { TRUSTED_LOGOS } from "../../utils/constants";
import Container from "../common/Container";

/**
 * Infinite logo marquee. The track is duplicated so the CSS animation
 * (translateX -50%) loops seamlessly. Pauses on hover.
 */
export default function TrustedBy() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];

  return (
    <section className="py-10">
      <Container>
        <p className="mb-8 text-center font-mono text-xs uppercase tracking-[0.15em] text-neutral-500">
          Trusted by teams building the future
        </p>
        <div className="mask-fade-x group overflow-hidden">
          <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-bold text-neutral-400/60 transition-colors hover:text-brand-500"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
