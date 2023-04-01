import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div style={{ paddingTop: "30px" }}>
      <Container>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand style={{ color: "white" }} href="#home">
              <p className="navbar-icon">
                B<span style={{ color: "red" }}>.</span>A
                <span className="cursor">|</span>
              </p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="navbar-links" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#link">
                  About
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#link">
                  Skills
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#link">
                  Work
                </Nav.Link>
                <Nav.Link className="navbar-links" href="#link">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarComp;
