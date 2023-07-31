import { agim } from "../../assets";

const AboutImage = () => {
  return (
    <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 flex justify-center items-center ">
      <div className="relative w-[250px] h-[250px] xs:w-[300px] xs:h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[500px] rounded-full  bg-[rgba(0,0,0,0.5)] overflow-hidden flex justify-center items-center md:rounded-xl group">
        <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right   group-hover:pause"></div>
        <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right group-hover:pause"></div>
        <i className="aboslute inset-[3px] bg-[#0e1538] z-[3] w-[240px] h-[240px] xs:w-[290px] xs:h-[290px] sm:w-[340px] sm:h-[340px] md:w-[390px] md:h-[490px]  rounded-full md:rounded-lg"></i>
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
  );
};

export default AboutImage;
