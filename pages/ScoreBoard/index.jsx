import React from "react";
import LeaderBoard from "../../components/ScoreBoard/SubBlock/Leaderboard";
import CardSlider from "../../components/ScoreBoard/SubBlock/CardSlider";
import { Box, Grid, Typography } from "@mui/material";
import { AppContext, AppProvider } from "../../components/AppContext";
import { motion } from "framer-motion";
import App from "../../components/ScoreBoard/App.jsx";

export default function Home() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
