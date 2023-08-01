/* eslint-disable react/no-unescaped-entities */
import SocialMedia from "./SocialMedia";
import { styles } from "../../../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils";

const Overview = () => {
  return (
    <div className="w-full md:w-1/2  relative ">
      <motion.div
        // id="overview" // Berikan ID untuk elemen yang akan dianimasikan saat digulirkan
        className="relative"
        variants={textVariant(0.3)} // Gunakan textVariant dengan penundaan 0.1 detik
        // initial="hidden"
        // animate={isAnimated ? "show" : "hidden"}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.3, 1)} className="mt-4 text-white-200 text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <SocialMedia />
    </div>
  );
};

export default Overview;

{
  /* <p className="text-lg md:text-xl text-white leading-relaxed">
        I'm a passionate developer and designer specializing in 3D visuals, user interfaces, and web development. My mission is to create innovative, user-friendly web applications and visual experiences that delight clients and users. I
        value collaboration, attention to detail, and staying up-to-date with the latest technology trends.
      </p>
      <p className="text-lg md:text-xl text-white mt-4 leading-relaxed">
        Whether you require a stunning website, interactive user interfaces, or captivating 3D graphics, I have the skills and expertise to bring your vision to life. Let's collaborate to turn your digital dreams into reality!
      </p> */
}
{
  /* Mapping data social media */
}
