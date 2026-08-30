import { useContext, useState } from "react";
import type { ChangeEvent } from "react";
import * as XLSX from "xlsx";
import { CompositionContext } from "../context/CompositionContext";

export default function CompositionMaster() {
  const {
  compositions,
  addComposition,
  importCompositions,
} = useContext(CompositionContext);

  const [srNo, setSrNo] = useState("");
  const [rpCode, setRpCode] = useState("");
  const [compositionDefined, setCompositionDefined] =
    useState("");
  const [compositionBrief, setCompositionBrief] =
    useState("");
  const [compositionType, setCompositionType] =
    useState("");
  const [tabletType, setTabletType] = useState("");
  const [granulationArea, setGranulationArea] =
    useState("");
  const [standardBatchSize, setStandardBatchSize] =
    useState("");
  const [compressionArea, setCompressionArea] =
    useState("");
function handleImport(
  event: ChangeEvent<HTMLInputElement>
) {
  const file = event.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target?.result;

    const workbook = XLSX.read(data, {
      type: "binary",
    });

    const sheet =
      workbook.Sheets[
        workbook.SheetNames[0]
      ];

    const rows = XLSX.utils.sheet_to_json<any>(sheet);

const imported = rows.map((row, index) => ({
  id: Date.now() + index,

  srNo: row["SR. NO."] ?? "",

  rpCode: row["RP CODE"] ?? "",

  compositionDefined:
    row["COMPOSITION DEFINED"] ?? "",

  compositionBrief:
    row["COMPOSITION BRIEF"] ?? "",

  compositionType:
    row["COMPOSITION TYPE (TABLET/CAPSULE/OTHER)"] ?? "",

  tabletType:
    row["TABLET TYPE ( COATED/UNCOATED/FILM COATED/ENTRIC COATED/UNCOATED BYLAYER)"] ?? "",

  granulationArea:
    row["GR AREA"] ?? "",

  standardBatchSize:
    row["STANDARD BATCH SIZE"] ?? "",

  compressionArea:
    row["COMPRESSION AREA"] ?? "",

  status: "Active",
}));

importCompositions(imported);

alert(
  `${imported.length} compositions imported successfully.`
);
  };

  reader.readAsBinaryString(file);
}
  function handleSave() {
    if (!rpCode || !compositionDefined) {
      alert(
        "RP Code and Composition Defined are required."
      );
      return;
    }

    addComposition({
      id: Date.now(),

      srNo,

      rpCode,

      compositionDefined,

      compositionBrief,

      compositionType,

      tabletType,

      granulationArea,

      standardBatchSize,

      compressionArea,

      status: "Active",
    });

    setSrNo("");
    setRpCode("");
    setCompositionDefined("");
    setCompositionBrief("");
    setCompositionType("");
    setTabletType("");
    setGranulationArea("");
    setStandardBatchSize("");
    setCompressionArea("");
  }

  return (
    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-8">

  <h1 className="text-4xl font-bold">
    Composition Master
  </h1>

  <label className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg cursor-pointer">

    Import Excel

    <input
      type="file"
      accept=".xlsx,.xls"
      hidden
      onChange={handleImport}
    />

  </label>

</div>

      <div className="bg-white rounded-xl shadow p-8 grid grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
            SR. No.
          </label>

          <input
            value={srNo}
            onChange={(e) => setSrNo(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            RP Code
          </label>

          <input
            value={rpCode}
            onChange={(e) => setRpCode(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Defined
          </label>

          <input
            value={compositionDefined}
            onChange={(e) =>
              setCompositionDefined(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Brief
          </label>

          <input
            value={compositionBrief}
            onChange={(e) =>
              setCompositionBrief(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Composition Type
          </label>

          <input
            value={compositionType}
            onChange={(e) =>
              setCompositionType(e.target.value)
            }
            placeholder="Tablet / Capsule / Other"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Tablet Type
          </label>

          <input
            value={tabletType}
            onChange={(e) =>
              setTabletType(e.target.value)
            }
            placeholder="Film Coated / Uncoated"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Granulation Area
          </label>

          <input
            value={granulationArea}
            onChange={(e) =>
              setGranulationArea(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Standard Batch Size
          </label>

          <input
            value={standardBatchSize}
            onChange={(e) =>
              setStandardBatchSize(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Compression Area
          </label>

          <input
            value={compressionArea}
            onChange={(e) =>
              setCompressionArea(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <button
        onClick={handleSave}
        className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
      >
        Save Composition
      </button>

      <div className="bg-white rounded-xl shadow mt-10 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>
              <th className="p-3">SR No.</th>
              <th className="p-3">RP Code</th>
              <th className="p-3">Composition Defined</th>
              <th className="p-3">Composition Brief</th>
              <th className="p-3">Composition Type</th>
              <th className="p-3">Tablet Type</th>
              <th className="p-3">GR Area</th>
              <th className="p-3">Std Batch Size</th>
              <th className="p-3">Compression Area</th>
              <th className="p-3">Status</th>
            </tr>

          </thead>

          <tbody>

            {compositions.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="text-center p-8 text-gray-500"
                >
                  No Compositions Added
                </td>
              </tr>
            ) : (
              compositions.map((item) => (
                <tr
                  key={item.id}
                  className="border-b"
                >
                  <td className="p-3">{item.srNo}</td>
                  <td className="p-3">{item.rpCode}</td>
                  <td className="p-3">{item.compositionDefined}</td>
                  <td className="p-3">{item.compositionBrief}</td>
                  <td className="p-3">{item.compositionType}</td>
                  <td className="p-3">{item.tabletType}</td>
                  <td className="p-3">{item.granulationArea}</td>
                  <td className="p-3">{item.standardBatchSize}</td>
                  <td className="p-3">{item.compressionArea}</td>
                  <td className="p-3">{item.status}</td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}