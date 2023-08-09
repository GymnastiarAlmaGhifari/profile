/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Overview from "./Overview";
import { SectionWrapper } from "../../../hoc";
import RobotHand from "./RobotHand";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 justify-between relative  md:snap-center">
      {/* <ProfileImage /> */}
      <RobotHand />

      <Overview />

      {/* gunakan service card 2 saja */}
    </div>
  );
};

export default SectionWrapper(About, "about");
