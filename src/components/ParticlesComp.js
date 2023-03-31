import React, { useCallback } from "react";
import Particles from "react-particles";
import { Container } from "react-bootstrap";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import "../Portfolio.css";

const ParticlesComp = () => {
  const options = {
    background: {
      color: {
        value: "#100F0F",
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
        value: ["#EDEDED", "#7F8487", "#000000"],
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
    <div style={{ backgroundColor: "#100F0F" }}>
      <Particles
        className="particles-canvas"
        options={options}
        init={particlesInit}
      />
      <div className="particles-content">
        <h1>Bryan Arambula</h1>
        <motion.span
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            damping: 7,
            stiffness: 30,
          }}
        >
          .
        </motion.span>
        <h2>I build things for the web, because why not?</h2>
        <button className="my-5">Check Me Out</button>
      </div>
    </div>
  );
};

export default ParticlesComp;
