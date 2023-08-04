import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ClanCard } from "../../../components/Card";
import { AppContext } from "../AppContext";
import properties from "../../../config/prop-config.json";

export default function CardHighlight({ clan }) {
  const { data, loading, result, setResult } = React.useContext(AppContext);

  return (
    <>
      {clan ? (
        <Grid container spacing={5} direction={"row"} sx={{ p: "4%" }}>
          <Grid item xs={12} md={6}>
            <ClanCard rank={"1st"} clan={clan}></ClanCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ textTransform: "uppercase", letterSpacing: 3 }}
            >
              {clan}
            </Typography>
            <br />
            <Typography
              variant="body1"
              fontWeight={400}
              sx={{ letterSpacing: 3 }}
            >
              {properties[clan]["block"]}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}
