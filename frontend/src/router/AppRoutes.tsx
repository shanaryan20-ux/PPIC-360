import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Dashboard from "../pages/Dashboard";
import MotherBatchList from "../pages/MotherBatchList";
import MotherBatch from "../pages/MotherBatch";
import ChildBatch from "../pages/ChildBatch";
import Dispensing from "../pages/Dispensing";
import Granulation from "../pages/Granulation";

import CompositionMaster from "../masters/CompositionMaster";
import FGMaster from "../masters/FGMaster";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="mother-batches"
            element={<MotherBatchList />}
          />

          <Route
            path="mother-batches/new"
            element={<MotherBatch />}
          />

          <Route
            path="child-batches"
            element={<ChildBatch />}
          />

          <Route
            path="dispensing"
            element={<Dispensing />}
          />

          <Route
            path="granulation"
            element={<Granulation />}
          />

          <Route
            path="composition-master"
            element={<CompositionMaster />}
          />

          <Route
            path="fg-master"
            element={<FGMaster />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}