import { Box, Grid } from '@mui/material';
import NavBar from './NavBar/NavBar';
import Hero from '../Sections/mainHero/MainHero';
import IntroductionSection from '../Sections/introduction/IntroductionSection';
import Footer from './Footer/Footer';
import Aldeia from '../Sections/aldeia/Aldeia';
import AldeiaHero from '../Sections/aldeiaHero/AldeiaHero';

const Container = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f1f4e1',
            }}
        >
            <NavBar />
            <Hero />
            <IntroductionSection />
            <Aldeia />
            <AldeiaHero />
            <Footer />
        </Box>
    );
};

export default Container;