"use client";

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description:
      'Crafting responsive and interactive interfaces using modern JavaScript frameworks to ensure seamless user experiences.',
    href: '/services/frontend',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:
      'Designing intuitive user interfaces and engaging user experiences focused on usability, accessibility, and aesthetics.',
    href: '/services/ui-ux',
  },
  {
    num: '03',
    title: 'Backend Development',
    description:
      'Building scalable server-side applications, APIs, and databases with a focus on performance and security.',
    href: '/services/backend',
  },
  {
    num: '04',
    title: 'DevOps Engineering',
    description:
      'Automating deployment pipelines, managing cloud infrastructure, and ensuring system reliability and uptime.',
    href: '/services/devops',
  },
  {
    num: '05',
    title: 'Automation Testing',
    description:
      'Implementing automated testing strategies to ensure software reliability and reduce manual QA efforts.',
    href: '/services/testing',
  },
  {
    num: '06',
    title: 'Python App Development',
    description:
      'Creating robust and efficient Python-based applications for web, automation, and data processing tasks.',
    href: '/services/python',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6, ease: 'easeInOut' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col gap-6 justify-center"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-4xl font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </span>

                {service.href ? (
                  <Link
                    href={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                ) : (
                  <div className="w-[50px] h-[50px] rounded-full bg-white/20 flex items-center justify-center opacity-50 cursor-not-allowed">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </div>
                )}
              </div>

              {/* Title */}
              <h2 className="text-[30px] xl:text-[40px] font-bold leading-tight text-white group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/70 leading-relaxed">{service.description}</p>

              {/* Divider */}
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
