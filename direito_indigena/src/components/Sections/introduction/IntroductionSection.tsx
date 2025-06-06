import { Box, Grid, Typography } from "@mui/material";

const IntroductionSection = () => {
  return (
    <Grid
      container
      spacing={3}
      gap={3}
      id="introducao"
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: "40px",
        marginTop: "20px",
        maxWidth: "1300px", // Limite prático para centralizar
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#f0efef",
        textAlign: { xs: "center", md: "left" }, // Centraliza texto em telas pequenas
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { sm: "center", md: "flex-start" }, // Centraliza conteúdo em telas pequenas
        }}
      >
        <Typography
          sx={{
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
            fontSize: { xs: "1.2em", sm: "1.3em", md: "1.4em" },
            lineHeight: "1.6",
            color: "#333",
            maxWidth: "500px",
            textAlign: { xs: "justify", md: "start" }, // Justifica texto em telas pequenas
          }}
        >
          Direito e memória indígena no Brasil: uma aliança prometida, mas uma
          batalha diária. Este site desvenda como, apesar de um arcabouço legal,
          os povos originários continuam a lutar pelo reconhecimento e pela
          proteção de sua história viva. Nossa análise mergulha na experiência
          da Aldeia Geru Tucunã Pataxó, examinando como as leis se aplicam em
          seu território e de que forma sua memória ancestral se manifesta como
          poderosa ferramenta de resistência contra o apagamento cultural.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={5.5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" }, // Centraliza imagem em telas pequenas
        }}
      >
        <Box
          component="img"
          src="../src/assets/hero_img/img4.jpg"
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
  );
};

export default IntroductionSection;
