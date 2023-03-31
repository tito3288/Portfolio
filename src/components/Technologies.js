import React, { useEffect } from "react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import { Row, Col, Container } from "react-bootstrap";

const Technologies = () => {
  const [cloudOptions, setCloudOptions] = React.useState({
    radius: 300,
    maxSpeed: "slow",
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    const updateCloudOptions = () => {
      if (mediaQuery.matches) {
        setCloudOptions({
          radius: Math.min(300) / 2,
          maxSpeed: "fast",
        });
      } else {
        setCloudOptions({
          radius: Math.min(600) / 2,
          maxSpeed: "fast",
        });
      }
    };

    updateCloudOptions();

    mediaQuery.addEventListener("change", updateCloudOptions);

    return () => mediaQuery.removeEventListener("change", updateCloudOptions);
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#100F0F",
        position: "relative",
      }}
    >
      <h1 className="skills-title">Skills & Background</h1>

      <Container>
        <Row lg={2} md={2} sm={1} xs={1}>
          <Col className="skills-col">
            <h4 className="skillsCol-content">
              Learning as much as I can on anything I am passionate about, Web
              Development is no excpetion. I believe simplicity but also a touch
              of ingenuty is key for great user experience.
            </h4>
          </Col>
          <Col>
            <TagCloud
              className="tagcloud"
              options={cloudOptions}
              onClickOptions={{ passive: true }}
            >
              {[
                "HTML",
                "CSS",
                "React.js",
                "Node.js",
                "Swift",
                "Bootstrap",
                "Javascript",
                "Framer Motion",
                "GIT",
                "GITHUB",
                "MongoDb",
              ]}
            </TagCloud>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
