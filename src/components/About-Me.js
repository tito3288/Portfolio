import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundColor: "#100F0F",
        height: "500px",
        width: "100%",
        position: "absolute",
        marginTop: "400px",
      }}
    >
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
        <Col>
          <h1>Who is this guy..</h1>
          <p>My name is Bryan Arambula</p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutMe;
