"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive interfaces using modern JavaScript frameworks to ensure seamless user experiences.",
    href: "/services/frontend",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and engaging user experiences focused on usability, accessibility, and aesthetics.",
    href: "/services/ui-ux",
  },
  {
    num: "03",
    title: "Backend Development",
    description:
      "Building scalable server-side applications, APIs, and databases with a focus on performance and security.",
    href: "/services/backend",
  },
  {
    num: "04",
    title: "DevOps Engineering",
    description:
      "Automating deployment pipelines, managing cloud infrastructure, and ensuring system reliability and uptime.",
    href: "/services/devops",
  },
  {
    num: "05",
    title: "Automation Testing",
    description:
      "Implementing automated testing strategies to ensure software reliability and reduce manual QA efforts.",
    href: "/services/testing",
  },
  {
    num: "06",
    title: "Python App Development",
    description:
      "Creating robust and efficient Python-based applications for web, automation, and data processing tasks.",
    href: "/services/python",
  },
];

const Services = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.7, ease: "easeOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#121212] rounded-2xl p-8 hover:bg-[#1e1e1e] transition-all shadow-xl hover:shadow-2xl border border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-black text-white/10 group-hover:text-accent transition-colors duration-300">
                  {service.num}
                </span>

                {service.href ? (
                  <Link
                    href={service.href}
                    className="w-[48px] h-[48px] rounded-full bg-white flex justify-center items-center transition-all duration-300 group-hover:bg-accent hover:rotate-[-45deg]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                ) : (
                  <div className="w-[48px] h-[48px] rounded-full bg-white/10 flex justify-center items-center opacity-40">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Divider */}
              <div className="mt-6 border-t border-white/10 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
