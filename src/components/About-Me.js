import React from "react";
import { Col, Row } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundColor: "#04293A",
        height: "500px",
        width: "100%",
        position: "absolute",
        marginTop: "100px",
      }}
    >
      <hr
        style={{
          border: "solid none none ",
          borderColor: "white",
          width: "20%",
          margin: "auto auto",
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
                  "Playing Video Games",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
