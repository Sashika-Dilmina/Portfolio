"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Container for photo and circle */}
      <div className="relative h-[298px] w-[298px] xl:h-[498px] xl:w-[498px]">
        {/* 🖼️ Profile Image (centered) */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/assets/photo.png"
            alt="Profile photo"
            fill
            priority
            quality={100}
            className="object-contain mix-blend-lighten"
          />
        </div>

        {/* ⭕ Animated Rotating Circle */}
        <motion.svg
          className="absolute inset-0 z-0"
          viewBox="0 0 506 506"
          fill="none"
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
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;
