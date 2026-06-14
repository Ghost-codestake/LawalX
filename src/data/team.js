export const team = [
  {
    id: "abdullah-adisa",
    name: "Abdullah Adisa",
    role: "Frontend Engineer",
    leadership: true,
    bio: "Two decades shipping product. Adisa keeps the studio pointed at outcomes, not output.",
    description:
      "Abdullah Adisa is a dedicated Frontend Engineer with a strong eye for design and user experience. He is proficient in modern web technologies including JavaScript, CSS, Bootstrap, React, Tailwind CSS, and WordPress. Abdullah specializes in building responsive, visually appealing interfaces that bring digital products to life. His work reflects a commitment to clean code, performance, and seamless user interaction.",
    languages: [
      "JavaScript",
      "React",
      "Bootstrap",
      "Wordpress",
      "Tailwind CSS",
      "CSS",
    ],
    contributions: [
      "School Management Portal",
      "E-commerce Website",
      "Accounting Portal",
    ],
    experience: [
      {
        period: "2024 — Present",
        company: "LawalX",
        role: "Frontend Engineer",
      },
      {
        period: "2022 — 2023",
        company: "DataPalace",
        role: "WordPress Developer",
      },
    ],
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
    description:
      "Hadrat Balogun is a dedicated Client Relations & Digital Marketing Manager with a talent for building strong client connections and a sharp eye for digital presence. She is proficient in managing client communications, crafting engaging outreach, and maintaining an active social media strategy. Hadrat specializes in nurturing prospective clients and fostering lasting relationships. Her work reflects a commitment to clear communication, brand consistency, and strategic engagement.",
    languages: ["Problem solving", "System planning", "Communication"],
    contributions: ["GovHospital", "LawalX"],
    experience: [
      { period: "2025 — present", company: "LawalX", role: "Head of Business" },
    ],
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
    description:
      "Kelvin Peter is a versatile web developer with a strong background in React, Next.js, PHP, WordPress, and Laravel. Starting out in 2016 with a passion for Java game development, he has since expanded into full-stack development, combining creativity with technical expertise to deliver clean, functional, and user-focused solutions.",
    languages: ["JavaScript", "React", "PHP", "MySQL", "Laravel", "Wordpress"],
    contributions: ["Custom Themes and Plugins", "Music Website", "Pharmacy Website", "Law Firm Website", "clinic Website"],
    experience: [
      { period: "2024 — Present", company: "LawalX", role: "Backend Engineer" },

    ],
    image: "/team/kelvin.png",
    gradient: ["#7aeae4", "#1d9c97"],
    skills: ["Data Structures", "Algorithms", "App Architecture"],
    socials: { twitter: "#", facebook: "#" },
  },
  {
    id: "lawal-sherif",
    name: "Lawal Sherif",
    role: "Full Stack Developer",
    leadership: true,
    bio: "Builds reliable LLM features with evals and guardrails at the core.",
    description:
      "Lawal Sherif is a talented web developer with a strong focus on creating custom web applications and tailored digital solutions. He has built personalized platforms for clients, including hospital and school management systems, as well as custom eCommerce sites. Known for his attention to detail and user-focused approach, Lawal consistently delivers clean, scalable, and efficient web solutions that meet real-world needs.",
    languages: [
      "PHP",
      "Laravel",
      "Wordpress",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    contributions: [
      "School Management Portal",
      "Hospital Management Portal",
      "Learning Management System",
      "Accounting Portal",
      "E-commerce Website",
      "School Website",
    ],
    experience: [
      {
        period: "2025 — Present",
        company: "LawalX",
        role: "Full Stack Developer",
      },

      {
        period: "2024 — Present",
        company: "Winwithweb",
        role: "Wordpress Developer",
      },
      { period: "2023 — Present", company: "Fresible", role: "Web Developer" },
      { period: "2023 — 2024", company: "Iwelabi ", role: "Laravel Developer" },
    ],
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
    description:
      "Toheeb Salaudeen is a creative and detail-oriented Product Designer with a passion for building intuitive, user-centered digital experiences. With a strong foundation in design thinking and UX/UI principles, he transforms complex ideas into clean, functional, and visually engaging products. Toheeb is proficient in industry-standard design tools such as Figma, Adobe XD, Sketch, Illustrator, and Photoshop. He excels at wireframing, prototyping, user research, and creating scalable design systems that align with both user needs and business goals.",
    languages: ["Figma", "Adobe XD", "UI Design",],
    contributions: ["Fintech Website", "Law Firm Website", "E-commerce Website", "School Website"],
    experience: [
      { period: "2024 — Present", company: "Lawalx", role: "Product Designer" },
     
    ],
    image: "/team/toheeb.jpg",
    gradient: ["#88f2ee", "#1d9c97"],
    skills: ["Motion Design", "UI Design", "System Design"],
    socials: { twitter: "#", facebook: "#" },
  },
];

export const getLeadership = () => team.filter((m) => m.leadership);
export const getMemberById = (id) => team.find((m) => m.id === id);

export default team;
