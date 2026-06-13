import { motion } from "framer-motion";
import { TIMELINE } from "../utils/constants";
import { getLeadership } from "../data/team";
import { fadeLeft, fadeRight } from "../utils/animations";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import SectionHeading from "../components/common/SectionHeading";
import Container from "../components/common/Container";
import Timeline from "../components/common/Timeline";
import ValuesGrid from "../components/about/ValuesGrid";
import StatsBand from "../components/about/StatsBand";
import TeamGrid from "../components/team/TeamGrid";
import CTA from "../components/home/CTA";

export default function About() {
  const timelineItems = TIMELINE.map((t) => ({
    label: t.year,
    title: t.title,
    description: t.text,
  }));

  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            About LawalX – Technology Consulting & Development {" "}
            <span className="grad-text">Agency</span>
          </>
        }
        subtitle="LawalX is a modern designer in Lagos and across Nigeria dedicated to helping businesses and startups establish a powerful digital presence. We blend creativity, code, and strategy to deliver websites that convert. We are one of the top 3 in web development in nigeria."
      />

      {/* Mission & Vision */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl">Our mission</h3>
              <p className="mt-4 leading-relaxed text-neutral-500 dark:text-neutral-400">
                We create powerful, user-friendly, and innovative digital
                solutions that help businesses succeed online.
              </p>
            </motion.div>
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl">Our vision</h3>
              <p className="mt-4 leading-relaxed text-neutral-500 dark:text-neutral-400">
                To be a global leader in web solutions, empowering businesses
                with technology that drives growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16">
        <Container>
          <StatsBand />
        </Container>
      </section>

      {/* Values */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Values that <span className="grad-text">guide us</span>
              </>
            }
            className="mb-12"
          />
          <ValuesGrid />
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="The journey"
            title={
              <>
                A decade of <span className="grad-text">shipping</span>
              </>
            }
            className="mb-12"
          />
          <Timeline items={timelineItems} />
        </Container>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                The people <span className="grad-text">in charge</span>
              </>
            }
            align="center"
            className="mb-12"
          />
          <TeamGrid members={getLeadership()} />
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
