import React from "react";
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
              My area of expertise is in Front-End Web Development, with
              additional experience in IOS App Development. For Medium and Large
              scale web applications, my preferred technologies include HTML,
              CSS, Javascript and React.js. I also use Node.js for API
              implementations.
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
                "Spline",
                "Figma",
              ]}
            </TagCloud>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Technologies;
