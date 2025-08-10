"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 070 299 5495",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sashikadilmina2001@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Colombo greater, Malabe",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // For Select (which might not trigger a normal event), handle separately:
  const handleServiceChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .send(
        "service_123", // Replace with your EmailJS Service ID
        "template_tgc05v8", // Replace with your EmailJS Template ID
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        "m1EsBVrOS2Speci9z" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error:", error);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] -mt-5">
          {/* form */}
          <div className="xl:w-[50%] xl:h-[30%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent -mt-6">Let's work together</h3>
              <p className="text-white/60 text-base">
                I’m available for freelance work or full-time collaboration. Share
                your project details and let's connect.
              </p>

              {/* input grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* select */}
              <Select onValueChange={handleServiceChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="uiux">Ui/Ux Design</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="devops">DevOps Engineering</SelectItem>
                    <SelectItem value="automation">Automation Testing</SelectItem>
                    <SelectItem value="python">Python App Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                className="h-[100px]"
                placeholder="Write your message or project details..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* button */}
              <Button size="md" className="max-w-[160px] self-start" type="submit">
                Send message
              </Button>

              {/* status message */}
              {status && (
                <p className="mt-3 text-center text-sm text-gray-300">{status}</p>
              )}
            </form>
          </div>

          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
            aria-label="Contact Information"
          >
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6"
                  role="listitem"
                >
                  <div
                    className="w-[52px] h-[57px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
