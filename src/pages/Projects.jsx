import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import ProjectGrid from "../components/projects/ProjectGrid";
import CTA from "../components/home/CTA";

export default function Projects() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Work we're <span className="grad-text">proud of</span>
          </>
        }
        subtitle="A selection of products we've designed, built and scaled across web, mobile, design and AI."
      />

      <section className="py-12">
        <Container>
          <ProjectGrid showFilter />
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}
