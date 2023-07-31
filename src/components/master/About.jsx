import { styles } from "../../styles";
import AboutImage from "../common/AboutImage";
import Overview from "../common/Overview";

const About = () => {
  return (
    <section id="about" className="h-[100vh] relative flex flex-col justify-center items-center z-20  mx-auto ">
      <div className={`max-w-7xl mx-auto inset-0 absolute ${styles.paddingX} mt-20 flex flex-col md:flex-row items-center`}>
        <AboutImage />
        <Overview />
      </div>
    </section>
  );
};

export default About;
