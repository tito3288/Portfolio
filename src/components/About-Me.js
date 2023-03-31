import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import TypewriterComponent from "typewriter-effect";
import "../Portfolio.css";

const AboutMe = () => {
  return (
    <div className="aboutme-background">
      <div className="aboutme-background2"></div>
      <hr />
      <Row className="aboutme-row" lg={2} md={2} sm={1} xs={1}>
        <Col className="aboutme-col">
          <h1 className="aboutme-title">
            Front-End <br />
            Software Developer
          </h1>
        </Col>
        <Col className="aboutme-col2">
          <h1 className="aboutme-hobbies-title">Who am I?</h1>
          <h5>
            I am a self tought software developer located in South Bend, IN. I
            have a passion about designing UI effects, animations, and crafting
            user experiences that are dynamic, intuitive, and engaging.
          </h5>
          <div className="aboutme-typewritter">
            <h4>Interests:</h4>
            <TypewriterComponent
              options={{
                strings: [
                  "Web & App Development",
                  "Mountain Biking",
                  "Sports",
                  "Designing",
                  "Video Games",
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
