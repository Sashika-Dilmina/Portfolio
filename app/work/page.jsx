"use client";

import {motion} from "framer-motion";
import React,{useState} from 'react';


import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight,BsGithub} from 'react-icons/bs'

import { Tooltip,TooltipProvider,TooltipContent,TooltipTrigger } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";


const projects = [
    {
        num : '01',
        category: '3D IPhone-Website',
        title : 'project 1',
        discription: "Recreate the Apple IPhone 15 pro website,combining GSAP animations and Three.js 3D effects.",
        stack:[{name: "React"}, {name: "Threejs"}, {name:"GSAP"}, {name:"Tailwind css"}],
        image:'/assets/work/thumb1.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/Apple-Website",
    },
    {
        num : '02',
        category: 'Car Showcase Application',
        title : 'project 2',
        discription: "A modern, responsive Car Showcase Application built with React, Next.js, TypeScript, and Tailwind CSS, offering fast performance, sleek design, and dynamic car listings.Perfect for dealerships and enthusiasts to explore vehicles with advanced search and filtering.",
        stack:[{name: "React"}, {name: "Nextjs"}, {name:"TypeScript"},{name:"Tailwind css"} ],
        image:'/assets/work/thumb2.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/Car-Hub",
    },
    {
        num : '03',
        category: 'Restaurant-Management-System',
        title : 'project 3',
        discription: "This project is an Admin Dashboard for a Restaurant Management System, developed using HTML, CSS, JavaScript, and PHP. It allows administrators to manage food items, categories, orders, and admin users efficiently.",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"} ,{name:"Php"}],
        image:'/assets/work/thumb3.jpg',
        live: "",
        github: "https://github.com/Sashika-Dilmina/Restaurant-Management-System",
    },
    {
        num : '04',
        category: ' PageTurner - Online Book Store',
        title : 'project 4',
        discription: "A user-friendly web application built with HTML, CSS, JavaScript, PHP, and MySQL. Features include user management, book catalog, search functionality, shopping cart, and order handling for both users and admins.",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"} ,{name:"Php"}],
        image:'/assets/work/thumb4.jpg',
        live: "",
        github: "https://github.com/Sashika-Dilmina/Book-store",
    },

    {
        num : '05',
        category: 'Hotel-management-system',
        title : 'project 5',
        discription: "Hotel Management System is a Java desktop application built with Swing and JDBC to streamline hotel operations.",
        stack:[{name: "Java"}],
        image:'/assets/work/thumb8.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/Hotel-management-system",
    },
    {
        num : '06',
        category: 'AI-Powered-ChatBot',
        title : 'project 6',
        discription: "A simple AI chatbot implemented using HTML, CSS, and JavaScript. This project demonstrates how to create a basic interactive chatbot interface for web applications.",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"}],
        image:'/assets/work/thumb5.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/AI-Powered-ChatBot",
    },
     {
        num : '07',
        category: 'PM-Manager',
        title : 'project 7',
        discription: "A modern project management tool with an interactive Gantt chart, task tracking, and PDF export built using React and TypeScript.",
        stack:[{name: "React"}, {name: "Typescript"}],
        image:'/assets/work/thumb6.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/PM-Manager",
    },
     {
        num : '08',
        category: 'Programming Tutor Bot',
        title : 'project 8',
        discription: "A simple Python-based interactive chatbot designed to teach programming concepts to beginners. Learn topics like variables, loops, functions, data structures, and more—with a quiz to test your knowledge!",
        stack:[{name: "Python"}],
        image:'/assets/work/thumb7.jpg',
        live: '',
        github: "https://github.com/Sashika-Dilmina/Chat-Bot",
    },
     
     
     
    
];


const Work = () => {
    const [project,setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        //update project state based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.section 
        initial={{opacity: 0}} 
        animate={{opacity: 1, transition: {delay:2.4, duration: 0.4, ease:'easeIn'},
    }} 
        className="h-screen min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px] h-[50%]">
                <div className="w-full xl:e-[50%] xl:h-[460px] flex flex-col
                xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px]">
                    {/*outline num*/}
                    <div className="text-5xl leading-none font-extrabold text-transparent
                    text-outline">
                        {project.num}
                        </div>
                        {/*project category*/}
                        <h3 className="text-[35px] font-bold leading-none text-white
                         group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category}
                            </h3>
                        {/*project description*/}
                        <p className="text-white/60 text-lg">{project.discription}</p>
                        {/*stack*/}
                        <ul className="flex gap-4">
                            {project.stack.map((item, index)=>{
                                return <li key={index} className="text-sm text-accent">
                                    {item.name}
                                    {/*remove the last comma*/}
                                    {index !== project.stack.length -1 && ","}
                                    </li>
                            })}
                        </ul>
                        {/*border*/}
                        <div className="border border-white/20"></div>
                        {/*buttons*/}
                        <div className="flex items-center gap-4">
                            {/*Live project button*/}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full
                                        bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl 
                                            group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/*github project button*/}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full
                                        bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl 
                                            group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                
            </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30} 
                    slidesPerView={1} 
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index)=>{
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[150px] md:h-[250px] xl:h-[350px] relative group flex justify-center items-center bg-pink-50/20">

                                {/*overlay*/}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/*image*/}
                                <div className="relative w-full h-full">
                                    <Image
                                     src={project.image}
                                      fill 
                                      className="object-cover "
                                    alt=""/>
                                </div>
                                </div>
                                </SwiperSlide>
                     })}
                     {/*slider buttons*/}
                     <WorkSliderBtns
                        containerStyles="flex gap-2 absolute right-0 bottom-[40px] xl:bottom-[80px] z-20 w-full justify-between xl:w-max xl:justify-end"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[16px] w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex justify-center items-center transition-all rounded-md"
                />                  
                    </Swiper>
                    </div>
            </div>
        </div> 
    </motion.section>
    ) ;
};

export default Work;
