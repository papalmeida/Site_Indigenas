import { useState, type SetStateAction } from "react";
import { Carousel } from "react-bootstrap";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImgBrasilia from "../../../assets/img/img_marcos/img_brasilia.jpg";
import ImgConvercao from "../../../assets/img/img_marcos/img_convercao.jpg";
import ImgFunai from "../../../assets/img/img_marcos/img_funai.jpg";
import ImgLivro from "../../../assets/img/img_marcos/img_livro.jpg";
import { motion, AnimatePresence } from "framer-motion";

// Slides com imagem + texto associado
const slides = [
  {
    image: ImgBrasilia,
    title: "O Marco do Reconhecimento Indígena na Constituição de 1988",
    description:
      "O artigo 231 da Constituição Federal de 1988 é um marco essencial, pois reconhece a organização social, os costumes, as línguas, as crenças e as tradições dos povos indígenas.",
  },
  {
    image: ImgConvercao,
    title: "Convenção 169 da OIT",
    description:
      "Incorporada ao ordenamento jurídico brasileiro, reconhece os direitos dos povos indígenas e tribais, respeitando suas culturas e tradições, e reforça o princípio da consulta livre, prévia e informada.",
  },
  {
    image: ImgFunai,
    title: "O Papel da Funai",
    description:
      "A Fundação Nacional do Índio é o órgão indigenista oficial do Estado brasileiro, responsável por promover políticas de proteção aos direitos e ao modo de vida dos povos indígenas.",
  },
  {
    image: ImgLivro,
    title: "Pluralidade Linguística e Cultural",
    description:
      "O Brasil reconhece a diversidade linguística dos povos indígenas, garantindo o uso de suas línguas maternas e o acesso à educação bilíngue em suas comunidades.",
  },
];

const AldeiaHero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) =>
    setIndex(selectedIndex);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
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
      {/* Carrossel de fundo */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={6000}
        fade
        style={{ height: "100vh" }}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <img className="hero-img" src={slide.image} alt={`slide-${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="hero-overlay" />

      {/* Conteúdo sobreposto */}
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
          padding: "2rem 0",
        }}
      >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: { xs: 2, md: 4 },
            borderBottom: "2px solid #fff",
            borderRadius: "2px",
            pb: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#fff",
              fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
              letterSpacing: 1,
            }}
          >
            PROJETO INTEGRADOR
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              color: "#fff",
              fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
              letterSpacing: 1,
            }}
          >
            DIREITO DAS COISAS
          </Typography>
        </Grid>

        {/* Texto dinâmico */}
        <Grid
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            maxWidth: { xs: "100%", md: "60%" },
            mt: { xs: 2, md: 6 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                sx={{
                  fontFamily: "The-Seasons",
                  fontSize: { xs: "2em", sm: "2.5em", md: "3.5em" },
                  color: "#fff",
                  textAlign: "left",
                  lineHeight: 1.1,
                  mb: 2,
                  textShadow: "0 2px 8px #0008",
                  maxWidth: "550px",
                }}
              >
                {slides[index].title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: { xs: "1em", sm: "1.1em", md: "1.4em" },
                  color: "#fff",
                  textAlign: "left",
                  lineHeight: 1.5,
                  mb: 4,
                  letterSpacing: 2,
                  textShadow: "0 2px 8px #0008",
                  maxWidth: 600,
                }}
              >
                {slides[index].description}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Grid>

        {/* Barra inferior + botão de próxima imagem */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          bottom="0"
          px={{ xs: 4, sm: 6, md: 10 }}
          py={2}
          sx={{
            borderTop: "2px solid #fff",
            borderRadius: "2px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              borderRadius: "40px",
              px: 4,
              py: 1,
              fontWeight: 500,
              letterSpacing: 3,
              fontFamily: "Montserrat",
              fontSize: { xs: "0.9em", sm: "1em" },
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(3px)",
              textTransform: "uppercase",
              "&:hover": {
                background: "rgba(255,255,255,0.08)",
                borderColor: "#fff",
              },
            }}
          >
            REFERÊNCIAS
          </Button>
          <IconButton
            onClick={nextSlide}
            sx={{
              color: "#fff",
              background: "rgba(0,0,0,0.2)",
              "&:hover": { background: "rgba(255,255,255,0.2)" },
              border: "1px solid #fff",
              borderRadius: "50%",
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AldeiaHero;
