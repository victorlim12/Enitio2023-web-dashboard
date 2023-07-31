import * as React from "react";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import ClanMetadata from "../config/prop-config.json";

const CustomCard = styled(Box)(({ theme }) => ({
  background: `linear-gradient(to right, rgba(0,0,0,0.3),${alpha(
    theme.palette.primary.main,
    0.5
  )})`,
  width: "100%",
  height: "100%",
  backdropFilter: "blur(15px)",
  borderRadius: 15,
  padding: 8,
  boxShadow: `0 3px 5px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
}));

export function DefaultCard({ children, sx }) {
  return <CustomCard sx={sx}>{children}</CustomCard>;
}

export function ClanCard({ children, clan, rank, ...sx }) {
  return (
    <CustomCard
      sx={{
        ...sx,
        background: `linear-gradient(to bottom, rgba(0,0,0,0.3),${alpha(
          ClanMetadata[clan]["color"],
          0.5
        )})`,
        padding: 0,
        paddingBottom: 2,
        aspectRatio: "1/1.7",
      }}
    >
      <CustomCard sx={{ ...sx, background: `rgba(27,27,27,0.8)`, padding: 0 }}>
        <Typography fontWeight={700} sx={{ width: "100%" }}>
          {rank}
        </Typography>
        <img
          style={{ width: "100%", padding: "8%" }}
          src={ClanMetadata[clan]["img"]}
        />
        <Typography
          variant={"h5"}
          fontWeight={700}
          sx={{
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: 3,
          }}
        >
          {clan}
        </Typography>
        <Typography
          // fontWeight={700}
          sx={{
            width: "100%",
            textAlign: "center",
          }}
        >
          {ClanMetadata[clan]["desc"]}
        </Typography>
        {children}
      </CustomCard>
    </CustomCard>
  );
}
