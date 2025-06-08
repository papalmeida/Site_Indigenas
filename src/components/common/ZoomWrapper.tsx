import { Box } from "@mui/material";

const ZoomWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      transform: {
        xs: "scale(0.75)",
        sm: "scale(0.85)",
        md: "scale(1)",
      },
      transformOrigin: "top center",
      width: "100%",
    }}
  >
    {children}
  </Box>
);

export default ZoomWrapper