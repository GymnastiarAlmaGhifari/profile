/* eslint-disable react/no-unescaped-entities */

import { agim } from "../../assets";
import { socialMedia } from "../../constants";

const About = () => {
  return (
    <section id="about" className="h-[100vh] relative flex flex-col justify-center items-center z-20">
      <div className="max-w-5xl mx-auto p-8 mt-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <div className="relative w-[200px] h-[200px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[500px] rounded-full  bg-[rgba(0,0,0,0.5)] overflow-hidden flex justify-center items-center md:rounded-xl group">
            <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right   group-hover:pause"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right group-hover:pause"></div>
            <i className="aboslute inset-[3px] bg-[#0e1538] z-[3] w-[190px] h-[190px] xs:w-[290px] xs:h-[290px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[490px]  rounded-full md:rounded-lg"></i>
            <div className="absolute inset-[20px] bg-[#0d122c]  border-solid border-[#070c23] border-[3px] flex flex-col justify-center items-center overflow-hidden bg-cover z-[5] rounded-full md:rounded-lg">
              <img src={agim} alt="About Us" className="absolute top-0 left-0 w-full h-full object-cover transition duration-500 pointer-events-none group-hover:opacity-0 z-[3]" />
              <h2 className="relative z-[2] text-xl text-center  font-semibold tracking-wider uppercase text-gradient">Gymnastiar Alma Ghifari</h2>
              <span className="font-light text-xs mt-2 text-white-100 tracking-wider uppercase">Web Developer</span>
              <a href="#" className="relative mt-[10px] px-[20px] py-[10px] green-pink-gradient text-white-100 rounded-3xl font-medium uppercase no-underline tracking-wider transition-all duration-500 hover:tracking-widest">
                My Skils
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About Me</h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            I'm a passionate developer and designer specializing in 3D visuals, user interfaces, and web development. My mission is to create innovative, user-friendly web applications and visual experiences that delight clients and users.
            I value collaboration, attention to detail, and staying up-to-date with the latest technology trends.
          </p>
          <p className="text-lg md:text-xl text-white mt-4 leading-relaxed">
            Whether you require a stunning website, interactive user interfaces, or captivating 3D graphics, I have the skills and expertise to bring your vision to life. Let's collaborate to turn your digital dreams into reality!
          </p>
          {/* Mapping data social media */}
          <div className="flex mt-8">
            {socialMedia.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className="mr-4">
                <img src={social.icon} alt={social.id} className="w-6 h-6 hover:opacity-75" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
