/* eslint-disable react/no-unescaped-entities */

import { styles } from "../../../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils";
import ServiceCard from "../../common/Card";
import { services } from "../../../constants";

const Overview = () => {
  return (
    <div className="w-full md:w-5/12  relative ">
      <motion.div className="relative" variants={textVariant(0.3)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.3, 1)} className="mt-4 text-white-200 text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable,
        and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
