import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";

const ParticlesComp = () => {
  const options = {
    background: {
      color: {
        value: "#04293A",
      },
    },
    fullScreen: false,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      //THESE ARE THE COLORS OF THE DOTS THEMSELVES
      color: {
        value: ["#EDEDED", "#7F8487", "#64ffda", "#181818"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      //THESE ARE THE COLORS OF THE LINKS THAT CONNECT THE DOTS
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },

      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  });

  return (
    <div style={{ backgroundColor: "#04293A" }}>
      <Particles
        className="particles-canvas"
        options={options}
        init={particlesInit}
      />
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h1
          style={{
            color: "#EDEDED",
            opacity: "0.9",
            fontSize: "80px",
          }}
        >
          Bryan Arambula
        </h1>
        <h2 style={{ color: "#EDEDED", opacity: "0.5", fontSize: "50px" }}>
          I build things for the web, because why not?
        </h2>
        <button
          className="my-5"
          style={{
            opacity: "0.9",
            backgroundColor: "transparent",
            border: "solid #64ffda",
            color: "#64ffda",
            padding: "10px 10px",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
        >
          Check Me Out
        </button>
      </div>

      {/* <div
        style={{
          backgroundColor: "#04293A",
          height: "500px",
          width: "100%",

          position: "absolute",
          // marginTop: "200px",
        }}
      >
        <hr
          style={{
            border: "solid none none ",
            borderColor: "white",
            width: "10%",
            margin: "auto auto",
            opacity: "0.7",
            borderWidth: "1px",
            display: "block",
          }}
        />
        <Row
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: "10%",
          }}
          lg={2}
          md={2}
          sm={2}
          xs={2}
        >
          <Col>
            <img
              style={{ width: "250px" }}
              src="https://i.etsystatic.com/18079337/r/il/31440e/2827976051/il_570xN.2827976051_ithl.jpg"
              alt="My Face"
            />
          </Col>
          <Col style={{ color: "#64ffda" }}>
            <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>Hobbies:</h1>
            <div style={{ fontSize: "30px", fontWeight: "bold" }}>
              <TypewriterComponent
                options={{
                  strings: [
                    "Web Development",
                    "Mountain Biking",
                    "Sports",
                    "Designing",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </Col>
        </Row>
      </div> */}
    </div>
  );
};

export default ParticlesComp;
