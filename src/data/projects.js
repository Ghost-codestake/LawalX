
export const projects = [
  {
    id: "chyfley-school",
    title: "Chyfley School management portal",
    category: "Web",
    client: "school",
    year: "2024",
    gradient: ["#68e5e0", "#157570"],
    tags: ["Next.js", "AWS", "Stripe"],
    metric: "+142% conversions",
    image: "/projects/chyfley-school/chyfley.png",
    description:
      "Before School Management Portal, schools struggled with manual admissions, fee collection, and record-keeping, leading to errors and inefficiencies. Communication gaps between teachers, students, and parents made collaboration difficult, while outdated learning methods limited student engagement. Our portal simplifies everything—automating admissions, streamlining accounting, and enabling seamless e-learning and computer-based testing. With better organization, real-time communication, and smarter management, schools save time, reduce costs, and improve academic performance..",
    features: [
      "Admissions management",
      "E-learning system",
      "Accounting & fee management",
      "Computer-based testing (CBT)",
      "Student and staff record management",
      "Report card and Transcripts",
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Stripe", "PostgreSQL"],
    images: [
      "/projects/chyfley-school/chyf.png",
      "/projects/chyfley-school/chyfley.png",
    ],
  },
  {
    id: "fiit-hotel",
    title: "FIIT Hotel management system",
    category: "Web",
    client: "FIIT",
    year: "2024",
    gradient: ["#34c8c2", "#157570"],
    tags: ["React Native", "GraphQL"],
    metric: "4.9★ App Store",
    image: "/projects/fiit-hotel/fitt-hotel-hero.png",
    description:
      "We redesigned the FITT Hotels website to deliver a modern, user-friendly experience with enhanced speed and performance. The new design integrates a real-time hotel booking system, allowing guests to check availability and make secure reservations instantly. We also optimized the website for SEO and faster loading times, improving visibility on search engines and ensuring a seamless browsing experience across all devices..",
    features: [
      "Real-time room booking system",
      "Dynamic pricing and availability display",
      "Mobile-responsive design",
      "SEO optimization and speed enhancement",
      "Integrated contact and inquiry forms",
      "Interactive image gallery",
      "Secure online payment support",
    ],
    technologies: ["React Native", "Expo", "GraphQL", "TypeScript"],
    images: [
      "/projects/fiit-hotel/Booking-page.jpg",
      "/projects/fiit-hotel/fitt-hotel-hero.png",
    ],
  },
  {
    id: "foresight-school",
    title: "Foresight MOdel School",
    category: "Web Design",
    client: "foresight",
    year: "2023",
    gradient: ["#7aeae4", "#1d9c97"],
    tags: ["React", "PostgreSQL"],
    metric: "12M events/day",
    image: "/projects/foresight-school/hero.png",
    description:
      "At LawalX, we created a vibrant, user-friendly website that reflects the heart of Foresight Model Schools. Our goal was to build a digital home that speaks directly to parents, students, and the wider school community. We combined simple navigation with colorful design, mobile responsiveness, and engaging content that highlights the school’s values — from their Signature Learning Program to cultural appreciation. The website features a smooth interface that showcases school events, blog updates, and programs in a way that’s easy to understand and fun to explore. From the home page to the photo gallery and contact section, every part of the site was crafted to inspire trust, reflect quality, and help the school connect better with families online. This project is more than just a website — it’s a digital experience that supports learning, celebrates diversity, and grows with the school.",
    features: [
      "Modern Home Page",
      "Signature Learning Program Section",
      "School news and stories",
      "Works on all screen sizes",
      "Photo Gallery",
    ],
    technologies: ["React", "PostgreSQL", "Node.js", "WebSockets"],
    images: [
      "/projects/foresight-school/section.png",
      "/projects/foresight-school/hero.png",
    ],
  },
  {
    id: "gov-hospital",
    title: "GovHospital- Medical blog website",
    category: "Design",
    client: "govhospital",
    year: "2023",
    gradient: ["#68e5e0", "#34c8c2"],
    tags: ["Figma", "Storybook"],
    metric: "240 components",
    image: "/projects/gov-hospital/Govhospital.png",
    description:
      "LawalX developed GovHospitals, a professional medical blog website dedicated to providing valuable healthcare information, hospital listings, and medical insights for Indian hospitals. Built with WordPress, the blog is optimized for SEO, ensuring high rankings on Google and strong visibility for health-related searches.",
    features: [
      "Hospital Listings – Information on government hospitals across India.",
      "Fast & Secure - Built for performance and reliability.",
      "Easy Content Management – Hospital admins and medical writers can update posts effortlessly.",
    ],
    technologies: ["Figma", "Storybook", "React", "Design Tokens"],
    images: [
      "/projects/gov-hospital/gov-section.png",
      "/projects/gov-hospital/seo.png",
      "/projects/gov-hospital/Govhospital.png",
    ],
  },
  {
    id: "seamless-hospital",
    title: "Seamless Hospital management portal",
    category: "web-health",
    client: "seamless",
    year: "2025",
    gradient: ["#5fded9", "#157570"],
    tags: ["LLM", "RAG", "Python"],
    metric: "−68% support load",
    image: "/projects/seamless-hospital/Admin-Dashoard.png",
    description:
      "From seamless patient registration to doctor scheduling, billing, and medical records management, it ensures smooth hospital operations. With built-in features like telemedicine, automated reminders, and role-based access, it enhances patient care while reducing administrative workload.",
    features: [
      "Patient Management",
      "Doctor Scheduling",
      "Billing & Invoicing",
      "Medical Records Management",
      "Role-Based Access Control",
      "Comprehensive Dashboard",
    ],
    technologies: ["Python", "OpenAI", "LangChain", "Vector DB"],
    images: [
      "/projects/seamless-hospital/Doctor-list.png",
      "/projects/seamless-hospital/make-appointment.png",
      "/projects/seamless-hospital/Admin-Dashoard.png",
    ],
  },
  {
    id: "stanfield-school",
    title: "Stanfield School management portal",
    category: "Web",
    client: "Stanfield",
    year: "2024",
    gradient: ["#88f2ee", "#1d9c97"],
    tags: ["Docker", "K8s", "CI/CD"],
    metric: "0-downtime deploys",
    image: "/projects/stanfield-school/Home-slider-Stanfield.png",
    description:
      "Before Stanfield School Management Portal, schools faced challenges with disorganized admissions, manual fee tracking, and inefficient communication between staff, students, and parents. Managing academic records, assessments, and online learning was time-consuming, leading to delays and errors. Stanfield Portal streamlines school operations by automating admissions, simplifying fee payments, and enhancing collaboration. With integrated e-learning and computer-based testing, schools can provide a seamless learning experience while reducing administrative workload. Stay organized, improve efficiency, and focus on delivering quality education with Stanfield School Management Portal.",
    features: [
      "Student & Staff Management",
      "Report Cards & Transcripts",
      "Accounting & Fee Management",
      "Computer-Based Testing (CBT)",
      "E-Learning System",
    ],
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    images: [
      "/projects/stanfield-school/section.png",
      "/projects/stanfield-school/Home-slider-Stanfield.png",
    ],
  },
];

export const PROJECT_CATEGORIES = ["All", "Web", "Mobile", "Design", "AI"];

export const getProjectById = (id) => projects.find((p) => p.id === id);

export default projects;
