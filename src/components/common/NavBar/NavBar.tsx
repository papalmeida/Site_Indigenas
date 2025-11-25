import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const getIsMobile = useCallback(
    () => (typeof window !== "undefined" ? window.innerWidth < 992 : false),
    []
  );
  const [isMobile, setIsMobile] = useState(getIsMobile);
  const navItems = [
    { href: "#introducao", label: "Introdução" },
    { href: "#marcos", label: "Marcos" },
    { href: "#historia", label: "História" },
    { href: "#entrevista", label: "Entrevista" },
    { href: "#apoie", label: "Apoie a Causa" },
    { href: "#colaboradores", label: "Colaboradores" },
  ];

  useEffect(() => {
    let timeout: number;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se o scroll mudou, mostra a navbar
      if (currentScrollY !== lastScrollY) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);

        // Remove o timeout anterior se existir
        clearTimeout(timeout);

        // Esconde após 3 segundos de inatividade (apenas em telas grandes)
        if (!getIsMobile()) {
          timeout = setTimeout(() => {
            setIsVisible(false);
          }, 2500);
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Se o mouse estiver próximo do topo da tela (primeiros 100px)
      if (e.clientY <= 100) {
        setIsVisible(true);
        clearTimeout(timeout);

        // Esconde após 3 segundos se não houver movimento (apenas em telas grandes)
        if (!getIsMobile()) {
          timeout = setTimeout(() => {
            setIsVisible(false);
          }, 2500);
        }
      }
    };

    const handleResize = () => {
      // Em telas pequenas, sempre mostra a navbar
      const mobile = getIsMobile();
      setIsMobile(mobile);
      if (mobile) {
        setIsVisible(true);
        clearTimeout(timeout);
        setExpanded(false);
      } else {
        // Em telas grandes, inicia o timer
        timeout = setTimeout(() => {
          setIsVisible(false);
        }, 2500);
      }
    };

    // Inicializa o timer ao carregar
    if (!getIsMobile()) {
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 2500);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [getIsMobile, lastScrollY]);

  return (
    <AnimatePresence>
      {(isVisible || isMobile) && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1030 }}
        >
          <Navbar
            collapseOnSelect
            expand="lg"
            data-bs-theme="dark"
            className="custom-navbar"
            expanded={expanded}
            onToggle={(value) => setExpanded(Boolean(value))}
          >
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="m-2"
            />
            <AnimatePresence initial={false}>
              {(!isMobile || expanded) && (
                <motion.div
                  key="nav-links"
                  initial={
                    isMobile
                      ? { opacity: 0, y: -20, height: 0 }
                      : { opacity: 1, y: 0 }
                  }
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={isMobile ? { opacity: 0, y: -20, height: 0 } : {}}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{
                    width: "100%",
                  }}
                >
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mx-auto nav-underline">
                      {navItems.map((item) => (
                        <Nav.Link
                          key={item.href}
                          className="mx-auto"
                          href={item.href}
                          onClick={() => {
                            if (isMobile) {
                              setExpanded(false);
                            }
                          }}
                        >
                          {item.label}
                        </Nav.Link>
                      ))}
                    </Nav>
                  </Navbar.Collapse>
                </motion.div>
              )}
            </AnimatePresence>
          </Navbar>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
