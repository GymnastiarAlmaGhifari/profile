import { socialMedia } from "../../../constants";
import BoxCanvas from "../../canvas/Box";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils";

const SocialMedia = () => {
  return (
    <div>
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="flex flex-col flex-wrap">
        {socialMedia.map((social) => (
          <div key={social.id} className="w-20 h-24 md:w-24 lg:h-[140px]  cursor-pointer">
            <BoxCanvas icon={social.icon} link={social.link} />
          </div>
        ))}
      </motion.div>{" "}
    </div>
  );
};

export default SocialMedia;
