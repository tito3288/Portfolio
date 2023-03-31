import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Container>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: "#100f0f",
            border: "solid #ff0303",
            padding: "10px",
            boxShadow: "8px 6px 0px #E21818",
            opacity: "0.8",
          }}
        >
          <Container>
            <Navbar.Brand style={{ color: "white" }} href="#home">
              B.A
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link style={{ color: "white" }} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link style={{ color: "white" }} href="#link">
                  Link
                </Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ color: "white" }}
                    href="#action/3.2"
                  >
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarComp;
