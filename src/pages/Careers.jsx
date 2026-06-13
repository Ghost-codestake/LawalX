import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { OPEN_POSITIONS, BENEFITS } from "../utils/constants";
import { staggerContainer, staggerItem } from "../utils/animations";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function Careers() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Do the best work of <span className="grad-text">your life</span>
          </>
        }
        subtitle="Remote-first, senior-led and obsessed with craft. If that sounds like home, we'd love to meet you."
      />

      {/* Open positions */}
      <section className="py-12">
        <Container>
          <SectionHeading
            eyebrow="Open roles"
            title="We're hiring"
            className="mb-10"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3.5"
          >
            {OPEN_POSITIONS.map((role) => (
              <motion.div
                key={role.title}
                variants={staggerItem}
                whileHover={{ x: 6 }}
                className="glass group flex flex-col gap-3 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-lg">{role.title}</h3>
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {role.team} · {role.type} · {role.location}
                  </p>
                </div>
                <Button to="/contact" variant="ghost" size="sm">
                  Apply <ArrowUpRight size={15} />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Why join"
            title={
              <>
                Benefits &amp; <span className="grad-text">culture</span>
              </>
            }
            className="mb-12"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {BENEFITS.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="glass rounded-2xl p-7"
              >
                <h3 className="text-lg">{benefit.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </PageWrapper>
  );
}
