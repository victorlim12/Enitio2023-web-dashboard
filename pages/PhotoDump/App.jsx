import React , {useEffect} from "react";
import { Box, Button, ImageList, ImageListItem, Typography, } from "@mui/material";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import { BaseModalPopup } from "../../components/Modal";
import { saveAs } from "file-saver";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useInView } from 'react-intersection-observer';


export default function App() {
  const [data, setData] = React.useState([]);
  const [imageUrl, setImageUrl] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [numCols, setNumCols] = React.useState(3);
  const [page, setPage] = React.useState(1);
  const [initialLoad, setInitialLoad] = React.useState(true);
  const [hasMore, setHasMore] = React.useState(true);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const handleOpen = (url) => {
    setImageUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function fetchData() {
    if (!hasMore) return; 
    
    setLoading(true);
    
    fetch(`${process.env.NEXT_PUBLIC_IMAGELINK}`)
    
      .then(response => response.json())
      .then(newData => {
        const limitedData = newData.slice(0, 10 * page);
        if (limitedData && limitedData.length > 0) 
        {
          setData((prevData) => [...prevData, ...limitedData]);
        } 
        else 
        {
          setHasMore(false);
        }
      setLoading(false);
      setInitialLoad(false); // After the first load, set this to false
      })
      .catch(error => {
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


  useEffect(() => {
    if (inView) {
      setPage(prevPage => prevPage + 1);
    }
}, [inView]);

useEffect(() => {
    fetchData();
}, [page]);

  function updateCols() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      setNumCols(4);
    } else if (screenWidth >= 800) {
      setNumCols(3);
    } else {
      setNumCols(2);
    }
  }



  useEffect(() => {
    window.addEventListener("resize", updateCols);
    updateCols();
    return () => {
      window.removeEventListener("resize", updateCols);
    };
  }, []);

  const handleDownload = () => {
    saveAs(
      imageUrl.replace("export=view", "export=download"),
      "image"
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
      {initialLoad ? (
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          style={{ padding: 16 }}
          transition={{ delay: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <Typography variant="h6" textAlign={"center"}>
            Click on the images and download them! Enjoy 😊
          </Typography>
          <br />=
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
                  onClick={() => handleOpen(item.previewURL)}
                />
              </ImageListItem>
              
            ))}
          </ImageList>
          <div ref={ref} style={{ height: '1px' }}></div>
          {loading && !initialLoad && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <Typography variant="h5" textAlign={"center"}>
              Loading more images...
              </Typography>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
    