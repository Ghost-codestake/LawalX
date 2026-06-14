import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Facebook, Twitter, Briefcase, Code2 } from "lucide-react";
import { getMemberById } from "../data/team";
import { fadeUp, fadeRight, staggerContainer, staggerItem } from "../utils/animations";
import PageWrapper from "../components/common/PageWrapper";
import Container from "../components/common/Container";
import ImageWithFallback from "../components/common/ImageWithFallback";
import OtherMembers from "../components/team/OtherMembers";
import NotFound from "./NotFound";

const SOCIAL_ICONS = { twitter: Twitter, facebook: Facebook };

const chip =
  "rounded-full border border-black/10 bg-paper-200 px-3 py-1.5 text-sm text-neutral-600 dark:border-white/10 dark:bg-ink-800 dark:text-neutral-300";

export default function TeamMember() {
  const { id } = useParams();
  const member = getMemberById(id);

  if (!member) return <NotFound />;

  const languages = member.languages || [];
  const contributions = member.contributions || [];
  const experience = member.experience || [];

  return (
    <PageWrapper key={member.id}>
      <article className="pt-36 sm:pt-40">
        {/* ── Section 1: intro + photo beside it ───────────────────────── */}
        <Container className="max-w-5xl">
          <Link
            to="/team"
            className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:accent-text"
          >
            <ArrowLeft size={16} /> Back to team
          </Link>

          <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-14">
            {/* Text block */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="order-2 md:order-1"
            >
              <motion.h1
                variants={fadeUp}
                className="text-3xl leading-[1.08] sm:text-4xl md:text-5xl"
              >
                {member.name}
              </motion.h1>
              <motion.p
                variants={staggerItem}
                className="mt-2 font-mono text-base accent-text"
              >
                {member.role}
              </motion.p>

              {/* Social icons */}
              <motion.div variants={staggerItem} className="mt-5 flex gap-2.5">
                {Object.entries(member.socials || {}).map(([key, href]) => {
                  const Icon = SOCIAL_ICONS[key];
                  if (!Icon) return null;
                  return (
                    <a
                      key={key}
                      href={href}
                      aria-label={`${member.name} on ${key}`}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 text-ink-900 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-paper-100 dark:hover:text-brand-400"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </motion.div>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {member.description || member.bio}
              </motion.p>
            </motion.div>

            {/* Photo */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="order-1 md:order-2"
            >
              <ImageWithFallback
                src={member.image}
                gradient={member.gradient}
                alt={member.name}
                className="aspect-[4/5] w-full rounded-3xl border border-black/10 dark:border-white/10"
              />
            </motion.div>
          </div>
        </Container>

        {/* ── Section 2: languages · projects · experience ─────────────── */}
        <Container className="max-w-5xl">
          <div className="grid gap-12 py-16 md:grid-cols-2">
            {/* Proficient in */}
            {languages.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  variants={staggerItem}
                  className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] accent-text"
                >
                  <Code2 size={15} /> Proficient in
                </motion.h2>
                <motion.div variants={staggerItem} className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span key={lang} className={chip}>
                      {lang}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Projects contributed */}
            {contributions.length > 0 && (
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2
                  variants={staggerItem}
                  className="mb-4 flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] accent-text"
                >
                  <Briefcase size={15} /> Projects contributed
                </motion.h2>
                <ul className="space-y-2.5">
                  {contributions.map((project) => (
                    <motion.li
                      key={project}
                      variants={staggerItem}
                      className="flex items-center gap-3 text-[15px] text-neutral-700 dark:text-neutral-200"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                      {project}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Experience */}
          {experience.length > 0 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="pb-4"
            >
              <motion.h2
                variants={staggerItem}
                className="mb-6 text-2xl sm:text-3xl"
              >
                Experience
              </motion.h2>
              <ol className="space-y-7 border-l border-black/10 pl-6 dark:border-white/10">
                {experience.map((item) => (
                  <motion.li
                    key={`${item.period}-${item.company}`}
                    variants={staggerItem}
                    className="relative"
                  >
                    <span className="absolute -left-[1.69rem] top-1.5 h-3 w-3 rounded-full bg-brand-400 ring-4 ring-paper-50 dark:ring-ink-950" />
                    <p className="font-mono text-sm accent-text">{item.period}</p>
                    <p className="mt-1 text-lg text-ink-900 dark:text-paper-100">
                      {item.company}
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {" "}
                        — {item.role}
                      </span>
                    </p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          )}
        </Container>
      </article>

      {/* ── Section 3: the rest of the team ──────────────────────────── */}
      <OtherMembers currentId={member.id} />
    </PageWrapper>
  );
}