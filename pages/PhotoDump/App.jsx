import React from "react";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import { BaseModalPopup } from "../../components/Modal";
import { saveAs } from "file-saver";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function App() {
  const [data, setData] = React.useState({});
  const [imageUrl, setImageUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = (url) => {
    setImageUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleDownload = () => {
    // const link = document.createElement("a");
    // link.href = imageUrl;
    // link.download = "image.jpg";
    // link.click();
    saveAs(imageUrl.replace("export=view", "export=download"), "enitio-image");
  };

  return (
    <>
      <BaseModalPopup open={open} setOpen={setOpen}>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={imageUrl}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: "block",
              width: "100%",
            }}
          />
          <Button variant="outlined">
            <Typography onClick={handleDownload}>Download Image</Typography>
          </Button>
        </Box>
      </BaseModalPopup>
      {loading ? (
        <LoadingScreen />
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
                  onClick={() => {
                    handleOpen(item);
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
