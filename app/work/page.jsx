"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "FitnessX App",
    title: "project 1",
    discription:
      "A role-based Flutter fitness app using Supabase with full CRUD operations, where trainers assign workouts and members track workouts, sleep time, and progress with secure cloud authentication.",
    stack: [{ name: "Flutter" },{ name: "Dart" }, { name: "Supabase" }, { name: "Firebase" }, { name: "Tailwind css" }],
    image: "/assets/work/thumb9.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/Fitness-App",
  },
    {
    num: "02",
    category: "3D IPhone-Website",
    title: "project 2",
    discription:
      "Recreate the Apple IPhone 15 pro website, combining GSAP animations and Three.js 3D effects.",
    stack: [{ name: "React" }, { name: "Threejs" }, { name: "GSAP" }, { name: "Tailwind css" }],
    image: "/assets/work/thumb1.png",
    live: "https://appleweb-xi.vercel.app/",
    github: "https://github.com/Sashika-Dilmina/Apple-Website",
  },
  {
    num: "03",
    category: "SpendWise",
    title: "project 3",
    discription:
      "Fully responsive Expense Tracker App using the MERN (MongoDB, Express, React, Node.js) stack!",
    stack: [{ name: "MongoDB" }, { name: "Express" }, { name: "React" }, { name: "Node.js" }],
    image: "/assets/work/thumb7.png",
    live: "https://spend-wise-bhah.vercel.app/",
    github: "https://github.com/Sashika-Dilmina/SpendWise",
  },
  {
    num: "04",
    category: "Melody-Master Music Store",
    title: "project 4",
    discription:
      "Melody Masters is a responsive PHP–MySQL e-commerce platform for selling musical instruments and sheet music with secure login, cart, and admin inventory management.",
    stack: [{ name: "PHP" }, { name: "MySQL" }, { name: "HTML 5" }, { name: "CSS 3" }],
    image: "/assets/work/thumb10.png",
    live: "https://melody-master.infinityfreeapp.com/",
    github: "https://github.com/Sashika-Dilmina/melody-masters-store",
  },
  {
    num: "05",
    category: "Restaurant-Management-System",
    title: "project 5",
    discription:
      "Admin Dashboard for a Restaurant Management System using HTML, CSS, JavaScript, and PHP.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Php" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/Restaurant-Management-System",
  },
  {
    num: "06",
    category: "Recipe-App",
    title: "project 6",
    discription:
      "A React Native & Expo recipe app that uses an API to search and view recipes, with a feature to save favorite recipes for quick access.",
    stack: [{ name: "React Native" }, { name: "Expo" }, { name: "API" }],
    image: "/assets/work/thumb8.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/Recipe-App-",
  },
  {
    num: "07",
    category: "PageTurner - Online Book Store",
    title: "project 7",
    discription:
      "Web application built with HTML, CSS, JavaScript, PHP, and MySQL with shopping cart & admin features.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Php" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/Book-store",
  },
  {
    num: "08",
    category: "Hotel-management-system",
    title: "project 8",
    discription:
      "Java desktop application built with Swing and JDBC to streamline hotel operations.",
    stack: [{ name: "Java" }],
    image: "/assets/work/thumb6.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/Hotel-management-system",
  },
  {
    num: "09",
    category: "AI-Powered-ChatBot",
    title: "project 9",
    discription:
      "Simple AI chatbot using HTML, CSS, and JavaScript with an interactive interface.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/AI-Powered-ChatBot",
  },
  {
    num: "10",
    category: "PM-Manager",
    title: "project 10",
    discription:
      "Modern project management tool with Gantt chart, task tracking, and PDF export built with React & TypeScript.",
    stack: [{ name: "React" }, { name: "Typescript" }],
    image: "/assets/work/thumb5.png",
    live: "",
    github: "https://github.com/Sashika-Dilmina/PM-Manager",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2.4, duration: 0.6, ease: "easeInOut" } }}
      className="h-screen min-h-[80vh] flex flex-col justify-start py-6 xl:px-0"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col xl:flex-row xl:gap-12 h-full">
          {/* Project Details */}
          <motion.div
            key={project.num}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full xl:w-1/2 flex flex-col justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-6xl font-extrabold text-transparent text-outline select-none">{project.num}</h2>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white capitalize group-hover:text-accent transition-colors duration-500">
                {project.category}
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">{project.discription}</p>

              <ul className="flex flex-wrap gap-3">
                {project.stack.map((item, idx) => (
                  <li
                    key={idx}
                    className="inline-block bg-accent/20 text-accent text-sm font-semibold py-1 px-3 rounded-lg select-none"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              <hr className="border-gray-700 my-4" />

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Button */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Project"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-12 h-12 rounded-full bg-accent flex justify-center items-center text-primary shadow-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer"
                          tabIndex={0}
                        >
                          <BsArrowUpRight className="text-2xl" />
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                ) : (
                  <div
                    className="w-12 h-12 rounded-full bg-accent flex justify-center items-center text-primary shadow-lg opacity-50 cursor-not-allowed"
                    tabIndex={0}
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger tabIndex={-1}>
                          <BsArrowUpRight className="text-2xl" />
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p>Live Project Not Available</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}

                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="group"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="w-12 h-12 rounded-full bg-accent flex justify-center items-center text-primary shadow-lg hover:bg-accent-hover transition-colors duration-300"
                        tabIndex={0}
                      >
                        <BsGithub className="text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project Images with Swiper */}
          <div className="w-full xl:w-1/2 relative flex justify-center items-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="w-full h-[360px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl"
              grabCursor={true}
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  <div className="relative w-full h-full group overflow-hidden rounded-3xl shadow-lg cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                  </div>
                </SwiperSlide>
              ))}

              {/* Custom slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-3 absolute right-0 bottom-[40px] xl:bottom-[60px] z-30 w-full justify-between xl:w-max xl:justify-end px-6"
                btnStyles="bg-accent hover:bg-accent-hover text-primary w-10 h-10 md:w-12 md:h-12 flex justify-center items-center rounded-md shadow-lg transition-colors duration-300"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
