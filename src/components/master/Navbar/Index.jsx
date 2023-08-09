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
    // <nav className={`${scrolled ? "bg-primary shadow-md" : "bg-transparent"}  fixed w-full z-50 transition-all duration-500 ease-in-out`}>
    //   <div className={`${styles.paddingX} py-5 container mx-auto  flex justify-between items-center`}>
    //     <div className="flex items-center">
    //       <Link
    //         to="/"
    //         className="flex items-center gap-2"
    //         onClick={() => {
    //           setActive("");
    //           window.scrollTo(0, 0);
    //         }}
    //       >
    //         <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
    //         <h1 className="text-xl font-bold text-qwerty">Gymnastiar Alma Ghifari</h1>
    //       </Link>
    //     </div>
    //     <div className="hidden md:block">
    //       <ul className="flex items-center">
    //         {navLinks.map((link) => (
    //           <li key={link.id} className="ml-8">
    //             <Link to={`/${link.id}`} className={`${active === link.id ? "text-qwerty" : "text-gray-400"} hover:text-qwerty transition-all duration-500 ease-in-out`} onClick={() => setActive(link.id)}>
    //               {link.title}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //     <div className="md:hidden">
    //       <button className="focus:outline-none" onClick={() => setToggle(!toggle)}>
    //         {toggle ? (
    //           <img src="https://res.cloudinary.com/dk9fdcnnp/image/upload/v1628584756/Portfolio/close_qwerty.png" alt="close" className="w-6 h-6" />
    //         ) : (
    //           <img src="https://res.cloudinary.com/dk9fdcnnp/image/upload/v1628584756/Portfolio/menu_qwerty.png" alt="menu" className="w-6 h-6" />
    //         )}
    //       </button>
    //     </div>
    //   </div>
    //   {toggle && (
    //     <div className="md:hidden">
    //       <ul className="bg-primary">
    //         {navLinks.map((link) => (
    //           <li key={link.id} className="py-4 px-8">
    //             <Link
    //               to={`/${link.id}`}
    //               className={`${active === link.id ? "text-qwerty" : "text-gray-400"} hover:text-qwerty transition-all duration-500 ease-in-out`}
    //               onClick={() => {
    //                 setActive(link.id);
    //                 setToggle(false);
    //               }}
    //             >
    //               {link.title}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Navbar;
