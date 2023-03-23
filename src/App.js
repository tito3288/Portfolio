import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";

function App() {
  return (
    <div>
      <ParticlesComp />
      <AboutMe />
      <Technologies />
    </div>
  );
}

export default App;
