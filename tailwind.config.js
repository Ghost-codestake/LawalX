/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand — cyan/teal. #68e5e0 is brand-400.
        brand: {
          50: "#e6fbfa",
          100: "#c5f5f3",
          200: "#9fefeb",
          300: "#7aeae4",
          400: "#68e5e0",
          500: "#34c8c2",
          600: "#1d9c97",
          700: "#157570",
          800: "#104f4c",
          900: "#0a2b29",
        },
        // Dark-mode surfaces — rich charcoal / deep gray (no blue tint).
        ink: {
          950: "#0b0c0f",
          900: "#0f1115",
          850: "#131519",
          800: "#1a1d23",
          700: "#23272f",
        },
        // Light-mode surfaces — soft off-white / light gray.
        paper: {
          50: "#f9faf8",
          100: "#f3f4f1",
          200: "#eaece7",
          300: "#dfe1db",
        },
      },
      fontFamily: {
        // Monospace, terminal-style brand/display type (matches aeroplane.run's aesthetic)
        display: ["'JetBrains Mono'", "ui-monospace", "monospace"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      // Fluid type scale: every size interpolates with the viewport via
      // clamp(min, preferred, max), so text shrinks smoothly on small
      // screens and caps out on large ones — no breakpoint jumps needed.
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["clamp(1rem, 0.95rem + 0.3vw, 1.125rem)", { lineHeight: "1.6" }],
        xl: ["clamp(1.1rem, 1.04rem + 0.35vw, 1.25rem)", { lineHeight: "1.4" }],
        "2xl": ["clamp(1.3rem, 1.15rem + 0.7vw, 1.5rem)", { lineHeight: "1.3" }],
        "3xl": ["clamp(1.55rem, 1.3rem + 1.2vw, 1.875rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(1.85rem, 1.5rem + 1.9vw, 2.25rem)", { lineHeight: "1.15" }],
        "5xl": ["clamp(2.1rem, 1.55rem + 2.9vw, 3rem)", { lineHeight: "1.08" }],
        "6xl": ["clamp(2.4rem, 1.7rem + 3.8vw, 3.75rem)", { lineHeight: "1.05" }],
        "7xl": ["clamp(2.7rem, 1.8rem + 4.8vw, 4.5rem)", { lineHeight: "1.03" }],
      },
      boxShadow: {
        glow: "0 8px 40px -8px rgba(104,229,224,0.35)",
        "glow-lg": "0 20px 70px -20px rgba(104,229,224,0.45)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(110deg, #68e5e0, #34c8c2 55%, #1d9c97)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-16px)" },
        },
        spinslow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        meshmove: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(6%,5%) scale(1.12)" },
          "100%": { transform: "translate(-4%,-3%) scale(0.95)" },
        },
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
        meshmove: "meshmove 24s ease-in-out infinite alternate",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
};
