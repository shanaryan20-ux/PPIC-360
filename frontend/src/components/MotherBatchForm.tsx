import { useContext } from "react";
import { CompositionContext } from "../context/CompositionContext";
import SearchableSelect from "./SearchableSelect";

interface Props {
  entryDate: string;
  setEntryDate: (value: string) => void;

  batchNumber: string;
  setBatchNumber: (value: string) => void;

  rpCode: string;
  setRpCode: (value: string) => void;

  motherBatchQty: number;
  setMotherBatchQty: (value: number) => void;

  unit: "KG" | "LAC";
  setUnit: (value: "KG" | "LAC") => void;

  targetPackingDate: string;
  setTargetPackingDate: (value: string) => void;
}

export default function MotherBatchForm({
  entryDate,
  setEntryDate,
  batchNumber,
  setBatchNumber,
  rpCode,
  setRpCode,
  motherBatchQty,
  setMotherBatchQty,
  unit,
  setUnit,
  targetPackingDate,
  setTargetPackingDate,
}: Props) {
  const { compositions } = useContext(CompositionContext);

  const selectedComposition = compositions.find(
    (item) => item.rpCode === rpCode
  );

  return (
    <div className="bg-white rounded-xl shadow p-8">
      <h2 className="text-2xl font-bold mb-8">
        Mother Batch Details
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
            Entry Date
          </label>

          <input
            type="date"
            value={entryDate}
            onChange={(e) => setEntryDate(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Mother Batch Number
          </label>

          <input
            value={batchNumber}
            onChange={(e) => setBatchNumber(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            RP Code / Composition
          </label>

          <SearchableSelect
            value={rpCode}
            onChange={setRpCode}
            placeholder="Search RP Code or Composition..."
            options={compositions.map((item) => ({
              value: item.rpCode,
              label: `${item.compositionDefined} | ${item.compositionBrief}`,
            }))}
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Defined
          </label>

          <input
            readOnly
            value={selectedComposition?.compositionDefined ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Brief
          </label>

          <input
            readOnly
            value={selectedComposition?.compositionBrief ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Type
          </label>

          <input
            readOnly
            value={selectedComposition?.compositionType ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Tablet Type
          </label>

          <input
            readOnly
            value={selectedComposition?.tabletType ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Standard Batch Size
          </label>

          <input
            readOnly
            value={selectedComposition?.standardBatchSize ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Granulation Area
          </label>

          <input
            readOnly
            value={selectedComposition?.granulationArea ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Compression Area
          </label>

          <input
            readOnly
            value={selectedComposition?.compressionArea ?? ""}
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Mother Batch Qty
          </label>

          <input
            type="number"
            value={motherBatchQty}
            onChange={(e) =>
              setMotherBatchQty(Number(e.target.value))
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Unit
          </label>

          <select
            value={unit}
            onChange={(e) =>
              setUnit(e.target.value as "KG" | "LAC")
            }
            className="w-full border rounded-lg p-3"
          >
            <option value="KG">KG</option>
            <option value="LAC">LAC</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">
            Target Packing Date
          </label>

          <input
            type="date"
            value={targetPackingDate}
            onChange={(e) =>
              setTargetPackingDate(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>
    </div>
  );
}