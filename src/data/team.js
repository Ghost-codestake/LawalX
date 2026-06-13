
export const team = [
  {
    id: "abdullah-adisa",
    name: "Abdullah Adisa",
    role: "Frontend Engineer",
    leadership: true,
    bio: "Two decades shipping product. Adisa keeps the studio pointed at outcomes, not output.",
    image: "/team/adisa.png",
    gradient: ["#68e5e0", "#157570"],
    skills: ["Architecture", "React", "Cloud"],
    socials: { twitter: "#", facebook: "#" },
  },
  {
    id: "hadrat-balogun",
    name: "Hadrat Balogun",
    role: "Head of Business",
    leadership: true,
    bio: "Systems thinker who loves clean architecture and fast feedback loops.",
    image: "/team/Hadirat.png",
    gradient: ["#34c8c2", "#157570"],
    skills: ["Strategy", "Product", "Leadership"],
    socials: { twitter: "#", facebook: "#" },
  },
  {
    id: "kelvin-peter",
    name: "Kevin Peter",
    role: "Backend Engineer",
    leadership: true,
    bio: "Designs systems, not screens. Obsessed with motion, type and accessibility.",
    image: "/team/kelvin.png",
    gradient: ["#7aeae4", "#1d9c97"],
    skills: ["Design Systems", "UX", "Motion"],
    socials: { twitter: "#", facebook: "#" },
  },
  {
    id: "lawal-sherif",
    name: "Lawal Sherif",
    role: "Full Stack Developer",
    leadership: true,
    bio: "Builds reliable LLM features with evals and guardrails at the core.",
    image: "/team/sherif.png",
    gradient: ["#5fded9", "#147a76"],
    skills: ["Laravel", "php", "Python"],
    socials: { twitter: "#", facebook: "#" },
  },
  {
    id: "toheeb-salaudeen",
    name: "Toheeb Salaudeen",
    role: "Product Designer",
    leadership: true,
    bio: "Turns complex interfaces into smooth, accessible experiences.",
    image: "/team/toheeb.jpg",
    gradient: ["#88f2ee", "#1d9c97"],
    skills: ["React", "TypeScript", "A11y"],
    socials: { twitter: "#", facebook: "#" },
  },
];

export const getLeadership = () => team.filter((m) => m.leadership);

export default team;