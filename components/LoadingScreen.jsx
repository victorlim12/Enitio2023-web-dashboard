import React from "react";
import { Grid, Typography } from "@mui/material";
import ThreeDotsWave from "./LoadingAnimation";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";

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
          <RunningWithErrorsIcon
            fontSize={"large"}
            sx={{ color: "white", width: "100%", fontSize: 140 }}
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
            Server might be giving up.
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
            Serverless !== No Server
          </Typography>
          <ThreeDotsWave />
        </Grid>
      </Grid>
    </>
  );
}
