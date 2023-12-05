import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <BrowserRouter basename="/your-base-name">
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
