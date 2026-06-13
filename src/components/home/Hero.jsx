import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import StatCounter from "../common/StatCounter";
import {
  fadeUp,
  fadeRight,
  staggerContainer,
  staggerItem,
} from "../../utils/animations";

const CODE_LINES = [
  [["text-brand-400", "const"], ["text-neutral-400", " agency "], ["text-neutral-400", "= "], ["text-violet-300", "build"], ["text-neutral-400", "({"]],
  [["text-neutral-400", "  craft: "], ["text-emerald-300", "'pixel-perfect'"], ["text-neutral-400", ","]],
  [["text-neutral-400", "  speed: "], ["text-emerald-300", "'ludicrous'"], ["text-neutral-400", ","]],
  [["text-neutral-400", "  scale: "], ["text-brand-400", "Infinity"]],
  [["text-neutral-400", "});"]],
  [["text-violet-300", "ship"], ["text-neutral-400", "(agency)"], ["text-neutral-400", ";"]],
];

function HeroVisual() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= CODE_LINES.length) {
      const t = setTimeout(() => setShown(0), 2600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown((s) => s + 1), 520);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="relative grid place-items-center">
      {/* Orbits (smaller on mobile to avoid overflow) */}
      <div className="absolute h-[280px] w-[280px] animate-spinslow rounded-full border border-dashed border-brand-500/25 [animation-duration:30s] sm:h-[420px] sm:w-[420px]">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_14px_#68e5e0]" />
      </div>
      <div className="absolute h-[200px] w-[200px] animate-spinslow rounded-full border border-dashed border-brand-500/20 [animation-direction:reverse] [animation-duration:18s] sm:h-[300px] sm:w-[300px]">
        <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-500 shadow-[0_0_14px_#34c8c2]" />
      </div>

      {/* Code panel */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white shadow-glow-lg dark:border-white/10 dark:bg-[#0d0f13]"
      >
        <div className="flex items-center gap-2 border-b border-black/10 px-4 py-3.5 dark:border-white/10">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-neutral-500">
            ~/nebufy/deploy.ts
          </span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-[1.85]">
          {CODE_LINES.slice(0, shown).map((line, i) => (
            <span key={i} className="block whitespace-pre">
              {line.map(([cls, txt], j) => (
                <span key={j} className={cls}>
                  {txt}
                </span>
              ))}
              {i === shown - 1 && shown < CODE_LINES.length && (
                <span className="ml-0.5 inline-block h-3.5 w-2 animate-blink bg-brand-400 align-middle" />
              )}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Floating chips (hidden on the smallest screens to avoid clutter) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="glass absolute -right-3 -top-4 z-20 hidden rounded-2xl px-4 py-3 sm:block"
      >
        <div className="font-mono text-[11px] text-neutral-500">BUILD TIME</div>
        <div className="font-display text-xl font-extrabold">
          0.4<span className="accent-text">s</span>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="glass absolute -bottom-4 -left-4 z-20 hidden rounded-2xl px-4 py-3 sm:block"
      >
        <div className="font-mono text-[11px] text-neutral-500">UPTIME</div>
        <div className="font-display text-xl font-extrabold">
          99.9<span className="accent-text">%</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pb-24 pt-36 sm:pt-40">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
          

            <motion.h1
              variants={fadeUp}
              className="text-5xl leading-[1.02] sm:text-6xl lg:text-[5rem]"
            >
              We Ceate{" "}
              <span className="grad-text">web solutions</span> that grows business
              
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mb-9 mt-6 max-w-xl text-lg font-light leading-relaxed text-neutral-500 dark:text-neutral-400"
            >
              A senior collective of engineers and designers building fast,
              beautiful, scalable software for startups and enterprises alike.
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-3.5">
              <Button to="/contact-us" size="lg">
                Start a project <ArrowRight size={16} />
              </Button>
              <Button to="/projects" variant="ghost" size="lg">
                View our work
              </Button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-14 flex gap-11">
              <StatCounter value={35} suffix="+" label="Projects shipped" />
              <StatCounter value={13} suffix="%" label="Client retention" />
              <StatCounter value={10} suffix="y" label="Avg. seniority" />
            </motion.div>
          </motion.div>

          {/* Visual — now visible on mobile, stacked under the copy */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex min-h-[360px] items-center justify-center overflow-hidden px-2 sm:min-h-[440px] lg:min-h-[460px] lg:overflow-visible"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}