import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

/**
 * Access the current theme and theme controls.
 * @returns {{ theme: "light"|"dark", toggleTheme: () => void, setTheme: (t: string) => void }}
 */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a <ThemeProvider>");
  }
  return ctx;
}

export default useTheme;
