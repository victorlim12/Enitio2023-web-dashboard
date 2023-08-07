import ResponsiveAppBar from "../components/Header";
import { customTheme } from "../config/constants";
import { ThemeProvider } from "@mui/material";
import PromoPopup from "./PromoPopUp";
import React from "react";
import PromoPopUp from "./PromoPopUp";

export default function Layout({ children }: { children: any }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <ResponsiveAppBar />
        <PromoPopUp />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
