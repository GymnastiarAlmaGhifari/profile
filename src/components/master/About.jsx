/* eslint-disable react/no-unescaped-entities */

import { agim } from "../../assets";

const About = () => {
  return (
    <section id="about" className="h-[100vh] relative flex flex-col justify-center items-center z-20">
      <div className="max-w-5xl mx-auto p-8 mt-20 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <div className="relative w-[400px] h-[500px] bg-[rgba(0,0,0,0.5)] overflow-hidden flex justify-center items-center rounded-xl group">
            <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right  group-hover:pause"></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right group-hover:pause"></div>
            <i className="aboslute inset-[3px] bg-[#0e1538] z-[3] w-[390px] h-[490px] rounded-lg"></i>
            <div className="absolute inset-[20px] bg-[#0d122c]  border-solid border-[#070c23] border-[3px] flex flex-col justify-center items-center overflow-hidden bg-cover z-[5] rounded-lg">
              <img src={agim} alt="About Us" className="absolute top-0 left-0 w-full h-full object-cover transition duration-500 pointer-events-none group-hover:opacity-0 z-[3]" />
              <h2 className="relative z-[2] text-xl text-center text-white font-semibold tracking-wider uppercase">
                Somone Famous
                <br />
                <span className="font-light text-xs">Front end developer</span>
              </h2>
              <a href="" className="relative mt-[10px] px-[20px] py-[10px] bg-white text-black rounded-3xl font-medium uppercase no-underline tracking-wider transition-all duration-500 hover:tracking-widest">
                Hire Me
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
        </div>
      </div>
    </section>
  );
};

export default About;
