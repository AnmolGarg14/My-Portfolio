import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  powerbi,
  c,
  mysql,
  internnexus,
  technohacks,
  codsoft,
  foodweb,
  promptify,
  admin,
  easyshare,
  currency,
  dashboard,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Project Coordinator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "power bi",
    icon: powerbi,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "CodSoft",
    icon: codsoft,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Present",
    points: [
      "Participating in the development and upkeep of web applications, utilizing a mix of technologies to accomplish various tasks.",
      "Demonstrating capability in web application development through the successful execution of assigned responsibilities.",
      "Implementing responsive design techniques to guarantee smooth user experiences across different browsers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "TechnoHacks",
    icon: technohacks,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Sept 2023",
    points: [
      "Participating in the development and upkeep of web applications, utilizing a mix of technologies to accomplish various tasks.",
      "Demonstrating capability in web application development through the successful execution of assigned responsibilities.",
      "Implementing responsive design techniques to guarantee smooth user experiences across different browsers.",
    ],
  },
  {
    title: "React.js Developer Intern",
    company_name: "InternNexus",
    icon: internnexus,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Food Ordering",
    description:
      "Web-based platform that allows users to browse, order, and manage a variety of delicious dishes from the restaurant, offering a convenient and efficient solution for satisfying culinary cravings.",
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
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: foodweb,
    source_code_link:
      "https://github.com/AnmolGarg14/Food-Ordering-Web-Application",
  },
  {
    name: "Prompt Sharing",
    description:
      "Promptify is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
    tags: [
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
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
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: promptify,
    source_code_link: "https://github.com/AnmolGarg14/Prompt-Sharing",
  },
  {
    name: "Admin Dashboard",
    description:
      "It is designed to simplify complex tasks. It acts as a bridge between the data, users, and operational objectives, providing a unified interface that allows admin to manage, monitor, and optimize various aspects of the project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/AnmolGarg14/React-Admin-Dashboard",
  },
  // {
  //   name: "File Sharing",
  //   description:
  //     "Web-based platform that enables users to upload, send, and manage files of various types and sizes, offering a streamlined and effective solution for transferring digital content.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: easyshare,
  //   source_code_link: "https://github.com/AnmolGarg14/EasyShare",
  // },
  // {
  //   name: "Currency Converter",
  //   description:
  //     "A comprehensive currency converter website that allows users to quickly convert currencies, and access real-time currency conversion tools.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "javascript",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: currency,
  //   source_code_link: "https://github.com/AnmolGarg14/Currency-Converter",
  // },
  // {
  //   name: "Power BI Dashboards",
  //   description:
  //     "Empowering data-driven decision-making with dynamic Power BI dashboards. Transforming complex information into actionable insights, driving efficiency and informed strategies.",
  //   tags: [
  //     {
  //       name: "powerbi",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "powerqueryeditor",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: dashboard,
  //   source_code_link: "https://github.com/AnmolGarg14/Power-BI-Dashboards",
  // },
];

export { services, technologies, experiences, testimonials, projects };
