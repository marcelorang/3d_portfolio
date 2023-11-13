import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <div className={`relative inset-0 w-full h-screen mx-auto`}>
      <div
        className={`absolute top-[120px] inset-x-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Oi, eu sou <span className='text-[#915EFF]'>Marcelo</span>
          </h1>
          <p className={`${styles.heroSubText} ma-2 text-white-100`}>
            Desenvolvo em 3D , interfaces <br className='sm:block hidden' />
            de usuários, aplicações web e Mobile.
          </p>
        </div>
      </div>
      <div className={`relative top-[100px] h-[800px] w-full`}>
        <ComputersCanvas />
      </div>




      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center '>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default Hero;