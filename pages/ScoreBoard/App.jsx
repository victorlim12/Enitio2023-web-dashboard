import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardSlider from "./SubBlock/CardSlider";
import { Box, Grid, Typography } from "@mui/material";
import { AppContext, AppProvider } from "./AppContext";
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";

export default function App() {
  const { theme, setTheme, loading } = React.useContext(AppContext);

  return (
    <>
      {loading ? (
        <h1>Loading in progress. Please wait</h1>
      ) : (
        <motion.div
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${alpha(
              theme,
              0.3
            )}, rgba(0,0,0,1) 100%)`,
          }}
          transition={{ delay: 1 }}
          animate={{
            opacity: theme ? 1 : 0.1, // Adjust the opacity values for the fade effect
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{ mt: "2%", padding: 2, height: "100%" }}
          >
            <Grid item xs={12} md={6}>
              <CardSlider />
            </Grid>
            <Grid item xs={12} md={6}>
              <LeaderBoard />
            </Grid>
          </Grid>
        </motion.div>
      )}
    </>
  );
}
