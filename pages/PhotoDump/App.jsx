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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
  const [data, setData] = React.useState({});
  const [imageUrl, setImageUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [numCols, setNumCols] = React.useState(3); // Default number of columns

  const handleOpen = (url) => {
    setImageUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function fetchData() {
    fetch(`${process.env.NEXT_PUBLIC_IMAGELINK}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into the state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function updateCols() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth >= 1200) {
      console.log("im here");
      setNumCols(4); // Adjust for larger screens
    } else if (screenWidth >= 800) {
      setNumCols(3);
    } else {
      setNumCols(2);
    }
  }

  React.useEffect(() => {
    fetchData();

    window.addEventListener("resize", updateCols);
    updateCols();

    return () => {
      window.removeEventListener("resize", updateCols);
    };
  }, []);

  const handleDownload = () => {
    saveAs(
      imageUrl.downloadURL.replace("export=view", "export=download"),
      "enitio-image"
    );
  };

  return (
    <>
      <BaseModalPopup open={open} setOpen={setOpen}>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            minWidth: "fit-content",
          }}
        >
          <Box sx={{ flexShrink: 1 }}>
            <IconButton
              sx={{ padding: 1 }}
              aria-label="close"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <img
            src={imageUrl.previewURL?.replace("=w500-iv1", "=w1000-iv1")}
            loading="lazy"
            style={{
              maxHeight: "80vh",
              maxWidth: "80vw",
              borderRadius: 12,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: "block",
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
            padding: 16,
          }}
          transition={{ delay: 0.5 }}
          animate={{
            opacity: 0.1, // Adjust the opacity values for the fade effect
          }}
        >
          <Typography variant="h6" textAlign={"center"}>
            Click on the images and download them! Enjoy 😊
          </Typography>
          <br />
          <ImageList variant="masonry" cols={numCols} gap={8}>
            {data.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item.previewURL}`}
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
