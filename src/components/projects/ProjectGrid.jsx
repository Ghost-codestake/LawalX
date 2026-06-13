import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, PROJECT_CATEGORIES } from "../../data/projects";
import { staggerContainer } from "../../utils/animations";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

/**
 * Portfolio grid with category filtering and animated layout transitions.
 * `limit` caps the number of cards (used by previews).
 */
export default function ProjectGrid({ showFilter = true, limit }) {
  const [active, setActive] = useState("All");

  const visible = useMemo(() => {
    const filtered =
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [active, limit]);

  return (
    <div>
      {showFilter && (
        <div className="mb-10">
          <ProjectFilter
            categories={PROJECT_CATEGORIES}
            active={active}
            onChange={setActive}
          />
        </div>
      )}

      <motion.div
        layout
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
