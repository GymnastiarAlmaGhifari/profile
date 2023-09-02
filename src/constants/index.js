import {
  //import image
  facebook,
  instagram,
  linkedin,
  Tablet,
  Desktop,
  tailwind,
  nextjs,
  laravel,
  mysql,
  java,
  typescript,
  nodejs,
  // prisma,
  git,
  rhizoma,
  tolonto,
  madiun,
  tokoberkah,
  bimbel_linear,
  mern,
  laravel_bimbel_linear,
  t3stack_credential,
} from "../assets";
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
  // {
  //   title: "Tailwind",
  //   icon: tailwind,
  // },
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
  // {
  //   title: "Git",
  //   icon: git,
  // },
  // {
  //   title: "Prisma",
  //   icon: prisma,
  // },
  {
    title: "MySQL",
    icon: mysql,
  },
];
const projects = [
  {
    name: "Rhizoma",
    description: "A Portfolio Website Showcasing Indonesian Spice Variety. Explore fresh, dried, and powdered options of turmeric, ginger, galangal, and more.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: rhizoma,
    source_code_link: "https://github.com/Gymnastiar1945/Rhizoma",
  },
  {
    name: "Toko Berkah",
    description: "Empowering grocery store transactions with a desktop cashier app. Seamlessly manage sales, history, graphics, retail, wholesale, and efficient delivery integration.",
    tags: [
      {
        name: "XML",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: tokoberkah,
    source_code_link: "https://github.com/YogaNovvaindra/Toko-Berkah",
  },
  {
    name: "Madiun City Guide",
    description: "Immerse in urban allure. Explore history, culture, cuisine, modernity. Unveil Madiun's charm through captivating visuals and insightful descriptions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: madiun,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/Madiun",
  },
  {
    name: "Tolonto Playstation",
    description: "PS Rental Platform with the role-based system. Manage branches, rentals, on-site/off-site gaming, services, transactions, notifications, and analytics seamlessly.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: tolonto,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/Tolonto-TA",
  },

  {
    name: "T3Stack Credential",
    // t3stack_credential role sistem
    description: "A website that allows users to login, and manage their credentials. Seamlessly manage user roles, permissions, and credentials.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "NextAuth",
        color: "blue-text-gradient",
      },
      {
        name: "tRPC",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: t3stack_credential,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/t3stack_credential_jwt_roles",
  },

  {
    name: "Laravel Role Permission",
    // laravel_role_permission role sistem and crud
    description: "Website created with Laravel, Reactjs and TailwindCSS. This website is used to manage user roles, permissions, and credentials. This website also has a CRUD feature.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: laravel_bimbel_linear,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/laravel_bimbel_linear",
  },
  {
    name: "MERN CRUD",
    description: "  Effortlessly manage data using ReactJS, Tailwind for styling, Express and NodeJS for backend, plus MySQL for the database in this dynamic MERN stack application.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: mern,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/MERN-STACK",
  },
  {
    name: "Bimbel Linear",
    description: "A tutoring website with multiple features of Modules, Roles, Payments, Notifications, Customizable Landings, Backend Controls, Exclusive Discounts.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "NextAuth",
        color: "blue-text-gradient",
      },
      {
        name: "SWR",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
    ],
    image: bimbel_linear,
    source_code_link: "https://github.com/GymnastiarAlmaGhifari/bimbel_next13",
  },
];
export { navLinks, socialMedia, services, technologies, projects };
