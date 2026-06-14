import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

/* Route-based code splitting — each page is its own chunk. */
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Projects = lazy(() => import("../pages/Projects"));
const ProjectDetails = lazy(() => import("../pages/ProjectDetails"));
const Team = lazy(() => import("../pages/Team"));
const TeamMember = lazy(() => import("../pages/TeamMember"));
const Careers = lazy(() => import("../pages/Careers"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogPost = lazy(() => import("../pages/BlogPost"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

/** Lightweight fallback shown while a page chunk loads. */
function RouteFallback() {
  return (
    <div className="grid min-h-screen place-items-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-brand-500/30 border-t-brand-400" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="our-services" element={<Services />} />
          <Route path="our-projects" element={<Projects />} />
          <Route path="our-projects/:id" element={<ProjectDetails />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamMember />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
