import { Typography, Grid } from "@mui/material";
import LinhaDoTempo from "../../assets/img/img_historia/linha_tempo.svg";
import { useLayoutEffect, useRef, useState } from "react";

const Historia = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const [leftOffset, setLeftOffset] = useState(0);

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (titleRef.current) {
        const offset = titleRef.current.offsetLeft;
        setLeftOffset(offset);
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <Grid
      id="historia"
      component="section"
      container
      position="relative"
      sx={{
        width: "100%",
        pb: 4,
        pt: 0,
        backgroundColor: "#fff",
      }}
    >
      <Grid
        position="relative"
        sx={{
          width: "100%",
          backgroundColor: "#daeeb0",
          px: { xs: 2, md: 6 },
          py: { xs: 1 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          ref={titleRef}
          sx={{
            fontSize: { xs: "1em", sm: "1.7em", md: "2.4em", lg: "2.8em" },
            fontWeight: 600,
            color: "#fff",
            opacity: 0.7,
            fontFamily: "The-Seasons",
            letterSpacing: 2,
            userSelect: "none",
            display: "inline-block",
          }}
        >
          História da Aldeia Geru Tucunã Pataxó
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            left: { xs: "50%", md: `${leftOffset}px` },
            top: "50%",
            transform: {
              xs: "translate(-50%, -50%)",
              md: "translate(0, -50%)",
            },
            fontFamily: "Amsterdam-Four",
            fontSize: { xs: "1.2em", sm: "2em", md: "3em", lg: "3.7em" },
            opacity: 0.6,
            letterSpacing: 1,
            color: "#000",
            fontWeight: 400,
            zIndex: 2,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          história da aldeia geru-tucunã pataxó
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        sx={{
          width: "100%",
          overflowX: "auto",
        }}
      >
        <img src={LinhaDoTempo} alt="" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Historia;
