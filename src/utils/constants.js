import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react";

export const SITE = {
  name: "LawalX",
  tagline: "Engineering digital products that move at the speed of ambition.",
  email: "hello@lawalx.com",
  phone: "+234 916 316 0425",
  location: "65B, Computer Village, Ikeja Along, Lagos State",
};

/** Primary navigation (desktop + mobile). */
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Services", path: "/our-services" },
  { label: "Projects", path: "/our-projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
];

export const SOCIALS = [
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/share/18YpfnWfcV/?mibextid=wwXIfr",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/lawalx_tech?igsh=d2V6amNscDNkbm03",
  },
  { label: "GitHub", icon: Github, href: "https://github.com" },
];

export const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
  { icon: MapPin, label: "Studio", value: SITE.location, href: "#" },
];

/** Footer column structure. */
export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", path: "/about-us" },
      { label: "Services", path: "/our-services" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", path: "/our-services" },
      { label: "Digital Marketing", path: "/our-services" },
      { label: "UI/UX Design", path: "/our-services" },
      { label: "Wordpress development", path: "/our-services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Projects", path: "/our-projects" },
      { label: "Case studies", path: "/our-projects" },
      { label: "Privacy", path: "/contact-us" },
      { label: "Terms", path: "/contact-us" },
    ],
  },
];

/** Company-wide metrics (animated counters). */
export const METRICS = [
  { value: 35, suffix: "+", label: "Projects Delivered" },
  { value: 7, suffix: "", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 8, suffix: "", label: "Countries Served" },
];

/** Company values (About page). */
export const VALUES = [
  {
    title: "Craft over noise",
    description:
      "We obsess over the details others skip — performance, accessibility and the feel of every interaction.",
  },
  {
    title: "Senior, low-ego",
    description:
      "No hand-offs to juniors. The people who pitch your project are the people who build it.",
  },
  {
    title: "Radical transparency",
    description:
      "Clear scope, honest timelines and demos every sprint. No surprises, ever.",
  },
  {
    title: "Built to last",
    description:
      "Clean, typed, well-tested code that your team can own and extend long after launch.",
  },
];

/** Company timeline (About page). */
export const TIMELINE = [
  {
    year: "2019",
    title: "Founded",
    text: "Started as a two-person studio shipping MVPs for local startups.",
  },
  {
    year: "2022",
    title: "First enterprise client",
    text: "Delivered a platform serving millions of monthly users.",
  },
  {
    year: "2024",
    title: "Went remote-first",
    text: "Assembled a distributed team of senior engineers and designers.",
  },
  {
    year: "2025",
    title: "AI practice launched",
    text: "Began building LLM-powered features and RAG pipelines.",
  },
  {
    year: "2026",
    title: "35+ projects",
    text: "Trusted by teams across 8 countries and counting.",
  },
];

/** Process steps, reused across Home, Services and About. */
export const PROCESS_STEPS = [
  {
    title: "Discovery",
    description:
      "We dig into your goals, users and constraints to define the real problem worth solving.",
  },
  {
    title: "Strategy",
    description:
      "A clear roadmap, scope and architecture aligned to outcomes and timelines.",
  },
  {
    title: "Design",
    description:
      "Wireframes to polished, accessible UI with a reusable design system.",
  },
  {
    title: "Development",
    description:
      "Clean, tested, type-safe code shipped in tight, transparent iterations.",
  },
  {
    title: "Testing",
    description:
      "Automated and manual QA across devices, performance and security.",
  },
  {
    title: "Launch",
    description:
      "Zero-downtime deployment, monitoring and a partnership that continues.",
  },
];

/** Technology stack badges. */
export const TECH_STACK = [
  { short: "Re", name: "React" },
  { short: "Nx", name: "Next.js" },
  { short: "No", name: "Node.js" },
  { short: "Ts", name: "TypeScript" },
  { short: "Tw", name: "Tailwind" },
  { short: "Aw", name: "AWS" },
  { short: "Lr", name: "Laravel" },
  { short: "Pg", name: "PostgreSQL" },
  { short: "Mg", name: "MongoDB" },
  { short: "Ai", name: "AI Tools" },
];

/** Trusted-by marquee logos. */
export const TRUSTED_LOGOS = [
  "Data Palace",
  "Learnsmart",
  "winwithweb",
  "Iwelabi",
  "Fresible",
  "GovHospital",
];

/** FAQ (Contact page). */
export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most engagements run 6–16 weeks depending on scope. We work in two-week sprints with demos at the end of each, so you see progress continuously rather than waiting for a big reveal.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Absolutely. Roughly half our clients are funded startups. We offer MVP packages designed to get you to market fast without accumulating technical debt.",
  },
  {
    question: "What does engagement look like after launch?",
    answer:
      "We offer ongoing retainers for maintenance, iteration and scaling. Many clients keep us as their fractional engineering team long after the initial build.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "We scope a fixed price for well-defined projects and offer monthly retainers for ongoing work. You'll always get a transparent estimate before we begin.",
  },
  {
    question: "Can you join an existing codebase?",
    answer:
      "Yes. We regularly audit and extend existing products. We start with a short discovery to map the architecture before writing a single line.",
  },
];

/** Careers — open positions. */
export const OPEN_POSITIONS = [
  {
    title: "Senior Frontend Engineer",
    team: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Product Designer",
    team: "Design",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "DevOps Engineer",
    team: "Platform",
    type: "Full-time",
    location: "Remote / SF",
  },
  {
    title: "AI/ML Engineer",
    team: "AI",
    type: "Full-time",
    location: "Remote",
  },
  {
    title: "Engineering Manager",
    team: "Engineering",
    type: "Full-time",
    location: "Remote / SF",
  },
];

/** Careers — benefits. */
export const BENEFITS = [
  {
    title: "Remote-first",
    description:
      "Work from anywhere with flexible hours and async-friendly culture.",
  },
  {
    title: "Top-tier comp",
    description: "Competitive salary, equity and an annual learning budget.",
  },
  {
    title: "Real ownership",
    description: "Lead projects end-to-end with autonomy and senior peers.",
  },
  {
    title: "4-day focus weeks",
    description: "Protected deep-work time and no-meeting Wednesdays.",
  },
  {
    title: "Health & wellness",
    description:
      "Comprehensive medical, dental and a monthly wellness stipend.",
  },
  {
    title: "Generous time off",
    description: "Unlimited PTO with a mandatory minimum so you actually rest.",
  },
];
