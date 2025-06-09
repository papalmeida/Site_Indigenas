import { Box, IconButton, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // TikTok alternative

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#222",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
      }}
    >
      <Box>
        <IconButton
          component="a"
          href="https://instagram.com/fala_comigo_direito/"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            "&:hover": {
              color: "#E1306C",
              transition: "color 0.3s ease",
            },
          }}
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.tiktok.com/@fala_cmg_direito?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            "&:hover": {
              color: "#69C9D0",
              transition: "color 0.3s ease",
            },
          }}
          aria-label="TikTok"
        >
          <MusicNoteIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://youtube.com/@falacmgdireito?si=3aLW96maeN0F_BWw"
          target="_blank"
          rel="noopener"
          sx={{
            color: "#fff",
            "&:hover": {
              color: "#FF0000",
              transition: "color 0.3s ease",
            },
          }}
          aria-label="YouTube"
        >
          <YouTubeIcon fontSize="large" />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} Projeto Integrador - Direito e Memória
      </Typography>
      <Typography variant="body2">
        Desenvolvido por{" "}
        <Link
          href="https://github.com/papalmeida"
          sx={{
            textDecoration: "none",
            color: "inherit",
            "&:hover": {
              textDecoration: "none",
              color: "inherit",
            },
          }}
        >
          Pedro Augusto Pinto de Almeida
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
