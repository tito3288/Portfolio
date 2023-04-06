import logo from "./logo.svg";
import React, { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";
import ProjectsComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
    <div style={{ backgroundColor: "#100F0F" }}>
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
          <ParticlesComp handleParticlesClick={handleParticlesClick} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <AboutMe />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <Technologies />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <ProjectsComp />
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={3.2}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
