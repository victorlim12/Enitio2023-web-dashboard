import React from "react";
import { Grid, Typography } from "@mui/material";
import ThreeDotsWave from "./LoadingAnimation";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LoadingScreen() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 2,
          height: "90vh",
          alignItems: "center",
        }}
      >
        <Grid item xs={12}>
          <FavoriteIcon
            fontSize={"large"}
            sx={{ color: "red", width: "100%", fontSize: 140 }}
          />
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            It is about time.
          </Typography>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: 3,
              color: "#FE019A",
            }}
          >
            Hope you had fun :P
          </Typography>
          <ThreeDotsWave />
        </Grid>
      </Grid>
    </>
  );
}
