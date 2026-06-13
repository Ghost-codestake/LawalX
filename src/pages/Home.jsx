import PageWrapper from "../components/common/PageWrapper";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Hero from "../components/home/Hero";
import TrustedBy from "../components/home/TrustedBy";
import ServicesPreview from "../components/home/ServicesPreview";
import ProcessPreview from "../components/home/ProcessPreview";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/contact/FAQ";
import CTA from "../components/home/CTA";
import AboutLawal from "../components/about/AboutLawal";

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <AboutLawal />
      <ProcessPreview />
      <ProjectsPreview />
      <Testimonials />

      {/* FAQ */}
      <section className="py-24">
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