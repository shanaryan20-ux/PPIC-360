import { useContext } from "react";
import { MotherBatchContext } from "../context/MotherBatchContext";

export default function Granulation() {
  const { batches } = useContext(MotherBatchContext);

  const granulationBatches = batches.filter(
    (batch) => batch.stage === "Granulation"
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Granulation
        </h1>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4 text-left">Mother Batch</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Entry Date</th>
              <th className="p-4 text-left">Stage</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>

            {granulationBatches.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center p-8 text-gray-500"
                >
                  No Mother Batches Available
                </td>
              </tr>
            ) : (
              granulationBatches.map((batch) => (
                <tr
                  key={batch.batchNumber}
                  className="border-b"
                >
                  <td className="p-4">{batch.batchNumber}</td>
                  <td className="p-4">{batch.brandName}</td>
                  <td className="p-4">{batch.entryDate}</td>
                  <td className="p-4">{batch.stage}</td>
                  <td className="p-4">{batch.status}</td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}