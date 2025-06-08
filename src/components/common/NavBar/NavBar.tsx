import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      className="custom-navbar ms-10"
      fixed="top"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto nav-underline">
            <Nav.Link className="mx-auto" href="#introducao">
              Introdução
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#aldeia-hero">
              Marcos
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#historia">
              História
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#visita">
              Visita
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#apoie">
              Apoie a Causa
            </Nav.Link>
            <Nav.Link className="mx-auto" href="#colaboradores">
              Colaboradores
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
