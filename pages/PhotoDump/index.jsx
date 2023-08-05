import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <App />
      <Analytics />
    </>
  );
}
