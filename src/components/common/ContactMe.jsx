import { styles } from "../../styles";
import { contactme, lingkaran } from "../../assets";

const ContactMe = () => (
  <div className={`${styles.flexCenter} md:w-[240px] md:h-[240px] w-[160px] h-[160px] rounded-full  relative  cursor-pointer`}>
    <img src={lingkaran} className="w-full h-full rounded-full object-contain absolute animate-spin-slow-ccw" />
    <div className={`${styles.flexStart} flex-row relative`}>
      <img src={contactme} alt="arrow-up" className="w-[64%] object-contain animate-spin-slow" />
    </div>
  </div>
);

export default ContactMe;
