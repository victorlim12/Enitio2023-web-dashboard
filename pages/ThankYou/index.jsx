import React from "react";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <App />
      <Analytics />
    </>
  );
}
