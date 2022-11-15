import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Construction from "./Components/Construction";
import FooterCOnstruction from "./Components/FooterCOnstruction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Construction />
    <FooterCOnstruction />
  </React.StrictMode>
);
