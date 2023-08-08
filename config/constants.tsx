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
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Scores",
    url: "/ScoreBoard",
  },
  // {
  //   title: "Sign Up",
  //   url: "/sign-up",
  // }
];

//for card button navigation
export const CardNav = [
  {
    title: "Garage at EEE",
    content: "Guess who initiated ENITIO? Learn more about Garage@EEE",
    link: "https://linktr.ee/garage_eee",
    color: "#00002f",
  },

  {
    title: "Garage@EEE Instagram",
    content: "Do Follow us on our Instagram ",
    link: "https://www.instagram.com/garage_at_eee/",
    color: "#E946A",
  },
  {
    title: "Score",
    content: "Take a look at how you perform!",
    link: "/ScoreBoard",
    color: "#16abff",
  },
  {
    title: "Appreciation Board",
    content: "Let's celebrate everyone's contribution! ",
    link: "/ThankYou",
    color: "#FB6F92",
  },
  {
    title: "Photo DUMP",
    content:
      "You might be able to view your photos here, smile to the photographers.",
    link: "/PhotoDump",
    color: "#33B864",
  },
  {
    title: "ENITIO Instagram",
    content: "Stay Connected? See you in ENITIO 2024",
    link: "https://www.instagram.com/enitio_ntu/",
    color: "#FE019A",
  },
  {
    title: "Participant Handbook",
    content: "This, honestly, might be all you need :)",
    link: "https://bit.ly/ENITIO23-PARTICIPANT_HANDBOOK",
    color: "#FFA500",
  },
];

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const RankMapping = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
};

// Create a theme instance.
const defaultTheme = createTheme({
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
