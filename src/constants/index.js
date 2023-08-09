import { github, facebook, instagram, linkedin, Tablet, Desktop } from "../assets";

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
export { navLinks, socialMedia, services };
