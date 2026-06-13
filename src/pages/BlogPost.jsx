import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostBySlug } from "../data/blog";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";
import { getInitials } from "../utils/helpers";
import PageWrapper from "../components/common/PageWrapper";
import Container from "../components/common/Container";
import NotFound from "./NotFound";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <PageWrapper>
      <article className="relative pt-36 sm:pt-40">
        <Container className="max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:accent-text"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={staggerItem}
              className="mb-4 inline-block rounded-full border border-brand-500/40 px-3 py-1 font-mono text-xs accent-text"
            >
              {post.category}
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-3xl leading-[1.1] sm:text-4xl md:text-5xl"
            >
              {post.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              variants={staggerItem}
              className="mt-6 flex items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper-200 font-display font-extrabold text-brand-600 dark:bg-ink-700 dark:text-brand-400">
                {getInitials(post.author.name)}
              </span>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                  <span>{date}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={13} /> {post.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Cover */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 h-56 rounded-3xl sm:h-72"
            style={{
              background: `linear-gradient(135deg, ${post.cover[0]}, ${post.cover[1]})`,
            }}
          />

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="prose-none mt-10 space-y-5"
          >
            {post.content.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={staggerItem}
                className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-8 dark:border-white/10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/10 bg-paper-200 px-3 py-1.5 text-sm text-neutral-600 dark:border-white/10 dark:bg-ink-800 dark:text-neutral-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </Container>
      </article>
    </PageWrapper>
  );
}