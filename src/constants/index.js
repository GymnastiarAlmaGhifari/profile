import { github, facebook, instagram, linkedin, Tablet, Desktop, tailwind, nextjs, laravel, mysql, java, typescript, reactDark, Javascript, html, css } from "../assets";

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
  {
    id: "github",
    icon: github,
    link: "https://github.com/GymnastiarAlmaGhifari",
  },
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
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "Javascript",
    icon: Javascript,
  },
  {
    title: "Typescript",
    icon: typescript,
  },
  {
    title: "React",
    icon: reactDark,
  },
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
    title: "MySQL",
    icon: mysql,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
];

export { navLinks, socialMedia, services, technologies };
