import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Construction from "./Components/Construction";
import FooterCOnstruction from "./Components/FooterCOnstruction";

import { Provider } from "react-redux";
import { store } from "./store.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Construction />
      <FooterCOnstruction />
    </React.StrictMode>
  </Provider>
);
