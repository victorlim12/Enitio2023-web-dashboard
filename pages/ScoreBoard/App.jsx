import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardSlider from "./SubBlock/CardSlider";
import { Grid, Typography } from "@mui/material";
import { AppContext } from "./AppContext";
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import LoadingScreen from "../../components/LoadingScreen";

export default function App() {
  const { theme, loading } = React.useContext(AppContext);
  console.log(loading);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            background: theme
              ? `linear-gradient(180deg, rgba(0,0,0,1) 0%, ${alpha(
                  theme,
                  0.5
                )}, rgba(0,0,0,0.8) 100%)`
              : `radial-gradient(circle, rgba(0,0,0,1) 0%,  rgba(0,0,0,1) 0%,
                  0.3
                )}, rgba(0,0,0,1) 100%)`,
            minHeight: "92vh",
            height: "100%",
          }}
          transition={{ delay: 0.6 }}
          animate={{
            opacity: theme ? 1 : 0.1, // Adjust the opacity values for the fade effect
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              padding: "2%",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h2"
                fontWeight={700}
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  padding: "2%",
                }}
              >
                LEADERBOARD
              </Typography>
            </Grid>
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
