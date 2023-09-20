import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";
import ProjectsComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import NavbarComp from "./components/NavbarComp";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef();

  function handleParticlesClick() {
    ref.current.scrollTo(1);
  }

  return (
    <div>
      <NavbarComp
        handleHome={() => {
          ref.current.scrollTo(0);
        }}
        handleAbout={() => {
          ref.current.scrollTo(1);
        }}
        handleSkills={() => {
          ref.current.scrollTo(2);
        }}
        handleWork={() => {
          ref.current.scrollTo(3);
        }}
        handleContact={() => {
          ref.current.scrollTo(4);
        }}
      />
      <Parallax pages={5} ref={ref}>
        <ParallaxLayer>
          <ParticlesComp
            handleParticlesClick={handleParticlesClick}
            speed={0.5}
            factor={1}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} factor={1}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.7} factor={1}>
          <Technologies />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={2} factor={1}>
          <ProjectsComp />
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={1}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
