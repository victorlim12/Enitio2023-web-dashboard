import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import * as constants from "../config/constants";

import { alpha, styled } from "@mui/material/styles";

const CustomNavBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(to right, rgba(0,0,0,0.3),${alpha(
    theme.palette.primary.main,
    0.5
  )})`,
  backdropFilter: "blur(15px)",
  marginTop: "0.5%",
  borderRadius: 15,
  boxShadow: `0 3px 5px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
}));

export default function ButtonAppBar() {
  const MenuList = constants["menu"];
  return (
    <Box
      sx={{
        flexGrow: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <CustomNavBar position="static">
        <Toolbar>
          <Button>
            <Image
              src="/enitio_logo.png"
              alt="Enitio Logo"
              width={45}
              height={45}
              priority
              style={{ justifyContent: "left" }}
            />
          </Button>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 10, ml: "1%" }}
          >
            E2639.
          </Typography>
          <Box>
            {MenuList.map((value, index) => (
              <Button key={index} color="inherit">
                {value}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </CustomNavBar>
    </Box>
  );
}
