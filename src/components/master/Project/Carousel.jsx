/* eslint-disable no-unused-vars */
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
      className="bg-tertiary p-5 rounded-2xl md:mx-auto w-11/12 "
    >
      <div className="relative w-full h-[230px] group">
        <i className="aboslute inset-[3px] bg-[#0e1538] z-[3] w-[97%] h-[98%] rounded-lg"></i>
        <div className="absolute inset-[3px] bg-[#0d122c]  border-solid border-[#070c23] border-[3px] flex flex-col justify-center items-center overflow-hidden bg-cover z-[5] rounded-lg">
          <div className="group-hover:opacity-0 transition duration-500 pointer-events-none z-[3]">
            <img src={image} alt="project_image" className="absolute top-0 left-0 w-full h-full object-fit" />
            {/* ukuran webscrenshot 1136 x 873*/}
          </div>

          {/* akan dibuka ketika sudah dihosting semua datanya */}

          {/* <div className="absolute inset-0 flex justify-end m-3 ">
            <div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div> */}

          <a
            href={source_code_link}
            target="_blank"
            rel="noreferrer"
            className="absolute mt-[10px] px-[20px] py-[10px] green-pink-gradient text-white-100 rounded-3xl font-medium uppercase no-underline tracking-wider transition-all duration-500 hover:tracking-widest "
          >
            github
          </a>
        </div>
      </div>

      <div className="mt-5 ">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-white-200 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
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
    slidesToShow: 3,
    centerMode: true, // Ganti menjadi fal se
    dotsClass: "slick-dots bottom-[-40px]",
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 624, // Ukuran medium atau md
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800, // Ukuran large atau lg
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <motion.div className="w-full" variants={fadeIn("up", "tween", 0.2, 1)}>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="py-2">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
};

export default Carousel;
