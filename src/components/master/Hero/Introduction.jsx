/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils";
import { styles } from "../../../styles";
import { useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";

const Introduction = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Gymnastiar", "Web Developer", "Web Manager"];
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
    <div className="w-full mb-28 relative z-[5] flex flex-row gap-7">
      <motion.div
        variants={fadeIn("right", "spring", 0.7, 1.5)} //fadein pertama
        // variants={fadeIn2("down", 0.4)} //fadein kedua
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <SocialMedia />

        {/* <div className="w-5 h-5 rounded-full bg-[#4e4feb]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" /> */}
      </motion.div>
      <div className="inset-0 left-7">
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
          className={`${styles.heroSubText} mt-2`}
        >
          I develop 3D visuals, user <br className="sm:block hidden" />
          interfaces and web applications
        </motion.p>
      </div>
    </div>
  );
};

export default Introduction;
