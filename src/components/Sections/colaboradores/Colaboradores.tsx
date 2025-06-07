import { Box, Typography, Grid } from "@mui/material";
import ImgIndia from "../../../assets/img/img_colaboradores/img_india.jpg";
import Faixa1 from "../../../assets/img/img_colaboradores/img1_colaboradores.png";
import Faixa2 from "../../../assets/img/img_colaboradores/img2_colaboradores.png";

const colaboradores = [
  "Ana Clara Pires Soares Zuccoloto; Ana Beatriz Vieira Félix",
  "Deise Leisiana dos Reis Martins; Isabelle Lemos Vasconcelos",
  "Maria Vitória Alves Nereu Costa; Marielly Zanella Guedes",
  "Thamara Sales Vina; Vitória Amelia Pimenta Santos",
  "Yasmin Souza Dutra Lopes."
];

const Colaboradores = () => (
  <Grid 
    id="colaboradores"
    container
    position="relative"
    sx={{ 
      width: "100%", 
      overflow: "hidden" 
    }}
  >
    <Box
      component="img"
      src={ImgIndia}
      alt=""
      sx={{
        width: "100%",
        height: { xs: 220, md: 340 },
        objectFit: "cover",
        display: "block",
      }}
    />
    {/* Bloco verde com informações */}
    <Grid
      container
      sx={{
        background: "#b6c97a",
        minHeight: { xs: 220, md: 180 },
        width: "100%",
        m: 0,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Grid item xs={12} md={10} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          sx={{
            fontFamily: "The-Seasons",
            fontWeight: 600,
            color: "#fff",
            fontSize: { xs: "1.2em", md: "1.4em" },
            mb: 1,
          }}
        >
          Colaboradores
        </Typography>
        <Typography
          sx={{
            color: "#232726",
            fontFamily: "Codec-Pro",
            fontSize: { xs: "1em", md: "1.1em" },
            mb: 2,
          }}
        >
          {colaboradores.map((nome, idx) => (
            <span key={idx}>
              {nome}
              <br />
            </span>
          ))}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#fff",
            fontFamily: "The-Seasons",
            fontSize: { xs: "1.1em", md: "1.2em" },
            mt: 2,
          }}
        >
          Professor orientador
        </Typography>
        <Typography
          sx={{
            color: "#232726",
            fontFamily: "Codec-Pro",
            fontSize: { xs: "1em", md: "1.1em" },
            mb: 2,
          }}
        >
          Prof. Hermundes Souza Flores de Mendonça
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "#fff",
            fontFamily: "The-Seasons",
            fontSize: { xs: "1.1em", md: "1.2em" },
            mt: 2,
          }}
        >
          Instituição
        </Typography>
        <Typography
          sx={{
            color: "#232726",
            fontFamily: "Codec-Pro",
            fontSize: { xs: "1em", md: "1.1em" },
          }}
        >
          <b>Unileste</b> - Centro Universitário Católico do Leste de Minas Gerais
        </Typography>
      </Grid>
      <Box
        component="img"
        src={Faixa1}
        alt="faixa decorativa 1"
        sx={{
          position: "absolute",
          right: { xs: 10, md: 40 },
          height:"100%",
          bottom: 0,
          zIndex: 3,
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        component="img"
        src={Faixa2}
        alt="faixa decorativa 2"
        sx={{
          position: "absolute",
          height:"60%",
          right: { xs: 150, md: 210 },
          bottom: 0,
          zIndex: 3,
          display: { xs: "none", md: "block" },
        }}
      />
    </Grid>
  </Grid>
);

export default Colaboradores;