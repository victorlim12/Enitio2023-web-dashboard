import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import * as constants from "../config/constants";

import { alpha, styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

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

export function DefaultCard ({children, sx={}}) {
  return (
    <CustomCard sx={sx}>
      {children}
    </CustomCard>
  );
}

export function ClanCard ({children, sx={}, color}) {
  return (
    <Grid item md={6} xs={12}>
    <CustomCard sx={{...sx,  background: `linear-gradient(to bottom, rgba(0,0,0,0.3),${alpha(
    color,
    0.5
  )})`, padding: 0, paddingBottom: 2, aspectRatio: "1/1.6"}}>
    <CustomCard sx={{...sx,  background: `rgba(27,27,27,0.8)`,padding: 0}}>
      {children}
    </CustomCard>
    </CustomCard>
    </Grid>
  );
}