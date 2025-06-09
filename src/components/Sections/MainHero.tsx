import { Carousel } from "react-bootstrap";
import "../../styles/MainHero.css";
import { Box, Grid, Typography } from "@mui/material";
import img1 from "../../assets/img/img_hero/img1.jpg";
import img2 from "../../assets/img/img_hero/img2.jpg";
import img3 from "../../assets/img/img_hero/img3.jpg";

const images = [img1, img2, img3];

const Hero = () => (
  <Grid
    container
    component="section"
    position="relative"
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
      justifyContent="space-between"
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
          pb: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#fff",
            fontSize: { xs: "0.7em", sm: "1em", md: "1.2em" },
            letterSpacing: 1,
          }}
        >
          PROJETO INTEGRADOR
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            color: "#fff",
            fontSize: { xs: "0.7em", sm: "1em", md: "1.2em" },
            letterSpacing: 1,
          }}
        >
          DIREITO DAS COISAS
        </Typography>
      </Grid>
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
        <Grid position="relative" justifyContent="center">
          <Typography
            position="relative"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              top: { xs: "-0.8rem", sm: "-1rem", md: "-1.4rem", lg: "-1.8rem" },
              fontFamily: "Amsterdam-Four",
              fontSize: { xs: "1.7em", sm: "2.5em", md: "3.5em", lg: "4.4rem" },
              color: "#fff",
              fontWeight: 400,
              mb: "-0.7em",
              textShadow: "0 2px 8px #0008",
              letterSpacing: 2,
              zIndex: 2,
            }}
          >
            aldeia geru tucunã pataxó
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontFamily: "The-Seasons",
              fontStyle: "normal",
              fontSize: { xs: "1.6em", sm: "2em", md: "2.8em", lg: "3.5em" },
              fontWeight: 600,
              color: "#daeeb0",
              letterSpacing: 2,
              lineHeight: "1em",
              zIndex: 1,
            }}
          >
            DIREITO E MEMÓRIA INDÍGENA
          </Typography>
        </Grid>
        <Typography
          textAlign="center"
          sx={{
            fontFamily: "Montserrat",
            fontSize: { xs: "1.1em", sm: "1.4em", md: "1.4em", lg: "1.7rem" },
            fontWeight: 400,
            color: "#fff",
            textShadow: "0 2px 8px #0008",
            letterSpacing: 1,
          }}
        >
          Uma análise legal da proteção da identidade cultural
          <br />
          dos povos indígenas no Brasil.
        </Typography>
      </Grid>
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
