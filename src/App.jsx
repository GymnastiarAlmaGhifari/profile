import Navbar from "./components/master/Navbar";
import Hero from "./components/master/Hero";
import Skill from "./components/master/Skill";
import About from "./components/master/About";
import Project from "./components/master/Project";
import Contact from "./components/master/Contact";
import Footer from "./components/master/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-50 bg-primary text-white font-poppins">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
