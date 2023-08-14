import { SectionWrapper } from "../../../hoc";
import { styles } from "../../../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils";
import Carousel from "./Carousel";

const Project = () => {
  return (
    <div className="flex flex-col lg:h-[75vh] items-center gap-20 justify-center relative  md:snap-center">
      <div className="flex flex-col lg:text-center">
        <motion.div className="relative" variants={textVariant(0.3)}>
          <p className={styles.sectionSubText}>my work</p>
          <h2 className={styles.sectionHeadText}>Projects.</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-white-200 text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 w-full ">
        {/* Ganti ini dengan CustomCarousel */}
        <Carousel />
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "project");
