"use client";

import {motion} from "framer-motion";
import Image from "next/image";




const Photo = () =>{
    return(
         <div className="w-full h-full relative">
          <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease:'easeIn'},
                }}
            >
            
            <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease:'easeInOut'},
                }}
            
            className="w-[350px] h-[350px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
            ></motion.div>
                <Image
                 src="/assets/photo.png" 
                 priority 
                 quality={100} 
                 fill 
                alt="" 
                className="object-contain"
                />
           <motion.div 
            initial={{opacity:0}} 
            animate={{
                opacity: 1,
                transition: {delay: 2, duration: 0.4, ease:'easeInOut'},
                }}
            ></motion.div>

            {/*circle*/}
            <motion.svg className= " w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="253" cy="253" r="250" strole="#00ff99" stroke/>
            </motion.svg>
        </motion.div>
        </div>
    
    );
};

export default Photo;