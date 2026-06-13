import { motion } from "framer-motion";
import { posts } from "../data/blog";
import { staggerContainer } from "../utils/animations";
import PageWrapper from "../components/common/PageWrapper";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/common/Container";
import BlogCard from "../components/blog/BlogCard";
import CTA from "../components/home/CTA";

export default function Blog() {
  return (
    <PageWrapper>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Notes on building <span className="grad-text">great software</span>
          </>
        }
        subtitle="Practical lessons from the work — engineering, design, growth and AI."
      />

      <section className="py-12">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA />
    </PageWrapper>
  );
}