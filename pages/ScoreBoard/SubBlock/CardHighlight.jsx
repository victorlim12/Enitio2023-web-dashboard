import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import { ClanCard } from "../../../components/Card";
import { AppContext } from "../AppContext";
import properties from "../../../config/prop-config.json";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function CardHighlight({ clan, rank, handleClose }) {
  const { data, loading, result, setResult } = React.useContext(AppContext);

  return (
    <>
      {clan ? (
        <Grid container spacing={5} direction={"row"} sx={{ p: "4%" }}>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>

          <Grid item xs={12} md={6}>
            <ClanCard rank={rank + 1} clan={clan}></ClanCard>
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
