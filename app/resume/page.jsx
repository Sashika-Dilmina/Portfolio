"use client";

import * as React from "react";


import {
    FaHtml5, 
    FaCss3,
    FaJs,
    FaReact, 
    FaFigma ,
    FaNodeJs
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
    title: 'About me',
    description: "Lorem ipsum dolor sit amet consectetur adipsicing.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sashika Dilmina"
        },
         {
            fieldName: "Phone",
            fieldValue: "(+94) 070 299 5495"
        },
         {
            fieldName: "Location",
            fieldValue: "Colombo"
        },
         {
            fieldName: "Nationality",
            fieldValue: "Sri Lankan"
        },
         {
            fieldName: "E-mail",
            fieldValue: "sashikadilina2001@gmail.com"
        },
         {
            fieldName: "Interests",
            fieldValue: "Reading tech blogs, UI design, Traveling"
        },
        {
            fieldName: "Languages",
            fieldValue: "English/Sinhala"
        },
    ]
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: "Lorem ipsum dolor sit amet consectetur adipsicing.",
    items: [
        {
            Academic_Projects: "Restaurant Management System",
            Personal_Projects: "Ai-Powered Chat Bot",
            Open_Source_Contributions: "Apple Website" 
        }
    ]
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description: "Lorem ipsum dolor sit amet consectetur adipsicing.",
    items: [
        {
            Degree_Program: "BSC in Software Engineering",
            University_Name: "CINEC Campus",
            Duration: "2023-2027", 
        }
    ]
};

// skilld data
const skills = {
    
    title: 'My skills',
    description: "Lorem ipsum dolor sit amet consectetur adipsicing.",
    SkillList: [
        {
            icon:<FaHtml5/>,
            name: "html 5",
        },
         {
            icon:<FaCss3/>,
            name: "css 3",
        },
         {
            icon:<FaJs/>,
            name: "javascript",
        },
         {
            icon:<FaReact/>,
            name: "react.js",
        },
         {
            icon:<SiNextdotjs/>,
            name: "next.js",
        },
         {
            icon:<SiTailwindcss/>,
            name: "tailwind.css",
        },
         {
            icon:<FaNodeJs/>,
            name: "node.js",
        },
         {
            icon:<FaFigma/>,
            name: "figma",
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,

 } from "@/components/ui/tooltip"; 

 import { ScrollArea } from "@radix-ui/react-scroll-area";
 import { motion} from "framer-motion";

const Resume = () => {
    return (
        <motion.div 
    initial = {{opacity: 0}} 
    animate={{
        opacity: 1,
        transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
     <div className="container mx-auto">
        <Tabs>
            <TabsList>
                <TabsTrigger>Experience </TabsTrigger>
                <TabsTrigger>Education </TabsTrigger>
                <TabsTrigger>Skills </TabsTrigger>
                <TabsTrigger>About me</TabsTrigger>
            </TabsList>
        </Tabs>
     </div>
    </motion.div>

    );
    
    
};

export default Resume;