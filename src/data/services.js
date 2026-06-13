import {
  LayoutTemplate,
  ShoppingBag,
  Megaphone,
  Palette,
  Code2,
} from "lucide-react";

/**
 * Service offerings. `icon` holds a Lucide component for direct rendering.
 */
export const services = [
  {
    id: "wordpress-development",
    icon: LayoutTemplate,
    title: "WordPress Development",
    short: "Fast, custom WordPress sites you can actually manage.",
    description:
      "Custom themes, plugins and headless WordPress builds — fast, secure and easy for your team to edit without touching code.",
    features: ["Custom themes", "Plugin development", "Headless WP", "Speed & SEO"],
    technologies: ["WordPress", "PHP", "ACF", "WooCommerce"],
  },
  {
    id: "ecommerce-development",
    icon: ShoppingBag,
    title: "E-Commerce Development",
    short: "Online stores built to convert and scale.",
    description:
      "High-converting storefronts with secure checkout, payments and inventory management — built on the platform that fits your business.",
    features: ["Storefront UX", "Secure checkout", "Payment gateways", "Inventory sync"],
    technologies: ["Shopify", "WooCommerce", "Stripe", "Next.js"],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    short: "Get found, get traffic, get customers.",
    description:
      "Data-driven SEO, content and paid campaigns that grow qualified traffic and turn it into measurable revenue.",
    features: ["SEO", "Content strategy", "Paid ads", "Analytics & reporting"],
    technologies: ["SEO", "Google Ads", "Meta Ads", "GA4"],
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    short: "Research-driven interfaces that convert.",
    description:
      "From discovery and wireframes to polished, accessible interfaces and reusable design systems that delight users.",
    features: ["User research", "Prototyping", "Design systems", "Accessibility (WCAG)"],
    technologies: ["Figma", "Storybook", "Framer"],
  },
  {
    id: "web-app-development",
    icon: Code2,
    title: "Web App Development",
    short: "Performant web apps engineered for scale.",
    description:
      "Robust, type-safe web applications with React and Node — architected for performance, security and long-term maintainability.",
    features: ["React & Node", "APIs & databases", "Auth & security", "CI/CD"],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
  },
];

export const getServiceById = (id) => services.find((s) => s.id === id);

export default services;