import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { ClanCard } from "../../../components/Card";
import { AppContext } from "../AppContext";
import properties from "../../../config/prop-config.json";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { RankMapping } from "../../../config/constants";

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
          }}
        >
          <Box sx={{ flexShrink: 1 }}>
            <IconButton
              sx={{ padding: 2 }}
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Grid
            container
            direction={"row"}
            sx={{ p: "4%", flex: 1, overflowY: "scroll" }}
          >
            <Grid item xs={12} md={6}>
              <ClanCard rank={rank + 1} clan={clan}></ClanCard>
            </Grid>
            <Grid item xs={12} md={6} sx={{ p: 4 }}>
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
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: 3,
                  color: `${properties[clan]["color"]}`,
                }}
              >
                #{RankMapping[rank + 1]}
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
              <br />
              <Button disabled variant="contained">
                Score Breakdown*
              </Button>
              <Typography
                variant="body2"
                fontWeight={400}
                sx={{
                  letterSpacing: 3,
                  overflowY: "scroll",
                  maxHeight: "100%",
                }}
              >
                *coming to you on Day 2
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
