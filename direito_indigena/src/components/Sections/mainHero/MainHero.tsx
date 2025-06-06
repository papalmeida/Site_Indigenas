import { Carousel } from "react-bootstrap";
import "./MainHero.css";
import { Box, Grid, Typography } from "@mui/material";

const images = [
  "/src/assets/hero_img/img1.jpg",
  "/src/assets/hero_img/img2.jpg",
  "/src/assets/hero_img/img3.jpg",
  "/src/assets/hero_img/img4.jpg",
];

const Hero = () => (
  <Grid
    container
    component="section"
    position="relative"
    id="aldeia-hero"
    sx={{
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
      style={{ height: "100vh" }}
    >
      {images.map((src, idx) => (
        <Carousel.Item key={idx}>
          <img className="hero-img" src={src} alt={`slide-${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
    <div className="hero-overlay" />
    <Grid
      container
      flexDirection="column"
      justifyContent="center"
      position="absolute"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        px: { xs: 4, sm: 6, md: 10 },
        pt: { xs: 3, sm: 4, md: 5 },
        paddingBottom: "2rem",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignContent="center"
        sx={{
          marginTop: "40px",
          mb: 2,
          borderBottom: "2px solid #fff",
          borderRadius: "2px",
          pb: 1
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            letterSpacing: 1,
          }}
        >
          PROJETO INTEGRADOR
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            letterSpacing: 1,
          }}
        >
          DIREITO DAS COISAS
        </Typography>
      </Grid>
      {/* Main content */}
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="end"
        sx={{
          flex: 1,
          marginBottom: "30px",
        }}
      >
        <Grid
          position="relative"
          justifyContent="center"
        >
          <Typography
            position="absolute"
            textAlign="left"
            sx={{
              top: { sm: "-2.3rem", md: "-3rem", lg: "-2.9rem" },
              fontFamily: "cursive",
              fontSize: { xs: "1.7em" , sm: "2em", md: "2.7em" },
              color: "#fff",
              fontWeight: 400,
              mb: "-0.7em",
              textShadow: "0 2px 8px #0008",
              letterSpacing: 3,
              zIndex: 2
            }}
          >
            aldeia geru tucunã pataxó
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "1.6em" , sm: "2.3em", md: "2.8em", lg: "3.5em" },
              fontWeight: 600,
              color: "#daeeb0",
              letterSpacing: 1,
              textShadow: "0 2px 8px #0008",
              lineHeight: "1em",
              zIndex: 1
            }}
          >
            DIREITO E MEMÓRIA INDÍGENA
          </Typography>
        </Grid>
        <Typography
          textAlign="center"
          sx={{
            fontSize: { xs: "1.1em" , sm: "1.4em", md: "1.4em", lg: "1.7rem" },
            fontWeight: 400,
            color: "#fff",
            textShadow: "0 2px 8px #0008",
            letterSpacing: 2
          }}
        >
          Uma análise legal da proteção da identidade cultural
          <br />
          dos povos indígenas no Brasil.
        </Typography>
      </Grid>
      {/* Bottom bar */}
      <Grid
        container
        alignItems="center"
        sx={{
          mt: { xs: 3, md: 4 },
        }}
      >
        <Box
          sx={{ flex: 1, borderBottom: "2px solid #fff", borderRadius: "2px" }}
        />          
      </Grid>
    </Grid>
  </Grid>
);

export default Hero;
