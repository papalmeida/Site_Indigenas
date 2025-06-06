import { Carousel } from "react-bootstrap";
import { Box, Typography, Button } from "@mui/material";

const images = [
  "/src/assets/hero_img/img1.jpg",
  "/src/assets/hero_img/img2.jpg",
  "/src/assets/hero_img/img3.jpg",
  "/src/assets/hero_img/img4.jpg",
];

const AldeiaHero = () => (
  <Box
    className="hero-container"
    sx={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <Carousel
      controls={false}
      indicators={false}
      interval={6000}
      fade
      className="hero-carousel"
      style={{ height: "100vh" }}
    >
      {images.map((src, idx) => (
        <Carousel.Item key={idx}>
          <img className="hero-img" src={src} alt={`slide-${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="hero-overlay" />
    <Box
      className="hero-content"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        px: { xs: 2, sm: 6, md: 10 },
        pt: { xs: 3, sm: 4, md: 5 },
        height: "100%",
      }}
    >
      {/* Top bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 2, md: 4 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "0.9em", sm: "1em" },
            fontWeight: 400,
            letterSpacing: 1,
            borderTop: "2px solid #fff",
            pt: 1,
            pl: 1,
            flex: 1,
          }}
        >
          PROJETO INTEGRADOR
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "0.9em", sm: "1em" },
            fontWeight: 400,
            letterSpacing: 1,
            borderTop: "2px solid #fff",
            pt: 1,
            pr: 1,
            flex: 1,
            textAlign: "right",
          }}
        >
          DIREITO DAS COISAS
        </Typography>
      </Box>
      {/* Main content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: { xs: "100%", md: "60%" },
          mt: { xs: 2, md: 6 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2em", sm: "2.5em", md: "3.2em" },
            fontWeight: 600,
            color: "#fff",
            textAlign: "left",
            lineHeight: 1.1,
            mb: 2,
            textShadow: "0 2px 8px #0008",
          }}
        >
          Convenção 169
          <br />
          da OIT e os
          <br />
          Povos Indígenas
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            color: "#fff",
            textAlign: "left",
            lineHeight: 1.5,
            mb: 4,
            textShadow: "0 2px 8px #0008",
            maxWidth: 600,
          }}
        >
          Incorporada ao ordenamento jurídico brasileiro, reconhece os direitos
          dos povos indígenas e tribais, respeitando suas culturas e tradições,
          e reforça o princípio da consulta livre, prévia e informada
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            borderRadius: "20px",
            px: 4,
            py: 1,
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: { xs: "0.9em", sm: "1em" },
            background: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(2px)",
            textTransform: "uppercase",
            "&:hover": {
              background: "rgba(255,255,255,0.08)",
              borderColor: "#fff",
            },
          }}
        >
          REFERÊNCIAS
        </Button>
      </Box>
      {/* Bottom bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          mt: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{ flex: 1, borderBottom: "3px solid #fff", borderRadius: "3px" }}
        />
        <Box
          sx={{
            width: 120,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Button
            variant="outlined"
            disabled
            sx={{
              color: "#fff",
              borderColor: "#fff",
              borderRadius: "20px",
              px: 3,
              py: 0.5,
              fontWeight: 400,
              fontSize: "0.95em",
              background: "rgba(255,255,255,0.10)",
              textTransform: "uppercase",
              letterSpacing: 1,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          >
            REFERÊNCIAS
          </Button>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 12,
              height: 12,
              bgcolor: "#fff",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          />
        </Box>
        <Box
          sx={{ flex: 1, borderBottom: "3px solid #fff", borderRadius: "3px" }}
        />
      </Box>
    </Box>
  </Box>
);

export default AldeiaHero;
