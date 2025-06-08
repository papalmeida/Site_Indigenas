import { Typography, Grid } from "@mui/material";
import LinhaDoTempo from "../../../assets/img/img_historia/linha_tempo.svg";

const Historia = () => (
  <Grid
    id="historia"
    container
    position="relative"
    sx={{
      width: "100%",
      pb: 4,
      pt: 0,
      backgroundColor: "#fff"
    }}
  >
    {/* Título de fundo */}
    <Grid
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "#daeeb0",
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2em", sm: "2.5em", md: "4em" },
          fontWeight: 600,
          color: "#fff",
          opacity: 0.7,
          textAlign: "left",
          fontFamily: "The-Seasons",
          letterSpacing: 2,
          userSelect: "none",
        }}
      >
        História da Aldeia Geru Tucunã Pataxó
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          left: 50,
          top: "50%",
          transform: "translate(0, -50%)",
          textAlign: "left",
          fontFamily: "Amsterdam-Four",
          fontSize: { xs: "1.2em", sm: "2em", md: "4.5em" },
          opacity: 0.6,
          letterSpacing: 1,
          color: "#000",
          fontWeight: 400,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        história da aldeia geru-tucunã pataxó
      </Typography>
    </Grid>
    {/* Linha do tempo */}
    <Grid
      container
      justifyContent="center"
      sx={{
        width: "100%",
        overflowX: "auto",
      }}
    >
      <img src={LinhaDoTempo} alt="" style={{width: "100%"}}/>
    </Grid>
  </Grid>
);

export default Historia;
