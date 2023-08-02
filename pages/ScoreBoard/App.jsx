import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardSlider from "./SubBlock/CardSlider";
import { Grid, Typography } from "@mui/material";
import { AppContext, AppProvider } from "./AppContext";
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import ThreeDotsWave from "../../components/LoadingAnimation";

export default function App() {
  const { theme, setTheme, loading } = React.useContext(AppContext);

  return (
    <>
      {loading ? (
        <Grid
          container
          spacing={2}
          sx={{
            mt: "2%",
            padding: 2,
            height: "80vh",
            alignItems: "center",
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                textAlign: "center",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              Give us a second.
            </Typography>
            <ThreeDotsWave />
          </Grid>
        </Grid>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            background: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${alpha(
              theme,
              0.3
            )}, rgba(0,0,0,1) 100%)`,
          }}
          transition={{ delay: 0.5 }}
          animate={{
            opacity: theme ? 1 : 0.1, // Adjust the opacity values for the fade effect
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mt: "2%",
              padding: 2,
              height: "80vh",
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
