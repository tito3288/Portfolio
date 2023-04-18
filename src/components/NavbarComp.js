import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComp = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  function handleHome() {
    props.handleHome();
    setExpanded(false);
  }

  function handleAbout() {
    props.handleAbout();
    setExpanded(false);
  }

  function handleSkills() {
    props.handleSkills();
    setExpanded(false);
  }

  function handleWork() {
    props.handleWork();
    setExpanded(false);
  }

  function handleContact() {
    props.handleContact();
    setExpanded(false);
  }

  return (
    <div style={{ marginTop: "30px" }}>
      <Container>
        <Navbar expand="lg" expanded={expanded} className="navbar">
          <Container>
            <Navbar.Brand
              onClick={props.handleHome}
              style={{ color: "white" }}
              href="#home"
            >
              <p className="navbar-icon">
                B<span style={{ color: "red" }}>.</span>A
                <span className="cursor">|</span>
              </p>
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => setExpanded(expanded ? false : "expanded")}
              className="nav-toggle"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={handleHome}
                  className="navbar-links"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={handleAbout}
                  className="navbar-links"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={handleSkills}
                  className="navbar-links"
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={handleWork}
                  className="navbar-links"
                >
                  Work
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  onClick={handleContact}
                  className="navbar-links"
                >
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
