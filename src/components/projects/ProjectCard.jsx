import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { staggerItem } from "../../utils/animations";
import { cn } from "../../utils/helpers";
import ImageWithFallback from "../common/ImageWithFallback";

/**
 * Portfolio card. Shows the project image (with a hover zoom) and falls
 * back to the brand gradient when the image isn't available yet.
 */
export default function ProjectCard({ project, className }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={ref}
      variants={staggerItem}
      layout
      onMouseMove={handleMove}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("glow-card group p-4 hover:border-brand-500/30", className)}
    >
      <Link to={`/our-projects/${project.id}`} className="block">
        {/* Thumbnail image */}
        <div className="relative h-52 overflow-hidden rounded-xl">
          <ImageWithFallback
            src={project.image}
            gradient={project.gradient}
            alt={project.title}
            className="h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/35 px-2.5 py-1 font-mono text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
              View case study <ArrowUpRight size={15} />
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="px-2 pb-1 pt-4">
          <div className="mb-2.5 flex items-center justify-between gap-3">
            <h3 className="text-lg">{project.title}</h3>
            <span className="font-mono text-xs font-semibold accent-text">
              {project.metric}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-paper-200 px-2.5 py-1 text-xs text-neutral-500 dark:border-white/10 dark:bg-ink-800 dark:text-neutral-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}