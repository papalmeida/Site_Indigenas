import { useState, type SetStateAction } from "react";
import { Carousel } from "react-bootstrap";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImgBrasilia from "../../assets/img/img_marcos/img_brasilia.jpg";
import ImgConvercao from "../../assets/img/img_marcos/img_convercao.jpg";
import ImgFunai from "../../assets/img/img_marcos/img_funai.jpg";
import ImgLivro from "../../assets/img/img_marcos/img_livro.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: ImgBrasilia,
    title:
      "Estatuto do Índio: Um Marco Normativo na Evolução do Direito Indígena",
    description:
      "A Lei nº 6.001/73, conhecida como Estatuto do Índio, é um marco legal que garante direitos territoriais, culturais e políticos aos povos indígenas, promovendo sua integração com respeito às tradições e à participação nas decisões que os afetam.",
  },
  {
    image: ImgConvercao,
    title: "Convenção 169  da OIT e os Povos Indígenas",
    description:
      "Incorporada ao ordenamento jurídico brasileiro, reconhece os direitos dos povos indígenas e tribais, respeitando suas culturas e tradições, e reforça o princípio da consulta livre, prévia e informada",
  },
  {
    image: ImgFunai,
    title: "Fundação Nacional dos Povos Indígenas e seu Papel entre os Povos",
    description:
      "A Funai é fundamental na implementação e fiscalização dos direitos indígenas, colaborando na criação do Ministério dos Povos Indígenas. Ela protege territórios, valoriza culturas e defende a autodeterminação dos povos indígenas.",
  },
  {
    image: ImgLivro,
    title: "O Marco do Reconhecimento Indígena na Constituição de 1988",
    description:
      "O artigo 231 da Constituição Federal de 1988 é um marco essencial, pois reconhece a organização social, os costumes, as línguas, as crenças e as tradições dos povos indígenas.",
  },
];

const Marcos = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) =>
    setIndex(selectedIndex);
  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const navigate = useNavigate();

  return (
    <Grid
      container
      component="section"
      position="relative"
      id="marcos"
      sx={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
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
          item
          sx={{
            borderBottom: "2px solid #fff",
            borderRadius: "2px",
            pb: 1,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Typography
              sx={{
                fontFamily: "Montserrat",
                color: "#fff",
                fontSize: { xs: "0.7em", sm: "1.1em", md: "1.2em" },
                letterSpacing: 1,
              }}
            >
              PROJETO INTEGRADOR
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                color: "#fff",
                fontSize: { xs: "0.7em", sm: "1.1em", md: "1.2em" },
                letterSpacing: 1,
              }}
            >
              DIREITO DAS COISAS
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: "The-Seasons",
                    fontSize: { xs: "2em", sm: "2.5em", md: "2.8em" },
                    color: "#fff",
                    textAlign: "left",
                    lineHeight: 1.1,
                    mb: 2,
                    textShadow: "0 2px 8px #0008",
                    maxWidth: "600px",
                  }}
                >
                  {slides[index].title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "1em", sm: "1.2em", md: "1.2em" },
                    color: "#fff",
                    textAlign: "left",
                    lineHeight: 1.3,
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

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{
                borderTop: "2px solid #fff",
                borderRadius: "2px",
                py: 2,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  onClick={() => navigate("/referencias")}
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Marcos;
