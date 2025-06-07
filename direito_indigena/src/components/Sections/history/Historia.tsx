import { Box, Typography, Grid } from "@mui/material";

// Dados da linha do tempo
const eventos = [
  {
    ano: "FOGO DE 1951",
    desc: "Os Pataxó, povo originário da Terra Indígena Barra Velha (Bahia), são impactados pelo 'Fogo de 51', conflito gerado pela criação do Parque Nacional do Monte Pascoal, levando-os a se deslocar.",
    img: "/src/assets/hero_img/img1.jpg",
  },
  {
    ano: "ANOS 70 - 80",
    desc: "Nos anos 70, um grupo Pataxó se estabelece na Fazenda Guarani, em Carmésia (MG), que funcionava como uma 'prisão indígena'. Durante anos os indígenas lutavam pela regularização da fazenda, mas apenas em 1988 veio a regularizar.",
    img: "/src/assets/hero_img/img2.jpg",
  },
  {
    ano: "2002",
    desc: "Um grande incêndio na terra indígena causa significativo impacto ambiental e na produção agrícola da aldeia, fazendo vários grupos se dispersarem, um deles sendo o grupo chamado Alto das Posses que hoje se chama Geru Tucunã.",
    img: "/src/assets/hero_img/img3.jpg",
  },
  {
    ano: "2009 - 2010",
    desc: "Em 23 de dezembro de 2009, foi apresentada a proposta de um território na unidade de conservação do Parque Estadual Rio Corrente, em Açucena. Em julho de 2010, as Famílias Pataxó ocuparam a área e começaram a construir a Aldeia Geru Tucunã, que significa 'papagaio na folha de tucum'.",
    img: "/src/assets/hero_img/img2.jpg",
  },
  {
    ano: "JANEIRO DE 2014",
    desc: "A Aldeia começa a sofrer ameaças e atentados violentos, tendo uso de arma de fogo. Após vários episódios de violência, o Cacique faz apelo à proteção em reunião no Ministério Público Federal.",
    img: "/src/assets/hero_img/img4.jpg",
  },
  {
    ano: "ATUALMENTE",
    desc: "A aldeia celebra anualmente o Awê Heruê, fortalecendo sua cultura e tradições celebram a sua união e fortalecendo a cultura enquanto lutam pela demarcação das terras.",
    img: "/src/assets/hero_img/img4.jpg",
  },
];

const Historia = () => (
  <Grid
    id="historia"
    container
    position="relative"
    sx={{
      width: "100%",
      pb: 4,
      pt: 0,
    }}
  >
    {/* Título de fundo */}
    <Grid
      position="relative"
      sx={{
        width: "100%",
        backgroundColor: "#daeeb0",
        py: { xs: 2, md: 3 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2em", sm: "2.5em", md: "3em" },
          fontWeight: 500,
          color: "#fff",
          opacity: 0.7,
          textAlign: "center",
          fontFamily: "serif",
          letterSpacing: 1,
          userSelect: "none",
        }}
      >
        História da Aldeia Geru Tucunã Pataxó
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: { xs: 18, md: 30 },
          textAlign: "center",
          fontFamily: "cursive",
          fontSize: { xs: "1.2em", sm: "2em", md: "2.3em" },
          color: "#000",
          fontWeight: 400,
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        História da aldeia Geru-Tucunã Pataxó
      </Typography>
    </Grid>
    {/* Linha do tempo */}
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        mt: 4,
        px: { xs: 1, md: 6 },
        pb: 2,
      }}
    >
      <Grid
        container
        spacing={0}
        alignItems="flex-start"
        justifyContent="space-between"
        sx={{
          position: "relative",
          minHeight: { xs: 400, md: 340 },
        }}
      >
        {/* Linha pontilhada */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 90, md: 110 },
            left: 0,
            right: 0,
            height: 0,
            borderTop: "4px dotted #7fa23b",
            zIndex: 1,
          }}
        />
        {eventos.map((evento, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            key={idx}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              mb: { xs: 6, md: 0 },
              mt: { xs: idx % 2 === 0 ? 0 : 4, md: 0 },
            }}
          >
            {/* Imagem circular */}
            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid #b6c97a",
                background: "#fff",
                mb: 1,
                mt: 2,
                zIndex: 2,
                boxShadow: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={evento.img}
                alt={evento.ano}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            {/* Ponto da linha */}
            <Box
              sx={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#e4efc7",
                border: "4px solid #7fa23b",
                position: "relative",
                zIndex: 3,
                mb: 1,
              }}
            />
            {/* Linha tracejada vertical */}
            <Box
              sx={{
                width: 4,
                height: 30,
                background:
                  "repeating-linear-gradient(to bottom, #7fa23b 0 6px, transparent 6px 12px)",
                mb: 1,
              }}
            />
            {/* Ano e descrição */}
            <Typography
              sx={{
                fontWeight: 700,
                color: "#232726",
                fontSize: { xs: "1em", md: "1.1em" },
                mb: 1,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {evento.ano}
            </Typography>
            <Typography
              sx={{
                color: "#232726",
                fontSize: { xs: "0.95em", md: "1em" },
                textAlign: "center",
                maxWidth: 200,
              }}
            >
              {evento.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Grid>
);

export default Historia;
