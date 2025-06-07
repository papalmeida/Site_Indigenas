import { Box, Typography, Grid } from "@mui/material";
import ImgIndia from "../../../assets/img_colaboradores/img_india.jpg"

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
            fontSize: { xs: "1.1em", md: "1.2em" },
            mt: 2,
          }}
        >
          Professor orientador
        </Typography>
        <Typography
          sx={{
            color: "#232726",
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
            fontSize: { xs: "1.1em", md: "1.2em" },
            mt: 2,
          }}
        >
          Instituição
        </Typography>
        <Typography
          sx={{
            color: "#232726",
            fontSize: { xs: "1em", md: "1.1em" },
          }}
        >
          <b>Unileste</b> - Centro Universitário Católico do Leste de Minas Gerais
        </Typography>
      </Grid>
      {/* Faixa decorativa à direita */}
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "flex-end",
          justifyContent: "flex-end",
          pr: 2,
          pb: 2,
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 120,
            background: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          {/* SVG decorativo */}
          <svg width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120C0 93.1371 21.8629 71.2742 48.7258 71.2742C75.5887 71.2742 97.4516 93.1371 97.4516 120" stroke="#fff" strokeWidth="7"/>
            <path d="M0 60C0 33.1371 21.8629 11.2742 48.7258 11.2742C75.5887 11.2742 97.4516 33.1371 97.4516 60" stroke="#fff" strokeWidth="7"/>
          </svg>
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

export default Colaboradores;