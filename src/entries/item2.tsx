import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { IndianCuisinesPage } from "@/pages/item2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IndianCuisinesPage />
  </StrictMode>,
);
