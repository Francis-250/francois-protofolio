import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSchool,
  FaUniversity,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import { FaPhotoFilm } from "react-icons/fa6";
import myImage from "./img/myImg.jpg";

export const asset = {
  myImage,
};

export const aboutContents = [
  {
    title: "high school",
    sub: <FaSchool />,
    option: "Software development",
    year: "2020-2023",
    tasks: [
      "build news website with php,mysql,html,css",
      "Learned basics database management with MySQL",
    ],
  },
  {
    title: "College",
    sub: <FaUniversity />,
    option: "Information Communication Technology",
    year: "2024-",
    tasks: [
      "Built an online ticket booking system using React and Node.js",
      "Learned advanced database management with MySQL",
    ],
  },
];

export const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    level: 80,
  },
  {
    icon: <FaCss3 />,
    title: "CSS",
    level: 85,
  },
  {
    icon: <FaJs />,
    title: "JavaScript",
    level: 50,
  },
  {
    icon: <FaReact />,
    title: "React.js",
    level: 55,
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    level: 50,
  },
  {
    icon: <FaPhp />,
    title: "PHP",
    level: 70,
  },
  {
    icon: <FaFigma />,
    title: "Figma",
    level: 70,
  },
  {
    icon: <FaPhotoFilm />,
    title: "Video Editing",
    level: 60,
  },
];

export const homeContents = [
  {
    myName: "Munyankindi Francois",
    title: "Froatend developer",
    description:
      "Junior Frontend Developer passionate about creating engaging and visually appealing web applications. With a strong foundation in HTML, CSS, JavaScript, and modern tools like React and Tailwind CSS, I specialize in building responsive, user-friendly interfaces that deliver great experiences on any device.",
  },
];

// navbar

export const menu = [
  <a
    href="#"
    className="text-lg text-black sm:text-white hover:text-[#65ED52] capitalize"
  >
    Home
  </a>,
  <a
    href="#about"
    className="text-lg text-black sm:text-white hover:text-[#65ED52] capitalize"
  >
    About
  </a>,
  <a
    href="#services"
    className="text-lg text-black sm:text-white hover:text-[#65ED52] capitalize"
  >
    Services
  </a>,
  <a
    href="#portfolio"
    className="text-lg text-black sm:text-white hover:text-[#65ED52] capitalize"
  >
    Portfolio
  </a>,
  <a
    href="#contact"
    className="text-lg text-black sm:text-white hover:text-[#65ED52] capitalize"
  >
    Contact
  </a>,
];

export const social = [
  <a
    href="https://github.com/Francis-250"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-[#333] hover:text-[#65ED52] transition-all duration-300"
  >
    <FaGithub />
  </a>,
  <a
    href="https://www.linkedin.com/in/munyankindi-fran%C3%A7ois-94a137296/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-[#0077B5] hover:text-[#65ED52] transition-all duration-300"
  >
    <FaLinkedin />
  </a>,
];

export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and user-friendly websites using modern technologies.",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces.",
  },
  {
    title: "Frontend Optimization",
    description: "Optimizing websites for performance and accessibility.",
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with React and Tailwind CSS. Features include product filtering, cart management, and secure checkout.",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills and projects. Built with React, Framer Motion, and Tailwind CSS for a modern and interactive experience.",
  },
  {
    title: "Task Management App",
    description:
      "A task management application with drag-and-drop functionality. Built with React and Firebase for real-time updates and user authentication.",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging platform where users can create, read, update, and delete posts. Built with Next.js, Markdown, and a headless CMS.",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather updates for any location. Built with React and the OpenWeatherMap API.",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing social media accounts and analyzing performance metrics. Built with React, Chart.js, and Firebase.",
  },
];
