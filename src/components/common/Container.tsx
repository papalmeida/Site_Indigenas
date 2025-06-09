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
import ZoomWrapper from "./ZoomWrapper";

const Container = () => {
  return (
    <ZoomWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0efef",
        }}
      >
        <ZoomWrapper>
        <NavBar />
        </ZoomWrapper>
        <ZoomWrapper>
          <Hero />
        </ZoomWrapper>
        <ZoomWrapper>
        <IntroductionSection />
        </ZoomWrapper>
        <ZoomWrapper>
        <AldeiaHero />
        </ZoomWrapper>
        <ZoomWrapper>
        <Historia />
        </ZoomWrapper>
        <ZoomWrapper>
        <Visita />
        </ZoomWrapper>
        <ZoomWrapper>
        <Apoie />
        </ZoomWrapper>
        <ZoomWrapper>
        <Colaboradores />
        </ZoomWrapper>
        <ZoomWrapper>
        <Footer />
        </ZoomWrapper>
      </Box>
    </ZoomWrapper>
  );
};

export default Container;
