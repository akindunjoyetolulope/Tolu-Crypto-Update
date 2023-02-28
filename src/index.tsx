import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CryptoContext from "./provider/CryotoProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>
);
