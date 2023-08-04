import React from "react";
import { Grid, Typography, Stack, Box } from "@mui/material";
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
        <Box
          sx={{
            flexDirection: "column",
            maxHeight: "90vh",
            display: "flex",
            overflowY: "scroll",
          }}
        >
          <IconButton
            sx={{ padding: 2, justifyContent: "flex-start" }}
            aria-label="close"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={4} direction={"row"} sx={{ p: "4%" }}>
            <Grid item xs={12} md={6}>
              <ClanCard rank={"1st"} clan={clan}></ClanCard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 3,
                }}
              >
                {clan}
              </Typography>
              <br />
              <Typography
                variant="body1"
                fontWeight={400}
                sx={{
                  letterSpacing: 3,
                  overflowY: "scroll",
                  maxHeight: "100%",
                }}
              >
                {properties[clan]["block"]}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <ClanCard rank={rank + 1} clan={clan}></ClanCard>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
