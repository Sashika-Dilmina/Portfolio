"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative -mt-3 -translate-x-4 xl:-translate-x-40 transform">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
        className="relative w-[252px] h-[252px] xl:w-[355px] xl:h-[355px]" // ✅ ONE size source (same as circle)
      >
        {/* IMAGE (centered) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* You can control image size here */}
          <div className="relative w-[230px] h-[230px] xl:w-[330px] xl:h-[330px] rounded-full overflow-hidden">
            <Image
              src="/assets/dp.png"
              priority
              quality={100}
              fill
              sizes="(max-width: 768px) 252px, (max-width: 1200px) 355px, 355px"
              alt="Profile"
              className="object-cover" // ✅ better than contain for profile photos
            />
          </div>
        </motion.div>

        {/* CIRCLE (same wrapper size) */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
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
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;