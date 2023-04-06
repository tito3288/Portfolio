import React from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import projectsArrays from "../projectsArray";

const ProjectsComp = () => {
  const [hoverIndex, setHoverIndex] = React.useState(null);

  const [modals, setModals] = React.useState(
    projectsArrays.map(() => false) // initialize an array of false values for each modal
  );

  const openModal = (index) => {
    // update the modal state at the specified index to true
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = true;
      return newModals;
    });
  };

  const closeModal = (index) => {
    // update the modal state at the specified index to false
    setModals((prevModals) => {
      const newModals = [...prevModals];
      newModals[index] = false;
      return newModals;
    });
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#100F0F",
        position: "relative",
        marginTop: "60px",
        paddingTop: "60px",
        paddingBottom: "60px",
        zIndex: "0",
      }}
    >
      <h1 className="projects-title">Projects</h1>x{" "}
      <Row className="projects-row" lg={3} md={3} sm={1} xs={1}>
        {projectsArrays.slice(0, 3).map((value, index) => (
          <Col className="project-col" key={value.id}>
            <div
              className="project-container"
              onMouseEnter={() => setHoverIndex(index)}
            >
              <img
                className="projects-img-gallery"
                src={value.img}
                alt={value.title}
              />
              <div className="middle">
                <h1 onClick={() => openModal(index)}>
                  Check It <br /> Out
                </h1>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="projects-row2" lg={2} md={2} sm={1} xs={1}>
        {projectsArrays.slice(3, 5).map((value, index) => (
          <Col className="col2" key={value.id}>
            <div
              className="project-container"
              onMouseEnter={() => setHoverIndex(index)}
            >
              <img
                className="projects-img-gallery"
                src={value.img}
                alt={value.title}
              />
              <div className="middle">
                <h1 onClick={() => openModal(index + 3)}>
                  Check It <br /> Out
                </h1>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {projectsArrays.map((value, index) => (
        <Modal
          key={value.id}
          show={modals[index]}
          onHide={() => closeModal(index)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <img
                className="modal-img"
                src={value.modalPic}
                alt={value.title}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-content">
            {/* MOVE THESE STYLES T0 A CSS FILE */}
            <h5>{value.frameworks}</h5>
            <p>{value.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              style={{
                backgroundColor: "transparent",
                color: "#d2001a",
                borderColor: "#d2001a",
                fontWeight: "bold",
              }}
              href={value.url}
            >
              Visit Site
            </Button>
          </Modal.Footer>
        </Modal>
      ))}
    </div>
  );
};

export default ProjectsComp;
