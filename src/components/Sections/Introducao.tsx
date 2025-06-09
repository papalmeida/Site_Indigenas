import { Box, Button, Grid, Typography } from "@mui/material";
import ImgIntroduction from "../../assets/img/img_introducao/img_introduction.jpeg";
import ImgFundo from "../../assets/img/img_introducao/fundo_branco.png";

const Introducao = () => {
  return (
    <Grid
      container
      component="section"
      id="introducao"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={ImgFundo}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.25,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={3}
        gap={3}
        sx={{
          padding: "60px",
          width: "1300px",
          textAlign: { xs: "center", md: "left" },
          boxSizing: "border-box",
          overflowX: "hidden",
          zIndex: 2,
        }}
      >
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { sm: "center", md: "flex-start" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "The-Seasons",
              fontSize: { xs: "2em", sm: "2.5em", md: "3em" },
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#71a637",
              maxWidth: "400px",
            }}
          >
            INTRODUÇÃO AO TRABALHO
          </Typography>
          <Typography
            sx={{
              fontFamily: "Codec-Pro",
              fontSize: { xs: "1em", sm: "1.2em", md: "1.3em" },
              lineHeight: "1.5",
              color: "#333",
              maxWidth: "500px",
              textAlign: { xs: "justify", md: "start" },
            }}
          >
            <b>Direito e memória indígena no Brasil:</b> uma aliança prometida,
            mas uma batalha diária. Este site desvenda como, apesar de um
            arcabouço legal, os povos originários continuam a lutar pelo
            reconhecimento e pela proteção de sua história viva. Nossa análise
            mergulha na experiência da <b>Aldeia Geru Tucunã Pataxó</b>,
            examinando como as leis se aplicam em seu território e de que forma
            sua memória ancestral se manifesta como poderosa ferramenta de
            resistência contra o apagamento cultural.
          </Typography>
          <Button
            component="a"
            href="https://docs.google.com/document/d/1CaubU52QwOCRz87eNzxCRvCKU9-Uo95CXj6S64GETeA/edit?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              color: "#71a637",
              borderColor: "#71a637",
              borderRadius: "40px",
              px: 4,
              fontFamily: "Centaur",
              fontWeight: 600,
              letterSpacing: 1,
              fontSize: { xs: "1em", sm: "1.5em" },
              background: "rgba(218,238,176,0.15)",
              backdropFilter: "blur(3px)",
              textTransform: "none",
              marginTop: "40px",
              "&:hover": {
                background: "rgba(157,179,112,0.08)",
                borderColor: "#9db370",
              },
            }}
          >
            Leia nosso Paper
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={ImgIntroduction}
            alt="Aldeia Geru Tucunã"
            sx={{
              width: { xs: "90vw", sm: "70vw", md: "100%" },
              maxWidth: { xs: "350px", sm: "450px", md: "600px" },
              height: { xs: "350px", sm: "450px", md: "600px" },
              objectFit: "cover",
              borderTopLeftRadius: { xs: "175px", sm: "225px", md: "300px" },
              borderTopRightRadius: { xs: "175px", sm: "225px", md: "300px" },
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              boxShadow: 3,
              background: "#eee",
              transition: "all 0.3s",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Introducao;
