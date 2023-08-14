import { agim, profile2, profile3 } from "../../../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../../../utils";
import { useEffect, useState } from "react";

const images = [agim, profile2, profile3];

const ProfileImage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const currentImage = images[currentImageIndex];
  const previousImage = images[previousImageIndex];
  return (
    <motion.div
      variants={fadeIn("left", "spring", 0.7, 1.5)} //fadein pertama
      // variants={fadeIn2("down", 0.4)} //fadein kedua
      initial="hidden"
      animate="show"
      exit="hidden"
      className="relative z-20 w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[600px] md:h-[500px] rounded-full bg-[rgba(0,0,0,0.5)] overflow-hidden flex justify-center items-center md:rounded-xl group md:bottom-0"
    >
      <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right   group-hover:pause"></div>
      <div className="absolute w-full h-full bg-gradient-to-r from-secondary via-secondary to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right group-hover:pause"></div>
      <i className="aboslute inset-[3px] bg-[#0e1538] z-[3] w-[97%] h-[98%] rounded-full md:rounded-lg"></i>
      <div className="absolute inset-[20px] bg-[#0d122c]  border-solid border-[#070c23] border-[3px] flex flex-col justify-center items-center overflow-hidden bg-cover z-[5] rounded-full md:rounded-lg">
        <div className="group-hover:opacity-0 transition duration-500 pointer-events-none z-[3]">
          <motion.img
            key={previousImageIndex}
            src={previousImage}
            alt="About Us"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={previousImageIndex === currentImageIndex ? { y: 0 } : { y: "-100%" }} // Start from the top (visible) if first rotation, else hidden
            animate={previousImageIndex === currentImageIndex ? { y: 0 } : { y: "100%" }} // Slide down and fade out if first rotation, else hidden
            exit={{ y: 0 }} // Return to the top (visible) during exit
            transition={{ duration: 0.5 }}
          />
          <motion.img
            key={currentImageIndex}
            src={currentImage}
            alt="About Us"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ y: "-100%" }} // Start from the top (hidden)
            animate={{ y: 0 }} // Slide in from the top and fade in
            exit={{ y: "-100%" }} // Slide up and fade out during exit
            transition={{ duration: 0.5 }}
          />
        </div>

        <h2 className="relative z-[2] text-xl text-center  font-semibold tracking-wider uppercase text-gradient">Gymnastiar Alma Ghifari</h2>
        <span className="font-light text-xs mt-2 text-white-100 tracking-wider uppercase">Web Developer</span>
        <a href="#about" className="relative mt-[10px] px-[20px] py-[10px] green-pink-gradient text-white-100 rounded-3xl font-medium uppercase no-underline tracking-wider transition-all duration-500 hover:tracking-widest">
          aboute me
        </a>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
