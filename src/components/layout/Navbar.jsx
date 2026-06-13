import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { cn } from "../../utils/helpers";
import Container from "../common/Container";
import Button from "../common/Button";
import ThemeToggle from "../common/ThemeToggle";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on any route change (link tap, back button, etc.).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 0.7, 0.2, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "py-2.5" : "py-4"
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 pl-5 transition-all duration-300",
              scrolled
                ? "glass border-brand-500/20 shadow-lg shadow-black/5"
                : "border border-transparent"
            )}
          >
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "accent-text"
                        : "text-neutral-500 hover:text-ink-900 dark:hover:text-paper-100"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-brand-400"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              <Button to="/contact" size="sm" className="hidden sm:inline-flex">
                Start a project <ArrowRight size={15} />
              </Button>
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 dark:border-white/10 lg:hidden"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}