import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import * as constants from "../config/constants";

import { alpha, styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(to right, rgba(0,0,0,0.3),${alpha(
    theme.palette.primary.main,
    0.5
  )})`,
  backdropFilter: "blur(15px)",
  borderRadius: 15,
  padding: 8,
  boxShadow: `0 3px 5px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
}));

export function DefaultCard ({children, sx}) {
  return (
    <CustomCard sx={sx}>
      {children}
    </CustomCard>
  );
}

export function ClanCard ({children, sx={}}) {
  return (
    <CustomCard sx={{...sx,  background: `linear-gradient(to right, rgba(100,0,0,0.3), rgba(200,10,30,0.5)
    )})`,}}>
      {children}
    </CustomCard>
  );
}