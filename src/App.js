import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";
import ProjectsComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NavbarComp from "./components/NavbarComp";

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
  return (
    <div style={{ backgroundColor: "#100F0F" }}>
      {isNavbarVisible && <NavbarComp />}
      <ParticlesComp />
      <AboutMe />
      <Technologies />
      <ProjectsComp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
