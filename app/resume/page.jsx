"use client";

import { Description } from "@radix-ui/react-dialog";
import { Item } from "@radix-ui/react-select";
import { info } from "autoprefixer";
import { icons } from "lucide-react";
import { comma } from "postcss/lib/list";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

//about data

const about = {
    title:'About me',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus aliquid",
    info: [
        {
            fieldName: "Name",
            fielsValue: "Siwanthaka Savinda",
        },
        {
            fieldName: "Phone",
            fielsValue: "(+94) 75 081 8024",
        },
        {
            fieldName: "Experience",
            fielsValue: "3 Year",
        },
        {
            fieldName: "LinkedIn",
            fielsValue: "Siwanthaka Savinda",
        },
        {
            fieldName: "Nationality",
            fielsValue: "Srilankan",
        },
        {
            fieldName: "Email",
            fielsValue: "siwanthakasavinda@gmail.com",
        },
        {
            fieldName: "FreeLance",
            fielsValue: "Available",
        },
        {
            fieldName: "Languages",
            fielsValue: "English, Sinhala",
        },
    ]

};

//experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    items: [
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
    ],
};

//education data

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Education',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    items: [
        {
            Campus: "Dev Wizards pvt ltd",
            Degree: "(BSc) Hons in Software Engineering",
            duration: "2023 - 2027",
        },
    ],
};

//skill data

const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { easeIn, motion } from "framer-motion";


const Resume = () => {
    return (
    <motion.div 
        initial={{opacity: 0}} animate={{opacity: 1, 
        transition: {delay:2.4, duration: 0.4, ease: easeIn},
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs 
                defaultValue="experience" 
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                {/* content */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        experience
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );  
};
 export default Resume;