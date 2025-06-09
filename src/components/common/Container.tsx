import { Box } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import Hero from "../Sections/mainHero/MainHero";
import IntroductionSection from "../Sections/introduction/IntroductionSection";
import Footer from "./Footer/Footer";
import AldeiaHero from "../Sections/aldeiaHero/AldeiaHero";
import Visita from "../Sections/visit/Visita";
import Apoie from "../Sections/abaixoAssinado/Apoie";
import Colaboradores from "../Sections/colaboradores/Colaboradores";
import Historia from "../Sections/history/Historia";

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
