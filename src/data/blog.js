/**
 * Blog posts — STATIC PLACEHOLDER DATA.
 *
 * Later this will be replaced by an API. Keep this same shape (or map the
 * API response to it) and the components won't need to change:
 *
 *   // services/blogApi.js (future)
 *   export const fetchPosts = async () => {
 *     const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
 *     return res.json(); // -> array of posts in the shape below
 *   };
 *
 * `cover` is a [from, to] color pair used to render an abstract thumbnail
 * (no stock imagery). `content` is an array of paragraphs for the detail page.
 */
export const posts = [
  {
    id: 1,
    slug: "ship-faster-without-breaking-things",
    title: "Ship faster without breaking things",
    excerpt:
      "Speed and stability aren't opposites. Here's how we keep deploys frequent and boring — in the best way.",
    cover: ["#68e5e0", "#157570"],
    category: "Engineering",
    tags: ["CI/CD", "DevOps", "Process"],
    author: { name: "Leo Tanaka", role: "Head of Engineering" },
    publishedAt: "2025-05-28",
    readTime: "6 min read",
    content: [
      "Every team says they want to move fast. Fewer build the guardrails that let them do it without constant firefighting. The secret isn't heroics — it's making the safe path the easy path.",
      "We lean on small, frequent deploys behind feature flags, automated tests that run on every pull request, and one-click rollbacks. When a change is small and reversible, shipping stops being scary.",
      "The result is a team that ships several times a day and sleeps well at night. Boring deploys are a feature, not a bug.",
    ],
  },
  {
    id: 2,
    slug: "a-design-system-that-teams-actually-use",
    title: "A design system that teams actually use",
    excerpt:
      "Most design systems die from neglect. The ones that survive treat adoption as a product problem, not a docs problem.",
    cover: ["#34c8c2", "#1d9c97"],
    category: "Design",
    tags: ["Design Systems", "Figma", "UX"],
    author: { name: "Sofia Reyes", role: "Design Director" },
    publishedAt: "2025-05-14",
    readTime: "5 min read",
    content: [
      "A design system is only as good as its adoption. You can ship hundreds of beautiful components, but if engineers route around them, you've built a museum, not a system.",
      "We start with tokens, document the why alongside the how, and make contribution genuinely easy. Adoption is a product with its own users — your team.",
      "Measure it like a product too: track coverage, time-to-first-component, and how often people reach for an escape hatch.",
    ],
  },
  {
    id: 3,
    slug: "ecommerce-conversion-the-boring-wins",
    title: "E-commerce conversion: the boring wins",
    excerpt:
      "Forget the growth hacks. The biggest conversion gains usually come from speed, clarity and a checkout that gets out of the way.",
    cover: ["#7aeae4", "#157570"],
    category: "Growth",
    tags: ["E-Commerce", "Performance", "CRO"],
    author: { name: "Ava Mercer", role: "Founder & CEO" },
    publishedAt: "2025-04-30",
    readTime: "7 min read",
    content: [
      "When we audit storefronts, the wins are rarely glamorous. Shave a second off load time, remove a checkout step, clarify the value proposition above the fold — and revenue moves.",
      "Shoppers don't reward clever. They reward fast and clear. A page that loads instantly and a checkout that remembers them beats any pop-up.",
      "Start with the fundamentals before the experiments. The fundamentals are where the money is.",
    ],
  },
  {
    id: 4,
    slug: "shipping-ai-features-people-trust",
    title: "Shipping AI features people trust",
    excerpt:
      "LLM features are easy to demo and hard to ship. Evals, guardrails and grounding are what separate a toy from a product.",
    cover: ["#5fded9", "#147a76"],
    category: "AI",
    tags: ["LLMs", "RAG", "Evals"],
    author: { name: "Marcus Hale", role: "AI Lead" },
    publishedAt: "2025-04-12",
    readTime: "8 min read",
    content: [
      "A flashy AI demo and a reliable AI feature are completely different animals. The gap between them is filled with unglamorous engineering: evaluation harnesses, guardrails and retrieval that keeps answers grounded.",
      "We treat prompts and pipelines like code — versioned, tested and measured against a fixed eval set so we catch regressions before users do.",
      "Trust is the product. Get the reliability right and the magic takes care of itself.",
    ],
  },
  {
    id: 5,
    slug: "headless-wordpress-when-and-why",
    title: "Headless WordPress: when and why",
    excerpt:
      "Headless WordPress can be a superpower or an over-engineered headache. Here's how we decide which one it'll be.",
    cover: ["#88f2ee", "#1d9c97"],
    category: "Engineering",
    tags: ["WordPress", "Headless", "Architecture"],
    author: { name: "Nadia Okafor", role: "Senior Frontend Engineer" },
    publishedAt: "2025-03-22",
    readTime: "6 min read",
    content: [
      "Going headless gives you a fast, modern frontend while keeping the editing experience your team already knows. But it adds moving parts, and that cost is real.",
      "We reach for it when performance, multi-channel content or a custom frontend justify the complexity — and we stay traditional when a great theme will do.",
      "The right architecture is the simplest one that meets the requirement. Sometimes that's headless; often it isn't.",
    ],
  },
];

export const BLOG_CATEGORIES = ["All", "Engineering", "Design", "Growth", "AI"];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export default posts;