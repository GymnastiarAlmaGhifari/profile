import Overview from "./Overview";
import { SectionWrapper } from "../../../hoc";
import RobotHand from "./RobotHand";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 justify-between   md:snap-center">
      {/* <RobotHand /> */}

      <Overview />
    </div>
  );
};

export default SectionWrapper(About, "about");
