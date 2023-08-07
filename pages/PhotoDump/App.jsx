import React from "react";
import { Box, Button, ImageList, ImageListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import { BaseModalPopup } from "../../components/Modal";
import { saveAs } from "file-saver";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
<<<<<<< HEAD

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
=======
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
>>>>>>> 5a3b8d4 (adding infinity scroll)

  const handleOpen = (url) => {
    setImageUrl(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

<<<<<<< HEAD
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
=======
  function fetchData() {
    if (!hasMore) return; 
    
    setLoading(true);
    
    fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=hm002UyJMx3rtINBMSzK0FXP7XPZtsMZjJ5LYPD2CBG4iDztZolWK3M_8a2Rmh0nsG-ByOnkn8Qy2rC1dZqdW-wkkZ-F3Ayam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPfcfYrzdPADlpyBo5kGkkcGLYhz7EvpYIWqzVMMqHsIPZkbz4p-ulZr_f7RY3xhQqlPO2msmUhRWUI-H7XLBIZd3IPPwpL8fNz9Jw9Md8uu&lib=MO9gi-yM9lKTwGm3j1ZgAufvfWl9XrZCQ`)
    
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
>>>>>>> 5a3b8d4 (adding infinity scroll)
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }

<<<<<<< HEAD
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
=======
  React.useEffect(() => {
>>>>>>> 5a3b8d4 (adding infinity scroll)
    if (inView) {
      setPage(prevPage => prevPage + 1);
    }
  }, [inView]);

  React.useEffect(() => {
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

  React.useEffect(() => {
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
<<<<<<< HEAD

          <img
            src={imageUrl.previewURL?.replace("=w500-iv1", "=w1000-iv1")}
=======
          <img
          src={imageUrl.previewURL?.replace("=w500-iv1", "=w1000-iv1")}
>>>>>>> 5a3b8d4 (adding infinity scroll)
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
<<<<<<< HEAD
          <br />
=======

>>>>>>> 5a3b8d4 (adding infinity scroll)
          <ImageList variant="masonry" cols={numCols} gap={8}>
            {data.map((item, index) => (
              <ImageListItem key={index}>
                <img
<<<<<<< HEAD
                  src={`${item.previewURL}`}
=======
                  src={item.previewURL}
>>>>>>> 5a3b8d4 (adding infinity scroll)
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
              Loading more images...
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}

