import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import {
  FOOTER_COLUMNS,
  SITE,
  SOCIALS,
} from "../../utils/constants";
import { isValidEmail } from "../../utils/helpers";
import Container from "../common/Container";
import Button from "../common/Button";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = () => {
    if (isValidEmail(email)) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 2500);
    }
  };

  return (
    <footer className="relative z-10 border-t border-black/10 pt-16 dark:border-white/10">
      <Container>
        {/* Newsletter */}
        <div className="glass mb-12 flex flex-col items-start justify-between gap-5 rounded-2xl px-5 py-6 sm:px-7 md:flex-row md:items-center">
          <div>
            <h3 className="text-lg">Stay in the loop</h3>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              Occasional notes on building great software. No spam.
            </p>
          </div>
          <div className="flex w-full min-w-0 max-w-md gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              aria-label="Email address"
              className="w-full min-w-0 flex-1 rounded-xl border border-black/10 bg-paper-200 px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-ink-800"
            />
            <Button onClick={subscribe} size="md">
              {subscribed ? <Check size={17} /> : "Subscribe"}
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mb-5 mt-4 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {SITE.tagline}
            </p>
            <div className="flex gap-2.5">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:hover:text-brand-400"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-neutral-500">
                {col.title}
              </h4>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="inline-block py-1 text-sm text-neutral-500 transition hover:translate-x-1 hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/10 py-7 text-sm text-neutral-500 dark:border-white/10 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="font-mono">Crafted with precision · Built for scale</span>
        </div>
      </Container>
    </footer>
  );
}
