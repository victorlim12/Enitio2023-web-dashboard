import ResponsiveAppBar from "../components/Header";
import { CssBaseline } from "@mui/material";
import { defaultTheme } from "../config/constants";
import { ThemeProvider } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: any }) {
  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <ResponsiveAppBar />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
}
