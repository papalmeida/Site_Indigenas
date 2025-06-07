import { Box, Typography, Button, Grid } from "@mui/material";
import ImgFundo from "../../../assets/img_apoie/fundo_arroz.webp";
import ImgMao from "../../../assets/img_apoie/mao.png";

const Apoie = () => {
  return (
    <Grid
      id="apoie"
      container
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      sx={{
        height: "100vh",
        width: "100%",
        background: "#181b1a",
        backgroundImage: `url(${ImgFundo})`,
        py: { xs: 6, md: 10 },
        px: 2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(24,27,26,0.7)", // ajuste o alpha para mais ou menos transparência
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      {/* Mão estilizada à esquerda */}
      <Box
        component="img"
        src={ImgMao}
        alt="imgMao"
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: { xs: 180, md: 250 },
          zIndex: 2,
          pointerEvents: "none",
          userSelect: "none",
          display: { xs: "none", sm: "block" },
          m: 0,
        }}
      />
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          textAlign: "center",
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "2em", sm: "2.5em", md: "2.8em" },
            fontWeight: 500,
            color: "#daeeb0",
            mb: 3,
            fontFamily: "serif",
            lineHeight: 1.1,
          }}
        >
          Apoie a Demarcação da Terra
          <br />
          Indígena Geru-Tucunã Pataxó!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "1em", sm: "1.1em", md: "1.2em" },
            color: "#f5f7e7",
            mb: 3,
            textAlign: "center",
          }}
        >
          Nós, estudantes de Direito, tivemos o privilégio de conhecer a fundo
          não apenas a luta diária da Aldeia Geru Tucunã Pataxó pela demarcação
          de suas terras, mas também a relação indissociável entre seu direito à
          memória, sua identidade cultural e a contínua batalha por direitos
          historicamente violados. Vimos como a memória transcende a simples
          recordação, emergindo como um pilar de resistência e instrumento
          político contra narrativas hegemônicas e o persistente hiato entre os
          direitos formalmente reconhecidos pela Constituição de 1988 e sua
          aplicação prática. Em um apelo desta comunidade, decidimos criar este
          abaixo-assinado.
          <br />
          <b>
            A Aldeia Geru-Tucunã Pataxó conta com a gente para fazermos a
            diferença.
          </b>
        </Typography>
        <Typography
          sx={{
            fontWeight: 700,
            color: "#fff",
            mb: 4,
            fontSize: { xs: "1.1em", sm: "1.2em" },
            textAlign: "center",
          }}
        >
          CONTAMOS COM SEU APOIO PARA QUE A JUSTIÇA E O RESPEITO PREVALEÇAM!
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#daeeb0",
            borderColor: "#daeeb0",
            borderRadius: "20px",
            px: 4,
            py: 1,
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: { xs: "0.9em", sm: "1em" },
            background: "rgba(218,238,176,0.15)",
            backdropFilter: "blur(3px)",
            textTransform: "uppercase",
            "&:hover": {
              background: "rgba(157,179,112,0.08)",
              borderColor: "#9db370",
            },
          }}
        >
          ASSINE A FAVOR DA DEMARCAÇÃO DAS TERRAS
        </Button>
      </Box>
    </Grid>
  );
};

export default Apoie;
