import React from "react";
import AppProvider from "./AppContext";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <AppProvider>
      <App />
      <Analytics />
    </AppProvider>
  );
}
