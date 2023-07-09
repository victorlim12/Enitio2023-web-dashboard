import ResponsiveAppBar from "../components/Header";
import { customTheme } from "../config/constants";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={customTheme}>
        <ResponsiveAppBar />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
