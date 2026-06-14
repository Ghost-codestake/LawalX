import { team } from "../../data/team";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import TeamCarousel from "./TeamCarousel";

/**
 * "Meet the rest of the team" — the team carousel with the currently displayed
 * member removed. Shown at the bottom of each member's profile page.
 */
export default function OtherMembers({ currentId }) {
  const others = team.filter((m) => m.id !== currentId);
  if (others.length === 0) return null;

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              Meet the <span className="grad-text">rest of the team</span>
            </>
          }
          className="mb-10"
        />
        <TeamCarousel members={others} showSkills />
      </Container>
    </section>
  );
}