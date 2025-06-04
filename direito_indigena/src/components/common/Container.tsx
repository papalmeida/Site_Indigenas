import { Box, Grid } from '@mui/material';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import IntroductionSection from '../Sections/introduction/IntroductionSection';
import { t } from 'i18next';

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
            <Grid container>
                <IntroductionSection 
                    title={t("components.sections.introduction.title")} 
                    description={t("components.sections.introduction.description")}
                />
            </Grid>
        </Box>
    );
};

export default Container;