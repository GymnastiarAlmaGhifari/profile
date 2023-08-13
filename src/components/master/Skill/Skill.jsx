import { SectionWrapper } from "../../../hoc";
import CoinCanvas from "../../canvas/Coin";
import { technologies } from "../../../constants";
import { styles } from "../../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../../utils";

const Skill = () => {
  return (
    <div className="flex flex-col lg:h-[75vh] items-center gap-20 justify-center relative  md:snap-center">
      <div className="flex flex-col">
        <motion.div className="relative text-center" variants={textVariant(0.3)}>
          <p className={styles.sectionSubText}>What i have learned so far</p>
          <h2 className={styles.sectionHeadText}>Tech Experience</h2>
        </motion.div>
      </div>
      <div className="flex flex-row gap-9 w-full flex-wrap justify-center items-center">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28 md:w-40 md:h-40" key={technology.title}>
            <CoinCanvas index={index} {...technology} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "skill");
