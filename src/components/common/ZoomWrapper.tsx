import { Box, useTheme, useMediaQuery } from "@mui/material";

const ZoomWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const scale = isXs ? 0.75 : 1; // ou 0.6 para zoom maior

  return (
    <Box
      sx={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        width: `${100 / scale}%`,
        mx: "auto", // centraliza
      }}
    >
      {children}
    </Box>
  );
};

export default ZoomWrapper;
