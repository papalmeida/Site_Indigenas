import { Box } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Hero from "../Sections/MainHero";
import IntroductionSection from "../Sections/Introducao";
import Footer from "./Footer";
import AldeiaHero from "../Sections/Marcos";
import Visita from "../Sections/Entrevista";
import Apoie from "../Sections/Apoie";
import Colaboradores from "../Sections/Colaboradores";
import Historia from "../Sections/Historia";

const Container = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0efef",
      }}
    >
      <NavBar />
      <Hero />
      <IntroductionSection />
      <AldeiaHero />
      <Historia />
      <Visita />
      <Apoie />
      <Colaboradores />
      <Footer />
    </Box>
  );
};

export default Container;
