/* eslint-disable react/prop-types */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils";
import Slider from "react-slick";
import { github } from "../../../assets";
import { projects } from "../../../constants";

// eslint-disable-next-line no-unused-vars
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white-200 text-[14px]">{description}</p>
      </div>
    </Tilt>
  );
};

const Carousel = () => {
  const settings = {
    arrows: false,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    dots: true,
    slidesToShow: 2, // Ganti menjadi 1 atau 2
    centerMode: true, // Ganti menjadi fal se
    dotsClass: "slick-dots bottom-[-40px]",
  };
  return (
    <div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={`project-${index}`}>
            <Tilt options={{ max: 15 }}>
              <ProjectCard index={index} {...project} />
            </Tilt>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
