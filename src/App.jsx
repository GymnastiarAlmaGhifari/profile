import React from "react";
import Skill from "./component/master/Skill";
import Navbar from "./component/master/Navbar";
import About from "./component/master/About";
import Hero from "./component/master/Hero";
import Project from "./component/master/Project";
import Contact from "./component/master/Contact";
import Footer from "./component/master/Footer";

const App = () => {
  return (
    <div>
      <h1 className="text-red-400">React 18 Alpha</h1>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
