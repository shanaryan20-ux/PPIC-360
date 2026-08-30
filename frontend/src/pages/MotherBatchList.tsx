import { Link } from "react-router-dom";

export default function MotherBatchList() {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Mother Batch Management</h1>

        <Link
          to="/mother-batches/new"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          + New Mother Batch
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-4 text-left">Batch No</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Stage</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="p-4">MB240001</td>
              <td className="p-4">DOLO 650</td>
              <td className="p-4">Granulation</td>
              <td className="p-4">Active</td>

              <td className="p-4">
                <Link
                  to="/mother-batches/MB240001"
                  className="bg-purple-600 text-white px-4 py-2 rounded"
                >
                  Open
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}