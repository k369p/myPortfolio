// Import from Simple Icons (si)
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiAngular,
  SiSpring, // Changed from SiSpringboot
  SiRedux,
  SiExpress,
  SiJest,
  SiApachespark,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiRedis,
} from "react-icons/si"

//Images
import D2DImage from '../assets/D2DServices.png'
import CMS from '../assets/CMS.png'
import PMS from '../assets/PMS.png'
import SS from '../assets/SS.png'
import UM from '../assets/UM.png'
import AGP from '../assets/AGP.png'

// Import from Font Awesome (fa)
import { FaJava, FaAws, FaMicrosoft } from "react-icons/fa" // Import Java and AWS icons from Font Awesome

// Skills data with react-icons
export const skills = [
  { name: "Java", icon: <FaJava className="w-full h-full text-orange-700" /> }, // Using Font Awesome Java icon
  { name: "Python", icon: <SiPython className="w-full h-full text-yellow-500" /> },
  { name: "C", icon: <SiC className="w-full h-full text-blue-800" /> },
  { name: "C++", icon: <SiCplusplus className="w-full h-full text-blue-600" /> },
  { name: "HTML", icon: <SiHtml5 className="w-full h-full text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="w-full h-full text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-full h-full text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-full h-full text-blue-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-full h-full text-green-600" /> },
  { name: "React", icon: <SiReact className="w-full h-full text-sky-500" /> },
  { name: "Angular", icon: <SiAngular className="w-full h-full text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpring className="w-full h-full text-green-700" /> }, // Changed from SiSpringboot to SiSpring
  { name: "Redux", icon: <SiRedux className="w-full h-full text-purple-600" /> },
  { name: "Express", icon: <SiExpress className="w-full h-full text-black dark:text-white" /> },
  { name: "Jest", icon: <SiJest className="w-full h-full text-pink-500" /> },
  { name: "Rest API", icon: <SiApachespark className="w-full h-full text-orange-500" /> }, // Placeholder
  { name: "Tailwind", icon: <SiTailwindcss className="w-full h-full text-sky-500" /> },
  { name: "AWS", icon: <FaAws className="w-full h-full text-orange-500" /> }, // Using Font Awesome AWS icon
  { name: "Azure", icon: <FaMicrosoft className="w-full h-full text-blue-500" /> },
  { name: "Docker", icon: <SiDocker className="w-full h-full text-blue-700" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="w-full h-full text-indigo-700" /> },
  { name: "MySQL", icon: <SiMysql className="w-full h-full text-blue-800" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-full h-full text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-full h-full text-green-500" /> },
  { name: "Kafka", icon: <SiApachekafka className="w-full h-full text-black dark:text-white" /> },
  { name: "Redis", icon: <SiRedis className="w-full h-full text-red-600" /> },
]

// Projects data
export const projects = [
  {
    title: "D2D Services",
    description:
      "This app allows users to browse service categories, explore featured services, filter and search for specific providers, manage bookings, and communicate directly with service professionals through in-app messaging.",
    technologies: ["Next.js", "Expo", "Tailwind CSS", "TypeScript", "React Native", "MongoDB"],
    image: D2DImage,
    github: "https://github.com/k369p/D2D-Services",
  },
  {
    title: "College Management System",
    description:
      "The College Management System is a full-stack application designed to manage all academic and administrative activities of a college with dedicated portals for different users.",
    technologies: ["React", "Redux", "Tailwind CSS", "Node.js", "Express.js", "Next.js", "MongoDB"],
    image: CMS,
    github: "https://github.com/k369p/CMS",
  },
  {
    title: "PharmaSys",
    description: "A modern, responsive web-based Pharmacy Management System built with prescription managing, Home Delivery and Refil request.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Radix UI", "MongoDB"],
    image: PMS,
    github: "https://github.com/k369p/PharmaSys",
  },
  {
    title: "SpendingSMART",
    description: "Maintain a record of your joint spending and balances with roommates, friends, family, groups, and vacations.",
    technologies: ["React", "Expo", "Node.js", "MongoDB", "Redis"],
    image: SS,
    github: "https://github.com/k369p/SpendingSMART",
  },
  {
    title: "Urja-Marg",
    description: "(ऊर्जा-मार्ग) helps users track daily food consumption, especially focused on Indian cuisine, by logging meals, calculating calorie intake, and visualizing dietary progress over time.",
    technologies: ["React Native", "TypeScript", "Tailwind", "RadixUI", "Embla Carousel", "Vaul"],
    image: UM,
    github: "https://github.com/k369p/Urja-Marg",
  },
  {
    title: "Age & Gender Prediction System",
    description: "A powerful and interactive web application that predicts age groups and gender from facial images using deep learning. Built with TensorFlow, and OpenCV, it showcases a complete AI workflow from model training to a user-facing frontend with modern UI/UX.",
    technologies: ["Django", "Python", "TensorFlow", "OpenCV", "CNNs: ResNet-50", "MobileNet", "VGG-16", "EfficientNet", "UTKFace"],
    image: AGP,
    github: "https://github.com/k369p/Age-Gender-Prediction",
  },
]

// Journey data
export const journey = [
  {
    title: "Master in Information Technology",
    organization: "University of Massachusetts - Boston, MA, USA",
    period: "Present",
    description:
      "Coursework: System Analysis & Design, Database Management System and User Interface Design, Business Programming with Python.",
    side: "left",
    },
  {
    title: "Software Engineer",
    organization: "ParamITSolution, India",
    period: "Jan,2022 - Aug,2023",
    description:
      "Engineered scalable RESTful APIs and optimized database interactions using Spring Boot, Hibernate, and Redis, reducing checkout errors by 20% and improving conversion by 10%. Refactored legacy code to enhance performance by 25%, built dynamic Angular components to streamline UX, and automated 80+ test cases with JUnit and Selenium—cutting production bugs by 40%.",
    side: "right",
    },
  {
    title: "B.Tech in Computer Engineering",
    organization: "Charotar University of Science & Technology, India",
    period: "April, 2021",
    description:
      "Coursework: Java Programming, Programming with Python, Data Structure & Algorithms, Database Management, Basics to Cloud Computing, Operating System, Advance Computer Networking, Entering to Blockchain Technology.",
    side: "left",
    },
  {
    title: "Full stack developer Intern",
    organization: "Chirag Sales Agency, India",
    period: "Aug,2020 - Mar,2021",
    description:
      "Built backend services in Node.js and Spring Boot for time tracking, billing automation, and real-time alerts, enhancing accuracy and efficiency for 800+ users. Integrated AWS S3 for invoice storage and used React with Axios for smooth, real-time data updates.",
    side: "right",
    },
]
