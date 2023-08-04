import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { AppContext, AppProvider } from "../../components/AppContext";
import { motion } from "framer-motion";
import App from "../../components/PhotoDump/App.jsx";

export default function Home() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
