import React from "react";
import { Row, Col } from "react-bootstrap";

const ProjectsComp = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#100F0F",
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "60px",
        zIndex: "0",
      }}
    >
      <h1 className="projects-title">Projects</h1>x{" "}
      <Row className="projects-row" lg={3} md={3} sm={1} xs={1}>
        <Col>
          <img
            className="projects-img-gallery"
            src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__480.jpg"
            alt="first project"
          />
        </Col>
        <Col>
          <img
            className="projects-img-gallery"
            src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__480.jpg"
            alt="second project"
          />
        </Col>
        <Col>
          <img
            className="projects-img-gallery"
            src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__480.jpg"
            alt="third project"
          />
        </Col>
      </Row>
      <Row className="projects-row2" lg={2} md={2} sm={1} xs={1}>
        <Col>
          <img
            className="projects-img-gallery"
            src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__480.jpg"
            alt="first project"
          />
        </Col>
        <Col>
          <img
            className="projects-img-gallery"
            src="https://cdn.pixabay.com/photo/2013/07/07/01/21/blue-143734__480.jpg"
            alt="second project"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ProjectsComp;
