import { Carousel } from "react-bootstrap";
import "./MainHero.css";
import { Box, Typography } from "@mui/material";

const images = [
  "/src/assets/hero_img/img1.jpg",
  "/src/assets/hero_img/img2.jpg",
  "/src/assets/hero_img/img3.jpg",
  "/src/assets/hero_img/img4.jpg",
];

const Hero = () => (
  <Box
    className="hero-container"
    sx={{
      position: "relative",
      width: "100vw",
      overflow: "hidden",
    }}
  >
    <Carousel
      controls={false}
      indicators={false}
      interval={4000}
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
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "20px",
      }}
    >
      <Box
        sx={{
          marginTop: "40px",
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          borderBottom: "3px solid #fff",
          borderRadius: "3px",
        }}
      >
        <Typography
          className="hero-top-label"
          sx={{
            color: "#fff",
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            fontWeight: "400",
          }}
        >
          PROJETO INTEGRADOR
        </Typography>
        <Typography
          className="hero-top-label"
          sx={{
            color: "#fff",
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            fontWeight: "400",
          }}
        >
          DIREITO DAS COISAS
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
          marginBottom: "30px",
        }}
      >
        <Typography
          className="hero-script-title"
          sx={{
            fontFamily: "cursive",
            fontSize: { xs: "clamp(1em, 4vw, 1.5em)", md: "clamp(1.2em, 4vw, 2.2em)" },
            color: "#fff",
            fontWeight: 400,
            mb: "-0.2em",
            textAlign: "center",
            textShadow: "0 2px 8px #0008",
          }}
        >
          aldeia geru tucunã pataxó
        </Typography>
        <Typography
          className="hero-title"
          sx={{
            fontSize: { xs: "clamp(1.2em, 6vw, 2em)", md: "clamp(1.5em, 7vw, 2.8em)" },
            fontWeight: 600,
            color: "#daeeb0",
            textAlign: "center",
            letterSpacing: 1,
            m: 0,
            textShadow: "0 2px 8px #0008",
          }}
        >
          DIREITO E MEMÓRIA INDÍGENA
        </Typography>
        <Typography
          className="hero-subtitle"
          sx={{
            fontSize: { xs: "clamp(0.9em, 3vw, 1.1em)", md: "clamp(1em, 3vw, 1.4em)" },
            fontWeight: 400,
            color: "#fff",
            textAlign: "center",
            mt: 2,
            textShadow: "0 2px 8px #0008",
          }}
        >
          Uma análise legal da proteção da identidade cultural
          <br />
          dos povos indígenas no Brasil.
        </Typography>
      </Box>
      <Box 
        sx={{ 
          width: "90%", 
          borderBottom: "3px solid #fff", 
          mt: 2, 
          borderRadius: "3px", 
        }}
      />
    </Box>
  </Box>
);

export default Hero;
