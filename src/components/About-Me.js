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
          <Container>
            <h1 className="aboutme-hobbies-title">Who am I?</h1>
            <h5>
              I am a self-taught software developer located in South Bend, IN. I
              have a passion for designing UI effects, animations, and crafting
              user experiences that are dynamic, intuitive, and engaging. Aside
              from programming, I like outdoor activities and anything else
              related to tech. I am quick learner and strive to know as much as
              I can about anything I feel passionate about.
            </h5>
          </Container>
          <div className="aboutme-typewritter">
            <h4>Interests:</h4>
            <TypewriterComponent
              options={{
                strings: [
                  "Web & App Development",
                  "UI Design",
                  "Mountain Biking",
                  "Mechanics",
                  "Volleyball",
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
