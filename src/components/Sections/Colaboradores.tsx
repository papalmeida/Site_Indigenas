import { Box, Typography, Grid } from "@mui/material";
import ImgIndia from "../../assets/img/img_colaboradores/img_india.jpg";
import Faixa1 from "../../assets/img/img_colaboradores/img1_colaboradores.png";
import Faixa2 from "../../assets/img/img_colaboradores/img2_colaboradores.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const colaboradores = [
  "Ana Clara Pires Soares Zucoloto; Ana Beatriz Vieira Félix",
  "Deise Leisiana dos Reis Martins; Isabelle Lemos Vasconcelos",
  "Maria Vitória Alves Nereu Costa; Marielly Zanella Guedes",
  "Thamara Sales Vina; Vitória Amelia Pimenta Santos",
  "Yasmin Souza Dutra Lopes.",
];

const Colaboradores = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <Grid
      id="colaboradores"
      component={motion.section}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      container
      position="relative"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component={motion.img}
        src={ImgIndia}
        alt=""
        initial={{ scale: 1.05, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.05, opacity: 0 }
        }
        transition={{ duration: 0.9 }}
        sx={{
          width: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      <Grid
        container
        component={motion.div}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        sx={{
          background: "#b6c97a",
          minHeight: { xs: 220, md: 180 },
          width: "100%",
          m: 0,
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          item
          xs={12}
          md={10}
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          sx={{ p: { xs: 2, md: 4 } }}
        >
          <Typography
            sx={{
              fontFamily: "The-Seasons",
              fontWeight: 600,
              color: "#fff",
              fontSize: { xs: "1.2em", md: "1.4em" },
              mb: 1,
            }}
          >
            Colaboradores
          </Typography>
          <Typography
            sx={{
              color: "#232726",
              fontFamily: "Codec-Pro",
              fontSize: { xs: "1em", md: "1.1em" },
              mb: 2,
            }}
          >
            {colaboradores.map((nome, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                style={{ display: "inline-block" }}
              >
                {nome}
                <br />
              </motion.span>
            ))}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#fff",
              fontFamily: "The-Seasons",
              fontSize: { xs: "1.1em", md: "1.2em" },
              mt: 2,
            }}
          >
            Professor orientador
          </Typography>
          <Typography
            sx={{
              color: "#232726",
              fontFamily: "Codec-Pro",
              fontSize: { xs: "1em", md: "1.1em" },
              mb: 2,
            }}
          >
            <b>Prof.</b> Hermundes Souza Flores de Mendonça
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#fff",
              fontFamily: "The-Seasons",
              fontSize: { xs: "1.1em", md: "1.2em" },
              mt: 2,
            }}
          >
            Instituição
          </Typography>
          <Typography
            sx={{
              color: "#232726",
              fontFamily: "Codec-Pro",
              fontSize: { xs: "1em", md: "1.1em" },
            }}
          >
            <b>Unileste</b> - Centro Universitário Católico do Leste de Minas
            Gerais
          </Typography>
        </Grid>
        <Box
          component={motion.img}
          src={Faixa1}
          alt="faixa decorativa 1"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          sx={{
            position: "absolute",
            right: { xs: 10, md: 40 },
            height: "100%",
            bottom: 0,
            zIndex: 3,
            display: { xs: "none", md: "block" },
          }}
        />
        <Box
          component={motion.img}
          src={Faixa2}
          alt="faixa decorativa 2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          sx={{
            position: "absolute",
            height: "60%",
            right: { xs: 150, md: 210 },
            bottom: 0,
            zIndex: 3,
            display: { xs: "none", md: "block" },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Colaboradores;
