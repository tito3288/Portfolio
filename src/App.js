import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";
import Technologies from "./components/Technologies.js";

function App() {
  return (
    <div>
      <div
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <ParticlesComp />
      </div>
      <div style={{ paddingTop: "" }}>
        <AboutMe />
      </div>
      <div style={{ paddingTop: "" }}>
        <Technologies />
      </div>
    </div>
  );
}

export default App;
