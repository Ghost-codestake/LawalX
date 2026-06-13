import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerItem } from "../../utils/animations";
import { cn } from "../../utils/helpers";
import { Link } from "react-router-dom";

/**
 * Service card. Set `detailed` to show the feature list (Services page).
 * Tracks the cursor to position the radial glow (--mx/--my).
 */
export default function ServiceCard({ service, detailed = false, className }) {
  const ref = useRef(null);
  const Icon = service.icon;

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
      onMouseMove={handleMove}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "glow-card p-7 hover:border-brand-500/30 hover:shadow-glow",
        className
      )}
    ><Link to="/contact-us" > 
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-brand-500/30 bg-gradient-to-br from-paper-200 to-transparent text-brand-600 transition-transform duration-300 dark:from-ink-800 dark:text-brand-400 [.glow-card:hover_&]:scale-105">
        <Icon size={26} strokeWidth={1.6} />
      </div>

      <h3 className="text-xl">{service.title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
        {detailed ? service.description : service.short}
      </p>

      {detailed && (
        <ul className="mt-5 grid grid-cols-2 gap-2">
          {service.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold accent-text">
        Start a Project <ArrowUpRight size={15} />
      </div>
      </Link>
    </motion.article>
    
   
  );
}
