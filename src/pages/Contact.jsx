import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../utils/animations";
import { SITE } from "../utils/constants";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import FAQ from "../components/contact/FAQ";
import CTA from "../components/home/CTA";

export default function Contact() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Get in touch"
        title={
          <>
            Let's build something <span className="grad-text">remarkable</span>
          </>
        }
        subtitle="Tell us about your project. We reply to every serious inquiry within one business day."
      />

      {/* Form + info */}
      <section className="py-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl">Office &amp; contact</h3>
              <p className="mb-8 mt-3 max-w-md text-neutral-500 dark:text-neutral-400">
                We're remote-first with a home base in San Francisco. Reach out
                however suits you — we read every message.
              </p>
              <ContactInfo />
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Things you might <span className="grad-text">ask</span>
              </>
            }
            align="center"
            className="mb-12"
          />
          <FAQ />
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
