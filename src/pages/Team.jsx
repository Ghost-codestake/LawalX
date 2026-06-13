import { team } from "../data/team";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import TeamCarousel from "../components/team/TeamCarousel";
import CTA from "../components/home/CTA";

export default function Team() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="The people"
        title={
          <>
            Senior talent, <span className="grad-text">no hand-offs</span>
          </>
        }
        subtitle="The people who pitch your project are the people who build it. Meet the team behind the work."
      />

      <section className="py-12">
        <Container>
          <TeamCarousel members={team} showSkills />
        </Container>
      </section>

      <CTA
        title="Want to build remarkable things with us?"
        subtitle="We're always looking for senior, low-ego people who love their craft."
      />
    </PageWrapper>
  );
}