import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./modules/application/App.tsx";
import "ol/ol.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
