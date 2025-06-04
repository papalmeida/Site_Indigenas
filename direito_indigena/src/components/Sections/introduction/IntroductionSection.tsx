import { Grid, Typography } from "@mui/material";

interface IntroductionSectionProps {
    title: String;
    description: String;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ title, description}) => {
    return (
        <Grid container spacing={2}
            id="introducao"
            className="section-container"
            flexDirection={"column"}
            sx={{
                padding: "40px",
                marginTop: "20px",
            }}
        >
            <Typography align="center"
                sx={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    marginBottom: "20px",
                }}
            >
                {title}
            </Typography>
            <Typography align="center"
                sx={{
                    fontSize: "1.5rem",
                    lineHeight: "1.6",
                    color: "#555",
                    maxWidth: "1000px",
                    margin: "0 auto",
                }}
            >
                {description}
            </Typography>
        </Grid>
    )
}

export default IntroductionSection;