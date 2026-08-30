import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { FGMasterData } from "../types/FG";

interface FGContextType {
  fgList: FGMasterData[];

  addFG: (fg: FGMasterData) => void;

  importFGs: (fgs: FGMasterData[]) => void;
}

export const FGContext = createContext<FGContextType>({
  fgList: [],
  addFG: () => {},
  importFGs: () => {},
});

export function FGProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [fgList, setFGList] = useState<FGMasterData[]>([]);

  function addFG(fg: FGMasterData) {
    setFGList((previous) => [
      ...previous,
      fg,
    ]);
  }

  function importFGs(newFGs: FGMasterData[]) {
    setFGList((previous) => [
      ...previous,
      ...newFGs,
    ]);
  }

  return (
    <FGContext.Provider
      value={{
        fgList,
        addFG,
        importFGs,
      }}
    >
      {children}
    </FGContext.Provider>
  );
}