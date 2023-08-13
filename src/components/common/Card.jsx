/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    gyroscope={true}
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={2000}
    scale={1.05}
    tiltReverse={true}
    className="xs:min-w-[200px] w-5/12" //clasname
  >
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
      <div className="bg-tertiary rounded-[20px] py-5 px-8 xs:min-h-[250px] gap-2 flex justify-evenly items-center flex-col">
        <img src={icon} alt="web-development" className="object-contain" />

        <h3 className="text-white sm:text-[20px] text-[16px] font-semibold xs:font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

export default ServiceCard;
