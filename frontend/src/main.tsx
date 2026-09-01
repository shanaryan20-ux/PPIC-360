import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";

import { MotherBatchProvider } from "./context/MotherBatchContext";
import { FGProvider } from "./context/FGContext";
import { CompositionProvider } from "./context/CompositionContext";
import { RPFGMappingProvider } from "./context/RPFGMappingContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
  <RPFGMappingProvider>
    <CompositionProvider>
      <FGProvider>
        <MotherBatchProvider>
          <App />
        </MotherBatchProvider>
      </FGProvider>
    </CompositionProvider>
  </RPFGMappingProvider>
</StrictMode>
);