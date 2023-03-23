import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesComp = () => {
  const options = {
    background: {
      color: {
        value: "#282c34",
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
        value: ["#EDEDED", "#7F8487", "#316B83", "#181818"],
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
    <div>
      <Particles
        className="particles-canvas"
        options={options}
        init={particlesInit}
      />
      <div style={{ textAlign: "center", marginTop: "15%" }}>
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
      </div>
    </div>
  );
};

export default ParticlesComp;
