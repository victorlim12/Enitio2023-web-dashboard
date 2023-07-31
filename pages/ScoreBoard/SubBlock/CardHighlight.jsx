import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ClanCard } from "../../../components/Card";
import { AppContext } from "../AppContext";

export default function CardHighlight() {
  const { data, loading, result, setResult } = React.useContext(AppContext);

  return (
    <>
      <Typography sx={{ fontSize: 40, fontWeight: 800 }}>HIGHLIGHTS</Typography>
      <Grid container spacing={2} direction={"row"}>
        <Grid item xs={6} md={4}>
          <ClanCard rank={"1st"} clan={"akrona"}></ClanCard>
        </Grid>
        <Grid item xs={6} md={4}>
          <ClanCard rank={"2nd"} clan={"solaris"}></ClanCard>
        </Grid>
      </Grid>
    </>
  );
}
