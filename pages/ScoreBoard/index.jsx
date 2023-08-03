import React from "react";
import AppProvider from "./AppContext";
import App from "./App";

export default function Home() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
