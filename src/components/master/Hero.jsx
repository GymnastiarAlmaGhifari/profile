/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import LaptopCanvas from "../canvas/Laptop";
import { hand, tangan, tangan2 } from "../../assets";
import { useEffect, useState } from "react";
import ContactMe from "../common/ContactMe";
import { fadeIn, slideIn } from "../../utils";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Tester", "Web Developer", "Web Manager"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section id="hero" className={`relative w-full h-screen mx-auto `}>
      <div className="absolute z-[1] w-[23%] h-[20%] -ml-36 top-60 mt-20 rounded-full white__gradient_no_blur" />
      <div className="absolute z-[2] w-[100%] h-[60%]  bottom-0 -mb-60 rounded-full black__gradient_no_blur" />
      <div className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex md:flex-row flex-col items-start justify-between gap-5 `}>
        {/* bagian kiri */}
        <div className="w-full md:mt-24 mt-10 relative z-[5] flex flex-row gap-7">
          <motion.div
            variants={fadeIn("right", "spring", 0.7, 1.5)} //fadein pertama
            // variants={fadeIn2("down", 0.4)} //fadein kedua
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col justify-center items-center mt-5"
          >
            <div className="w-5 h-5 rounded-full bg-[#4e4feb]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </motion.div>
          <div className="absolute inset-0 left-7">
            <motion.h1
              variants={fadeIn("down", "tween", 0.2, 1.5)} //fadein pertama
              // variants={fadeIn2("down", 0.4)} //fadein kedua
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`${styles.heroHeadText} text-white `}
            >
              Hi, I'm{" "}
              <span className="text-gradient">
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
                <span className="ml-2 font-light">|</span>
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", "tween", 0.3, 1.5)} //fadein pertama
              // variants={fadeIn2("down", 0.4)} //fadein kedua
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`${styles.heroSubText} mt-2 text-white-100`}
            >
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1.5)} //fadein pertama
          // variants={fadeIn2("down", 0.4)} //fadein kedua
          initial="hidden"
          animate="show"
          exit="hidden"
          className="md:hidden block absolute top-56 xs:right-10 right-8 z-20"
        >
          <ContactMe />
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1.5)} //fadein pertama
          // variants={fadeIn2("down", 0.4)} //fadein kedua
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:block md:absolute xl:bottom-32 md:bottom-16 ml-7 z-20"
        >
          <ContactMe />
        </motion.div>

        {/* bagian kanan */}
        <div className={`h-[85vh] w-full flex ${styles.flexCenter}  relative z-10  md:left-16 `}>
          <img src={tangan2} alt="billing" className="absolute top-20-z-[1]" />

          <div className="absolute -z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute -z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute -z-[0] w-[50%] h-[50%] right-20 bottom-36 blue__gradient" />
          <LaptopCanvas />
        </div>
      </div>

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
