import React from "react";
import ReactDOM from "react-dom/client";
import NameForm from "./App";
import FlavourForm from "./dropdown.service";
import "./index.css";
import Reservation from "./multipleInput.service";
import EssayForm from "./textArea.service";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NameForm />
    <EssayForm />
    <FlavourForm />
    <Reservation />
  </React.StrictMode>
);
