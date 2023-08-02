import { Montserrat } from "next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const menu = [
  // {
  //   title: "Overview",
  //   url: "/overview",
  // },
  // {
  //   title: "Past Event",
  //   url: "/past-events",
  // },
  // {
  //   title: "Photos",
  //   url: "/photos",
  // },
  {
    title: "Scores",
    url: "/ScoreBoard",
  },
  // {
  //   title: "Sign Up",
  //   url: "/sign-up",
  // }
];

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
let defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});

export const customTheme = responsiveFontSizes(defaultTheme);
