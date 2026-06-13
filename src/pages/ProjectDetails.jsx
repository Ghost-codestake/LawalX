import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { getProjectById } from "../data/projects";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import { cn } from "../utils/helpers";
import PageWrapper from "../components/common/PageWrapper";
import Container from "../components/common/Container";
import ImageWithFallback from "../components/common/ImageWithFallback";
import RelatedProjects from "../components/projects/RelatedProjects";
import NotFound from "./NotFound";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) return <NotFound />;

  const gallery = project.images || [];

  return (
    <PageWrapper key={project.id}>
      <article className="pt-36 sm:pt-40">
        {/* Name + first large image */}
        <Container className="max-w-5xl">
          <Link
            to="/our-projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:accent-text"
          >
            <ArrowLeft size={16} /> Back to projects
          </Link>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={staggerItem}
              className="mb-4 flex flex-wrap items-center gap-3 text-sm text-neutral-500"
            >
              <span className="rounded-full border border-brand-500/40 px-3 py-1 accent-text">
                {project.category}
              </span>
              <span>{project.client}</span>
              <span aria-hidden>·</span>
              <span>{project.year}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-3xl leading-[1.08] sm:text-4xl md:text-5xl"
            >
              {project.title}
            </motion.h1>
          </motion.div>

          {/* First large image */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <ImageWithFallback
              src={project.image}
              gradient={project.gradient}
              alt={`${project.title} — cover`}
              className="mt-8 aspect-[16/9] w-full rounded-3xl border border-black/10 dark:border-white/10"
            />
          </motion.div>
        </Container>

        {/* Brief talk + feature checklist */}
        <Container className="max-w-4xl">
          <div className="grid gap-10 py-14 md:grid-cols-5">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="md:col-span-3"
            >
              <h2 className="text-2xl sm:text-3xl">About the project</h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-black/10 bg-paper-200 px-3 py-1.5 text-sm text-neutral-600 dark:border-white/10 dark:bg-ink-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-2"
            >
              <motion.h3
                variants={staggerItem}
                className="mb-4 font-mono text-sm uppercase tracking-[0.1em] accent-text"
              >
                Key features
              </motion.h3>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <motion.li
                    key={feature}
                    variants={staggerItem}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-400 text-ink-950">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-neutral-700 dark:text-neutral-200">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>

        {/* Gallery (adapts to 2 or 3 images) */}
        {gallery.length > 0 && (
          <Container className="max-w-5xl">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-6 text-2xl sm:text-3xl"
            >
              Gallery
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={cn(
                "grid grid-cols-1 gap-4 sm:gap-5",
                gallery.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {gallery.map((img, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <ImageWithFallback
                    src={img}
                    gradient={project.gradient}
                    alt={`${project.title} — screenshot ${i + 1}`}
                    className="aspect-[4/3] w-full rounded-2xl border border-black/10 dark:border-white/10"
                  />
                </motion.div>
              ))}
            </motion.div>
          </Container>
        )}
      </article>

      {/* Get insights on our other projects */}
      <RelatedProjects currentId={project.id} />
    </PageWrapper>
  );
}