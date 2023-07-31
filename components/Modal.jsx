import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import properties from "../config/prop-config.json";

const CustomModal = styled(Box)(({ theme, bg, clan }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "85vh",
  maxWidth: "100vw",
  minWidth: "60vw",
  maxHeight: "85vh",
  background: bg
    ? `${bg}`
    : "linear-gradient(248deg, rgba(58,32,83,0) 32%, rgba(39,1,75,0.3) 100%);",
  backdropFilter: "blur(50px)",
  outline: "0.1em solid",
  outlineColor: `${properties[clan]["color"]}`,
  boxShadow: 24,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  p: 4,
  "&:hover": {
    transition: "background 0.5s ease",
    background: `${alpha(theme.palette.primary.main, 0.05)}`,
  },
}));

export default function ClanModalPopup({ open, setOpen, children, clan }) {
  const handleClose = () => setOpen(false);
  console.log(clan);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomModal clan={clan}>{children}</CustomModal>
      </Modal>
    </>
  );
}
