import * as React from "react";
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import { Grid, Typography, Stack, Card } from "@mui/material";
import ClanMetadata from "../config/prop-config.json";
import Image from "next/image";
import { RankMapping } from "../config/constants";

const CustomCard = styled(motion("div"))(({ theme, clan }) => ({
  background: `linear-gradient(to right, rgba(0,0,0,0.3),${alpha(
    theme.palette.primary.main,
    0.5
  )})`,
  width: "100%",
  minHeight: "48vh",
  maxHeight: "fit-content",
  alignItems: "center",
  backdropFilter: "blur(15px)",
  borderRadius: 15,
  boxShadow: ClanMetadata[clan]
    ? `0 10px 6px 5px ${alpha(ClanMetadata[clan]["color"], 0.3)}`
    : "0 10px 6px 5px rgba(0,0,0,0)",
}));

export function DefaultCard({ children, sx }) {
  return <CustomCard sx={sx}>{children}</CustomCard>;
}

export function ClanCard({ children, clan, rank, onClick, ...sx }) {
  const variants = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <CustomCard
      initial="initial"
      animate="animate"
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={onClick}
      clan={clan ? clan : "invicta"}
      sx={{
        ...sx,
        background: `rgba(27,27,27,0.8)`,
        padding: "3%",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center" sx={{ width: "100%" }}>
        <Typography fontWeight={700} sx={{ width: "100%" }}>
          {RankMapping[rank]}
        </Typography>
        <Stack alignItems="center" sx={{ paddingX: "10%" }}>
          <Image
            width={220}
            height={220}
            src={ClanMetadata[clan]?.img}
            alt={clan}
          />
        </Stack>
        <Typography
          variant={"h5"}
          fontWeight={700}
          sx={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          {clan}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {ClanMetadata[clan]?.desc}
        </Typography>
        {children}
      </Stack>
    </CustomCard>
  );
}
