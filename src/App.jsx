import AppRoutes from "./routes/AppRoutes.jsx";

/**
 * App is intentionally thin: global providers live in main.jsx and all
 * routing/layout concerns are delegated to <AppRoutes />.
 */
export default function App() {
  return <AppRoutes />;
}
