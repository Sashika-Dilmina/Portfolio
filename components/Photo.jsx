"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative -mt-3 -translate-x-4 xl:-translate-x-40 transform">
        <motion.div 
          initial={{opacity: 0}} 
          animate={{
          opacity: 1, 
          transition: {delay: 2, duration: 0.4, ease: "easeIn"},
           }}
         >
          {/*image*/}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
  }}
    className="w-[230px] h-[230px] xl:w-[330px] xl:h-[330px] mix-blend-lighten absolute translate-x-6 translate-y-5 xl:translate-x-9 xl:translate-y-6"
    >
         <Image
          src="/assets/photo2.png"
          priority
          quality={100}
          fill
            sizes="(max-width: 768px) 100vw, 
                  (max-width: 1200px) 50vw,33vw"
          alt=""
          className="object-contain"
        />
        </motion.div>


          {/*circle*/}
          <motion.svg 
            className="w-[252px] xl:w-[355px] h-[252px] xl:h-[355px]" 
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
              initial={{strokeDasharray: "24 10 0 0"}}
              animate={{
                strokeDasharray: ["15 120 25 25" , "16 25 92 72" , "4 250 22 22"],
                rotate: [120,360],
              }}

              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse"

              }}  

              />
          </motion.svg>
        </motion.div>
    </div>
  );
};

export default Photo;
