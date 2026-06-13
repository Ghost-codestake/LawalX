import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center py-32">
      <Container className="text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Animated illustration: glitchy 404 with orbiting ring */}
          <motion.div variants={fadeUp} className="relative mx-auto mb-8 grid h-48 w-48 place-items-center">
            <div className="absolute h-48 w-48 animate-spinslow rounded-full border border-dashed border-brand-500/30">
              <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-400 shadow-[0_0_14px_#68e5e0]" />
            </div>
            <motion.span
              animate={{ scale: [1, 1.05, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-display text-7xl font-extrabold grad-text"
            >
              404
            </motion.span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl">
            This page drifted off the grid
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-4 max-w-md text-neutral-500 dark:text-neutral-400"
          >
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </motion.p>
          <motion.div variants={staggerItem} className="mt-8 flex justify-center">
            <Button to="/" size="lg">
              <Home size={16} /> Back home
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
