import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { MotherBatchProvider } from "./context/MotherBatchContext";
import { FGProvider } from "./context/FGContext";
import { CompositionProvider } from "./context/CompositionContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompositionProvider>
      <FGProvider>
        <MotherBatchProvider>
          <App />
        </MotherBatchProvider>
      </FGProvider>
    </CompositionProvider>
  </StrictMode>
);