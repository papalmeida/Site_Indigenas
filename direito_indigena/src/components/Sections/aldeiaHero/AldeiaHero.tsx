import { Carousel } from "react-bootstrap";
import { Box, Typography, Button, Grid } from "@mui/material";
import ImgBrasilia from "../../../assets/img_marcos/img_brasilia.jpg";
import ImgConvercao from "../../../assets/img_marcos/img_convercao.jpg";
import ImgFunai from "../../../assets/img_marcos/img_funai.jpg";
import ImgLivro from "../../../assets/img_marcos/img_livro.jpg";


const images = [ImgBrasilia, ImgConvercao, ImgFunai, ImgLivro];

const AldeiaHero = () => (
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
      justifyContent="flex-start"
      position="absolute"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2,
        px: { xs: 4, sm: 6, md: 10 },
        pt: { xs: 3, sm: 4, md: 5 },
        padding: "2rem 0 2rem 0",
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
          pb: 1
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "0.6em", sm: "0.8em", md: "1em" },
            letterSpacing: 1,
          }}
        >
          PROJETO INTEGRADOR
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "0.6em", sm: "0.8em", md: "1em" },
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
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          flex: 1,
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
            maxWidth: "550px"
          }}
        >
          O Marco do Reconhecimento Indígena na Constituição de 1988
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
      </Grid>
      {/* Bottom bar */}
      <Grid
        container
        alignItems="center"
        sx={{
          mt: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{ flex: 1, borderBottom: "2px solid #fff", borderRadius: "2px" }}
        />          
      </Grid>
    </Grid>
  </Grid>
);

export default AldeiaHero;
