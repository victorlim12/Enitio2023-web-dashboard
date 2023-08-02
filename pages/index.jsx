import React from "react";
import { Typography, Grid } from "@mui/material";
import ButtonCard from "../components/ButtonCard";
import { CardNav } from "../config/constants";

export default function App() {
  return (
    <>
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
            }}
          >
            Welcome to E-CORP.
          </Typography>
          <Grid container spacing={2} sx={{ padding: "4%" }}>
            {CardNav.map((card, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ButtonCard
                  title={card.title}
                  content={card.content}
                  link={card.link}
                  hoverColor={card.color}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
