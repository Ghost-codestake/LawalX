import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import { staggerItem } from "../../utils/animations";
import { getInitials, cn } from "../../utils/helpers";

/**
 * Blog post card with an abstract gradient cover (no stock imagery),
 * category chip, meta row and a link to the full post.
 */
export default function BlogCard({ post, className }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("glow-card group p-4 hover:border-brand-500/30", className)}
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Cover */}
        <div
          className="relative h-44 overflow-hidden rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${post.cover[0]}, ${post.cover[1]})`,
          }}
        >
          <span className="absolute left-4 top-4 rounded-full bg-[#062322]/15 px-3 py-1 font-mono text-xs font-semibold text-[#062322]">
            {post.category}
          </span>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
              Read article <ArrowUpRight size={15} />
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="px-2 pb-1 pt-4">
          <h3 className="text-lg leading-snug">{post.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-paper-200 font-display text-xs font-extrabold text-brand-600 dark:bg-ink-700 dark:text-brand-400">
              {getInitials(post.author.name)}
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">
                {post.author.name}
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span>{date}</span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}