import React from "react";
import LeaderBoard from "./SubBlock/Leaderboard";
import CardSlider from "./SubBlock/CardSlider";
import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { AppContext, AppProvider } from "../../components/AppContext";
import { motion } from "framer-motion";
import { alpha, styled } from "@mui/material/styles";
import ThreeDotsWave from "../../components/LoadingAnimation";
import Masonry from "@mui/lab/Masonry";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  function fetchData() {
    fetch(
      "https://script.google.com/macros/s/AKfycbyNboOtoOimf8Y-VRBvAXhUCnnTyDImBhfYJKNGe9zn1sATxIFHCe7k0gz4xi0X2b30gw/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into the state
        sleep(1000).then(() => {
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  fetchData();

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
            // background: `radial-gradient(circle, rgba(0,0,0,1) 0%, ${alpha(
            //   theme,
            //   0.3
            // )}, rgba(0,0,0,1) 100%)`,
            padding: 16,
          }}
          transition={{ delay: 0.5 }}
          animate={{
            opacity: 0.1, // Adjust the opacity values for the fade effect
          }}
        >
          <ImageList variant="masonry" cols={4} gap={8}>
            {data.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item}&w=162&auto=format`}
                  srcSet={`${item}&w=162&auto=format&dpr=2 2x`}
                  loading="lazy"
                  style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: "block",
                    width: "100%",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </motion.div>
      )}
    </>
  );
}
