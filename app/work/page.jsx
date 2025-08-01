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
        category: 'frontend',
        title : 'project 1',
        discription: "Lorem ipsum hfjfkssffsf. ksfksfkfksfkff!",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"}],
        image:'/assets/work/thumb1.png',
        live: "",
        github: "",
    },
    {
        num : '02',
        category: 'frontend',
        title : 'project 2',
        discription: "Lorem ipsum hfjfkssffsf. ksfksfkfksfkff!",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"}],
        image:'/assets/work/thumb2.png',
        live: "",
        github: "",
    },

    {
        num : '03',
        category: 'frontend',
        title : 'project 3',
        discription: "Lorem ipsum hfjfkssffsf. ksfksfkfksfkff!",
        stack:[{name: "Html 5"}, {name: "Css 3"}, {name:"Javascript"}],
        image:'/assets/work/thumb3.png',
        live: '',
        github: "",
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
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
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
                            {project.category} project
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
