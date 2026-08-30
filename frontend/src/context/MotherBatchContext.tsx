import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { MotherBatch } from "../types/MotherBatch";

interface MotherBatchContextType {
  batches: MotherBatch[];
  addBatch: (batch: MotherBatch) => void;
}

export const MotherBatchContext =
  createContext<MotherBatchContextType>({
    batches: [],
    addBatch: () => {},
  });

export function MotherBatchProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [batches, setBatches] = useState<MotherBatch[]>([]);

  function addBatch(batch: MotherBatch) {
    setBatches((previous) => [...previous, batch]);
  }

  return (
    <MotherBatchContext.Provider
      value={{
        batches,
        addBatch,
      }}
    >
      {children}
    </MotherBatchContext.Provider>
  );
}