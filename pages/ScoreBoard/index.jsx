import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardHighlight from "./SubBlock/CardHighlight";
import { Box, Grid, Typography } from "@mui/material";
import { ClanCard, DefaultCard } from "../../components/Card";
import { AppProvider } from "./AppContext";

export default function Home() {
  return (
    <AppProvider>
      <Grid container spacing={2} sx={{ mt: "2%", padding: 2 }}>
        <Grid item xs={12} md={6}>
          <CardHighlight />
        </Grid>
        <Grid item xs={12} md={6}>
          <LeaderBoard />
        </Grid>
      </Grid>
    </AppProvider>
  );
}
