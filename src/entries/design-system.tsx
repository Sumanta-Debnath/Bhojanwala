import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { DesignSystem } from "@/pages/design-system";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DesignSystem />
  </StrictMode>,
);
