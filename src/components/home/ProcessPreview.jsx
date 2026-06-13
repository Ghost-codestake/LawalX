import { PROCESS_STEPS } from "../../utils/constants";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Timeline from "../common/Timeline";

/**
 * Home preview of the delivery process, rendered with the shared Timeline.
 */
export default function ProcessPreview() {
  const items = PROCESS_STEPS.map((step, i) => ({
    label: String(i + 1).padStart(2, "0"),
    title: step.title,
    description: step.description,
  }));

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A process built for <span className="grad-text">momentum</span>
            </>
          }
          subtitle="Six tight, transparent stages that take you from idea to launch — with demos every step of the way."
          className="mb-14"
        />
        <Timeline items={items} />
      </Container>
    </section>
  );
}
