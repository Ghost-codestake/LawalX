import { CONTACT_INFO } from "../../utils/constants";

/**
 * Office / contact details list with icons.
 */
export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          className="flex items-center gap-4 transition hover:translate-x-1"
        >
          <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-black/10 text-brand-600 dark:border-white/10 dark:text-brand-400">
            <Icon size={18} />
          </span>
          <span>
            <span className="block font-mono text-xs uppercase tracking-wide text-neutral-400">
              {label}
            </span>
            <span className="text-[15px] text-neutral-600 dark:text-neutral-300">
              {value}
            </span>
          </span>
        </a>
      ))}
    </div>
  );
}
