import { Box, Typography, Button, Grid } from "@mui/material";
import ImgFundo from "../../../assets/img/img_apoie/fundo_arroz.webp";
import ImgMao from "../../../assets/img/img_apoie/mao.png";

const Apoie = () => {
  return (
    <Grid
      id="apoie"
      container
      flexDirection="column"
      alignItems="end"
      justifyContent="center"
      position="relative"
      paddingX={"20px"}
      sx={{
        height: "100vh",
        width: "100%",
        background: "#181b1a",
        backgroundImage: `url(${ImgFundo})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(24,27,26,0.7)",
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
      <Grid
        container
        position="relative"
        justifyContent={{ md: "center", lg: "flex-end" }}
        sx={{
          zIndex: 2,
          paddingX: { xs: "20px", sm: "40px", md: "60px", lg: "90px" },
          paddingY: "20px",
        }}
      >
        <Grid
          container
          justifyContent={{ md: "center", lg: "flex-end" }}
          sx={{
            maxWidth: "1200px",
          }}
        >
          <Typography
            sx={{
              textAlign: "right",
              fontFamily: "The-Seasons",
              fontSize: { xs: "2em", sm: "3em", md: "4em" },
              fontWeight: 500,
              color: "#daeeb0",
              mb: 3,
              lineHeight: 1.1,
            }}
          >
            Apoie a Demarcação da Terra
            <br />
            Indígena Geru<span style={{ fontFamily: "Montserrat" }}>-</span>
            Tucunã Pataxó<span style={{ fontFamily: "Montserrat" }}>!</span>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Codec-Pro",
              fontSize: { xs: "1em", sm: "1.1em", md: "1.3em" },
              color: "#f5f7e7",
              mb: 3,
              textAlign: { md: "center", lg: "right" },
            }}
          >
            Nós, estudantes de Direito, tivemos o privilégio de conhecer a fundo
            não apenas a luta diária da Aldeia Geru Tucunã Pataxó pela
            demarcação de suas terras, mas também a relação indissociável entre
            seu direito à memória, sua identidade cultural e a contínua batalha
            por direitos historicamente violados. Vimos como a memória
            transcende a simples recordação, emergindo como um pilar de
            resistência e instrumento político contra narrativas hegemônicas e o
            persistente hiato entre os direitos formalmente reconhecidos pela
            Constituição de 1988 e sua aplicação prática. Em um apelo desta
            comunidade, decidimos criar este abaixo-assinado.
            <br />
            <b>
              A Aldeia Geru-Tucunã Pataxó conta com a gente para fazermos a
              diferença.
            </b>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Codec-Pro",
              fontWeight: 700,
              color: "#fff",
              mb: 4,
              fontSize: { xs: "1.1em", sm: "1.2em" },
              textAlign: "center",
            }}
          >
            CONTAMOS COM SEU APOIO PARA QUE A JUSTIÇA E O RESPEITO PREVALEÇAM!
          </Typography>
        </Grid>
        <Button
          component="a"
          href="https://chng.it/Fk8GmKLkCH"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{
            color: "#daeeb0",
            borderColor: "#daeeb0",
            borderRadius: "40px",
            px: 4,
            py: 1,
            fontFamily: "Centaur",
            fontWeight: 500,
            letterSpacing: 1,
            fontSize: { xs: "0.9em", sm: "1.2em" },
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
      </Grid>
    </Grid>
  );
};

export default Apoie;
