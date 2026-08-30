import { useContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import SearchableSelect from "./SearchableSelect";

import type { ChildBatchRow } from "../types/ChildBatch";
import { FGContext } from "../context/FGContext";

interface Props {
  rows: ChildBatchRow[];
  setRows: Dispatch<SetStateAction<ChildBatchRow[]>>;
  motherBatchQty: number;
  unit: "KG" | "LAC";
}

export default function ChildBatchTable({
  rows,
  setRows,
  motherBatchQty,
  unit,
}: Props) {

  const { fgList } = useContext(FGContext);

  function addRow() {
    setRows((previous) => [
      ...previous,
      {
        id: Date.now(),

        childBatchNo: `CB${String(
          previous.length + 1
        ).padStart(4, "0")}`,

        batchQty: 0,

        unit,

        fgCode: "",

        brandName: "",

        rpCode: "",

        packSize: "",

        foilSize: "",

        packingChangePart: "",

        status: "Pending",
      },
    ]);
  }

  function updateQty(
    id: number,
    value: number
  ) {
    setRows((previous) =>
      previous.map((row) =>
        row.id === id
          ? {
              ...row,
              batchQty: value,
            }
          : row
      )
    );
  }

  function updateUnit(
    id: number,
    value: "KG" | "LAC"
  ) {
    setRows((previous) =>
      previous.map((row) =>
        row.id === id
          ? {
              ...row,
              unit: value,
            }
          : row
      )
    );
  }

  function updateFG(
    id: number,
    fgCode: string
  ) {
    const fg = fgList.find(
      (item) => item.fgCode === fgCode
    );

    if (!fg) return;

    setRows((previous) =>
      previous.map((row) =>
        row.id === id
          ? {
              ...row,

              fgCode: fg.fgCode,

              brandName: fg.brandName,

              rpCode: fg.rpCode,

              packSize: fg.packSize,

              foilSize: fg.foilSize,

              packingChangePart:
                fg.packingChangePart,
            }
          : row
      )
    );
  }

  function deleteRow(id: number) {
    setRows((previous) =>
      previous.filter(
        (row) => row.id !== id
      )
    );
  }

  const totalQty = rows.reduce(
    (sum, row) => sum + Number(row.batchQty),
    0
  );

  const remainingQty =
    motherBatchQty - totalQty;

  return (
  <div className="mt-10">

    <div className="flex justify-between items-center mb-5">

      <h2 className="text-2xl font-bold">
        Child Batch Planning
      </h2>

      <button
        onClick={addRow}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
      >
        + Add Child Batch
      </button>

    </div>

    <div className="bg-white rounded-xl shadow overflow-x-auto">

      <table className="w-full">

        <thead className="bg-slate-800 text-white">

          <tr>

            <th className="p-3">Child Batch</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Unit</th>
            <th className="p-3">FG</th>
            <th className="p-3">Brand</th>
            <th className="p-3">RP Code</th>
            <th className="p-3">Pack Size</th>
            <th className="p-3">Foil Size</th>
            <th className="p-3">Packing Change Part</th>
            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {rows.length === 0 ? (

            <tr>

              <td
                colSpan={10}
                className="text-center p-8 text-gray-500"
              >
                No Child Batches Added
              </td>

            </tr>

          ) : (

            rows.map((row) => (

              <tr
                key={row.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3 font-medium">
                  {row.childBatchNo}
                </td>

                <td className="p-3">

                  <input
                    type="number"
                    min={0}
                    value={row.batchQty}
                    onChange={(e) =>
                      updateQty(
                        row.id,
                        Number(e.target.value)
                      )
                    }
                    className="border rounded-lg p-2 w-24"
                  />

                </td>

                <td className="p-3">

                  <select
                    value={row.unit}
                    onChange={(e) =>
                      updateUnit(
                        row.id,
                        e.target.value as "KG" | "LAC"
                      )
                    }
                    className="border rounded-lg p-2"
                  >
                    <option value="KG">KG</option>
                    <option value="LAC">LAC</option>
                  </select>

                </td>

                <td className="p-3 min-w-[320px]">

                  <SearchableSelect
                    value={row.fgCode}
                    onChange={(value) =>
                      updateFG(row.id, value)
                    }
                    placeholder="Search FG Code / Brand"
                    options={fgList.map((fg) => ({
                      value: fg.fgCode,
                      label: fg.brandName,
                    }))}
                  />

                </td>

                <td className="p-3">

                  <input
                    readOnly
                    value={row.brandName}
                    className="border rounded-lg p-2 bg-gray-100 w-44"
                  />

                </td>

                <td className="p-3">

                  <input
                    readOnly
                    value={row.rpCode}
                    className="border rounded-lg p-2 bg-gray-100 w-32"
                  />

                </td>

                <td className="p-3">

                  <input
                    readOnly
                    value={row.packSize}
                    className="border rounded-lg p-2 bg-gray-100 w-32"
                  />

                </td>

                <td className="p-3">

                  <input
                    readOnly
                    value={row.foilSize}
                    className="border rounded-lg p-2 bg-gray-100 w-36"
                  />

                </td>

                <td className="p-3">

                  <input
                    readOnly
                    value={row.packingChangePart}
                    className="border rounded-lg p-2 bg-gray-100 w-44"
                  />

                </td>

                <td className="p-3">

                  <button
                    onClick={() => deleteRow(row.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

    <div className="mt-6 bg-white rounded-xl shadow p-6">

      <div className="grid grid-cols-2 gap-6">

        <div>

          <p className="text-lg font-semibold">
            Total Planned Quantity
          </p>

          <p className="text-3xl font-bold text-blue-600 mt-2">
            {totalQty} {unit}
          </p>

        </div>

        <div>

          <p className="text-lg font-semibold">
            Remaining Quantity
          </p>

          <p
            className={`text-3xl font-bold mt-2 ${
              remainingQty < 0
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {remainingQty} {unit}
          </p>

        </div>

      </div>

    </div>

  </div>
);
}