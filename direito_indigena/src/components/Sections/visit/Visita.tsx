import { Box, Grid, Typography } from "@mui/material";
import PlayerSVG from "../../../assets/img_visita/player.svg";
import ImgFundo from "../../../assets/img_visita/fundo_verde.png";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=IAzFBAGbF2Y";

const Visita = () => {
  return (
    <Grid
      id="visita"
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "#daeeb0",
        backgroundImage: `url(${ImgFundo})`,
        backgroundSize: "cover",
        width: "100%",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },
        height: "100vh",
        position: "relative", // importante para overlay absoluto
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(218,238,176,0.85)", // ajuste o alpha para mais ou menos transparência
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "1200px", margin: "0 auto", zIndex: 2 }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: { xs: 320, sm: 380, md: 420 },
              height: { xs: 200, sm: 240, md: 280 },
              borderRadius: "16px",
              boxShadow: 2,
              position: "relative",
              overflow: "hidden",
              background: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
          </Box>
        </Grid>
        {/* Texto */}
        <Grid item xs={12} md={7}>
          <Typography
            sx={{
              fontSize: { xs: "2em", sm: "2.5em", md: "2.8em" },
              fontWeight: 600,
              color: "#f5f7e7",
              mb: 2,
              fontFamily: "serif",
              textShadow: "0 2px 8px #b6d47a",
            }}
          >
            Visita e entrevista
            <br />
            com o Cacique
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
              color: "#333",
              maxWidth: 600,
              textAlign: "left",
            }}
          >
            Visando aprofundar a compreensão sobre as dinâmicas e perspectivas
            das comunidades originárias, nosso grupo realizou uma entrevista com
            o cacique da <b>Aldeia Geru Tucunã Pataxó</b>. Durante o encontro,
            foram abordados temas centrais como a trajetória histórica e a
            formação da referida aldeia, bem como a percepção da liderança
            indígena acerca da legislação brasileira vigente e sua efetividade
            no amparo e na promoção dos direitos das comunidades indígenas.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Visita;
