import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

const basename = import.meta.env.MODE === "test" ? "" : "/dev-portfolio";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </StrictMode>
);
