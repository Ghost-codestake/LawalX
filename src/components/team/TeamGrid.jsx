import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import TeamCard from "./TeamCard";

/**
 * Responsive grid of team members.
 */
export default function TeamGrid({ members, showSkills = false }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {members.map((member) => (
        <TeamCard key={member.id} member={member} showSkills={showSkills} />
      ))}
    </motion.div>
  );
}
