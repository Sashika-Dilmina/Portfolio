"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaPhp,
  FaAndroid,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

// ---------------- About ----------------
const about = {
  title: "About Me",
  description:
    "I’m a passionate and results-driven Full Stack Developer with over 3 years of experience building scalable web applications and backend services. " +
    "My journey in software engineering has equipped me with strong technical expertise in technologies such as React, Node.js, Next.js, and Tailwind CSS, as well as proficiency in languages like Python, Java, and PHP. " +
    "Currently pursuing a (BSc) Hons in Software Engineering at CINEC Campus.",

  info: [
    { fieldName: "Name", fieldValue: "Sashika Dilmina" },
    { fieldName: "Phone", fieldValue: "(+94) 70 299 5495" },
    { fieldName: "Experience", fieldValue: "3 Years" },
    { fieldName: "LinkedIn", fieldValue: "sashika dilmina" },
    { fieldName: "Nationality", fieldValue: "Sri Lankan" },
    { fieldName: "Email", fieldValue: "sashikadilmina2001@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Sinhala" },
  ],
};

// ---------------- Experience ----------------
const experience = {
  title: "My Experience",
  items: [
    {
      company: "CINEC Campus",
      position: "Undergraduate Software Engineer",
      duration: "2023 - 2025",
      description:
        "Undergraduate Software Engineering student with hands-on experience in web development (HTML, CSS, JavaScript, React), and programming in Java and Python. Worked on AI-based projects integrating ML concepts into real-world solutions. Strong problem-solving, teamwork, and software design skills.",
    },
  ],
};

// ---------------- Education ----------------
const education = {
  title: "My Education",
  description:
    "Educational qualifications in software engineering, programming, and machine learning.",
  items: [
    { Campus: "CINEC Campus", Degree: "(BSc) Software Engineering", duration: "2023 - 2027" },
    { Campus: "IJSE", Degree: "Java Programming Language", duration: "2023 - 2024" },
    { Campus: "SLITT", Degree: "AI & Machine Learning", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Python Language", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Web Development", duration: "2024" },
    { Campus: "University of Moratuwa", Degree: "Project Management", duration: "2024" },
  ],
};

// ---------------- Skills ----------------
const skills = {
  title: "My Skills",
  description: "Technologies and tools I have worked with.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaAndroid />, name: "Android Studio" },
  ],
};

// ---------------- Resume Component ----------------
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.6, ease: easeIn } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Sidebar Tabs */}
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4">
            {["experience", "education", "skills", "about"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="text-lg font-semibold border-l-4 border-transparent hover:border-accent hover:text-accent transition-all duration-300 px-4 py-2 text-left rounded-md"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience">
              <Section
                title={experience.title}
                description={experience.description}
                items={experience.items}
                type="experience"
              />
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <Section
                title={education.title}
                description={education.description}
                items={education.items}
                type="education"
              />
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px]">
                <div className="text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mt-4">
                    {skills.description}
                  </p>
                </div>
                {/* Two Column Skills Grid */}
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex justify-center">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[120px] bg-white/5 backdrop-blur border border-white/10 shadow-md rounded-xl flex justify-center items-center group hover:border-accent transition-all duration-300">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
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

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-lg p-6 rounded-2xl hover:shadow-accent/30 hover:border-accent transition-all flex flex-col gap-6"
            >
              <div className="flex flex-col gap-[30px] w-full">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-sm font-medium">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// ---------------- Section Component ----------------
const Section = ({ title, description, items, type }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    {description && (
      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    )}

    <ScrollArea
      className={`${type === "experience" ? "h-[500px]" : "h-[400px]"} pr-4`}
    >
      <ul
        className={`grid ${
          type === "experience" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
        } gap-6`}
      >
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-lg 
            ${type === "experience" ? "min-h-[280px]" : "h-[180px]"}
            p-6 rounded-2xl hover:shadow-accent/30 hover:border-accent transition-all 
            flex flex-col justify-start items-start gap-3`}
          >
            <span className="text-accent font-semibold tracking-wide text-sm">
              {item.duration}
            </span>

            <h3 className="text-lg font-bold text-white leading-snug">
              {type === "experience" ? item.position : item.Degree}
            </h3>

            <div className="flex items-center gap-2 text-base text-white/60">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              <p>{type === "experience" ? item.company : item.Campus}</p>
            </div>

            {type === "experience" && (
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </motion.li>
        ))}
      </ul>
    </ScrollArea>
  </div>
);

export default Resume;
