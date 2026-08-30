import { useContext } from "react";
import { MotherBatchContext } from "../context/MotherBatchContext";

export default function Dispensing() {
  const { batches, completeDispensing } = useContext(MotherBatchContext);

  const dispensingBatches = batches.filter(
    (batch) => batch.stage === "Dispensing"
  );

  return (
    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">
          Dispensing
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
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>

            {dispensingBatches.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center p-8 text-gray-500"
                >
                  No Mother Batches Available
                </td>
              </tr>
            ) : (
              dispensingBatches.map((batch) => (
                <tr
                  key={batch.batchNumber}
                  className="border-b"
                >
                  <td className="p-4">
                    {batch.batchNumber}
                  </td>

                  <td className="p-4">
                    {batch.brandName}
                  </td>

                  <td className="p-4">
                    {batch.entryDate}
                  </td>

                  <td className="p-4">
                    {batch.stage}
                  </td>

                  <td className="p-4">
                    {batch.status}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        completeDispensing(batch.batchNumber)
                      }
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                      Complete Dispensing
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}