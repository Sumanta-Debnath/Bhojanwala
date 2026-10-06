import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { DessertsPage } from "@/pages/item3";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DessertsPage />
  </StrictMode>,
);
