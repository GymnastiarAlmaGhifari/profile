import { styles } from "../../styles";
import { contactme, lingkaran, envelope } from "../../assets";

const ContactMe = () => (
  <a href="#contact" className={`${styles.flexCenter} md:w-[240px] md:h-[240px] w-[160px] h-[160px] rounded-full relative group`}>
    <img src={lingkaran} className="w-full h-full left-0.5 object-contain absolute " />
    <div className={`${styles.flexCenter} relative`}>
      <img src={contactme} alt="arrow-up" className="w-[80%] object-contain animate-spin-slow" />
      <img src={envelope} alt="envelope" className="absolute group-hover:scale-110  transition-all duration-500" />
    </div>
  </a>
);

export default ContactMe;
