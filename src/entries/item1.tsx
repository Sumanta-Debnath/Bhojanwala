import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { BiryaniAndRollsPage } from "@/pages/item1";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BiryaniAndRollsPage />
  </StrictMode>,
);
