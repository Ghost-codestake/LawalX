import { useMemo } from "react";

/**
 * Fixed, layered atmospheric background: animated mesh blobs, a masked
 * grid, rising particles and slow-rotating geometric shapes. Pure CSS,
 * pointer-events disabled so it never blocks interaction.
 */
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        left: `${(i * 61) % 100}%`,
        size: 2 + (i % 3),
        duration: 16 + (i % 6) * 3,
        delay: (i % 8) * 1.7,
      })),
    []
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Mesh blobs */}
      <div className="absolute -left-[12vw] -top-[18vw] h-[60vw] w-[60vw] animate-meshmove rounded-full bg-[radial-gradient(circle,rgba(104,229,224,0.45),transparent_65%)] blur-3xl" />
      <div className="absolute -bottom-[20vw] -right-[12vw] h-[55vw] w-[55vw] animate-meshmove rounded-full bg-[radial-gradient(circle,rgba(52,200,194,0.4),transparent_60%)] blur-3xl [animation-duration:30s]" />
      <div className="absolute left-1/3 top-2/5 h-[42vw] w-[42vw] animate-meshmove rounded-full bg-[radial-gradient(circle,rgba(104,229,224,0.22),transparent_62%)] blur-3xl [animation-duration:34s]" />

      {/* Grid */}
      <div className="bg-grid absolute inset-0" />

      {/* Particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-brand-400 shadow-[0_0_12px_#68e5e0]"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animation: `floaty ${p.duration}s linear ${p.delay}s infinite`,
            opacity: 0.5,
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute right-[8%] top-[16%] h-24 w-24 animate-spinslow rounded-3xl border border-brand-500/25 [animation-duration:28s]" />
      <div className="absolute bottom-[20%] left-[6%] h-16 w-16 animate-spinslow border border-brand-500/25 [animation-duration:20s]" />
      <div className="absolute right-[16%] top-[55%] h-10 w-10 animate-floaty rounded-full border border-brand-500/25" />
    </div>
  );
}
