import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import { BaseModalPopup } from "../../components/Modal";
import { saveAs } from "file-saver";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function App() {
<<<<<<< HEAD
  const [data, setData] = React.useState({});
  const [imageUrl, setImageUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [numCols, setNumCols] = React.useState(3); // Default number of columns
=======
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
>>>>>>> 252c064 (detect intersection observer for photodump load)

  const handleOpen = (url) => {
    setImageUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

<<<<<<< HEAD
  function fetchData() {
    fetch(`${process.env.NEXT_PUBLIC_IMAGELINK}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into the state
        setLoading(false);
=======
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://script.google.com/macros/s/AKfycbyNboOtoOimf8Y-VRBvAXhUCnnTyDImBhfYJKNGe9zn1sATxIFHCe7k0gz4xi0X2b30gw/exec?page=${page}`
    )
      .then((response) => response.json())
      .then((newData) => {
        setData((prevData) => [...prevData, ...newData]);
        sleep(1000).then(() => {
          setLoading(false);
        });
>>>>>>> 252c064 (detect intersection observer for photodump load)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

<<<<<<< HEAD
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
=======
  useEffect(() => {
    fetchData();
  }, [page]);
  // console.log("what is this", page);

  const loadMore = () => {
    // setPage((prevPage) => prevPage + 0);
  };

  const handleDownload = () => {
    saveAs(imageUrl.replace("export=view", "export=download"), "enitio-image");
>>>>>>> 252c064 (detect intersection observer for photodump load)
  };


  const { ref, inView } = useInView({
    threshold: 0,
  });

  // console.log("inView", inView);
  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

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
      {/* {loading ? (
        // <LoadingScreen />
      ) : ( */}
        <motion.div
          initial={{ opacity: 0 }}
          style={{
            padding: 16,
          }}
          transition={{ delay: 0.5 }}
          animate={{
            opacity: 1,
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
          <div ref={ref}>

          {loading &&  <Box 
          sx={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.3)', 
            zIndex: 1000 
          }}>
          <CircularProgress />
        </Box>}
          </div>
        </motion.div>
      {/* )} */}
    </>
  );
}
