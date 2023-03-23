import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import ParticlesComp from "./components/ParticlesComp";
import AboutMe from "./components/About-Me";

function App() {
  return (
    <div>
      <ParticlesComp />
      <AboutMe />
    </div>
  );
}

export default App;
