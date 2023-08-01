import ProfileImage from "../common/ProfileImage";
import Overview from "../common/Overview";
import { SectionWrapper } from "../../hoc";

const About = () => {
  return (
    <section id="about" className="md:h-[60vh] h-[85vh] relative flex flex-col md:flex-row items-center gap-5 justify-between z-20 overflow-hidden  ">
      <ProfileImage />
      <Overview />
    </section>
  );
};

export default SectionWrapper(About, "about");
