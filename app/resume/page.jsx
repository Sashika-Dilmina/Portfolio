"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs ,FaPython,FaJava, FaDocker, FaPhp} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {easeIn, motion} from "framer-motion";

const about = {
  title:'About me',
  description: "I’m a passionate and results-driven Full Stack Developer with over 3 years of experience building scalable web applications and backend services. " +
    "My journey in software engineering has equipped me with strong technical expertise in technologies such as React, Node.js, Next.js, and Tailwind CSS, as well as proficiency in languages like Python, Java, and PHP. " +
    "Currently pursuing a (BSc) Hons in Software Engineering at CINEC Campus.",

  info: [
    { fieldName: "Name", fieldValue: "Sashika Dilmina" },
    { fieldName: "Phone", fieldValue: "(+94) 70 299 5495" },
    { fieldName: "Experience", fieldValue: "3 Year" },
    { fieldName: "LinkedIn", fieldValue: "sashika dilmina" },
    { fieldName: "Nationality", fieldValue: "Srilankan" },
    { fieldName: "Email", fieldValue: "sashikadilmina2001@gmail.com" },
    { fieldName: "FreeLance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ]
};

const experience = {
  title: 'My Experience',
  description: "Worked on various fullstack and backend development projects.",
  items: [
    { company: "CINEC Campus", position: "Fullstack Engineer", duration: "2025 - present" },
    { company: "Dev Wizards pvt ltd", position: "Back End Developer", duration: "2025 - present" },
  ]
};

const education = {
  title: 'My Education',
  description: "Educational qualifications in software engineering, programming, and machine learning.",
  items: [
    { Campus: "CINEC Campus", Degree: "(BSc) Hons in Software Engineering", duration: "2023 - 2027" },
    { Campus: "IJSE", Degree: "Java Programming Language", duration: "2023 - 2024" },
    { Campus: "SLITT", Degree: "AI & Machine Learning", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Python Language", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Web Development", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Project Management", duration: "2024" },
  ]
};

const skills = {
  title: "My Skills",
  description: "Technologies and tools I have experience with.",
  skillList: [
    { icon: <FaHtml5 />, name: "html 5" },
    { icon: <FaCss3 />, name: "css" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiNextdotjs />, name: "next.js" },
    { icon: <SiTailwindcss />, name: "tailwind.css" },
    { icon: <FaNodeJs />, name: "node.js" },
    { icon: <FaFigma />, name: "figma" },
    { icon: <FaPython />, name: "python" },
    { icon: <FaJava />, name: "java" },
    { icon: <FaDocker />, name: "docker" },
    { icon: <FaPhp />, name: "php" },
  ]
};

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5, ease: easeIn } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4">
            {['experience', 'education', 'skills', 'about'].map((tab) => (
              <TabsTrigger 
                key={tab} 
                value={tab} 
                className="text-lg font-medium border-l-4 border-transparent hover:border-accent hover:text-accent transition-all duration-300 px-4 py-2 text-left"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience">
              <Section title={experience.title} description={experience.description} items={experience.items} type="experience" />
            </TabsContent>

            <TabsContent value="education">
              <Section title={education.title} description={education.description} items={education.items} type="education" />
            </TabsContent>

            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-white/5 backdrop-blur border border-white/10 shadow-md rounded-2xl flex justify-center items-center group hover:border-accent transition-all duration-300">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

           <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                            mx-auto xl:mx-0">
                                {about.info.map((item, index)=>{
                                    return <li key={index} className="flex items-center justify-center
                                    xl:justify-start gap-4">
                                        <span className="text-white/60">{item.fieldName}</span>
                                        <span className="text-sm">{item.fieldValue}</span>
                                    </li>
                                })}
                            </ul>
                        </div>
                
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );  
};

const Section = ({ title, description, items, type }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {items.map((item, index) => (
          <li key={index} className="bg-white/5 border border-white/10 shadow-lg h-[184px] py-6 px-8 rounded-2xl hover:scale-[1.02] transition-all flex flex-col justify-center items-center lg:items-start gap-2">
            <span className="text-accent font-medium">{item.duration}</span>
            <h3 className="text-xl font-semibold text-center lg:text-left">
              {type === 'experience' ? item.position : item.Degree}
            </h3>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p>{type === 'experience' ? item.company : item.Campus}</p>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export default Resume;
