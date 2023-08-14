import { github, facebook, instagram, linkedin, Tablet, Desktop, tailwind, nextjs, laravel, mysql, java, typescript, reactDark, Javascript, html, css, nodejs, prisma, git } from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMedia = [
  // {
  //   id: "github",
  //   icon: github,
  //   link: "https://github.com/GymnastiarAlmaGhifari",
  // },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/agim-alma-4a7197277/",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/agimkipli/",
  },
  {
    id: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/agim.ghifari",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: Desktop,
  },
  {
    title: "Web Manager",
    icon: Tablet,
  },
];

const technologies = [
  // {
  //   title: "HTML",
  //   icon: html,
  // },
  // {
  //   title: "CSS",
  //   icon: css,
  // },
  // {
  //   title: "Javascript",
  //   icon: Javascript,
  // },
  {
    title: "Typescript",
    icon: typescript,
  },
  // {
  //   title: "React",
  //   icon: reactDark,
  // },
  {
    title: "NextJS",
    icon: nextjs,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "Laravel",
    icon: laravel,
  },
  {
    title: "NodeJS",
    icon: nodejs,
  },
  {
    title: "Git",
    icon: git,
  },
  {
    title: "Prisma",
    icon: prisma,
  },
  {
    title: "MySQL",
    icon: mysql,
  },
];
const projects = [
  {
    name: "Car Rent",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Javascript,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tailwind,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: typescript,
    source_code_link: "https://github.com/",
  },
];
export { navLinks, socialMedia, services, technologies, projects };
