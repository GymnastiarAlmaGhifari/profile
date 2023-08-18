/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { styles } from "../../../styles";
import { navLinks } from "../../../constants";
import { logo } from "../../../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ isScrolled }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // diteksi ketika berada pada id hero
  useEffect(() => {
    const changeLinkColor = () => {
      if (window.scrollY >= 0 && window.scrollY < 700) {
        setActive("Home");
      } else if (window.scrollY >= 700 && window.scrollY < 1500) {
        setActive("About");
      } else if (window.scrollY >= 1500 && window.scrollY < 2500) {
        setActive("Skill");
      } else if (window.scrollY >= 2500 && window.scrollY < 3500) {
        setActive("Project");
      } else if (window.scrollY >= 3500) {
        setActive("Contact");
      }
    };

    window.addEventListener("scroll", changeLinkColor);

    return () => {
      window.removeEventListener("scroll", changeLinkColor);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`w-full flex items-center py-5 px-4 fixed top-0 z-50 ${isScrolled ? "bg-primary/90 border-b-[2px] border-secondary/80 backdrop-blur" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          // href dengan id hero dengan
          href="#hero"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-9 object-contain" />
          <h1 className="md:text-2xl text-lg font-bold cursor-pointer flex mb-2">Gymnastiar Alma Ghifari </h1>
        </a>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? "text-secondary" : "text-white"} hover:text-secondary transition-all duration-300 ease-in-out text-md font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <motion.button
          className="md:hidden text-gray-400 hover:text-white focus:outline-none flex flex-col items-end justify-center gap-1.5 "
          onClick={() => setToggle(!toggle)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="block h-1 bg-white w-6"
            initial={{ rotate: 0 }}
            animate={toggle ? { rotate: 45, y: 3 } : { rotate: 0 }}
            transition={{ duration: 0.2 }} //hamburger transition
          />
          <motion.span
            className="block w-4 h-1 bg-white"
            initial={{ opacity: 1 }}
            animate={toggle ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }} // hamburget transition
          />
          <motion.span
            className={`block h-1 bg-white ${toggle ? "w-6 -mt-3.5" : "w-3"} `}
            initial={{ rotate: 0 }}
            animate={toggle ? { rotate: -45, y: -3 } : { rotate: 0 }}
            transition={{ duration: 0.2 }} //hambuger transition
          />
        </motion.button>

        <AnimatePresence>
          {toggle && (
            <motion.div
              className="md:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-secondary"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-secondary" : "text-white"}`}
                    onClick={() => {
                      // setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
