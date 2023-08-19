import Navbar from "./components/master/Navbar/Index";
import Hero from "./components/master/Hero";
import About from "./components/master/About";
import Skill from "./components/master/Skill";
import Project from "./components/master/Project";
import Contact from "./components/master/Contact";
import StarsCanvas from "./components/canvas/Stars";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const bungkusRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position within the .bungkus container
      const containerScrollY = bungkusRef.current.scrollTop;

      // Update the scrolled state based on the scroll position
      if (containerScrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener to the .bungkus container
    bungkusRef.current.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      bungkusRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={bungkusRef} className="relative z-50 bg-primary text-white font-poppins bungkus">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar isScrolled={scrolled} />
        <Hero />
      </div>
      <About />
      <Skill />
      <Project />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
