import { Box } from "@mui/material";

const ZoomWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      transform: {
        xs: "scale(0.5)",
        sm: "scale(0.60)",
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