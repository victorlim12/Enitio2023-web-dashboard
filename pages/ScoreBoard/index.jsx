import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardSlider from "./SubBlock/CardSlider";
import { Box, Grid, Typography } from "@mui/material";
import { AppContext, AppProvider } from "./AppContext";
import { motion } from "framer-motion";
import App from "./App.jsx";

export default function Home() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
