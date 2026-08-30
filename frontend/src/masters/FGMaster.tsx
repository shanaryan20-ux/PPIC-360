import { useContext, useState } from "react";
import * as XLSX from "xlsx";
import { FGContext } from "../context/FGContext";

export default function FGMaster() {
  const {
    fgList,
    addFG,
    importFGs,
  } = useContext(FGContext);

  const [fgCode, setFGCode] = useState("");
  const [brandName, setBrandName] = useState("");
  const [packSize, setPackSize] = useState("");
  const [foilSize, setFoilSize] = useState("");
  const [packingChangePart, setPackingChangePart] =
    useState("");

  function handleImport(
    event: React.ChangeEvent<HTMLInputElement>
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
        workbook.Sheets[workbook.SheetNames[0]];

      const rows: any[] =
        XLSX.utils.sheet_to_json(sheet);

      const imported = rows.map((row, index) => ({
        id: Date.now() + index,

        fgCode: row["FG CODE"] ?? "",

        brandName:
          row["BRAND NAME"] ?? "",

        rpCode:
          row["RP CODE"] ?? "",

        packSize:
          row["PACK SIZE"] ?? "",

        foilSize:
          row["FOIL SIZE"] ?? "",

        packingChangePart:
          row["PACKING CHANGE PART"] ?? "",

        status: "Active",
      }));

      importFGs(imported);

      alert(
        `${imported.length} FG records imported successfully.`
      );
    };

    reader.readAsBinaryString(file);
  }

  function handleSave() {
    if (!fgCode || !brandName) {
  alert("FG Code and Brand Name are required.");
  return;
}

    addFG({
      id: Date.now(),

      fgCode,

      brandName,

      packSize,

      foilSize,

      packingChangePart,

      status: "Active",
    });

    setFGCode("");
    setBrandName("");
    setPackSize("");
    setFoilSize("");
    setPackingChangePart("");
  }

  return (
    <div className="max-w-7xl mx-auto">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          FG Master
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
            FG Code
          </label>

          <input
            value={fgCode}
            onChange={(e) =>
              setFGCode(e.target.value)
            }
            placeholder="FG001"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Brand Name
          </label>

          <input
            value={brandName}
            onChange={(e) =>
              setBrandName(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Pack Size
          </label>

          <input
            value={packSize}
            onChange={(e) =>
              setPackSize(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Foil Size
          </label>

          <input
            value={foilSize}
            onChange={(e) =>
              setFoilSize(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Packing Change Part
          </label>

          <input
            value={packingChangePart}
            onChange={(e) =>
              setPackingChangePart(e.target.value)
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

      </div>

      <button
        onClick={handleSave}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
      >
        Save FG
      </button>

      <div className="bg-white rounded-xl shadow mt-10 overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800 text-white">

            <tr>
              <th className="p-4">FG Code</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Pack Size</th>
              <th className="p-4">Foil Size</th>
              <th className="p-4">Packing Change Part</th>
              <th className="p-4">Status</th>
            </tr>

          </thead>

          <tbody>

            {fgList.length === 0 ? (

              <tr>

                <td
                  colSpan={7}
                  className="text-center p-8 text-gray-500"
                >
                  No FG Added
                </td>

              </tr>

            ) : (

              fgList.map((item) => (

                <tr
                  key={item.id}
                  className="border-b"
                >

                  <td className="p-4">
                    {item.fgCode}
                  </td>

                  <td className="p-4">
                    {item.brandName}
                  </td>

                  <td className="p-4">
                    {item.packSize}
                  </td>

                  <td className="p-4">
                    {item.foilSize}
                  </td>

                  <td className="p-4">
                    {item.packingChangePart}
                  </td>

                  <td className="p-4">
                    {item.status}
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