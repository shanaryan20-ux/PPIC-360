import { useState, useContext } from "react";

import MotherBatchForm from "../components/MotherBatchForm";
import ChildBatchTable from "../components/ChildBatchTable";

import { MotherBatchContext } from "../context/MotherBatchContext";

import type { ChildBatchRow } from "../types/ChildBatch";

export default function MotherBatch() {
  const { addBatch } = useContext(MotherBatchContext);

  const [entryDate, setEntryDate] = useState("");
  const [batchNumber, setBatchNumber] = useState("");
  const [rpCode, setRpCode] = useState("");
  const [motherBatchQty, setMotherBatchQty] = useState(0);
  const [unit, setUnit] = useState<"KG" | "LAC">("KG");
  const [targetPackingDate, setTargetPackingDate] = useState("");

  // Child Batch State
  const [rows, setRows] = useState<ChildBatchRow[]>([]);

  const totalPlannedQty = rows.reduce(
    (sum, row) => sum + Number(row.batchQty),
    0
  );

  const remainingQty = motherBatchQty - totalPlannedQty;

  function handleSave() {
    if (!batchNumber || !rpCode || motherBatchQty <= 0) {
      alert("Please complete all required fields.");
      return;
    }

    if (rows.length === 0) {
      alert("Please create at least one Child Batch.");
      return;
    }

    if (remainingQty < 0) {
      alert("Child Batch Quantity exceeds Mother Batch Quantity.");
      return;
    }

    addBatch({
      id: Date.now(),
      batchNumber,
      entryDate,
      rpCode,
      motherBatchQty,
      unit,
      targetPackingDate,
      childBatches: rows,
      stage: "Dispensing",
      status: "Pending",
    });

    alert("Mother Batch Saved Successfully.");

    setRows([]);
    setBatchNumber("");
    setEntryDate("");
    setRpCode("");
    setMotherBatchQty(0);
    setTargetPackingDate("");
    setUnit("KG");
  }

  console.log("========== MotherBatch ==========");
  console.log("rows:", rows);
  console.log("setRows:", setRows);
  console.log("motherBatchQty:", motherBatchQty);
  console.log("unit:", unit);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold">
        Create Mother Batch
      </h1>

      <MotherBatchForm
        entryDate={entryDate}
        setEntryDate={setEntryDate}
        batchNumber={batchNumber}
        setBatchNumber={setBatchNumber}
        rpCode={rpCode}
        setRpCode={setRpCode}
        motherBatchQty={motherBatchQty}
        setMotherBatchQty={setMotherBatchQty}
        unit={unit}
        setUnit={setUnit}
        targetPackingDate={targetPackingDate}
        setTargetPackingDate={setTargetPackingDate}
      />

      <ChildBatchTable
        rows={rows}
        setRows={setRows}
        motherBatchQty={motherBatchQty}
        unit={unit}
      />

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          disabled={
            rows.length === 0 ||
            remainingQty < 0
          }
          className={`px-8 py-3 rounded-lg text-white font-semibold ${
            rows.length === 0 || remainingQty < 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Save Mother Batch
        </button>
      </div>
    </div>
  );
}