import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { useState, useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getIsMobile = useCallback(
    () => (typeof window !== "undefined" ? window.innerWidth < 992 : false),
    []
  );
  const [isMobile] = useState(getIsMobile);
  const navItems = [
    { href: "#introducao", label: "Introdução" },
    { href: "#marcos", label: "Marcos" },
    { href: "#historia", label: "História" },
    { href: "#entrevista", label: "Entrevista" },
    { href: "#apoie", label: "Apoie a Causa" },
    { href: "#colaboradores", label: "Colaboradores" },
  ];

  const showNavbar = useCallback(() => {
    if (!isMobile) {
      setIsVisible(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => showNavbar();
      const handleMouseMove = () => showNavbar();

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);

      // Iniciar o timer quando o componente montar
      showNavbar();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      setIsVisible(true);
    }
  }, [isMobile, showNavbar]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => {
          const id = item.href.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: item.href,
              top: rect.top,
              bottom: rect.bottom,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Verificar se está no MainHero (topo da página)
      const firstSection = document.getElementById(
        navItems[0].href.substring(1)
      );
      if (firstSection) {
        const firstSectionTop = firstSection.getBoundingClientRect().top;
        // Se a primeira seção ainda não chegou ao meio da tela, não ativar nada
        if (firstSectionTop > window.innerHeight / 2) {
          setActiveSection("");
          return;
        }
      }

      // Encontrar a seção que está mais visível no viewport
      const viewportMiddle = window.innerHeight / 2;
      let closestSection = sections[0];
      let closestDistance = Math.abs(sections[0]?.top || 0);

      sections.forEach((section) => {
        if (section) {
          const distance = Math.abs(section.top - viewportMiddle);
          if (section.top <= viewportMiddle && section.bottom >= 0) {
            if (distance < closestDistance || section.top > 0) {
              closestSection = section;
              closestDistance = distance;
            }
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar na montagem

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible || isMobile ? 0 : -100,
          opacity: isVisible || isMobile ? 1 : 0,
        }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1030 }}
        onMouseEnter={() => !isMobile && showNavbar()}
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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto nav-underline">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={isMobile ? { opacity: 0, y: -10 } : false}
                  animate={isMobile ? { opacity: 1, y: 0 } : {}}
                  transition={
                    isMobile
                      ? {
                          duration: 0.25,
                          delay: index * 0.04,
                          ease: [0.4, 0, 0.2, 1],
                        }
                      : {}
                  }
                >
                  <Nav.Link
                    className={`mx-auto ${
                      activeSection === item.href ? "active" : ""
                    }`}
                    href={item.href}
                    onClick={() => {
                      if (isMobile) {
                        setExpanded(false);
                      }
                    }}
                  >
                    {item.label}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
