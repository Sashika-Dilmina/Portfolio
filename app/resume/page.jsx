"use client";

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
}

const Resume = () => {
    return <div>Resume page</div>
    
};

export default Resume;