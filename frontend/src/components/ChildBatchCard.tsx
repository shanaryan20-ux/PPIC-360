export default function ChildBatchCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-bold">
          Child Batch
        </h3>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          Delete
        </button>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="block mb-2 font-semibold">
            Child Batch Number
          </label>

          <input
            readOnly
            value="CB0001"
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Batch Size (Kg)
          </label>

          <input
            placeholder="Enter Batch Size"
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            FG Code
          </label>

          <select className="w-full border rounded-lg p-3">
            <option>Select FG Code</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Brand Name
          </label>

          <input
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Pack Size
          </label>

          <input
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Foil Size
          </label>

          <input
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

        <div className="col-span-2">
          <label className="block mb-2 font-semibold">
            Packing Change Part
          </label>

          <input
            readOnly
            className="w-full border rounded-lg p-3 bg-gray-100"
          />
        </div>

      </div>

    </div>
  );
}