import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import { staggerContainer } from "../../utils/animations";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ServiceCard from "../services/ServiceCard";

/**
 * Home preview: the first three services with a link to the full page.
 */
export default function ServicesPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Capabilities across the <span className="grad-text">full stack</span>
              </>
            }
          />
          <Button to="/services" variant="ghost">
            All services <ArrowRight size={16} />
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
