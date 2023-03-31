import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";
import ProjectsComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#100F0F" }}>
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
