import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Staires from "./components/common/Staires.jsx";
import NavContext from "./context/navContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Staires>
      <NavContext>
        <App />
      </NavContext>
    </Staires>
  </BrowserRouter>
);
