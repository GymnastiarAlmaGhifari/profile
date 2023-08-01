import LaptopCanvas from "../../canvas/Laptop";
import { tangan2 } from "../../../assets";
import { styles } from "../../../styles";

const RobotHand = () => {
  return (
    <div className={`h-screen w-full flex ${styles.flexCenter}  relative z-10  md:left-16 `}>
      <img src={tangan2} alt="billing" className="absolute top-20-z-[1]" />

      <div className="absolute -z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute -z-[0] w-[50%] h-[50%] right-20 bottom-36 blue__gradient" />
      <div className="relative md:w-full md:h-[85vh]   w-5/6 h-[80%]">
        <LaptopCanvas />
      </div>
    </div>
  );
};

export default RobotHand;
