import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "introducao",
        "marcos",
        "historia",
        "entrevista",
        "apoie",
        "colaboradores",
      ];

      let currentSectionId = "";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offset = 150;
          if (window.scrollY >= section.offsetTop - offset) {
            currentSectionId = id;
          }
        }
      }

      if (currentSectionId === "home") 
          setActiveLink("");

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="custom-navbar"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-2" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="me-auto mx-auto nav-underline"
          activeKey={activeLink}
          onSelect={(selectedKey) => setActiveLink(selectedKey || "")}
        >
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
