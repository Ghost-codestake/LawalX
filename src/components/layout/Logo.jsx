import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";


const LOGOS = {
  dark: "/logo/LawalX-darkmode.png",   // shown in dark mode  (use a light-colored logo)
  light: "/logo/LawalX-lightmode.png", // shown in light mode (use a dark-colored logo)
};

export default function Logo({ onClick }) {
  const { theme } = useTheme();
  const [errored, setErrored] = useState(false);
  const src = LOGOS[theme] ?? LOGOS.dark;

  // Retry loading when the theme (and therefore the src) changes.
  useEffect(() => {
    setErrored(false);
  }, [theme]);

  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3"
      aria-label="Nebufy home"
    >
      {errored ? (
        <Wordmark />
      ) : (
        <img
          key={theme}
          src={src}
          alt="Nebufy"
          className="h-9 w-auto select-none"
          draggable={false}
          onError={() => setErrored(true)}
        />
      )}
    </Link>
  );
}

/** Built-in fallback shown if the themed logo image can't be loaded. */
function Wordmark() {
  return (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-400 shadow-glow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#062322"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" />
        </svg>
      </span>
      <span className="font-display text-xl font-extrabold tracking-tight">
        Nebufy<span className="accent-text">.</span>
      </span>
    </>
  );
}