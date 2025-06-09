import { Box, Grid, Typography } from "@mui/material";
import PlayerSVG from "../../assets/img/img_visita/player.svg";
import ImgFundo from "../../assets/img/img_visita/fundo_verde.png";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=IAzFBAGbF2Y";

const Entrevista = () => {
  return (
    <Grid
      id="entrevista"
      component="section"
      container
      justifyContent="center"
      position="relative"
      sx={{
        alignItems: { xs: "center", md: "flex-start" },
        background: "#daeeb0",
        backgroundImage: `url(${ImgFundo})`,
        backgroundSize: "cover",
        width: "100%",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        pb: {lg: 10},
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(218,238,176,0.85)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Grid container justifyContent="center">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.3em", sm: "2.3em", md: "3em", lg: "4em" },
            fontWeight: 600,
            color: "#f5f7e7",
            fontFamily: "The-Seasons",
            zIndex: 3,
            pb: { xs: "40px", lg: "70px" },
          }}
        >
          Visita e entrevista com o Cacique
        </Typography>
        <Grid
          container
          justifyContent="space-evenly"
          sx={{
            zIndex: 2,
            maxWidth: "1400px",
          }}
        >
          <Grid
            xs={12} md={5} lg={5.5}
            container
            justifyContent="center"
            alignItems="center"
            sx={{}}
          >
            <Grid
              container
              position="relative"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: { xs: 380, sm: 500, md: 500, lg: 600 },
                height: { xs: 200, sm: 280, md: 280, lg: 330 },
                borderRadius: "16px",
                boxShadow: 2,
                overflow: "hidden",
                background: "#000",
              }}
            >
              <img
                src={`https://img.youtube.com/vi/IAzFBAGbF2Y/hqdefault.jpg`}
                alt="Capa do vídeo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "16px",
                  filter: "brightness(0.85)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 80,
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.18)",
                  transition: "background 0.2s, box-shadow 0.2s",
                  boxShadow: "0 0 0 0 rgba(113,166,55,0)",
                  cursor: "pointer",
                  "&:hover": {
                    background: "rgba(255,255,255,0.18)",
                    boxShadow: "0 0 0 4px #71a63744",
                  },
                }}
                onClick={() => window.open(YOUTUBE_URL, "_blank")}
              >
                <img
                  src={PlayerSVG}
                  alt="Play"
                  style={{ width: "100%", height: "100%" }}
                  draggable={false}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid
            xs={12} md={5} lg={5.5}
            container
            justifyContent="center"
          >
            <Typography
              sx={{
                fontFamily: "Codec-Pro",
                fontSize: {
                  xs: "0.9em",
                  sm: "1.1em",
                  md: "1.2em",
                  lg: "1.3em",
                },
                color: "#333",
                maxWidth: 600,
                textAlign: { xs: "center", lg: "left" },
                marginTop: { xs: "30px", md: "" },
              }}
            >
              Visando aprofundar a compreensão sobre as dinâmicas e perspectivas
              das comunidades originárias, nosso grupo realizou uma entrevista
              com o cacique da <b>Aldeia Geru Tucunã Pataxó</b>. Durante o
              encontro, foram abordados temas centrais como a trajetória
              histórica e a formação da referida aldeia, bem como a percepção da
              liderança indígena acerca da legislação brasileira vigente e sua
              efetividade no amparo e na promoção dos direitos das comunidades
              indígenas.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Entrevista;
