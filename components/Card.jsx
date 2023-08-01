import * as React from "react";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Grid, Typography, Stack, Card } from "@mui/material";
import ClanMetadata from "../config/prop-config.json";
import Image from "next/image";

const CustomCard = styled(Card)(({ theme, clan }) => ({
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
  boxShadow: `0 10px 6px 5px ${alpha(ClanMetadata[clan]["color"], 0.3)}`,
}));

export function DefaultCard({ children, sx }) {
  return <CustomCard sx={sx}>{children}</CustomCard>;
}

export function ClanCard({ children, clan, rank, onClick, ...sx }) {
  return (
    <CustomCard
      onClick={onClick}
      clan={clan}
      sx={{
        ...sx,
        background: `rgba(27,27,27,0.8)`,
        padding: "3%",
        alignItems: "center",
      }}
    >
      <Stack alignItems="center" sx={{ width: "100%" }}>
        <Typography fontWeight={700} sx={{ width: "100%" }}>
          {rank}
        </Typography>
        <Stack alignItems="center" sx={{ paddingX: "10%" }}>
          <Image
            width={250}
            height={250}
            src={ClanMetadata[clan]["img"]}
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
          {ClanMetadata[clan]["desc"]}
        </Typography>
        {children}
      </Stack>
    </CustomCard>
  );
}
