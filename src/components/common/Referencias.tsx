import { useEffect } from "react";
import { Box, Typography, Grid, Link, Button } from "@mui/material";
import ImgFundo from "../../assets/img/img_referencias/fundo_referencias.png";
import { useNavigate } from "react-router-dom";
import { Undo as UndoIcon } from "@mui/icons-material";

const Referencias = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  const handleButtonVoltar = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      position="relative"
      sx={{
        width: "100%",
        pb: 4,
        pt: 0,
      }}
    >
      <Grid
        container
        position="relative"
        sx={{
          pl: { xs: 2, md: 6 },
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${ImgFundo})`,
            backgroundRepeat: "repeat-x",
            backgroundPosition: "bottom",
            backgroundSize: "auto 100%",
            opacity: 0.25,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(113, 166, 55, 0.85)",
            zIndex: 1,
          }}
        />
        <Grid
          container
          justifyContent="space-between"
          sx={{
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2em", sm: "2.5em", md: "4em" },
              fontWeight: 600,
              color: "#fff",
              textAlign: "left",
              fontFamily: "The-Seasons",
              letterSpacing: 2,
              userSelect: "none",
            }}
          >
            Referências
          </Typography>
          <Button
            variant="outlined"
            onClick={handleButtonVoltar}
            sx={{
              color: "#fff",
              borderColor: "#fff",
              borderRadius: "40px",
              margin: "20px",
              fontWeight: 500,
              letterSpacing: 3,
              fontFamily: "Montserrat",
              fontSize: { xs: "0.9em", sm: "1em" },
              background: "rgba(255, 255, 255, 0.35)",
              backdropFilter: "blur(3px)",
              textTransform: "uppercase",
              minWidth: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                background: "rgba(255,255,255,0.08)",
                borderColor: "#fff",
              },
            }}
          >
            <UndoIcon fontSize="medium" />
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        gap={2}
        alignItems="flex-start"
        sx={{
          position: "relative",
          minHeight: { xs: 400, md: 340 },
          paddingX: "2rem",
          paddingY: "2rem",
        }}
      >
        <Typography paragraph sx={{ fontSize: "1.2rem" }}>
          <strong>
            BRASIL. Ministério da Gestão e da Inovação em Serviços Públicos.
          </strong>{" "}
          Arquivo Nacional promove debate sobre direito à memória indígena em
          políticas públicas. Disponível em:{" "}
          <Link
            href="https://www.gov.br/gestao/pt-br/assuntos/noticias/2024/junho/arquivo-nacional-promove-debate-sobre-direito-a-memoria-indigena-em-politicas-publicas"
            target="_blank"
          >
            https://www.gov.br/gestao/pt-br/assuntos/noticias/2024/junho/arquivo-nacional-promove-debate-sobre-direito-a-memoria-indigena-em-politicas-publicas
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>
            CABRAL, Rafael Lamera Giesta; MORAIS, Vitória Larissa Dantas de.
          </strong>{" "}
          O acesso à justiça e a necessidade de efetivação dos direitos
          fundamentais dos povos indígenas. Revista do Programa de Pós-Graduação
          em Direito – Mestrado em Direito e Desenvolvimento Sustentável, João
          Pessoa, v. 5, n. 1, p. 122–139, 2020. Disponível em{" "}
          <Link
            href="https://periodicos.unipe.edu.br/index.php/direitoedesenvolvimento/article/view/12 18/706"
            target="_blank"
          >
            https://periodicos.unipe.edu.br/index.php/direitoedesenvolvimento/article/view/12
            18/706
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>CONCEIÇÃO, Sekuai Braz da.</strong> A história da construção
          da Aldeia Gerú Tucunã Pataxó: estratégias para nossa permanência.
          Trabalho de Conclusão de Curso (Licenciatura em Formação Intercultural
          para Educadores Indígenas) – Universidade Federal de Minas Gerais,
          Belo Horizonte, 2021. Disponível em:{" "}
          <Link
            href="https://www.fae.ufmg.br/biblioteca/wp-content/uploads/sites/7/2023/01/Sekuai.pdf"
            target="_blank"
          >
            https://www.fae.ufmg.br/biblioteca/wp-content/uploads/sites/7/2023/01/Sekuai.pdf
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>TERRAS INDÍGENAS.</strong> MG - Indígenas Pataxó, da Aldeia
          Geru Tucunã, sofrem ameaças e ataques. Disponível em:{" "}
          <Link
            href="https://terrasindigenas.org.br/en/noticia/135923"
            target="_blank"
          >
            https://terrasindigenas.org.br/en/noticia/135923
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>PREFEITURA MUNICIPAL DE AÇUCENA.</strong> Aldeia Pataxó Geru
          Tucunã. Disponível em:{" "}
          <Link
            href="https://acucena.mg.gov.br/noticias/aldeia-pataxo-geru-tucuna"
            target="_blank"
          >
            https://acucena.mg.gov.br/noticias/aldeia-pataxo-geru-tucuna
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>
            SOARES, Leonardo Barros; COSTA, Catarina Chaves; BEZERRA, Luiza
            Brilhante; COSTA, Ana Paula Alvares; MOITA, Yasmin Nascimento.
          </strong>{" "}
          Fatores explicativos da morosidade das demarcações de terras indígenas
          no Brasil. Revista de Administração Pública, Rio de Janeiro, v. 58, n.
          2, e2023-0125, 2024. Disponível em:{" "}
          <Link
            href="https://www.scielo.br/j/rap/a/8zm9XB4dW45xWrrQQPw68nR/"
            target="_blank"
          >
            https://www.scielo.br/j/rap/a/8zm9XB4dW45xWrrQQPw68nR/
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>INSTITUTO SOCIOAMBIENTAL.</strong> Constituição. Disponível
          em:{" "}
          <Link
            href="https://pib.socioambiental.org/pt/Constitui%C3%A7%C3%A3o"
            target="_blank"
          >
            https://pib.socioambiental.org/pt/Constitui%C3%A7%C3%A3o
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>AGÊNCIA NACIONAL DE TRANSPORTES TERRESTRES (ANTT).</strong>{" "}
          Convenção nº 169 da OIT - Povos Indígenas e Tribais. Disponível em:{" "}
          <Link
            href="https://portal.antt.gov.br/conven%C3%A7cao-n-169-da-oit-povos-indigenas-e-tribais"
            target="_blank"
          >
            https://portal.antt.gov.br/conven%C3%A7cao-n-169-da-oit-povos-indigenas-e-tribais
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>FUNDO BRASIL DE DIREITOS HUMANOS.</strong> Os direitos
          constitucionais dos povos indígenas. Disponível em:{" "}
          <Link
            href="https://www.fundobrasil.org.br/blog/os-direitos-constitucionais-dos-povos-indigenas/"
            target="_blank"
          >
            https://www.fundobrasil.org.br/blog/os-direitos-constitucionais-dos-povos-indigenas/
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>BRASIL. Presidência da República.</strong> Lei nº 6.001, de 19
          de dezembro de 1973. Dispõe sobre o Estatuto do Índio. Disponível em:{" "}
          <Link
            href="https://www.planalto.gov.br/ccivil_03/leis/l6001.htm"
            target="_blank"
          >
            https://www.planalto.gov.br/ccivil_03/leis/l6001.htm
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>BRASIL.</strong> Constituição da República Federativa do
          Brasil de 1988. Brasília, DF: Presidência da República, [1988].
          Disponível em:{" "}
          <Link
            href="https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm"
            target="_blank"
          >
            https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm
          </Link>
          . <strong>Acesso em: 5 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>BRASIL.</strong> Povos indígenas. Portal do Governo Federal,
          2025. Disponível em:{" "}
          <Link href="https://www.gov.br/povosindigenas/pt-br" target="_blank">
            https://www.gov.br/povosindigenas/pt-br
          </Link>
          . <strong>Acesso em: 26 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>ONU BRASIL.</strong> Na ONU, Canadá reconhece que país falhou
          historicamente em proteger direitos dos indígenas. Brasil ONU, 2024.
          Disponível em:{" "}
          <Link
            href="https://brasil.un.org/pt-br/77674-na-onu-canad%C3%A1-reconhece-que-pa%C3%ADs-falhou-historicamente-em-proteger-direitos-dos-ind%C3%ADgenas"
            target="_blank"
          >
            https://brasil.un.org/pt-br/77674-na-onu-canad%C3%A1-reconhece-que-pa%C3%ADs-falhou-historicamente-em-proteger-direitos-dos-ind%C3%ADgenas
          </Link>
          . <strong>Acesso em: 26 maio 2025.</strong>
        </Typography>

        <Typography paragraph sx={{ fontSize: "1.2rem", mb: 2 }}>
          <strong>ESQUERDA ONLINE.</strong> Resistência maori na Nova Zelândia
          contra projeto de lei racista. Esquerda Online, 16 nov. 2024.
          Disponível em:{" "}
          <Link
            href="https://esquerdaonline.com.br/2024/11/16/resistencia-maori-na-nova-zelandia-contra-projeto-de-lei-racista/"
            target="_blank"
          >
            https://esquerdaonline.com.br/2024/11/16/resistencia-maori-na-nova-zelandia-contra-projeto-de-lei-racista/
          </Link>
          . <strong>Acesso em: 26 maio 2025.</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Referencias;
