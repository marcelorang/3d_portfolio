import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  atom,
  vuejs,
  mysql,
  ionic,
  ecommerce,
  ecommerce1,
  ecommerce2,
  ecommerce3,
  ecommerce4,
  ecommerce5,
  medzip,
  medzip1,
  medzip3,
  medzip4,
  // olhonolance,
  olhonolance1,
  olhonolance2,
  olhonolance3,
  olhonolance4,
  olhonolance5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Ionic Framework",
    icon: ionic,
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
    name: "VueJS",
    icon: vuejs,
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
    name: "MySql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "Vue.js Developer",
    company_name: "Atom Dev Studios",
    icon: atom,
    iconBg: "#383E56",
    date: "Maio 2022 - Atualmente",
    points: [
      "Desenvolvendo e mantendo aplicações web utilizando Vue.js e outras tecnologias relacionadas.",
      "Colaborando com equipes multifuncionais, incluindo designers, gerentes de produtos e outros desenvolvedores para criar produtos de alta qualidade",
      "Implementando design responsivo e garantindo compatibilidade entre navegadores.",
      "Participando de revisões de código e fornecendo feedback construtivo para outros desenvolvedores.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "E-commerce",
    description:
      "Sistema E-commerce fullstack desenvolvido com NextJS no Frontend e NodeJs no Backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: [
      ecommerce,
      ecommerce1,
      ecommerce2,
      ecommerce3,
      ecommerce4,
      ecommerce5,
    ],
    source_code_link: "https://github.com/marcelorang/ecommerce",
  },
  {
    name: "MedZip",
    description:
      "Sistema para clínicas médicas com dashboard admin financeiro, agendamento de consultas, etc.",
    tags: [
      {
        name: "VueJs",
        color: "green-text-gradient",
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
    image: [medzip, medzip1, medzip3, medzip4],
    source_code_link: "https://www.medzip.com.br",
  },

  {
    name: "Olho no lance",
    description:
      "Aplicativo Mobile desenvolvido para captura de vídeo instantâneo de jogadas em ambientes de esportes",
    tags: [
      {
        name: "VueJs",
        color: "blue-text-gradient",
      },
      {
        name: "Ionic",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: [
      // olhonolance,
      olhonolance5,
      olhonolance1,
      olhonolance2,
      olhonolance3,
      olhonolance4,
    ],
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
