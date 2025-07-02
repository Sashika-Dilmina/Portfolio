import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return(
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between 
         xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br/> <span className="text-accent">Sashika Dilmina</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I specialize in crafting elegant digital experiences and have hands-on proficiency
                 in a variety of programming languages and modern technologies as a Software Engineering undergraduate.
              </p>
              {/*btn and socials*/}
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
      </section>

  ) ;
    
};

export default Home;