import { motion } from "framer-motion";
import { styles } from "../../../styles";
import ContactMe from "../../common/ContactMe";
import { fadeIn } from "../../../utils";
import Introduction from "./Introduction";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section id="hero" className={`relative w-full h-screen mx-auto md:snap-center`}>
      <div className="absolute z-[1] w-[23%] h-[20%] -ml-36 top-60 mt-20 rounded-full white__gradient_no_blur" />
      <div className="absolute z-[1] w-[100%] h-[60%]  bottom-0 -mb-60 rounded-full black__gradient_no_blur" />
      <div className="relative -z-[0] w-full h-full overflow-hidden">
        <div className="absolute  w-[50%] h-[50%] -right-10 top-32 blue__gradient" />
      </div>
      <div className={`absolute inset-0 top-[90px] max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row flex-col  items-center justify-center md:justify-between gap-2 `}>
        {/* bagian kiri */}
        {/* <Introduction /> */}

        {/* bagian kanan */}
        {/* <ProfileImage /> */}

        {/* ContactMe Start  */}
        <motion.div variants={fadeIn("down", "tween", 0.4, 1.5)} initial="hidden" animate="show" exit="hidden" className="md:hidden block absolute top-72 xs:right-10 right-8 z-20">
          <ContactMe />
        </motion.div>

        <motion.div variants={fadeIn("down", "tween", 0.4, 1.5)} initial="hidden" animate="show" exit="hidden" className="hidden md:block md:absolute  md:bottom-12  xl:bottom-28  ml-32 z-20">
          <ContactMe />
        </motion.div>
        {/* ContactMe End  */}
      </div>
    </section>
  );
};

export default Hero;
