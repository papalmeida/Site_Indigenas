import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type SetStateAction,
} from "react";
import { Carousel } from "react-bootstrap";
import { Typography, Button, Grid, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImgBrasilia from "../../assets/img/img_marcos/img_brasilia.jpg";
import ImgConvercao from "../../assets/img/img_marcos/img_convercao.jpg";
import ImgFunai from "../../assets/img/img_marcos/img_funai.jpg";
import ImgLivro from "../../assets/img/img_marcos/img_livro.jpg";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: ImgBrasilia,
    title:
      "Estatuto do Índio: Um Marco Normativo na Evolução do Direito Indígena",
    description:
      "A Lei nº 6.001/73, conhecida como Estatuto do Índio, é um marco legal que garante direitos territoriais, culturais e políticos aos povos originários, promovendo sua integração com respeito às tradições e à participação nas decisões que os afetam.",
  },
  {
    image: ImgConvercao,
    title: "Convenção 169 da OIT e os Povos Originários",
    description:
      "Incorporada ao ordenamento jurídico brasileiro, reconhece os direitos dos povos originários e tribais, respeitando suas culturas e tradições, e reforça o princípio da consulta livre, prévia e informada",
  },
  {
    image: ImgFunai,
    title: "Fundação Nacional dos Povos Originários e seu Papel entre os Povos",
    description:
      "A Funai é fundamental na implementação e fiscalização dos direitos indígenas, colaborando na criação do Ministério dos Povos Originários. Ela protege territórios, valoriza culturas e defende a autodeterminação dos povos originários.",
  },
  {
    image: ImgLivro,
    title: "O Marco do Reconhecimento Indígena na Constituição de 1988",
    description:
      "O artigo 231 da Constituição Federal de 1988 é um marco essencial, pois reconhece a organização social, os costumes, as línguas, as crenças e as tradições dos povos originários.",
  },
];

const SLIDE_DURATION = 6500;

const Marcos = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.4, once: false });

  const handleSelect = (selectedIndex: SetStateAction<number>) =>
    setIndex(selectedIndex);
  const nextSlide = useCallback(
    () => setIndex((prev) => (prev + 1) % slides.length),
    []
  );

  const navigate = useNavigate();

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      if (pct >= 100) {
        nextSlide();
      } else {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [index, isInView, nextSlide]);

  return (
    <Grid
      container
      component="section"
      position="relative"
      id="marcos"
      ref={containerRef}
      sx={{
        overflow: "hidden",
      }}
    >
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={null}
        fade
        style={{ height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              src={slide.image}
              alt={`slide-${idx}`}
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

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
                fontSize: { xs: "0.6em", sm: "1.1em", md: "1.2em" },
                letterSpacing: 1,
              }}
            >
              PROJETO INTEGRADOR
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                color: "#fff",
                fontSize: { xs: "0.6em", sm: "1.1em", md: "1.2em" },
                letterSpacing: 1,
              }}
            >
              DIREITO DAS COISAS
            </Typography>
          </Grid>
        </Grid>

        <Grid>
          <Grid item>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
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
                  background: "rgba(255, 255, 255, 0.15)",
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
  );
};

export default Marcos;
