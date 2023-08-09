import LaptopCanvas from "../../canvas/Laptop";
import { tangan2 } from "../../../assets";
import { styles } from "../../../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils";

const RobotHand = () => {
  return (
    <div className={`w-full md:w-1/2  ${styles.flexCenter}  relative z-10 `}>
      <motion.img variants={fadeIn("up", "tween", 0.2, 1)} src={tangan2} alt="billing" className="w-full top-20 -z-[1]" />

      <div className="absolute -z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute -z-[0] w-[50%] h-[50%] right-20 bottom-36 blue__gradient" />
      <motion.div
        variants={fadeIn("down", "spring", 0.2, 0.5)} //fadein pertama
        className="md:w-full md:h-[60vh]  absolute w-5/6 h-[80%]"
      >
        <LaptopCanvas />
      </motion.div>
    </div>
  );
};

export default RobotHand;
