import { ArrowRight } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import ProjectGrid from "../projects/ProjectGrid";

/**
 * Home preview: three featured projects, no filter.
 */
export default function ProjectsPreview() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Projects we're <span className="grad-text">proud of</span>
              </>
            }
          />
          <Button to="/projects" variant="ghost">
            View all projects <ArrowRight size={16} />
          </Button>
        </div>

        <ProjectGrid showFilter={false} limit={3} />
      </Container>
    </section>
  );
}
