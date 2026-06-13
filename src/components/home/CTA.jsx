import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import Container from "../common/Container";
import Button from "../common/Button";

/**
 * Closing call-to-action band, reused on Home and other pages.
 */
export default function CTA({
  title = "Let's build something remarkable",
  subtitle = "Tell us about your project. We reply to every serious inquiry within one business day.",
}) {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" />

          <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl md:text-5xl">
            {title.split("remarkable")[0]}
            <span className="grad-text">remarkable</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-light text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <Button to="/contact-us" size="lg">
              Start a project <ArrowRight size={16} />
            </Button>
            <Button to="/projects" variant="ghost" size="lg">
              See our work
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
