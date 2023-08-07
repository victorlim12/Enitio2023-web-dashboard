import React from "react";
import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { BaseModalPopup } from "../components/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function PromoPopUp() {
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    console.log(hasSeenPopup);
    const tokenExpiresAt = localStorage.getItem("tokenExpiresAt");

    if (!hasSeenPopup) {
      setShowPopup(true);
      const tokenExpiresIn = 3600; // Token validity duration in seconds (e.g., 1 hour)
      const expirationTimestamp = new Date().getTime() + tokenExpiresIn * 1000;
      localStorage.setItem("hasSeenPopup", "true");
      localStorage.setItem("tokenExpiresAt", expirationTimestamp);
    }
    if (hasSeenPopup && tokenExpiresAt) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(tokenExpiresAt)) {
        // Token has expired, clear it from localStorage
        localStorage.removeItem("hasSeenPopup");
        localStorage.removeItem("tokenExpiresAt");
        // You might also want to handle other actions, like forcing a logout
      } else {
        // Token is still valid, proceed with using it
        console.log("Token is valid. Proceed with using it.");
      }
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <BaseModalPopup open={showPopup} setOpen={setShowPopup}>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            minWidth: "40vw",
            padding: "1%",
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
          <Typography variant="body2" fontWeight={600} color={"primary"}>
            E-CORP Ads Engine
          </Typography>
          <Typography variant="h6">
            Garage Recruitment Happening Now! 🚀
          </Typography>
          <br />
          <img
            src={"/GaragePoster.png"}
            loading="lazy"
            style={{
              maxWidth: "50vh",
              alignSelf: "center",
              borderRadius: 12,
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: "block",
            }}
          />
          <Typography variant="body1" sx={{ m: "1%" }}>
            Interested in Joining Garage@EEE? Do click the button below to find
            out more. <br />
            <br /> See ya real soon~
          </Typography>
          <Button
            variant="contained"
            sx={{ m: "2%" }}
            href="https://linktr.ee/garage_eee"
          >
            SIGN UP NOW
          </Button>
        </Box>
      </BaseModalPopup>
    </>
  );
}
