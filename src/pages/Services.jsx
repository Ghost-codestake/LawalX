import { motion } from "framer-motion";
import { services } from "../data/services";
import { PROCESS_STEPS } from "../utils/constants";
import { staggerContainer } from "../utils/animations";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Timeline from "../components/common/Timeline";
import ServiceCard from "../components/services/ServiceCard";
import TechStack from "../components/services/TechStack";
import CTA from "../components/home/CTA";

export default function Services() {
  const processItems = PROCESS_STEPS.map((step, i) => ({
    label: String(i + 1).padStart(2, "0"),
    title: step.title,
    description: step.description,
  }));

  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Everything you need to <span className="grad-text">ship</span>
          </>
        }
        subtitle="From strategy and design through development, cloud and AI — one senior team, end to end."
      />

      {/* All services */}
      <section className="py-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} detailed />
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Our toolkit"
            title={
              <>
                Battle-tested <span className="grad-text">technology</span>
              </>
            }
            align="center"
            className="mb-12"
          />
          <TechStack />
        </Container>
      </section>

      {/* Process */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Our development <span className="grad-text">process</span>
              </>
            }
            className="mb-12"
          />
          <Timeline items={processItems} />
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
