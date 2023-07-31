import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ClanCard } from "../../../components/RankCard";
import { AppContext } from "../AppContext";

export default function CardHighlight() {
  const { data, loading, result, setResult } = React.useContext(AppContext);

  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: 40, fontWeight: 800 }}>
          HIGHLIGHTS
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <Grid container spacing={4} direction={"row"}>
          <ClanCard color={"#2677FF"}>TEST</ClanCard>
          <ClanCard color={"#F81EDB"}>TEST</ClanCard>
        </Grid>
      </Grid>
    </>
  );
}
