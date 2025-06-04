import { Carousel } from "react-bootstrap";
import "./Hero.css";
import { Grid } from "@mui/material";

const images = [
    "/src/assets/hero_img/img1.jpg",
    "/src/assets/hero_img/img2.jpg",
    "/src/assets/hero_img/img3.jpg",
    "/src/assets/hero_img/img4.jpg",
];

const Hero = () => (
  <Grid container className="hero-container">
    <div className="hero-overlay" />
    <Carousel
      controls={false}
      indicators={false}
      interval={4000}
      fade
      className="hero-carousel"
    >
      {images.map((src, idx) => (
        <Carousel.Item key={idx}>
          <img className="hero-img" src={src} alt={`slide-${idx}`} />
        </Carousel.Item>
      ))}
    </Carousel>
    <Grid container
      flexDirection={"column"}
      className="hero-content"
    >
      <h1 className="hero-title">
        DIREITO E MEMÓRIA INDÍGENA:
      </h1>
      <h1 className="hero-subtitle">
        UMA ANÁLISE JURÍDICA DA PROTEÇÃO DA IDENTIDADE CULTURAL DOS POVOS ORIGINÁRIOS DO BRASIL.
      </h1>
      
    </Grid>
  </Grid>
);

export default Hero;
