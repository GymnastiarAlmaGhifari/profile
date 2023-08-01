import { motion } from "framer-motion";

import { styles } from "../../styles";
import ContactMe from "../common/ContactMe";
import { fadeIn } from "../../utils";
import Introduction from "../common/Introduction";
import RobotHand from "../common/RobotHand";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto  `}>
      <div className="absolute z-[1] w-[23%] h-[20%] -ml-36 top-60 mt-20 rounded-full white__gradient_no_blur" />
      <div className="absolute z-[0] w-[100%] h-[60%]  bottom-0 -mb-60 rounded-full black__gradient_no_blur" />
      <div className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row flex-col items-start justify-between gap-5 `}>
        {/* bagian kiri */}
        <Introduction />

        {/* bagian kanan */}
        <RobotHand />

        {/* ContactMe Start  */}
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1.5)} //fadein pertama
          // variants={fadeIn2("down", 0.4)} //fadein kedua
          initial="hidden"
          animate="show"
          exit="hidden"
          className="md:hidden block absolute top-56 xs:right-10 right-8 z-20"
        >
          <ContactMe />
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1.5)} //fadein pertama
          // variants={fadeIn2("down", 0.4)} //fadein kedua
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:block md:absolute xl:bottom-32 md:bottom-16 ml-7 z-20"
        >
          <ContactMe />
        </motion.div>
        {/* ContactMe End  */}
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
