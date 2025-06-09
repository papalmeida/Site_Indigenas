import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      className="custom-navbar"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto mx-auto nav-underline">
          <Nav.Link className="mx-auto" href="#introducao">
            Introdução
          </Nav.Link>
          <Nav.Link className="mx-auto" href="#marcos">
            Marcos
          </Nav.Link>
          <Nav.Link className="mx-auto" href="#historia">
            História
          </Nav.Link>
          <Nav.Link className="mx-auto" href="#entrevista">
            Entrevista
          </Nav.Link>
          <Nav.Link className="mx-auto" href="#apoie">
            Apoie a Causa
          </Nav.Link>
          <Nav.Link className="mx-auto" href="#colaboradores">
            Colaboradores
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
