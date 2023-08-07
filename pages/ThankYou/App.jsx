import * as React from "react";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import {
  Box,
  ImageList,
  Card,
  CardContent,
  Typography,
  ImageListItem,
} from "@mui/material";

export default function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [numCols, setNumCols] = React.useState(3);

  function updateCols() {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    if (screenWidth >= 1200) {
      console.log("im here");
      setNumCols(3); // Adjust for larger screens
    } else if (screenWidth >= 800) {
      setNumCols(3);
    } else {
      setNumCols(2);
    }
  }

  function fetchData(data, setData, loading, setLoading) {
    fetch(`${process.env.NEXT_PUBLIC_APPRECIATION}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Set the fetched data into the state
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  console.log(data);
  React.useEffect(() => {
    fetchData(data, setData, loading, setLoading);
    window.addEventListener("resize", updateCols);
    updateCols();

    return () => {
      window.removeEventListener("resize", updateCols);
    };
  }, []);

  return (
    <Box sx={{ width: "100vw", p: "2%" }}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ImageList variant="masonry" cols={numCols} gap={8}>
          {data.map((item, index) => (
            <ImageListItem key={index}>
              <div>
                <Card component={motion.div} sx={{ p: "1%" }}>
                  <CardContent sx={{ height: "fit-content" }}>
                    <Typography
                      variant="caption"
                      component="div"
                      fontWeight={300}
                      sx={{ textTransform: "uppercase" }}
                    >
                      Dear {item["recipient"]},
                    </Typography>
                    <br />
                    <Typography
                      variant="body1"
                      fontWeight={"600"}
                      color="text.secondary"
                    >
                      {item["messages"]}
                    </Typography>
                    <br />
                    <Typography
                      variant="caption"
                      component="div"
                      fontWeight={300}
                      sx={{ textTransform: "uppercase" }}
                    >
                      From: {item["sender"]},
                      <br />
                      {item["clan"]}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
