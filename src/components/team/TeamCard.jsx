import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Twitter } from "lucide-react";
import { staggerItem } from "../../utils/animations";
import ImageWithFallback from "../common/ImageWithFallback";

const SOCIAL_ICONS = { twitter: Twitter, facebook: Facebook };


export default function TeamCard({ member, showSkills = false }) {
  const to = `/team/${member.id}`;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glow-card group p-4 hover:border-brand-500/30"
    >
      {/* Photo (links to profile) */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        <Link to={to} aria-label={`View ${member.name}'s profile`} className="block h-full w-full">
          <ImageWithFallback
            src={member.image}
            gradient={member.gradient}
            alt={member.name}
            className="h-full w-full"
            imgClassName="transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Social overlay — transparent to clicks except the icons themselves */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center gap-3 bg-[#062322]/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          {Object.entries(member.socials).map(([key, href]) => {
            const Icon = SOCIAL_ICONS[key];
            if (!Icon) return null;
            return (
              <a
                key={key}
                href={href}
                aria-label={`${member.name} on ${key}`}
                className="pointer-events-auto grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white transition hover:-translate-y-1 hover:bg-brand-400 hover:text-[#062322]"
              >
                <Icon size={17} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="px-2 pb-1 pt-4 text-center">
        <h3 className="text-lg">
          <Link to={to} className="transition-colors hover:accent-text">
            {member.name}
          </Link>
        </h3>
        <p className="mt-1 font-mono text-[13px] accent-text">{member.role}</p>

        {showSkills && (
          <div className="mt-3 flex flex-wrap justify-center gap-1.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/10 bg-paper-200 px-2.5 py-1 text-xs text-neutral-500 dark:border-white/10 dark:bg-ink-800 dark:text-neutral-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}