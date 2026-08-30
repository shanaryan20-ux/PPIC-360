import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CompositionData } from "../types/Composition";

interface CompositionContextType {
  compositions: CompositionData[];

  addComposition: (composition: CompositionData) => void;

  importCompositions: (
    compositions: CompositionData[]
  ) => void;
}

export const CompositionContext =
  createContext<CompositionContextType>({
    compositions: [],
    addComposition: () => {},
    importCompositions: () => {},
  });

export function CompositionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [compositions, setCompositions] = useState<
    CompositionData[]
  >([]);

  function addComposition(
    composition: CompositionData
  ) {
    setCompositions((previous) => [
      ...previous,
      composition,
    ]);
  }

  function importCompositions(
    newCompositions: CompositionData[]
  ) {
    setCompositions((previous) => [
      ...previous,
      ...newCompositions,
    ]);
  }

  return (
    <CompositionContext.Provider
      value={{
        compositions,
        addComposition,
        importCompositions,
      }}
    >
      {children}
    </CompositionContext.Provider>
  );
}