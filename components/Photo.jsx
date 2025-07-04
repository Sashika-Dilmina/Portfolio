"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => (
  <div className="w-full h-full relative flex items-center justify-center">
    {/* 1 — the photo (simple fade‑in) */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: "easeIn" }}
      className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
    >
      <Image
        src="/assets/photo.png"
        alt="profile photo"
        fill
        priority
        quality={100}
        className="object-contain"
      />
    </motion.div>

    {/* 2 — the animated stroke circle */}
    <motion.svg
      className="absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
      viewBox="0 0 506 506"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <motion.circle
        cx="253"
        cy="253"
        r="250"
        stroke="#00ff99"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="24 10"
        animate={{
          strokeDasharray: [
            "15 120 25 25",
            "16 25 92 72",
            "4 250 22 22",
            "24 10",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.svg>
  </div>
);

export default Photo;
