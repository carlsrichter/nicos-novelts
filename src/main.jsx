import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // Import HashRouter instead of BrowserRouter
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>  
    <App />
  </HashRouter>
);
